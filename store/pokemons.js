export const state = () => ({
    items:{
        results: []
    },

    pokemon: null
})

export const getters = {
    items:state=> state.items,
    pokemon:state=> state.pokemon
}

export const mutations = {
    items(state, data) {
        state.items = data;
    },

    pokemon(state, data){
        state.pokemon = data;
    }
}

export const actions = {
    async get({commit}){
        let response = await this.$axios.get('https://pokeapi.co/api/v2/pokemon/');
        commit('items', response.data);
    },

    async find({commit}, name){
        let response = await this.$axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        commit('pokemon', response.data);
    }
}