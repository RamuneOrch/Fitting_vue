<template>
  <div class="container-fluid no-gutters p-0">
      <div class="sticky-top text-left border-bottom p-2 bg-light">
          <a href="/buy" style=" text-decoration : none; vertical-align : -2px;">
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-left-square-fill m-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
            style=""
          >
            <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
          </svg>
          <strong style="vertical-align : -3px; color : black; 
           
          ">
            상품 구매하기
          </strong>
          </a>
      </div>



      <div class="row no-gutters justify-content-center border-bottom" style="background-color : white;">
          <div class="d-flex justify-content align-items-center p-3 pr-4 pl-4"
                
        >
            <img :src="powder[1].image" alt="" height="100px">
            <div 
                class="
                    p-3 d-flex flex-column bg-light
                    filtered_box    
                "
                style="border-radius : 10px;
                        text-overflow: ellipsis;
                    width:100%;
                "
            >
                <p style="font-size : 14px; color : purple">{{ powder[1].brand }}</p>
                <p style="
                        white-space:normal;
                        font-weight : bold;
                        color : black
                    "
                    class=""
                    >
                    {{ powder[1].sample_title }}
                </p>
                <p class="card-text mb-auto"
                    style="
                    overflow:hidden;
                    white-space:normal;
                    text-overflow: ellipsis;
                    font-size: 13px"
                >
                    사용시 밀착력이 좋은 향이 안나는 무향의 마스크 팩
                </p>
                <div class="align-text-bottom text-muted">
                    300ml / 150ml | {{ powder[1].amount }}개 | 39,000원
                </div>
                <!-- <button @click="test">테스트</button> -->
            </div>
        </div>
      </div>

        <div class="bg-white border-bottom">
            <div class="p-3">
                <strong style="font-size : 18px">배송지 정보</strong>
            </div>
            <div class="pr-3 pb-3 pl-3">
                <button id="btnGroupDrop1"
                    type="button" 
                    class="btn btn-light dropdown-toggle btn-block" 
                    style="border-color : purple; border-radius : 20px"
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false">
                    배송지를 추가해주세요
                </button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <a class="dropdown-item" href="#">서울</a>
                    <a class="dropdown-item" href="#">부산</a>
                </div>
            </div>
            <div class="pr-3 pb-3 pl-3">
                <button id="btnGroupDrop1"
                    type="button" 
                    class="btn btn-light dropdown-toggle btn-block" 
                    style="border-color : purple; border-radius : 20px"
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false">
                    배송시 요청사항을 선택해주세요
                </button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <a class="dropdown-item" href="#">부재시 경비실에 맡겨주세요</a>
                    <a class="dropdown-item" href="#">택배함에 놔주세요</a>
                    <a class="dropdown-item" href="#">집앞에 놔주세요</a>
                    <a class="dropdown-item" href="#">직접입력</a>
                </div>
            </div>
        </div>

        <div class="bg-white border-bottom">
            <div class="p-3">
                <span><strong style="font-size : 18px">총 주문금액</strong></span>
                <p class="float-right">39,000</p>
            </div>
        </div>

        <div class="bg-white border-bottom">
            <div class="p-3">
                <span><strong style="font-size : 18px">배송비</strong></span>
                <p class="float-right">0원</p>
            </div>
        </div>

        <div class="bg-white border-bottom">
            <div class="p-3">
                <span><strong style="font-size : 18px">포인트 사용</strong></span>
                <p class="float-right pb-3">전액사용</p>
                <div class="input-group">
                    <input type="text" 
                        class="form-control" 
                        placeholder="0" 
                        aria-label="Recipient's username" 
                        aria-describedby="basic-addon2">

                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">총 1010P</span>
                        </div>
                    </div>
            </div>
        </div>

        <div class="bg-white border-bottom">
            <div class="p-3">
                <span><strong style="font-size : 18px">결제수단</strong></span>
                <p class="float-right">신용카드</p>
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
              >
                <div class="d-inline p-3">
                  39,000 원
                </div>
                <div class="d-inline p-3">
                  구매하기
                </div>
              </button>
            </div>
          </div>
        </div>

        <div class="text-center pt-3">
          Copyright 2020. comjjang all rights reserved <br>
          사업자등록번호 458-34-00543 <br>
          제주특별자치도 제주시 천수로6길25, 2층 <br> 
          rheejaeseok@gmail.com
        </div>

  </div>
</template>

<script>
import powder from "./sample1.js"

export default {
    data(){
        return{
            powder
        }
    },
    methods : {
        test(){
            // console.log(powder[1].amount);
        }
    }
}
</script>

<style>

</style>