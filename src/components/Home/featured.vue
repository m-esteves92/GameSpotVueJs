<template>
    <div class="featured-home">
        <a-row :gutter="16">
            <article-card
                span="6"
                v-for="(article,index) in articles"
                :key="article.id"
                :index="index"
                :article="article"
            />
        </a-row>
    </div>
</template>

<script>
    import articleCard from '../Utils/articleCard.vue';
    

    export default {
        props:['articles'],
        components:{
            articleCard
            
        }
    }
</script>