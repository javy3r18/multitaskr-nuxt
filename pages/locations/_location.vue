<template>
    <b-container>
        
        <b-table striped hover :items="location.areas">
        </b-table>
    </b-container>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        async fetch({store, params}){
            await store.dispatch('locations/find', params.location )
        },

        computed:{
            ...mapGetters({
                location: 'locations/location'
            })
        }
    }
</script>