<template>    
    <b-container>
        <b-table striped hover :items="move.accuracy">
        </b-table>
    </b-container>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        async fetch({store, params}){
            await store.dispatch('moves/find', params.move )
        },

        computed:{
            ...mapGetters({
                move: 'moves/move'
            })
        }
    }
</script>