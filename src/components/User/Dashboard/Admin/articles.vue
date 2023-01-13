<template>
   <dashboard-title 
      title="Articles"
   />

   <div v-if="adminArticles">

      <a-table
         :columns="columns"
         :pagination="false"
         :data-source="adminArticles"
         :row-key="record => record.id"
         bordered
      >
         <template #name="{ text }">
            <a>{{ text }}</a>
         </template>

         <template #game="{ record }">
            <router-link :to="{name:'article',params:{id:record.id}}" target="_blank">
               {{ record.game }}
            </router-link>
         </template>

         <template #owner="{ record }">
            <span>
               {{ record.owner.firstname}}  {{ record.owner.lastname}}
            </span>
         </template>

         <template #time="{ record }">
            <span>
               {{ record.timestamp.toDate().toDateString()}} 
            </span>
         </template>


         <template #delete="{ record }">
            <a-popconfirm
               title="Are you sure ?"
               ok-text="Yes"
               cancel-text="No"
               @confirm="removeById(record.id)"
            >
               <button class="btn btn-danger btn-sm">Delete article</button>
            </a-popconfirm>
         </template>


      </a-table>

   </div>

</template>


<script>
import DashboardTitle from '../../../Utils/dashTitle.vue';
import { mapActions } from 'vuex'

export default {
   components:{
      DashboardTitle
   },
   data(){
      return {
         columns
      }
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
      ]),
      removeById(id){
         console.log(id)
      }
   }
}

const columns = [
   {
      title:'Game',
      slots:{ customRender:'game'}
   },
   {
      title:'Owner',
      slots:{ customRender: 'owner'}
   },
   {
      title:'Rating',
      dataIndex:'rating',
   },
    {
      title:'Created at',
      slots:{ customRender: 'time'}
   },
   {
      title:'',
      slots:{ customRender: 'delete'}
   }
]


</script>