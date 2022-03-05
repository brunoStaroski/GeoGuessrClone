<template>
  <div>
    <p>Mapa</p>
    <div ref="mapDiv" ></div>
    <div ref="streetDiv" style="width: 100%; height: 800px;"></div>
  </div>

</template>

<script>
  /* eslint-disable no-undef */
  import {Loader} from '@googlemaps/js-api-loader';
  import {onMounted, ref} from 'vue';
  import {config} from '@/config'

  const coord = { lat: 42.345573, lng: -71.098326 };
export default {
  name: "StreetView",

  setup() {
    const mapDiv = ref(null);
    const streetDiv = ref(null);
    const loader = new Loader({
      apiKey: config.GOOGLE_MAPS_API_KEY //API-KEY
    })

    onMounted(async () => {
      await loader.load();
      const map = new google.maps.Map(mapDiv.value, {
        center: coord,
        zoom: 14
      });
      const streetView = new google.maps.StreetViewPanorama(streetDiv.value,
          {
            position: coord,
            pov: {
              heading: 34,
              pitch: 10
            }
          });
      console.log(map);
      map.setStreetView(streetView);
    })
    return {mapDiv, streetDiv};
  }




}
</script>

<style scoped>

</style>