<template>
<div>
    <table>
        <thead>
            <tr>
            <th> Name</th>
            <th> Price</th>
            <th> Action</th>
            </tr>
        </thead>
        <tbody v-for="product in productsList" :key="product.id">
            <tr>
            <td>{{product.name}}</td>
            <td>{{product.price}}  {{product.id}}</td>
            <td><button @click="deleteProduct(product.id)">Delete</button></td>
            </tr>

        </tbody>
    </table>
</div>
    
</template>
<script>

import { mapActions, mapGetters } from "vuex";

export default({
    name: 'products',
    computed:mapGetters(['productsList']),
    methods:{
        ...mapActions(["fetchProducts", "deleteProduct"]),
       
    },
    created(){
        this.fetchProducts();
    }
})
</script>
