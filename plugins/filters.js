import Vue from 'vue'

Vue.filter("isEmpty", function (value) {
    if (!value || value.length == 0) return '-No data-'
    return value
});

Vue.filter("isArray", function (value) {
    if (Array.isArray(value)) return ''
    return value
});

Vue.filter("upperCase", function (value) {
    return value.toUpperCase();
});