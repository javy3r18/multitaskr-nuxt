<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand to="/">Pokemons</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/abilities">Abilities</b-nav-item>
            <b-nav-item to="/moves">Moves</b-nav-item>
            <b-nav-item to="/pokeitems">Items</b-nav-item>
            <b-nav-item to="/locations">Locations</b-nav-item>
            <b-nav-item to="/users/create">Users</b-nav-item>
            <b-nav-item to="/users/avatar">Avatar</b-nav-item>
            <b-nav-item to="/users/avatar">{{user.email}}</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <nuxt />
  </div>
  
</template>