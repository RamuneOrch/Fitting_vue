<template>
    <div class="col">
            <div class=""
                v-for="(person, index) in sample1"
                :key="index"
            >
                <div class="d-flex justify-content align-items-center p-3 pr-4 pl-4 border-bottom
                    "
                    v-if="person.id === btId || btId === 999"
                    style="
                        background-color : white;
                    "
                
                >
                    <img :src="person.image" alt="" height="100px"
                        style="cursor : pointer" class="mr-3"
                        @click="pageChange"
                    >
                    <div 
                        class="
                            p-3 d-flex flex-column bg-light
                            filtered_box    
                        "
                        style="border-radius : 10px;
                               text-overflow: ellipsis;
                                width:100%;
                                cursor : pointer;
                        "
                        @click="pageChange"
                    >
                        <strong>{{ person.brand }}</strong>
                        <a href="/buy" style="
                            white-space:normal;">
                            {{ person.sample_title }}
                        </a>
                        <p class="card-text mb-auto"
                            style="
                            overflow:hidden;
                            white-space:normal;
                            text-overflow: ellipsis;
                            font-size: 14px"
                        >
                            사용시 밀착력이 좋은 향이 안나는 무향의 마스크 팩
                        </p>
                        <div class="align-text-bottom text-muted">
                            g | {{ person.amount }}개| P
                        </div>
                        <!-- <button @click="test">테스트</button> -->
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import powder from '../powder'
import sample1 from '../sample1'

export default {
  components: {
  },
  methods: {
      test(){
        //   console.log(this.btId);
      },
      pageChange(){
          window.open("./Buy","_self")
      }
  },
  data() {
      return {
          powder,
          sample1
      }
  },
  props: {
      powder1 : Number,
      btId : Number
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