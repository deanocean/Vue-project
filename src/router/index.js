import Vue from 'vue'
import VueRouter from 'vue-router'
// 官方的元件

// import Home from '@/components/HelloWorld'
import Login from '@/components/admin/pages/Login'
import Dashboard from '@/components/admin/Dashboard'
import Products from '@/components/admin/pages/Products'
import Orders from '@/components/admin/pages/Orders'
import Coupons from '@/components/admin/pages/Coupons'
import CustomerOrders from '@/components/admin/pages/CustomerOrders';
import UserHome from '@/components/UserHome';
// 自訂的分頁元件

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '*',
            redirect: 'login'
        },
        // {
        //     name: 'HelloWorld', // 元件呈現的名稱
        //     path: '/', // 對應的虛擬路徑
        //     component: Home, // 對應的元件
        //     meta: { requiresAuth: true }
        // },
        {
            name: '登入',
            path: '/login',
            component: Login,
        },
        {
            name: '後台',
            path: '/admin',
            component: Dashboard,
            children: [
                { 
                    name: '產品列表',
                    path: 'products',
                    component: Products,
                    meta: { requiresAuth: true },
                },
                { 
                    name: '訂單列表',
                    path: 'orders',
                    component: Orders,
                    meta: { requiresAuth: true },
                },
                { 
                    name: '優惠券',
                    path: 'coupons',
                    component: Coupons,
                    meta: { requiresAuth: true },
                }
            ]
        },
        {
            name: '後台',
            path: '/admin',
            component: Dashboard,
            children: [
                { 
                    name: '產品卡片列表',
                    path: 'customer_order',
                    component: CustomerOrders,
                }
            ]
        },
        {
            name: '前台',
            path: '/',
            component: UserHome,
            // children: [
            //     { 
            //         name: '產品卡片列表',
            //         path: 'customer_order',
            //         component: CustomerOrders,
            //     }
            // ]
        },
    ]
})
// 匯出給 main.js 使用