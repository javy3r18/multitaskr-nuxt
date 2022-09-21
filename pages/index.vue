<template>

    <b-container>
        <Pagination v-model="loading" :key="$route.fullPath" :items="pokemons"></Pagination>
        <b-table striped hover :items="pokemons.results">
            <template #cell(url)="data">
                <nuxt-link tag="button" class="btn btn-primary" :to="`/${data.item.name}`">Show abilities</nuxt-link>
            </template>
        </b-table>
    </b-container>

</template>

<script>
import { mapGetters } from "vuex";

export default {
    async fetch({ store, route }) {
        await store.dispatch("pokemons/get", route.query);
    },
    data() {
        return {
            loading: false
        };
    },
    watch: {
        '$route.query': {
            deep: true,
            async handler(value) {
                    await this.$store.dispatch("pokemons/get", value);
                    this.loading = false
            }
        },


    },
    computed: {
        ...mapGetters({
            pokemons: "pokemons/items",
        }),
    },



};
</script>