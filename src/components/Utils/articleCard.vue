<template>
    <a-col :span="span" class="article_card">
        <router-link :to="{name:'article',params:{id:article.id}}">
            <a-card hoverable style="width:100%">
                <template #cover>
                    <img alt="image_article" :src="article.img"> 
                </template>
                <h3>{{ article.title }}</h3>
                <p>
                   {{ article.excerpt }}
                </p>
            </a-card>
        </router-link>
    </a-col>
</template>

<script>
export default {
    props:['span','article','index']
}
</script>