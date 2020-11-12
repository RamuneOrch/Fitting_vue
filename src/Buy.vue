<template>
  <div class="container-fluid no-gutters p-0">
      <div class="sticky-top text-left border-bottom p-2 no-gutters "
           style="background-color : white;
           color : black;
            "
      >
          <a href="./" style=" text-decoration : none; vertical-align : -2px;">
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-left-square-fill m-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
            style=""
          >
            <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
          </svg>
          <strong style="vertical-align : -3px; color : black; 
           
          ">
            체험단
          </strong>
          </a>
          
      </div>
        <div>
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
        </div>
        
          <div class="p-3" style="">
              <div class="d-flex flex-column ml-0 mt-1">
                  <strong class="mb-2">시아코스메틱</strong>
                  <p>유채 바이오셀룰로오스 모이스쳐 마스크</p>
                  <p style="font-size : 18px; font-weight : bold">사용시밀착력이 좋은 향이 안나는 무향의 마스크팩</p>
                  <p style="font-size : 14px;">g | 남은수량 개 | P</p>
              </div>
          </div>


          <div class="pl-2 pr-2 pb-2" style="background-color : #f2f2f2">
              <div class="btn-group btn-group-toggle w-100" data-toggle="buttons">
                  <label class="btn btn-light border"
                    @click="clickChange(1)"
                  >
                      <input type="radio" name="options" id="option1" autocomplete="off"> 상세정보
                  </label>
                  <label class="btn btn-light border active"
                    @click="clickChange(2)"
                  >
                      <input type="radio" name="options" id="option2" autocomplete="off"> 리뷰
                  </label>
              </div>
          </div>

      <div class="p-3" style="" v-if="num === 1">
        <div v-for="(people, index) in sample" :key="index">
          <img :src="people.image" alt="1" 
          style="
            width:100%;
            object-fit : cover;
          ">
        </div>
      </div>

      <div v-if="num === 2">
        <div class="text-center mt-3">
          Copyright 2020. comjjang all rights reserved <br>
          사업자등록번호 458-34-00543 <br>
          제주특별자치도 제주시 천수로6길25, 2층 <br> 
          rheejaeseok@gmail.com
        </div>
      </div>


      <div class="col fixed-bottom no-gutters p-0"
           style="
           "
      >
          <div class="text-center p-3">
            <div class="btn-group align-self-center " 
               style=";
                      border : 2px solid #5a3c82
               "
               role="group" aria-label="Basic example">
              <button type="button" class="btn btn-light"
                @click="InputPage()"
              >
                <div class="d-inline p-3">
                  3000
                </div>
                <div class="d-inline p-3">
                  체험단 신청하기
                </div>
              </button>
            </div>
          </div>
      </div>

  </div>
</template>

<script>
// import ABody from './components/PhonBody'
import { Hooper, Slide,Navigation as HooperNavigation } from 'hooper'

export default {
  name: "Buy",
  components: {
      // ABody,
      Hooper,
      Slide,
      HooperNavigation
  },
  methods: {
    clickChange(n){
      this.num = n
    },
    InputPage(){
      window.open("./input", "_self")
    }
  },
  data(){
    return{
      num : 1,
      step:4,
      sample:[
        {
          image : 'https://bangpanimage.s3.ap-northeast-2.amazonaws.com/experience/ede.png'
        },
        {
          image : 'https://bangpanimage.s3.ap-northeast-2.amazonaws.com/experience/e023.png'
        },
        {
          image : 'https://bangpanimage.s3.ap-northeast-2.amazonaws.com/sales_info_image/110231.png'
        },
        {
          image : 'https://bangpanimage.s3.ap-northeast-2.amazonaws.com/sales_info_image/110232.png'
        },
        {
          image : 'https://bangpanimage.s3.ap-northeast-2.amazonaws.com/sales_info_image/110233.png'
        },
        {
          image : 'https://bangpanimage.s3.ap-northeast-2.amazonaws.com/sales_info_image/110234.png'
        },
        {
          image : 'https://bangpanimage.s3.ap-northeast-2.amazonaws.com/sales_info_image/110235.png'
        },
        {
          image : 'https://bangpanimage.s3.ap-northeast-2.amazonaws.com/experience/einfo.png'
        },
      ]
    }
  },
}
</script>

<style>
.fs:hover{
  cursor : default;

}
/* .fs:active{
  border: none;
} */
</style>