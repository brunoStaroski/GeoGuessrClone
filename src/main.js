import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import MainMenu from "@/components/menu/MainMenu";
import PlayArea from "@/components/playArea/PlayArea";
import {createRouter, createWebHistory} from "vue-router";

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

const history = createWebHistory();

export const routes = [
    {path: '', component: MainMenu, name: 'MainMenu'},
    {path: '/play', component: PlayArea, name: 'PlayArea'}
]

const router = createRouter({
    history: history,
    routes: routes
})

createApp(App).use(router).use(PrimeVue).mount('#app')
