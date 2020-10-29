<template>
  <div class="pb-2">
        <div v-if="fuuu === 1">
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-secondary">
                    <input type="radio" name="options" id="option1" autocomplete="off"> {{ first }}
                </label>
                <label class="btn btn-secondary active">
                    <input type="radio" name="options" id="option2" autocomplete="off"> {{ second }}
                </label>
                <label class="btn btn-secondary">
                    <input type="radio" name="options" id="option3" autocomplete="off"> {{ third }}
                </label>
            </div>
        </div>
        <div v-if="fuuu === 2">
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-secondary">
                    <input type="radio" name="options" id="option1" autocomplete="off"> {{ first }}
                </label>
                <label class="btn btn-secondary active">
                    <input type="radio" name="options" id="option2" autocomplete="off"> {{ second }}
                </label>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        first: String,
        second: String,
        third: String,
        fuuu : Number
    }

}
</script>

<style>

</style>