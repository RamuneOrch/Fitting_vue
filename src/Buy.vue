<template>
  <div class="container-fluid no-gutters p-0">
      <div class="sticky-top text-center border-bottom p-0 no-gutters text-white"
           style="background-color : #5a3c82;
                  height : 50px
            "
      >
          체험단
      </div>

      <div class="container " style="height: 100%; padding-top : 50px; padding-bottom : 60px">
          <ABody
            :step = "step"
          />
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
  data(){
    return{
      step:4,
    }
  }
}
</script>

<style>

</style>