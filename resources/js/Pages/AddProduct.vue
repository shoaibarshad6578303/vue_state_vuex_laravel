<template>
<div class="container">
    
    <form @submit.prevent="onProductSubmit">
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Enter name" v-model="name">
  </div>
  <div class="form-group">
    <input type="number" class="form-control" placeholder="Enter price" v-model="price">
  </div>
  <button type="submit" class="btn btn-block btn-primary">Add</button>
</form>
</div>
</template>

<script>
import {mapActions} from 'vuex'

export default ({
    name: 'addProduct',
   data(){
       return {
           name: '',
           price:''
       }
   },
   methods:{
    ...mapActions(['addProducts']),
    onProductSubmit(){
        this.addProducts({
            name: this.name,
            price:this.price
        })
    },
   }
})
</script>
