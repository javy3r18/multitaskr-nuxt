<template>

    <pre>{{ability}}</pre>

</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        async fetch({store, params}){
            await store.dispatch('abilities/find', params.ability )
        },

        computed:{
            ...mapGetters({
                ability: 'abilities/ability'
            })
        }
    }
</script>