<template>
    <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="#" v-b-toggle.sidebar>
            <b-button variant="light"><i class="fas fa-bars"></i></b-button>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>

                <b-nav-item>
                    <router-link :to="{name:'homepage'}">Home</router-link>
                </b-nav-item>
                <b-nav-item>
                    <router-link :to="{name:'user.index'}">Users</router-link>
                </b-nav-item>

                <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "TopBar"
    }
</script>

<style lang="scss" scoped>
</style>