<template>
    <b-container>

        <pagination v-model="loading" :key="$route.fullPath" :items="pokeitems"></pagination>

        <b-table striped hover :items="pokeitems.results">
            <template #cell(url)="data">
                <nuxt-link tag="button" class="btn btn-primary" :to="`pokeitems/${data.item.name}`">Open item object
                </nuxt-link>
            </template>
        </b-table>


    </b-container>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    async fetch({ store }) {
        await store.dispatch('pokeitems/get')
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
                await this.$store.dispatch("pokeitems/get", value);
                this.loading = false;
            }
        },

    },

    computed: {
        ...mapGetters({
            pokeitems: 'pokeitems/items'
        })
    },


}
</script>