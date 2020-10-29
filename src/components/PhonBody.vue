<template>
  <div class="container">
    <div class="">
      <div v-if="step === 1">
        <List/>
      </div>
      <div v-if="step === 2">
        <List/>
        <List/>
      </div>
      <div v-if="step === 3">
        <List/>
      </div>
      <div v-if="step === 4">
        <div>
          <VueAgile :dots="false">
            <div class="slide">
                
                <template slot="prevButton">prev</template>
                <img src="../images/2.png" alt=""
                    width="100%" height="300px"
                >
                <template slot="nextButton">next</template>
            </div>
            <div class="slide">
                <h3>slide 2</h3>
            </div>
          </VueAgile>
        </div>
        <div>
            <div class="d-flex flex-column ml-0 mt-5 ">
                <strong class="mb-4">시아코스메틱</strong>
                <a href="/">유채 바이오셀룰로오스 모이스쳐 마스크</a>
                <p>사용시밀착력이 좋은 향이 안나는 무향의 마스크팩</p>
            </div>
            <div class="text-center">
                <Btn
                    first="상세정보"
                    second="리뷰"
                    :fuuu = "fuuu"
                />
            </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import List from "./list"
import { VueAgile } from 'vue-agile'
import Btn from './Btn_page2'

export default {
  name: "ABody",
  data(){
      return{
          fuuu : 2
      }
  },
  props: {
      step : Number,
  },
  components: {
      List,
      VueAgile,
      Btn
  }
};
</script>

<style >

</style>