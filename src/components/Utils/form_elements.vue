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


    <div v-if="element == 'select'">
        <input
            class="form-control"
        />
        <div class="alert alert-danger">
            error
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
       'placeholder'
   ]
}
</script>