/* eslint-disable */ 
import { createRouter, createWebHistory, START_LOCATION } from 'vue-router';

///COMPONENTS///

import Home from './components/Home';


const routes = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', component: Home, name:'home'}
    ]
})

export default routes;