import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import SignupVerify from '../views/SignupVerify.vue'
// import AccountVerified from '../views/AccountVerified.vue'
import Profile from '../views/Profile.vue'
import Orders from '../views/ViewOrders.vue'
// import Example from '../views/Example.vue'
import Security from '../views/SecurityDetails.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import ProductPage from '../views/ProductPage.vue'
import Basket from '../views/Basket.vue'
import PageNotFound from '../views/PageNotFound.vue'
import store from '../store/store'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            auth: false
        }
    },
    {
        path: '/product:id',
        name: 'Product',
        component: ProductPage,
        meta: {
            auth: false
        }
    },
    {
        path: '/basket',
        name: 'Basket',
        component: Basket,
        meta: {
            auth: false
        }
    },
    // {
    //     path: '/example',
    //     name: 'Example',
    //     component: Example
    // },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: {
            auth: true
        }
    },
    {
        path: '/vieworders',
        name: 'Orders',
        component: Orders,
        meta: {
            auth: true
        }
    },
    {
        path: '/securitydetails',
        name: 'Security',
        component: Security,
        meta: {
            auth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            auth: false,
            requiresGuest: true
        }
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup,
        meta: {
            auth: false,
            requiresGuest: true
        }
    },
    {
        path: '/signup/verify',
        name: 'SignupVerify',
        component: SignupVerify
    },
    // {
    //     path: '/signup/accountverified/:id',
    //     name: 'AccountVerified',
    //     component: AccountVerified
    // },
    {
        path: '/forgotpassword',
        name: 'forgotpassword',
        meta: {

            //guest users can access forgotpassword path, but authorised users will
            //be redirected to home page
            auth: false,
            requiresGuest: true
        },
        component: ForgotPassword
    },
    {
        path: '/resetpassword',
        name: 'resetpassword',
        meta: {

            //guest users can access login path, but authorised users will
            //be redirected to dashboard page
            auth: false,
            requiresGuest: true
        },
        // component: ForgotPassword
    },
    {
        path: '/:pathMatch(.*)',
        name: 'pagenotfound',
        meta: {
            requiresGuest: true
        },
        component: PageNotFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


router.beforeEach((to, from, next) => {

    if (to.meta.auth && !store.state.user.token) {
        next({
            name: "Home"
        })
    } else if (to.meta.requiresGuest && store.state.user.token) {
        next({
            name: "Home"
        })
    } else {
        next()
    }
})


export default router