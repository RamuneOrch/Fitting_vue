<template>
    <div class="col">
            <div class=""
                v-for="(person, index) in sample1"
                :key="index"
            >
                <div class="m-2 d-flex justify-content align-items-center border-bottom rounded shadow-sm
                    "
                    v-if="person.id === btId || btId === 999"
                    style="
                        background-color : white;
                    "
                
                >
                    <img :src="person.image" alt="" height="110px"
                        style="cursor : pointer" class=""
                        @click="pageChange(index)"
                    >
                    <div 
                        class="
                            p-2 d-flex flex-column
                            filtered_box
                        "
                        style="
                            min-width : 100px;
                            cursor : pointer;
                        "
                        @click="pageChange(index)"
                    >
                        <p style="font-size : 12px; margin : 0 0 4px; font-weight : bold;
                            
                        ">{{ person.brand }}</p>
                        <h3
                            class=" mb-0"
                            style="
                                font-size : 1.2rem;
                                color : black;
                                font-weight : 700;
                            ">
                            {{ person.sample_title }}
                        </h3>
                        <span class="card-text"
                            style="
                                font-size: 12px"
                        >
                            {{ person.information }}
                        </span>
                        <div class="align-text-bottom text-muted" style="font-size : 12px">
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
      pageChange(n){
          window.open(`./Buy?id=${n}`,"_self")
        // console.log(n);
      }
  },
  data() {
      return {
          powder,
          sample1,
      }
  },
  props: {
      powder1 : Number,
      btId : Number,
  }
}
</script>

<style lang="stylesheet">

</style>