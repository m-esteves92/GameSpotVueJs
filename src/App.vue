<template>
  <app-header/>
  <router-view/>

</template>

<script>
import appHeader from './components/Header';
import { mapGetters } from 'vuex';
export default {
  components:{
    appHeader
  },
  computed:{
    ...mapGetters({
      toastMsg:'notify/getToastMsg'
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
