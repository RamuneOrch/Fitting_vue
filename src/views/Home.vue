<template>
  <div>
    <h1>This is Home page</h1>
    <form action="">
      <InputField v-model="name" />
      <br><button class="btn btn-primary">Submit</button>
    </form>
    {{ name }}
    <Test title="Ramune Orch"/>
  </div>
</template>

<script>
import InputField from '@/components/InputField.vue';
import Test from '@/components/test'
export default {
  components: {
    InputField,
    Test
  },
  data() {
    return {
      name: ''
    }
  },
  // methods: {
  //   updateName(name) {
  //     this.name = name;
  //   }
  // }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>