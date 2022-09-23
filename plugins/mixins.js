import Vue from 'vue'
import { mapGetters } from 'vuex'

Vue.mixin({

    computed: {
        ...mapGetters({
            user: 'user',
            errors: 'errors'
        })
    },

    methods: {
        hasError(property) {
           return this.errors.hasOwnProperty(property) ? false : null    
        },
        
        clearError(event){
            this.$store.commit('clearError', event.target.name)
        },
    }
})
