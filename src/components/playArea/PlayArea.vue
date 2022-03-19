<template>
  <div class="menu">
    <nav>
      <li><router-link to="/">Voltar</router-link></li>
    </nav>

  </div>

  <StreetView :coord="coord"></StreetView>
  <SelectionMap></SelectionMap>
</template>

<script>
import StreetView from "@/components/shared/streetView/StreetView";
import SelectionMap from "@/components/shared/selectionMap/SelectionMap";

export default {
  name: "PlayArea",
  components: {
    StreetView,
    SelectionMap
  },
  data() {
    return {
      coord: {lat: 42.345573, lng: -71.098326},
    }
  }
}
</script>

<style scoped>
  .menu {
    margin-bottom: 15px;
    width: 100%;
    background-color: cornflowerblue;
    height: 50px;
  }

  li {
    list-style-type: none;
  }




</style>