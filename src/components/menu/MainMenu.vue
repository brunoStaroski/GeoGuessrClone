<template>
  <div>
    <nav>
        <router-link :to="'/play'" >
          <Button class="p-button">Jogar</Button>
        </router-link>
    </nav>
  </div>
</template>

<script>
import {routes} from "@/main";

export default {
  name: "MainMenu",
  components: {

  },
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
    width: 32%;
    margin: 0 auto;
    border: 1px solid cornflowerblue;
  }

  ul {
    margin-left: 40px;
  }

  .p-button {
    width: 50%;
    margin-bottom: 10px;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none !important;

  }


</style>