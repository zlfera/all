import { defineStore } from "pinia";
const useWebComponentStore = defineStore("WebComponent", {
    state: () => {
        const isCollapse = reactive({ data: false });
        return { isCollapse };
    },
    getters: {},
    actions: {
        changeCollapse() {
            this.isCollapse.data = !this.isCollapse.data;
        },
    },
});
export default useWebComponentStore;
