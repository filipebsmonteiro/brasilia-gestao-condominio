<template>
    <GradientBarsTemplate title="Users" subtitle="List of Users" icon="fa-users">
        <template slot="GradientTemplateTitle">asdfasdf</template>
        <b-card no-body>
            <b-table head-variant="light" :items="users">
                <template v-slot:cell(id)="linha">
                    <router-link :id="'link-edit-' + linha.index" :to="{ name: 'user.edit', params: { id: linha.item.id }}"
                                 class="font-weight-bold">
                        Editar
                    </router-link>
                </template>
            </b-table>
        </b-card>
    </GradientBarsTemplate>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import GradientBarsTemplate from "@/templates/GradientBarsTemplate";

    export default {
        name: "Index",
        components: {GradientBarsTemplate},
        computed: {
            ...mapGetters({
                users: 'user/all'
            })
        },
        methods: {
            ...mapActions([
                'user/listAll'
            ])
        },
        mounted() {
            this['user/listAll']()
        }
    }
</script>

<style lang="scss" scoped>
</style>