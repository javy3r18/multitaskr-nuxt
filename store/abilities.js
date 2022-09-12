export const state = () => ({
    items:{
        results: []
    },

    ability: null
})

export const getters = {
    items:state=> state.items,
    ability:state=> state.ability
}

export const mutations = {
    items(state, data) {
        state.items = data;
    },

    ability(state, data){
        state.ability = data;
    }
}

export const actions = {
    async get({commit}){
        let response = await this.$axios.get('https://pokeapi.co/api/v2/ability/');
        commit('items', response.data);
    },

    async find({commit}, name){
        let response = await this.$axios.get(`https://pokeapi.co/api/v2/ability/${name}`);
        commit('ability', response.data);
    }
}