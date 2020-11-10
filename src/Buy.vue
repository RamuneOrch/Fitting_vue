<template>
  <div class="container-fluid no-gutters p-0">
      <div class="sticky-top text-left border-bottom p-3 no-gutters "
           style="background-color : white;
           color : black;
            "
      >
          <a href="/" style=" text-decoration : none; vertical-align : -2px;">
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
          <ABody
            :step = "step"
             class="text-dark"
             style="padding : 10px;"
          />
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


      <div class="fixed-bottom no-gutters p-0"
           style="
           "
      >
          <div class="text-center p-3">
            <div class="btn-group align-self-center " 
               style="width : 400px;
                      border : 2px solid #5a3c82
               "
               role="group" aria-label="Basic example">
              <button type="button" class="btn fs btn-light"
                style=""
              >
                3000<br>
              </button>
              <button type="button" class="btn btn-light"
              >
                체험단 신청하기
              </button>
            </div>
          </div>
      </div>

  </div>
</template>

<script>
import ABody from './components/PhonBody'

export default {
  name: "Buy",
  components: {
    ABody
  },
  props:{
    num : Number
  },
  methods: {
    clickChange(n){
      this.num = n
    }
  },
  data(){
    return{
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