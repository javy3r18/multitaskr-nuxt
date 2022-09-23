export const state = () => ({
    items:{
        results: []
    },

    location: null
})

export const getters = {
    items:state=> state.items,
    location:state=> state.location
}

export const mutations = {
    items(state, data) {
        state.items = data;
    },

    location(state, data){
        state.location = data;
    }
}

export const actions = {
    async get({commit}, params){
        let response = await this.$axios.get('https://pokeapi.co/api/v2/location/', {
            params: params
        });
        commit('items', response.data);
    },

    async find({commit}, name){
        let response = await this.$axios.get(`https://pokeapi.co/api/v2/location/${name}`);
        commit('location', response.data);
    }
}