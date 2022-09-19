<template>    
    <b-container>
        
        <b-table striped hover :items="pokeitem.attributes">
        </b-table>
    </b-container>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        async fetch({store, params}){
            await store.dispatch('pokeitems/find', params.pokeitem )
        },

        computed:{
            ...mapGetters({
                pokeitem: 'pokeitems/pokeitem'
            })
        }
    }
</script>