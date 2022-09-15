<template>
    <div>
        <div>
            <b-table striped hover :items="pokemons.results" :fields="fields">
                <template #cell(url)="data">
                    <nuxt-link
                        tag="button"
                        class="btn btn-primary"
                        :to="`/${data.item.name}`"
                        >Show abilities</nuxt-link
                    >
                </template>
            </b-table>
        </div>
        
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            
        };
    },

    mounted() {
        console.log(this.$store.state);
    },

    async fetch({ store }) {
        await store.dispatch("pokemons/get");
    },

    computed: {
        ...mapGetters({
            pokemons: "pokemons/items",
        }),
    },
};
</script>