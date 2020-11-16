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
             style="margin-bottom : 90px;"
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
            <div class="row align-items-center pr-3 pl-3">
              <div class="col text-center footer_btn">
                <button 
                  class="btn"
                @click="changePage(1)">


                  <svg v-if="this.step === 2 || this.step === 3" width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-gift" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
                  </svg>


                  <svg v-if="this.step === 1" width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-gift-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3z"/>
                    <path d="M15 7v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z"/>
                  </svg>
                  <p class="pt-1"></p>
                </button>
              </div>
              <div class="col text-center footer_btn">
                <button 
                  class="btn"
                @click="changePage(2)">


                  <svg v-if="this.step === 1 || this.step === 3" width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-archive" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                  </svg>


                  <svg v-if="this.step === 2" width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-archive-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
                  </svg>
                  <p class="pt-1"></p>
                </button>
              </div>
              <div class="col text-center footer_btn">
                <button 
                  class="btn"
                @click="changePage(3)">


                  <svg v-if="this.step === 1 || this.step === 2" width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-cart-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    <path fill-rule="evenodd" d="M11.354 5.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                  </svg>

                  <svg v-if="this.step === 3" width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-cart-check-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM4 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm7 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm.354-7.646a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                  </svg>

                  <p class="pt-1"></p>
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
import gql from "graphql-tag"

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
      powder,
      sample : ''
    }
  },
  methods:{
    changePage(n){
      if(this.step !== n){
        this.step = n
        this.page = 2
        this.btId = 999
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
  apollo: {
    sample: gql`{
      all_sample_product
    }`
  }
}
</script>

<style src="./style/main.css">
  
</style>
