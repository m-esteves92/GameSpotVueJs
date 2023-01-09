<template>
    
    <carousel 
        :items-to-show="1"
        :wrap-around="true"
        class="p_top"
    >
        <slide v-for="slide in slides" :key="slide.id">
            <div class="slider_bck" :style="{background: `url( http://placebeard.it/1080/720?${slide.id})`}">
                <div class="slide_content">
                    <div class="item">
                        <div>Title of the article</div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>  
                </div>  
            </div>    
        
        </slide>

        <template #addons>
            <pagination/>
        </template> 
        
    </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'


export default {
    props:['slides'],
    components:{
        Carousel,
        Slide,
        Pagination

    },
};
</script>

<style>
    .carousel__pagination-button {
      background-color: var(--dark);
    }
    .carousel__pagination-button--active {
      background-color: var(--grape);
    }
    </style>