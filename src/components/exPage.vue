<template>
  <div style="">
        <div v-if="page === 2">
          <div
            v-for="(person, index) in sample2"
            :key="index"
            class="border-bottom"
            >
                <div
                    class="d-flex justify-content align-items-center bg-white pr-2 pl-2"
                >
                    <div class="position-relative bg-black"
                    >
                        <img :src="person.image" alt="" height="120px" class="">
                    </div>
                    <div 
                                class="
                                    p-2 d-flex flex-column
                                    filtered_box ml-2  
                                "
                                style="border-radius : 10px;
                                        font-size : 12px;
                                "
                            >
                                <p style="font-size : 10px;">진행중</p>
                                <p style="font-size : 15px; margin : 0 0 4px; font-weight : bold;
                            
                        ">
                                    {{ person.brand }}
                                </p>
                                <p>체험 용량 : </p>
                                <p>모집 체험단 : </p>
                                <p>모집 기간 : </p>
                                <p>체험 미션 : </p>
                                <p>필요 포인트 : </p>
                            </div>
                </div>
            </div>
      </div>
      <div v-if="page === 1">
          <div
            v-for="(person, index) in sample3"
            :key="index"
            class="border-bottom"
            >
                <div
                    class="d-flex justify-content align-items-center bg-white pr-2 pl-2 "
                >
                    <div class="position-relative bg-black"
                    >
                        <img :src="person.image" alt="" height="120px" class="">
                        <div style="
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            background-color : rgba(0, 0, 0, 0.7);
                            width : 120px;
                            height : 120px;
                            border-radius : 10px;
                        "
                            class=""
                        >
                            <div style="
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                color : white;
                            ">
                                종료된 <br>
                                체험단  
                            </div>
                        </div>
                    </div>
                    <div 
                                class="
                                    p-2 d-flex flex-column
                                    filtered_box ml-2  
                                "
                                style="border-radius : 10px;
                                        font-size : 12px;
                                "
                            >
                                <p style="font-size : 10px;">종료</p>
                                <p style="font-size : 15px; margin : 0 0 4px; font-weight : bold;
                            
                        ">
                                    브랜드 명
                                </p>
                                <p>체험 용량 : </p>
                                <p>모집 체험단 : </p>
                                <p>모집 기간 : </p>
                                <p>체험 미션 : </p>
                                <p>필요 포인트 : </p>
                            </div>
                </div>
            </div>
      </div>
      <div v-if="page === 3">
            <div
            v-for="(person, index) in sample2"
            :key="index"
            class="border-bottom"
            >
                <div
                    class="d-flex justify-content align-items-center bg-white  pr-2 pl-2"
                >
                    <img :src="person.image" alt="" height="120px" class="">
                    <div 
                                class="
                                    p-2 d-flex flex-column
                                    filtered_box ml-2  
                                "
                                style="border-radius : 10px;
                                        font-size : 12px;
                                "
                            >
                                <p style="font-size : 10px;">예정</p>
                                <p style="font-size : 15px; margin : 0 0 4px; font-weight : bold;
                            
                        ">
                                    체험예정
                                </p>
                                <p>체험 용량 : </p>
                                <p>모집 체험단 : </p>
                                <p>모집 기간 : </p>
                                <p>체험 미션 : </p>
                                <p>필요 포인트 : </p>
                            </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    props: {
        page:Number
    },
    data(){
        return{
            sample2: [
                {
                    image: "https://bangpanimage.s3.ap-northeast-2.amazonaws.com/sample_image/000391.png",
                    sample_title: "제주도 화장품 만들기 체험",
                    brand: "고사리손"
                },
                {
                    image: "https://bangpanimage.s3.ap-northeast-2.amazonaws.com/sample_image/000381.png",
                    sample_title: "펠로탈모샴푸",
                    brand: "닥터펠로"
                },
                {
                    image : "https://bangpanimage.s3.ap-northeast-2.amazonaws.com/sample_image/000201.png",
                    sample_title: "닥터펠로 미라클 리페어 트리트먼트",
                    brand: "닥터펠로"
                },
                {
                    image : "https://bangpanimage.s3.ap-northeast-2.amazonaws.com/sample_image/000201.png",
                    sample_title: "펠로탈모토닉",
                    brand: "닥터펠로"
                },
            ],
            sample3: [
                {
                    "image": "https://bangpanimage.s3.ap-northeast-2.amazonaws.com/sales_image/100231.png"
                },
                {
                    "image": "https://bangpanimage.s3.ap-northeast-2.amazonaws.com/sales_image/100231.png"
                },
                {
                    "image": "https://bangpanimage.s3.ap-northeast-2.amazonaws.com/sales_image/100482.png"
                },
                {
                    "image": "https://bangpanimage.s3.ap-northeast-2.amazonaws.com/sales_image/100482.png"
                },
            ]
        }
    }
}
</script>

<style>
    p{
        margin : 0;
    }
</style>