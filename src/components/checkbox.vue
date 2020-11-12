<template>
    <div>
        <button 
            class="btn btn-light btn-outline-dark rounded-pill mr-2 mb-3 btn-sm" 
            v-for="(people, index) in powder"
            :key="index"
            @click="clickChange(index)"
            :class="{active:index === activeItem}"
        >
            {{ people.name }}
        </button>
    </div>
</template>

<script>
import powder from '../powder'

export default {
    props: {

    },
    data() {
        return{
            activeItem: [],
            powder
        }
    },
    methods:{
        clickChange(index){
            if(this.activeItem === index) this.activeItem = false
            else this.activeItem = index;

            this.$emit('changeBtn',index)
        }
    },
    computed: {

    }
}
</script>

<style src="../style/main.css">
    button:active, button:focus{
        outline: none;
        box-shadow: none;
    }
</style>