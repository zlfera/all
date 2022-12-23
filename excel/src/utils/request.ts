import axios from "axios";
// import { get } from "./service";
// export const loginApi = (data: UserInfo) => {
//     return get({ url: "/", data });
// };
export const getList = async (item: any) => {
    const res = await axios.get("http://localhost:4000/api/list");
    item.item = res.data.message;
};
export const findByName = async (name: string, item: any) => {
    const res = await axios.get("http://localhost:4000/api/find_by_name", {
        params: {
            name: name,
        },
    });

    item.item = res.data.message;
};
export const save = async (form: any) => {
    await axios.get("http://localhost:4000/api/save", {
        params: {
            form,
        },
    });
};
