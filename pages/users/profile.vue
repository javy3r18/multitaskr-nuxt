<template>
  <b-container>
    <h1>User data</h1>
    <ol class="list-group list-group-numbered">
      <li v-for="(value, key) in user" class="list-group-item"><strong>{{key | upperCase}}:</strong> {{value | isEmpty |
      isArray}} <b-table v-if="Array.isArray(value)" striped hover :items="value"></b-table>
      </li>
    </ol>
  </b-container>
</template>
