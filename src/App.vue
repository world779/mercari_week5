<template>
  <v-app>
    <Header/>
    <v-container>
      <router-view/>
    </v-container>
  </v-app>
</template>

<script>
  import Header from "./components/Header"
  import Component from '@/App'

  export default {
    name: 'App',
    components: {
      Header
    },
  }
</script>