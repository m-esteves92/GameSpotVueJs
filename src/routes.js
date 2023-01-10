/* eslint-disable */ 
import { createRouter, createWebHistory, START_LOCATION } from 'vue-router';

///COMPONENTS///

import Home from './components/Home';
import Article from './components/Articles/article.vue';
import Signin from './components/User/signin.vue';

const routes = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', component: Home, name:'home'},
        {path:'/article/:id', component:Article, name:'article'},
        {path:'/signin', component:Signin, name:'signin'}
    ]
})

export default routes;