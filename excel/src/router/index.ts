import { createRouter, createWebHistory } from "vue-router";
import { useUserInfoStore } from "../stores/userInfo";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "index",
            component: () => import("@/views/Index.vue"),
        },
        // {
        //     path: "/page",
        //     name: "layout",
        //     component: () => import("@/views/layout.vue"),
        //     children: [
        //         {
        //             path: "/roles",
        //             name: "roles",
        //             component: () => import("@/views/rolesList.vue"),
        //         },
        //         {
        //             path: "/users",
        //             name: "users",
        //             component: () => import("@/views/usersList.vue"),
        //         },
        //         {
        //             path: "/supplier",
        //             name: "supplier",
        //             component: () => import("@/components/supplier.vue"),
        //         },
        //     ],
        // },
    ],
});

// router.beforeEach((to, from, next) => {
//     const store = useUserInfoStore();

//     if (localStorage.getItem("key") === "zlfera") {
//         if (to.path === "/") {
//             next();
//             return;
//         }

//         next();
//     } else {
//         if (to.path === "/") {
//             next();
//             return;
//         }
//         router.push("/");
//         next();
//     }
// });
export default router;
