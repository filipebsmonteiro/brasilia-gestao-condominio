<template>
    <div>
        <TopBar/>
        <div class="d-flex">
            <SideBar/>
            <div class="content">
                <div class="pb-10 bg-custom-gradient text-white" v-if="!hideGradient">
                    <div class="container-fluid d-flex align-items-center justify-content-between">
                        <div class="pt-2 d-flex">
                            <i :class="`fas fa-2x m-2 ${icon}`"/>
                            <h1>{{ title || currentRouteName }}</h1>
                        </div>
                        <slot name="TemplateAfter"/>
                    </div>
                    <div class="ml-4 mb-3">{{ subtitle }}</div>
                </div>

                <div class="m-3 mt-n10">
                    <slot/>
                    <router-view></router-view>
                </div>

                <slot name="TemplateAfter"/>
            </div>
        </div>
    </div>
</template>

<script>
    import TopBar from "@/components/TopBar";
    import SideBar from "@/components/SideBar";
    export default {
        name: "GradientBarsTemplate",
        components: {SideBar, TopBar},
        props: {
            title: {
                type: String,
                default: ''
            },
            icon: {
                type: String,
                default: 'fa-table'
            },
            subtitle: {
                type: String,
                default: ''
            },
            hideGradient: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            currentRouteName() {
                return this.$route.name;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content{
        flex: 3;
        background-color: #f8f9fc;
    }
    .pb-10, .py-10 {
        padding-bottom: 6rem !important;
    }
    .mt-n10, .my-n10 {
        margin-top: -6rem !important;
    }
</style>