<template>
   <dashboard-title 
      title="Add article"
   />

   <Form @submit="onSubmit" :validation-schema="formSchema">

         <div class="form-group">
            <Field name="game" v-slot="{ field, errors, errorMessage }">
               <form-element
                  :field="field"
                  :errors="errors"
                  :errorMessage="errorMessage"
                  element="input"
                  type="text"
                  placeholder="Name of the game"
               />
            </Field>
         </div>
         


   </Form>

</template>

<script>
/* eslint-disable */
import FormElement from '../../../Utils/form_elements.vue';
import { addArticleSchema } from '@/Tools/schemas.js';
import DashboardTitle from '../../../Utils/dashTitle.vue';
import { Field, Form} from 'vee-validate';
export default {
   components:{
      DashboardTitle,
      Field,
      Form,
      FormElement
   },
   data(){
      return {
         formSchema:addArticleSchema
      }
   },
   methods:{
      onSubmit(values){
         console.log(values);
      }
   }
}
</script>