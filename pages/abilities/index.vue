<template>
    <b-container>
        <b-table striped hover :items="abilities.results">
            <template #cell(url)="data">
                <nuxt-link tag="button" class="btn btn-primary" :to="`abilities/${data.item.name}`">Open ability object</nuxt-link>
            </template>
        </b-table>

    </b-container>
     
</template>

<script>
    import { mapGetters } from 'vuex';
    export default{
        async fetch({store}){
            await store.dispatch('abilities/get')
        },

        computed:{
            ...mapGetters({
                abilities: 'abilities/items'
            })
        }
    }
</script>