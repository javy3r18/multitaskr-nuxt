<template>
    <div>
        <b-card :title="pokemon.name" sub-title="Abilities">
            <nuxt-link
                v-for="ability in pokemon.abilities"
                :to="`/abilities/${ability.ability.name}`"
            >
                {{ ability.ability.name }}
                <br />
            </nuxt-link>
        </b-card>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    async fetch({ store, params }) {
        await store.dispatch("pokemons/find", params.pokemon);
    },

    computed: {
        ...mapGetters({
            pokemon: "pokemons/pokemon",
        }),
    },
};
</script>