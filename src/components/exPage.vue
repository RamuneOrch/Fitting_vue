<template>
  <div style="">
        <div v-if="page === 2">
          <div
            v-for="(person, index) in sample3"
            :key="index"
            class="border-bottom"
            >
                <div
                    class="d-flex justify-content align-items-center bg-light "
                >
                    <img :src="person.image" alt="" height="120px" class="ml-3">
                    <div 
                                class="
                                    p-4 d-flex flex-column bg-light
                                    filtered_box ml-2  
                                "
                                style="border-radius : 10px;
                                    text-overflow: ellipsis;
                                "
                            >
                                <strong>닥터펠로</strong>
                                <a href="./Buy">
                                    {{ person.sample_title }}
                                </a>
                                <p class="card-text mb-auto"
                                    style="
                                    overflow:hidden;
                                    white-space:normal;
                                    text-overflow: ellipsis;"
                                >
                                    사용시 밀착력이 좋은 향이 안나는 무향의 마스크 팩
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
                    class="d-flex justify-content align-items-center bg-light "
                >
                    <img :src="person.image" alt="" height="120px" class="ml-3">
                    <div 
                                class="
                                    p-4 d-flex flex-column bg-light
                                    filtered_box ml-2  
                                "
                                style="border-radius : 10px;
                                    text-overflow: ellipsis;
                                "
                            >
                                <strong>종료</strong>
                                <a href="/buy">
                                    종료~~
                                </a>
                                <p class="card-text mb-auto"
                                    style="
                                    overflow:hidden;
                                    white-space:normal;
                                    text-overflow: ellipsis;"
                                >
                                    사용시 밀착력이 좋은 향이 안나는 무향의 마스크 팩
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
                    class="d-flex justify-content align-items-center bg-light "
                >
                    <img :src="person.image" alt="" height="120px" class="ml-3">
                    <div 
                                class="
                                    p-4 d-flex flex-column bg-light
                                    filtered_box ml-2  
                                "
                                style="border-radius : 10px;
                                    text-overflow: ellipsis;
                                "
                            >
                                <strong>예정</strong>
                                <a href="/buy">
                                    예정중입니다
                                </a>
                                <p class="card-text mb-auto"
                                    style="
                                    overflow:hidden;
                                    white-space:normal;
                                    text-overflow: ellipsis;"
                                >
                                    사용시 밀착력이 좋은 향이 안나는 무향의 마스크 팩
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