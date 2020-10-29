<template>
  <div>
      <h1>{{ title }}</h1>
      <div v-if="show">Yes</div>
      <div v-else>No</div>
      <button class="btn btn-primary" @click="toggleShow">Change</button>
  </div>
</template>

<script>
export default {
    props: {
        title:{
            type : String,
            required : true
        }
    },
    data() {
        return {
            // title : 'ramuneOrch'
            show : false
        }
    },
    methods: {
        toggleShow(){
            this.show = !this.show;
        }
    }
}
</script>

<style>

</style>