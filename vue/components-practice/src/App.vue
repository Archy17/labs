<template>
  <div class="container">
    <app-header></app-header>

    <hr>

    <servers-list></servers-list>

    <hr>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import ServersList from './ServersList.vue'
import AppFooter from './AppFooter.vue'

export default {
  name: 'app',

  components: {
    'app-header': AppHeader,
    'servers-list': ServersList,
    'app-footer': AppFooter,
  },
}
</script>

<style>
body {
  background-color: #101010;
  color: lime;
}

.list-group-item {
  background-color: #303030;
}
</style>
