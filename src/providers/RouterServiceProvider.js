import Vue from 'vue'
import Router from 'vue-router'
import Denied from "@/pages/Denied";
import {can, hasPerfil} from "@/acl";

Vue.use(Router)

let options = {
    mode: 'history',
    linkExactActiveClass: 'active',
}
if (process.env.VUE_APP_PUBLIC_PATH) {
    options = {
        ...options,
        base: process.env.VUE_APP_PUBLIC_PATH
    }
}
const RouterServiceProvider = new Router({
    ...options,
    //scrollBehavior () {
    //  return { x: 0, y: 0 };
    //},
    routes: [
        {path: '*', component: () => import('@/pages/NotFound')},
        {path: '/', name: 'homepage', component: () => import('@/pages/HomePage')},
        {path: '/access-denied', name: 'Denied', component: Denied},
    ]
});

RouterServiceProvider.beforeEach(async ($to, $from, $next) => {
    if (Object.keys($to.meta).length > 0) {
        let allowed = false

        if ($to.meta.perfil) {
            allowed = await hasPerfil($to.meta.perfil)
        }

        if ($to.meta.permission) {
            allowed = await can($to.meta.permission)
        }

        if (allowed) {
            $next()
            return
        } else {
            $next({name: 'Denied'})
            return
        }
    }
    $next()
})
;
export default RouterServiceProvider;
