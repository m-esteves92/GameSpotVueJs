/* eslint-disable */
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import { createRouter, createWebHistory, START_LOCATION } from 'vue-router';

// COMPONENTS
import Home from './components/Home';
import Article from './components/Articles/article.vue';
import Signin from './components/User/signin.vue';


const routes = createRouter({
    history: createWebHistory(),
    routes:[
        { path:'/', component: Home, name:'home'},
        { path:'/article/:id', component:Article, name:'article' },
        { path:'/signin', component:Signin, name:'signin' }
    ]
});

const auth = getAuth();


routes.beforeEach((to,from,next)=>{
    if(from === START_LOCATION){
        onAuthStateChanged(auth, user => {
            if(user){
                console.log(user, 'autosign in')
            } else {
                console.log(user, 'not autosign in')
            }
        })
        next();
    } else {
        console.log('other')
        next()
    }    
})

export default routes;