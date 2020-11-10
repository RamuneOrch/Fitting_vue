<template>
    <div>
        <button 
            class="btn btn-light btn-outline-dark rounded-pill mr-2 mb-3 btn-sm" 
            v-for="(people, index) in powder"
            :key="index"
            @click="clickChange(index,person)"
            :class="{active:index === activeItem}"
        >
            {{ people.name }}
        </button>
    </div>
</template>

<script>

export default {
    props: {

    },
    data() {
        return{
            activeItem: [],
            powder: [
                {name : '로션', id : 1},
                {name : '바디케어', id : 2},
                {name : '세럼', id : 3},
                {name : '세정제', id : 4},
                {name : '스킨', id : 5},
                {name : '앰플', id : 6},
                {name : '치약', id : 7},
                {name : '크림', id : 8},
                {name : '팩', id : 9},
                {name : '헤어케어', id : 10}
            ]
        }
    },
    methods:{
        clickChange(index){
            if(this.activeItem === index) this.activeItem = false
            else this.activeItem = index;
        }
    },
    computed: {

    }
}
</script>

<style>
    .btns{
        font-size : 10px;
    }
</style>