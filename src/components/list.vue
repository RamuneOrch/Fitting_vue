<template>
    <div class="container">
        <div class="row">
            <div class="col-6 justify-content bg-primary no-gutters p-2 cur_sor"
                v-for="(person, index) in sample1"
                :key="index"
            >
                <div class="d-flex justify-content align-items-center
                    rounded
                ">
                    <img :src="person.image" alt="" width="100px" height="100px m-auto">
                    <div 
                        class="
                            p-2 d-flex flex-column bg-success
                            filtered_box    
                        "
                    >
                        <strong>{{ person.amount }}</strong>
                        <a href="/buy">
                            {{ person.sample_title }}
                        </a>
                        <p class="card-text mb-auto w100">
                            사용시 밀착력이 좋은 향이 안나는 무향의 마스크 팩
                        </p>
                        <div class="align-text-bottom text-muted">
                            25g | 44개| 700P
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

export default {
  components: {
  },
  methods: {

  },
  data() {
      return {
          sample1: [
              { 
                  image :'https://bangpanimage.s3.ap-northeast-2.amazonaws.com/product_image/new/nss0781.png',
                  amount : 44,
                  sample_title: "유채 바이오셀룰로오스 모이스쳐 마스크"
              },
              {
                  image :'https://bangpanimage.s3.ap-northeast-2.amazonaws.com/product_image/ss0781.png',
                  amount : 44,
                  sample_title: "시트러스 바이오셀룰로오스 마스크"
              },
              {
                  image :'https://bangpanimage.s3.ap-northeast-2.amazonaws.com/sample_image/000501.png',
                  amount : 44,
                  sample_title: "청귤 시트러스 바이오셀룰로오스 모이스쳐 마스크"
              },
              {
                  image :'https://bangpanimage.s3.ap-northeast-2.amazonaws.com/product_image/new/nss0221.png',
                  amount : 44,
                  sample_title: "닥터펠로 허니 마스크팩"
              },
              {
                  image :'https://bangpanimage.s3.ap-northeast-2.amazonaws.com/product_image/new/nss0221.png',
                  amount : 44,
                  sample_title: "펠로스켈프토닉시트"
              },
              {
                  image :'https://bangpanimage.s3.ap-northeast-2.amazonaws.com/product_image/new/nss0221.png',
                  amount : 44,
                  sample_title: "조약 페블바 화이트"
              },
          ]
      }
  }
}
</script>

<style>
.cur_sor{
    cursor: pointer;
}
.filtered_box {
    max-width: 800px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow:hidden;
}
</style>