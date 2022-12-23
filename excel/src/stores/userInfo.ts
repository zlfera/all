import { defineStore } from "pinia";

export const useUserInfoStore = defineStore("userInfo", () => {
    const userInfo: UserInfo = reactive({
        name: "",
        password: "",
    });
    function setUserInfo(uInfo: UserInfo) {
        userInfo.name = uInfo.name;
    }
    return { userInfo, setUserInfo };
});
