<template>
    <div class="container">
        <app-carousel :slides="slidesArticles"/>
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
    computed:{
        homeArticles(){
            return this.$store.getters['articles/getHomeArticles'];
        },
        slidesArticles(){
            const articles = this.$store.getters['articles/getHomeArticles'];
            const slicedArray = articles.slice(0,4);
            return slicedArray;
        }
    },
    mounted(){
        this.$store.dispatch('articles/getArticles',{limit:8});
    }

}

</script>