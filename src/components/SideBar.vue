<template>
    <b-collapse id="sidebar" :visible="showSideBar">
        <b-nav vertical class="flex-nowrap">
            <b-nav-item id="sidebar-dashboard" :to="{name: 'homepage'}">
                <div class="nav-link-icon"><i class="fas fa-heartbeat" /></div>
              {{ $t('sideBar.dashboard') }}
            </b-nav-item>
            <b-nav-item id="sidebar-vns" :to="{ name: 'user.index'}">
                <div class="nav-link-icon"><i class="fa fa-compact-disc"/></div> Users
            </b-nav-item>
            <b-nav-item-dropdown menu-class="bg-transparent border-0 p-0 ml-4 position-relative" no-caret>
                <template v-slot:button-content>
                    <div class="nav-link-icon"><i class="fa fa-cog"/></div> Dropdown
                    <i class="fa fa-chevron-down ml-auto" />
                </template>
                <b-dropdown-group class="d-flex flex-column position-relative">
                    <b-dropdown-item :to="'/'">Label</b-dropdown-item>
                    <b-dropdown-item :to="'/'">Label</b-dropdown-item>
                    <b-dropdown-item :to="'/'">Label</b-dropdown-item>
                </b-dropdown-group>
            </b-nav-item-dropdown>
        </b-nav>
    </b-collapse>
</template>

<script>
    export default {
        name: "SideBar",
        data(){
            return {
                showSideBar: true
            }
        },
        mounted() {
            if (window.innerWidth < 992) this.showSideBar = false
        }
    }
</script>

<style scoped>
    .nav{
        width: 15rem;
        height: 100vh;
    }
    /deep/.nav-link{
        display: -webkit-box;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        line-height: normal;
        position: relative;
        color: #1f2d41;
    &:hover{
         background-color: #eaecf4;
     }
    }
    .nav-link-icon{
        font-size: 0.9rem;
        padding-right: 0.5rem;
        display: -webkit-inline-box;
        display: inline-flex;
        color: #a2acba;
        margin-right: 0.5rem;
    }
    /deep/.dropdown-item{
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
    }
    /deep/.dropdown-menu{
        transform: none !important;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-left: #a2acba 1px solid !important;
    }
</style>