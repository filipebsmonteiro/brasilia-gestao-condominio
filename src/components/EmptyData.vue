<template>
    <div id="empty-div" class="text-center empty d-flex flex-column w-75 m-auto">
        <h4 class="m-5">{{ title ? title : 'No data found' }}</h4>
        <img src="static/img/undraw_file_searching_duff.svg" />
        <slot />
    </div>
</template>

<script>
    export default {
        name: "EmptyData",
        props: {
            title: {
                type: String,
                default: null
            }
        }
    }
</script>

<style lang="scss" scoped>
.empty{
    img {
        width: 35%;
        margin: auto;
        margin-bottom: 3rem;
    }
}
</style>
