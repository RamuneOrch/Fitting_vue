<template>
  <div class="row justify-content-center"
       style="background-color : #f2f2f2"
  >
    <div class="">
      <div v-if="step === 1"
      >
        <List
          :btId = "this.btId"
        />
      </div>
      <div v-if="step === 2">
        <exPage
          :page="page"
        />
      </div>
      <div v-if="step === 3">
        <List
          :btId = "this.btId"
        />
      </div>
      <div>
        <div class="text-center pt-3">
          Copyright 2020. comjjang all rights reserved <br>
          사업자등록번호 458-34-00543 <br>
          제주특별자치도 제주시 천수로6길25, 2층 <br> 
          rheejaeseok@gmail.com
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./list"
// import Btn from './Btn_page2'
import exPage from './exPage'
import 'hooper/dist/hooper.css'

export default {
  name: "ABody",
  data(){
      return{
      }
  },
  props: {
      step : Number,
      page : Number,
      btId : Number
  },
  components: {
      List,
      // Btn,
      exPage,
  },
  methods: {
  }
};
</script>

<style >

</style>