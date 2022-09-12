<template>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>pokemon</th>
                <th>url</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(pokemon, index) in pokemons.results">
                <td>{{index}}</td>
                <td>{{pokemon.name}}</td>
                <td><nuxt-link :to="`/${pokemon.name}`">click me</nuxt-link></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import {mapGetters} from 'vuex'
export default {

    data() {
        return {

        }
    },

    mounted(){
        console.log(this.$store.state)
    },

    async fetch({ store }) {
        await store.dispatch('pokemons/get')
    },

    computed: {
        ...mapGetters({
            pokemons: 'pokemons/items'
        })
    }
}
</script>