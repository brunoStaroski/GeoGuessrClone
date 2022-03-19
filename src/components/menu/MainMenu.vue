<template>
  <div>
    <nav>
      <ul>
        <li v-for="route in rotas" :key="route"><router-link :to="route.path ? route.path : '/'">{{route.name}}</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import {routes} from "@/main";

export default {
  name: "MainMenu",

  data() {
    return {
      rotas: routes
    }
  }
}
</script>

<style scoped>
  div {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }


</style>