<template>
    <div class="container">
        <app-carousel :slides="homeArticles"/>
        <app-featured :articles="homeArticles"/>
    </div>
</template>

<script>
import appCarousel from '../Utils/carousel.vue';
import appFeatured from './featured.vue';

export default {
    components:{
        appCarousel,
        appFeatured
    },
    data(){
        return{
            homeArticles:[
                {id:1},
                {id:2},
                {id:3},
                {id:4},
                {id:5},
                {id:6},
                {id:7},
                {id:8}
                
            ]
        }
    }
}

</script>

