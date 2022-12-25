import { defineStore } from "pinia";
const useWebComponentStore = defineStore("WebComponent", () => {
    const isCollapse = ref(false); //在组合式里面需要加响应式ref
    const changeCollapse = () => {
        isCollapse.value = !isCollapse.value;
    };
    return { isCollapse, changeCollapse };
});

//     {
//     state() {
//         //const isCollapse = reactive({ data: false });
//         //const isCollapse = false; 在选项式里面,里面数据自动是响应式的,不能要嘉ref
//         return { isCollapse: false };
//     },
//     getters: {},
//     actions: {
//         changeCollapse() {
//             this.isCollapse = !this.isCollapse;
//         },
//     },
// });
export default useWebComponentStore;
