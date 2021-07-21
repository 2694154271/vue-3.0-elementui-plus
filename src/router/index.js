import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from "@/layout";

const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: '/dashboard',
            children: [
                {
                    path: "dashboard",
                    name: "Dashboard",
                    component: () => import("@/views/home"),
                    meta: {
                        title: "首页",
                        icon: "dashboard"
                    }
                },
                {
                    path: "/one",
                    name: "one",
                    component: () => import("@/views/one/layout"),
                    meta: {
                        title: 'one页面'
                    },
                    children: [
                        {
                            path: "/one",
                            name: "one",
                            component: () => import("@/views/one/index"),
                            meta: {
                                title: "iii",
                                icon: "dashboard"
                            },
                        },
                    ]
                }
            ]
        },    
    ]
})

export default router