// Vue Router
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(""),
    routes: [
        {
            path: "/",
            name: "main",
            component: () => import("../components/Home.vue"),
        },
        {
            
        }
    ],
});

export default router;