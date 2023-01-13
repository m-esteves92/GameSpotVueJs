<template>

    <div v-if="slides">
        <carousel 
            :items-to-show="1"
            :wrap-around="true"
            class="p_top"
        >
            <slide v-for="slide in slides" :key="slide.id">
            <div class="slider_bck" :style="{ background:`url(${slide.img})`}">
                <div class="slide_content">
                    <div class="item">
                        <div>{{ slide.title }}</div>
                        <div>
                           {{ slide.excerpt }}
                        </div>
                    </div>
                </div>

            </div>
            </slide>
        
            <template #addons>
                <pagination/>
            </template>

        </carousel>  
    </div>
      
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

export default {
    props:['slides'],
    components:{
        Carousel,
        Slide,
        Pagination
    }
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