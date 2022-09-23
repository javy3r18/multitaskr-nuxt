export default function ({ $axios, store }) {
    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 422) {
            store.commit('errors', error.response.data.errors)
        }
    });

    $axios.onRequest(config => {
        console.log('tsingd');
        store.commit('errors', {})
    });
}