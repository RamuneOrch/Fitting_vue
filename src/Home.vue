<template>
  <div id="app">
      <div class="container-fluid no-gutters p-0">

        <!-- header -->

        <div class="text-center sticky-top text-white"
            style="background-color : #5a3c82;
            "
        >
            <div class="text-center">
                <a href="#">
                <img src="./images/logo2.png" alt="1" style="width:75px">
                </a>
                <CheckBox v-if="step === 1 || step === 3" />
                <Btn v-if="step === 2" 
                    first="지난 체험단"
                    second="진행중"
                    third="오픈 예정"
                />
            </div>
          <div >
              <!-- {{ Comjjang.all_sample_product.image }} -->
              <!-- <h1>Hello</h1> -->
          </div>
        </div>

        <!-- header -->



        <!-- center -->

        <div class="container " style=" ;height: 100%; padding-top : 50px; padding-bottom : 60px">
          <ABody
            :step = "step"
          />
        </div>

        <!-- center -->



        <!-- footer -->

        <div class="fixed-bottom"
            style="background-color : #5a3c82"
        >
          <div class="container"
              style="height : 50px"
          >
            <div class="row align-items-center">
              <div class="col bg-success mr-3 text-center footer_btn">
                <button 
                  class="btn btn-primary"
                @click="changePage(1)">
                  샘플 체험
                </button>
              </div>
              <div class="col bg-success mr-3 text-center footer_btn">
                <button 
                  class="btn btn-primary"
                @click="changePage(2)">
                  본품 체험
                </button>
              </div>
              <div class="col bg-success text-center footer_btn">
                <button 
                  class="btn btn-primary"
                @click="changePage(3)">
                  구매
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- footer -->

      </div>
  </div>
</template>

<script>
import ABody from "./components/PhonBody"
import CheckBox from "./components/checkbox"
import Btn from "./components/Btn_page2"
import gql from "graphql-tag"

export default {
  name : "Home",
  components: {
    ABody,
    CheckBox,
    Btn
  },
  data(){
    return{
      step : 1,
    }
  },
  methods:{
    changePage(n){
      if(this.step !== n){
        this.step = n
      }
    }
  },
  apollo: {
      all_sample_product: gql`{
          query{
              image
              amount
          }
      }`
  }
}
</script>

<style>
 .footer_btn{
   height: 50px;
 }
</style>
