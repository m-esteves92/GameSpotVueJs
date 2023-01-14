<template>
   <dashboard-title 
      title="Profile"
   />

   <div v-if="userData">

   
   <Form @submit="onSubmit" :validation-schema="formSchema">

         <div class="form-group">
            <Field name="firstname" v-model="userData.firstname" v-slot="{ field, errors, errorMessage }">
               <form-element
                  :field="field"
                  :errors="errors"
                  :errorMessage="errorMessage"
                  element="input"
                  type="text"
                  placeholder="Your firstname"
               />
            </Field>
         </div>

         <br/>

         <div class="form-group">
            <Field name="lastname"  v-model="userData.lastname" v-slot="{ field, errors, errorMessage }">
               <form-element
                  :field="field"
                  :errors="errors"
                  :errorMessage="errorMessage"
                  element="input"
                  type="text"
                  placeholder="Your lastname"
               />
            </Field>
         </div>

         <br/>

          <button
            type="submit"
            class="btn btn-primary"
         >
           Update user
         </button>



   </Form>
</div>

</template>

<script>
import DashboardTitle from '../../../Utils/dashTitle.vue';
import FormElement from '../../../Utils/form_elements.vue';
import { Field, Form} from 'vee-validate';
import * as yup from 'yup';

export default {
   components:{
      DashboardTitle,
      FormElement,
      Field,
      Form
   },
   data(){
      return {
         formSchema:{
            firstname:yup.string(),
            lastname:yup.string()
         }
      }
   },
   computed:{
      userData(){
         return JSON.parse(JSON.stringify(this.$store.getters['auth/getUserData']));
      }
   },
   methods:{
      onSubmit(values){
         this.$store.dispatch('auth/updateProfile',values);
      }
   }
}
</script>