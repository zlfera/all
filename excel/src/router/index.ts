import { createRouter, createWebHistory } from "vue-router";
//import { useUserInfoStore } from "../stores/userInfo";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "layout",
            component: () => import("@/views/layout/Index.vue"),
            children: [
                {
                    path: "/",
                    name: "home",
                    component: () => import("@/views/home/Index.vue"),
                },
                {
                    path: "/order",
                    name: "order",
                    component: () => import("@/views/order/Index.vue"),
                    children: [
                        {
                            path: "manual",
                            name: "manual",
                            component: () => import("@/views/order/Manual.vue"),
                        },
                    ],
                },
                {
                    path: "/goods",
                    name: "goods",
                    component: () => import("@/views/goods/Index.vue"),
                    children: [
                        {
                            path: "category",
                            name: "category",
                            component: () =>
                                import("@/views/goods/Category.vue"),
                        },
                        {
                            path: "config",
                            name: "config",
                            component: () => import("@/views/goods/Config.vue"),
                        },
                        {
                            path: "dealers",
                            name: "dealers",
                            component: () =>
                                import("@/views/goods/Dealers.vue"),
                        },
                        {
                            path: "stockList",
                            name: "stockList",
                            component: () =>
                                import("@/views/goods/StockList.vue"),
                        },
                        {
                            path: "stockShelve",
                            name: "stockShelve",
                            component: () =>
                                import("@/views/goods/StockShelve.vue"),
                        },
                        {
                            path: "supplier",
                            name: "supplier",
                            component: () =>
                                import("@/views/goods/Supplier.vue"),
                        },
                        {
                            path: "tag",
                            name: "tag",
                            component: () => import("@/views/goods/Tag.vue"),
                        },
                    ],
                },
                {
                    path: "/stock",
                    name: "stock",
                    component: () => import("@/views/stock/Index.vue"),
                    children: [
                        {
                            path: "goodsDetail",
                            name: "goodsDetail",
                            component: () =>
                                import("@/views/stock/GoodsDetail.vue"),
                        },
                        {
                            path: "inventory",
                            name: "inventory",
                            component: () =>
                                import("@/views/stock/Inventory.vue"),
                        },
                        {
                            path: "inventoryStatistics",
                            name: "inventoryStatistics",
                            component: () =>
                                import("@/views/stock/InventoryStatistics.vue"),
                        },
                        {
                            path: "lendRevert",
                            name: "lendRevert",
                            component: () =>
                                import("@/views/stock/LendRevert.vue"),
                        },
                        {
                            path: "loss",
                            name: "loss",
                            component: () => import("@/views/stock/Loss.vue"),
                        },
                        {
                            path: "otherStock",
                            name: "otherStock",
                            component: () =>
                                import("@/views/stock/OtherStock.vue"),
                        },
                        {
                            path: "outStock",
                            name: "outStock",
                            component: () =>
                                import("@/views/stock/OutStock.vue"),
                        },
                        {
                            path: "salesReturn",
                            name: "salesReturn",
                            component: () =>
                                import("@/views/stock/SalesReturn.vue"),
                        },
                        {
                            path: "stockTaking",
                            name: "stockTaking",
                            component: () =>
                                import("@/views/stock/StockTaking.vue"),
                        },
                        {
                            path: "transfer",
                            name: "transfer",
                            component: () =>
                                import("@/views/stock/Transfer.vue"),
                        },
                    ],
                },
            ],
        },
        // {
        //     path: "/",
        //     name: "index",
        //     component: () => import("@/views/Index.vue"),
        // },
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
