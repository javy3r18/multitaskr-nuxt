export const state = () => ({
    items:{
        results: []
    },

    pokeitem: null
})

export const getters = {
    items:state=> state.items,
    pokeitem:state=> state.pokeitem
}

export const mutations = {
    items(state, data) {
        state.items = data;
    },

    pokeitem(state, data){
        state.pokeitem = data;
    }
}

export const actions = {
    async get({commit}, params){
        let response = await this.$axios.get('https://pokeapi.co/api/v2/item/', {
            params: params
        });
        commit('items', response.data);
    },

    async find({commit}, name){
        let response = await this.$axios.get(`https://pokeapi.co/api/v2/item/${name}`);
        commit('pokeitem', response.data);
    }
}