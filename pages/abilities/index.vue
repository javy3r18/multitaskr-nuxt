<template>
     <table>
        <thead>
            <tr>
                <th>#</th>
                <th>ability</th>
                <th>url</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(ability, index) in abilities.results">
                <td>{{index}}</td>
                <td>{{ability.name}}</td>
                <td><nuxt-link :to="`/abilities/${ability.name}`">click me</nuxt-link></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default{
        async fetch({store}){
            await store.dispatch('abilities/get')
        },

        computed:{
            ...mapGetters({
                abilities: 'abilities/items'
            })
        }
    }
</script>