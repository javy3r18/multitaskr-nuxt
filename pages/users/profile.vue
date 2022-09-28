<template>
    <b-container>
        <h1>User data</h1>
        <ol v-for="(value, key) in user" class="list-group list-group-numbered">
            <li class="list-group-item"><strong>{{key | upperCase}}:</strong> {{value | isEmpty | isArray}} <b-table v-if="Array.isArray(value)" striped hover :items="value"></b-table></li>    
        </ol>
    </b-container>
</template>


<script>
    export default{
        filters: {
    isEmpty: function (value) {
    if (!value || value.length==0) return '-No data-'
    return value
  },

  isArray: function (value) {
    if (Array.isArray(value)) return ''
    return value
  },

  upperCase: function (value) {
    return value.toUpperCase();
  },

}
    }
</script>