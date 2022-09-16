<template>
    <b-container>

        <pagination :value="form"></pagination>

        <b-table striped hover :items="abilities.results">
            <template #cell(url)="data">
                <nuxt-link tag="button" class="btn btn-primary" :to="`abilities/${data.item.name}`">Open ability object
                </nuxt-link>
            </template>
        </b-table>


    </b-container>

</template>

<script>
import { mapGetters } from 'vuex';
import { debounce } from "lodash";
export default {
    async fetch({ store }) {
        await store.dispatch('abilities/get')
    },

    data() {
        let query = this.$route.query;
        return {
            form: {
                limit: query.limit ? parseInt(query.limit) : 20,
                offset: query.offset ? parseInt(query.offset) : 0,
                search: query.search ?? null,
                count: 0,
            },
            loading: false
        };
    },
    watch: {
        form: {
            deep: true,
            handler: debounce(async function (value) {
                this.loading = true;
                this.$router.push({ query: value });
                await this.$store.dispatch("abilities/get", value);
                this.loading = false;
            }, 2000),
        }
    },

    computed: {
        ...mapGetters({
            abilities: 'abilities/items'
        })
    },

    mounted() {
        this.form.count = this.abilities.count
    }

}
</script>