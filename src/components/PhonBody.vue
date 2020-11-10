<template>
  <div class="row justify-content-center"
       style="background-color : #f2f2f2"
  >
    <div class="">
      <div v-if="step === 1"
      >
        <List/>
      </div>
      <div v-if="step === 2">
        <exPage
          :page="page"
        />
      </div>
      <div v-if="step === 3">
        <List/>
      </div>
      <div v-if="step === 4">
        <Hooper class="bg-light">
          <Slide>
            <div class="text-center">
              <img src="https://bangpanimage.s3.ap-northeast-2.amazonaws.com/sales_image/100601.png" alt="1" height="200px">
            </div>
          </Slide>
          <Slide>
            <div class="text-center">
              <img src="https://bangpanimage.s3.ap-northeast-2.amazonaws.com/sales_image/100611.png" alt="2" height="200px">
            </div>
          </Slide>
          
          <hooper-navigation slot="hooper-addons"></hooper-navigation>

        </Hooper>
        <div style="height : 110px;">
            <div class="d-flex flex-column ml-0 mt-1">
                <strong class="mb-2">시아코스메틱</strong>
                <a href="/">유채 바이오셀룰로오스 모이스쳐 마스크</a>
                <p style="font-size : 18px; font-weight : bold">사용시밀착력이 좋은 향이 안나는 무향의 마스크팩</p>
                <p style="font-size : 14px;">g | 남은수량 개 | P</p>
            </div>
            <div class="text-center mt-4">
                <Btn
                    first="상세정보"
                    second="리뷰"
                />
            </div>
        </div>


      </div>
      
    </div>
  </div>
</template>

<script>
import List from "./list"
// import { VueAgile } from 'vue-agile'
import Btn from './Btn_page2'
import exPage from './exPage'
import { Hooper, Slide,Navigation as HooperNavigation } from 'hooper'
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
  },
  components: {
      List,
      // VueAgile,
      Btn,
      exPage,
      Hooper,
      Slide,
      HooperNavigation
  },
  methods: {
  }
};
</script>

<style >

</style>