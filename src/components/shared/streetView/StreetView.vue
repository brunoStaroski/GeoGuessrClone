<template>
  <div>
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
    const streetDiv = ref(null);
    const loader = new Loader({
      apiKey: config.GOOGLE_MAPS_API_KEY //API-KEY
    })

    onMounted(async () => {
      await loader.load();
      /* let panoramaOptions = {
        disableDefaultUI: false,
      }*/
      new google.maps.StreetViewPanorama(streetDiv.value, {
        position: coord,
        pov: {
          heading: 34,
          pitch: 10
        }
      });
    })
    return {streetDiv};
  }




}
</script>

<style scoped>

</style>