import { createRouter, createWebHistory } from "vue-router";

import homeview from "@/views/homeview.vue"
import jobsview from "@/views/jobsview.vue";
import notFoundView from "@/views/notFoundView.vue";
import jobView from "@/views/jobView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component:homeview
        },
        {
            path: '/jobs',
            name: 'jobs',
            component:jobsview
        },
        {
            path:'/jobs/:id',
            name:'job',
            component:jobView
        },
        {
            path:'/:catchAll(.*)',
            name:'not-found',
            component:notFoundView
        }
    ]
})

export default router