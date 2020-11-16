<template>
    <div class="pt-3">
            <div class="container-fulid"
                 style="max-width : 800px;
                        margin:auto;"
                v-for="(person, index) in sample1"
                :key="index"
            >
                <div class="no-gutters mb-2 rounded-lg shadow-sm d-flex justify-content align-items-center
                    "
                    v-if="person.id === btId || btId === 999"
                    style="
                        background-color : white;
                    "
                
                >
                    <img :src="person.image" alt="" width="110px;" height="110px"
                        style="cursor : pointer" class="ml-2 lazyload"
                        @click="pageChange(index)"
                    >
                    <div class="col p-2 d-flex flex-column overflow-hidden"
                        style="
                            cursor : pointer;
                        "
                        @click="pageChange(index)"
                    >
                        <p style="font-size : 12px; margin : 0 0 4px; font-weight : bold;"
                        >{{ person.brand }}</p>
                        <h3
                            class="mb-0"
                            style="
                                white-space : nowrap;
                                text-overflow : ellipsis;
                                overflow : hidden;
                                font-size : 1.2rem;
                                color : black;
                                font-weight : 700;
                            ">
                            {{ person.sample_title }}
                        </h3>
                        <p class=""
                            style="
                                font-size: 12px"
                        >
                            {{ person.information }}
                        </p>
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