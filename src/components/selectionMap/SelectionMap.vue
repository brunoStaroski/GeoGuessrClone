<template>
  <div>
    <div ref="mapDiv" class="mapDiv"></div>
    <div class="responseDiv">
      <p class="response">{{resposta}}</p>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-undef */
  import {Loader} from '@googlemaps/js-api-loader';
  import {onMounted, ref, watch} from 'vue';
  import {config} from '@/config'

  const coord = { lat: 42.345573, lng: -71.098326 };
  export default {
    name: "SelectionMap",

    setup: function () {
      const mapDiv = ref(null);
      const resposta = ref(null);
      const loader = new Loader({
        apiKey: config.GOOGLE_MAPS_API_KEY //API-KEY
      });

      onMounted( async () => {
        await loader.load();
        const map = new google.maps.Map(mapDiv.value, {
          zoom: 4,
          center: coord
        });
        map.addListener('click', (mapsMouseEvent) => {
          resposta.value = JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2);
          console.log(JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2));
        })
      })

      watch([resposta], () => {
        alert('Posição clicada: ' + resposta.value);
      })
      return {mapDiv, resposta};
    }
  }
</script>

<style scoped>
  .mapDiv {
    width: 400px;
    height: 250px;
    position: relative;
    z-index: 10;
    bottom: 800px;
    margin: 0px;
  }

  .responseDiv {
    background-color: cornflowerblue;
    width: 200px;
    height: 100px;
    text-align: center;
    position: relative;
    z-index: 20;
    bottom: 800px;
    left: 500px;
    margin: 0px;
  }

  .response {
    horiz-align: center;
  }



</style>