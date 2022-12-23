import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
import { ElLoading, ElMessage } from "element-plus";
import { tansParams } from "@/filters/tansParams";
const baseURL = "http://localhost:4000/api/";

const instance = axios.create({
    timeout: 5000,
    baseURL,
    headers: { "Content-type": "application/json;charset=utf-8" },
});
const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
});
instance.interceptors.request.use((req: AxiosRequestConfig<UserInfo>) => {
    const isToken = (req.headers || {}).isToken === false;
    req.headers!["Authorization"] = "Bearer";
    if (req.method === "get" && req.params) {
        let url = req.url + "?" + tansParams(req.params);
        url = url.slice(0, -1);
        req.params = {};
        req.url = url;
    }
    return req;
});
instance.interceptors.response.use(
    (resp: AxiosResponse<UserInfo>) => {
        loading.close();
        return resp;
    },
    (error) => {
        loading.close();
        ElMessage({ message: "错误" });
    }
);
export const get = (config: AxiosRequestConfig<UserInfo>) => {
    return instance({ ...config, method: "get" });
};
