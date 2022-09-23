export const state = () => ({
    items:{
        results: []
    },

    ability: null
})

export const getters = {
    items:state=> state.items,
    user:state=> state.user
}

export const mutations = {
    items(state, data) {
        state.items = data;
    },

    user(state, data){
        state.user = data;
    }
}

export const actions = {
    create({commit}, params){
        return this.$axios.post('https://develop.gomultitaskr.com/deals/users', params);
    },

}