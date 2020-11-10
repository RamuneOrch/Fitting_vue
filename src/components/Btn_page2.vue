<template>
  <div class="pb-2">
        <div v-if="step === 2">
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-light border"
                    @click="listChange(1)"
                >
                    <input type="radio" name="options" id="option1" autocomplete="off"> {{ first }}
                </label>
                <label class="btn btn-light active border"
                    @click="listChange(2)"
                >
                    <input type="radio" name="options" id="option2" autocomplete="off"> {{ second }}
                </label>
                <label class="btn btn-light border"
                    @click="listChange(3)"
                >
                    <input type="radio" name="options" id="option3" autocomplete="off"> {{ third }}
                </label>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name : "Btn",
    data(){
        return{
            
        }
    },
    props:{
        first: String,
        second: String,
        third: String,
        fuuu : Number,
        step : Number
    },
    methods: {
        listChange(n){
            if(this.page !== n){
                this.page = n
                this.$emit('updatePage',this.page)
            }
        }
    }

}
</script>

<style>

</style>