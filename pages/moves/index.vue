<template>
    <b-container>

        <pagination v-model="loading" :key="$route.fullPath" :items="moves"></pagination>

        <b-table striped hover :items="moves.results">
            <template #cell(url)="data">
                <nuxt-link tag="button" class="btn btn-primary" :to="`moves/${data.item.name}`">Open move object
                </nuxt-link>
            </template>
        </b-table>


    </b-container>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    async fetch({ store }) {
        await store.dispatch('moves/get')
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
                await this.$store.dispatch("moves/get", value);
                this.loading = false;
            }
        },

    },

    computed: {
        ...mapGetters({
            moves: 'moves/items'
        })
    },


}
</script>