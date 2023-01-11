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
         
         <br/>

         <div class="form-group">
            <Field name="title" v-slot="{ field, errors, errorMessage }">
               <form-element
                  :field="field"
                  :errors="errors"
                  :errorMessage="errorMessage"
                  element="input"
                  type="text"
                  placeholder="Title of the article"
               />
            </Field>
         </div>

  
         <br/>

         <div class="form-group">
            <Field name="excerpt" v-slot="{ field, errors, errorMessage }">
               <form-element
                  :field="field"
                  :errors="errors"
                  :errorMessage="errorMessage"
                  element="textarea"
                  placeholder="Add an excerpt"
                  :rows="3"
               />
            </Field>
         </div>

         <br/>

         <div class="form-group">
            <Field 
               name="rating" 
               v-slot="{ field, errors, errorMessage }"
               value="Select a rating"
            >
               <form-element
                  :field="field"
                  :errors="errors"
                  :errorMessage="errorMessage"
                  element="select"
               >
                  <option value="Select a rating" selected>Select a rating</option>
                  <option v-for="rating in ratings" :key="rating" :value="rating">
                     {{ rating }}
                  </option>
               </form-element>
            </Field>
         </div>
         
         <br/>

         <div class="form-group">
            <Field name="img" v-slot="{ field, errors, errorMessage }">
               <form-element
                  :field="field"
                  :errors="errors"
                  :errorMessage="errorMessage"
                  element="input"
                  type="text"
                  placeholder="Add the source of the img"
               />
            </Field>
         </div>

         <br/>

         <button
         type="submit"
         class="btn btn-primary"
         >
            Add article
         </button>
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
         ratings:[1,2,3,4,5],
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