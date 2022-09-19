<template>
    <b-container>

        <pagination v-model="loading" :key="$route.fullPath" :items="locations"></pagination>

        <b-table striped hover :items="locations.results">
            <template #cell(url)="data">
                <nuxt-link tag="button" class="btn btn-primary" :to="`locations/${data.item.name}`">Open location object
                </nuxt-link>
            </template>
        </b-table>


    </b-container>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    async fetch({ store }) {
        await store.dispatch('locations/get')
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
                await this.$store.dispatch("locations/get", value);
                this.loading = false;
            }
        },

    },

    computed: {
        ...mapGetters({
            locations: 'locations/items'
        })
    },


}
</script>