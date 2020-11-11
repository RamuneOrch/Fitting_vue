<template>
  <div id="app">
      <div class="container-fluid no-gutters p-0"
           style="
          background-color : #f2f2f2;"
      >

        <!-- header -->

        <div class="text-center sticky-top text-white border-bottom"
            style="background-color : white;
            "
        >
            <div class="text-center">
                <a href="#">
                <img src="./images/1.png" alt="1" style="width:75px; padding : 5px;
                margin-top : 5px;
                margin-bottom : 5px;
                ">
                </a>
                <CheckBox v-if="step === 1 || step === 3" 
                  @changeBtn="Cg"
                />
                <Btn v-if="step === 2" 
                    first="지난 체험단"
                    second="진행중"
                    third="오픈 예정"
                    :step= "step"
                    @updatePage="Page"
                />
            </div>
        </div>

        <!-- header -->



        <!-- center -->

        <div class="container-fluid"
             style="margin-top : 10px; margin-bottom : 60px;"
        >
          <ABody
            :step = "step"
            :page = "this.page"
            :btId = "this.btId"
          />
        </div>
        <!-- center -->



        <!-- footer -->

        <div class="fixed-bottom border-top"
            style="background-color : white
                   border-top : 1px solid gray;
              "
        >
          <div class="container"
          >
            <div class="row align-items-center">
              <div class="col mr-3 text-center footer_btn">
                <button 
                  class="btn"
                @click="changePage(1)">
                  샘플 체험
                </button>
              </div>
              <div class="col mr-3 text-center footer_btn">
                <button 
                  class="btn"
                @click="changePage(2)">
                  본품 체험
                </button>
              </div>
              <div class="col text-center footer_btn">
                <button 
                  class="btn"
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
import powder from "./powder"

export default {
  name : "Home",
  components: {
    ABody,
    CheckBox,
    Btn,
  },
  data(){
    return{
      step : 1,
      page : this.page,
      btId : 999,
      ex : true,
      powder
    }
  },
  methods:{
    changePage(n){
      if(this.step !== n){
        this.step = n
        this.page = 2
      }
    },
    Page(page){
      this.page = page;
    },
    Cg(n){
      if (this.btId === this.powder[n].id - 1) {
        this.btId = 999
      }
      else{
        this.btId = n
      }
    }
  },
}
</script>

<style src="./style/main.css">
</style>
