import { defineStore } from 'pinia'
export const utilsStore = defineStore('utilsStore',{

    state:()=>({
            data:['mlem']
    }),
    getters:{
get_data:(state)=>state.data,
    }


})