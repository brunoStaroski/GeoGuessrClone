<template>
  <StreetView :coord="coord"></StreetView>
  <SelectionMap></SelectionMap>

</template>

<script>
import StreetView from "@/components/streetView/StreetView";
import SelectionMap from "@/components/selectionMap/SelectionMap";

export default {
  name: 'App',
  components: {
    StreetView,
    SelectionMap
  },
  data() {
    return {
      coord: { lat: 42.345573, lng: -71.098326 },
    }

  }




}
</script>

<style>

</style>
