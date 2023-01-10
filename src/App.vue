<template>
  <app-header/>

  <router-view v-if="!isLoadig"/>

  <div class="page_loader" v-else>
    <app-loader/>
  </div>

</template>

<script>
import appHeader from './components/Header';
import appLoader from './components/Utils/loader.vue';
import { mapGetters } from 'vuex';
export default {
  components:{
    appHeader,
    appLoader
  },
  computed:{
    ...mapGetters({
      toastMsg:'notify/getToastMsg',
      isLoadig:'notify/isLoading'
    })
  },
  watch:{
    toastMsg(toastMsg){
      if(toastMsg[0] === true){
        if(toastMsg[2] === 'error'){
          this.$toast.error(toastMsg[1]);
        }
        if(toastMsg[2] === 'success'){
          this.$toast.success(toastMsg[1]);
        }
      }
    }
  }
}
</script>

<style>
  @import './assets/style.css';
</style>