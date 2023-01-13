<template>
   <dashboard-title 
      title="Articles"
   />
</template>


<script>
import DashboardTitle from '../../../Utils/dashTitle.vue';
import { mapActions } from 'vuex'

export default {
   components:{
      DashboardTitle
   },
   computed:{
      adminArticles(){
         return this.$store.getters['articles/getAdminArticles']
      }
   },
   mounted(){
      this.getAdminArticles({limit:3})
   },
   methods:{
      ...mapActions('articles',[
         'getAdminArticles'
      ])
   }
}
</script>