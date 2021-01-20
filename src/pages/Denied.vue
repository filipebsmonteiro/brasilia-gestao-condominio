<template>
    <SimpleTemplate>
        <div class="text-center empty d-flex flex-column w-75 m-auto">
            <h4 class="m-5">Access Denied</h4>
            <img src="/img/undraw_access_denied.svg" />
            <slot />
        </div>
    </SimpleTemplate>
</template>

<script>
    import SimpleTemplate from "@/templates/SimpleTemplate";
    export default {
        name: "Denied",
        components: {SimpleTemplate}
    }
</script>

<style lang="scss" scoped>
    img {
        width: 45%;
        margin: auto;
        margin-bottom: 3rem;
    }
</style>
