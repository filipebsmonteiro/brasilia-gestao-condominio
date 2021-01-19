import makeRoutes from "@/routes/Base/Route";

export default makeRoutes('user').map(route => {
    return {
        ...route,
        meta: {permission: route.name}
    }
})