<template>
    

    <div class="container p_top article_page" v-if="article">

        <div class="game_tag">
            {{ article.game }}
        </div>

        <div 
            class="article_featured"
            :style="{ backgroundImage: `url(${article.img})`}"
        ></div>

        <div class="article_content">
            <div class="owner">
                Article written by <b>{{ article.owner.firstname}} {{ article.owner.lastname}} </b>
            </div>

            <hr/>

            <h1> {{article.title}} </h1>
            <div
                class="editor"
                v-html="article.editor"
            ></div>

            <hr/>

            <div class="article_rating">
                Our rating is:<b>{{ article.rating }}</b>
            </div>          
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            article:{
                id:'1238635252',
                owner:{
                    firstname:'Francis',
                    lastname:'Jones',
                    uid:'kjdbciue0998323'
                },
                game:'The last of us 2',
                title:'Lorem ipsum dolor sit amet, consectetur',
                rating:5,
                timestamp:'01/01/01',
                img:'http://placebeard.it/1080/720',
                excerpt:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                editor:'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
            }
        }
    }
}
</script>