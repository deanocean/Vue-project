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
import UserProducts from '@/components/UserProducts';
import UserProdDetail from '@/components/UserProdDetail';
import Checkout from '@/components/Checkout';
import Purchase from '@/components/Purchase';
// 自訂的分頁元件

Vue.use(VueRouter)

export default new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {
            path: '*',
            redirect: 'login'
        },
        {
            name: '登入',
            path: '/login',
            component: Login,
        },
        {
            name: '後台',
            path: '/admin',
            component: Dashboard,
            meta: { requiresAuth: true },
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
            children: [
                {
                    name: '前台產品詳細',
                    path: '',
                    component: UserProducts,
                },
                {
                    name: '前台產品詳細',
                    path: 'productdetail/:prodId',
                    component: UserProdDetail,
                },
                {
                    name: '購物車頁面',
                    path: 'checkout',
                    component: Checkout,
                },
                {
                    name: '確認訂單',
                    path: 'purchase',
                    component: Purchase,
                }
            ]
        },
    ]
})
// 匯出給 main.js 使用