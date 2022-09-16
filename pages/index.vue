<template>

    <b-container>
        <b-row class="py-3">
            <b-col cols="8">
                <b-form-input v-model="form.search" type="search" placeholder="Search pokemon" required>
                </b-form-input>
            </b-col>
            <b-col>
                <b-form-select v-model="form.limit" :options="[20, 40, 60, 80 ,100]"></b-form-select>
            </b-col>
            <b-col>
                <b-button-group>
                    <b-button :disabled="loading || form.offset == 0" @click="form.offset -= form.limit">Previous
                    </b-button>
                    <b-button :disabled="loading || form.offset + form.limit >= pokemons.count"
                        @click="form.offset += form.limit">Next</b-button>
                </b-button-group>
            </b-col>
        </b-row>

        <b-table striped hover :items="pokemons.results">
            <template #cell(url)="data">
                <nuxt-link tag="button" class="btn btn-primary" :to="`/${data.item.name}`">Show abilities</nuxt-link>
            </template>
        </b-table>
    </b-container>

</template>

<script>
import { mapGetters } from "vuex";
import {debounce} from "lodash";
export default {
    async fetch({ store, route }) {
        await store.dispatch("pokemons/get", route.query);
    },

    data() {
        let query = this.$route.query;
        return {
            form: {
                limit: query.limit ? parseInt(query.limit) : 20,
                offset: query.offset ? parseInt(query.offset) : 0,
                search: query.search ?? null
            },
            loading: false
        };
    },



    watch: {
        form: {
            deep: true,
            handler: debounce(async function(value){
                this.loading = true;
                this.$router.push({ query: value })
                await this.$store.dispatch("pokemons/get", value)
                this.loading = false;
            }, 2000),
        }
    },

    computed: {
        ...mapGetters({
            pokemons: "pokemons/items",
        }),
    },
};
</script>