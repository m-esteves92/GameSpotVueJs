<template>

    <div v-if="element == 'input'">
        <input
            :type="type"
            class="form-control"
            v-bind="field"
            :class="{'is-invalid': errors.length !== 0}"
            :placeholder="placeholder"
        />
        <div class="alert alert-danger" v-if="errors.length !== 0">
            {{ errorMessage }}
        </div>
    </div>


    <div v-if="element == 'textarea'">
        <textarea
            class="form-control"
            :class="{'is-invalid': errors.length !== 0}"
            :rows="rows"
            v-bind="field"
            :placeholder="placeholder"
        ></textarea>
         <div class="alert alert-danger" v-if="errors.length !== 0">
            {{ errorMessage }}
        </div>
    </div>


     <div v-if="element == 'select'">
        <select
            class="form-select"
            v-bind="field"
            :class="{'is-invalid': errors.length !== 0}"
        >
            <slot/>
        </select>
        <div class="alert alert-danger" v-if="errors.length !== 0">
            {{ errorMessage }}
        </div>
    </div>



</template>

<script>
export default {
   props:[
       'field',
       'errors',
       'errorMessage',
       'element',
       'type',
       'placeholder',
       'rows'
   ]
}
</script>