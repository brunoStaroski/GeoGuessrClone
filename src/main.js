import { createApp } from 'vue'
import App from './App.vue'
import MainMenu from "@/components/menu/MainMenu";
import PlayArea from "@/components/playArea/PlayArea";
import {createRouter, createWebHistory} from "vue-router";

const history = createWebHistory();

export const routes = [
    {path: '', component: MainMenu, name: 'MainMenu'},
    {path: '/play', component: PlayArea, name: 'PlayArea'}
]

const router = createRouter({
    history: history,
    routes: routes
})

createApp(App).use(router).mount('#app')
