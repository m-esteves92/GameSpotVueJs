<template>
    <a-col :span="span" class="article_card">
        <router-link :to="{name:'article', params:{id:article.id}}">
            <a-card hoverable style="width:100%">
                <template #cover>
                    <img alt="image-article" :src="`http://placebeard.it/1080/720?${article.id}`">
                </template>
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                    ea commodo consequat.
                </p>
            </a-card>
        </router-link>
    </a-col>
</template>

<script>
   export default{
    props:['sapn','article','index']
   } 
</script>