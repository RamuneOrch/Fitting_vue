<template>
    <div>
        <label for="" class="mr-5">Name</label>
        <input 
            type="text" 
            :value="value"
            style=""
            @input="$emit('input', $event.target.value)"
        >
    </div> 
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            required: true
        }
    },
    // methods: {
    //     updateName(e) {
    //         console.log(e.target.value);
    //         this.$emit('update-name', e.target.value);
    //     }
    // }
}
</script>

