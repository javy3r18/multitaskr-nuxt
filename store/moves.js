export const state = () => ({
    items:{
        results: []
    },

    move: null
})

export const getters = {
    items:state=> state.items,
    move:state=> state.move
}

export const mutations = {
    items(state, data) {
        state.items = data;
    },

    move(state, data){
        state.move = data;
    }
}

export const actions = {
    async get({commit}, params){
        let response = await this.$axios.get('https://pokeapi.co/api/v2/move/', {
            params: params
        });
        commit('items', response.data);
    },

    async find({commit}, name){
        let response = await this.$axios.get(`https://pokeapi.co/api/v2/move/${name}`);
        commit('move', response.data);
    }
}