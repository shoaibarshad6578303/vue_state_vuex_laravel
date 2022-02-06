import axios from 'axios'

const state= {
   products:[]   
};

const getters={
  productsList: state => state.products
}

const actions={
    async fetchProducts({commit}){
        const response = await axios.get("http://127.0.0.1:8000/api/products");
        console.log(response);
        commit('setProduct', response.data.data);
    },
    async addProducts({commit}, product){
        // alert("yes");
        const response= await axios.post("http://127.0.0.1:8000/api/products", product);
        commit('addNewProduct', response.data);
    },
    async deleteProduct({commit}, id){
        console.log()
        const response= await axios.delete(`http://127.0.0.1:8000/api/products/${id}`);
        commit('removeProduct', response.data);
    }

}

const mutations={
    setProduct: (state, products) => (
        state.products= products
    ),
    addNewProduct: (state, product) => (
        state.products.unshift(product)
    ),
    removeProduct:(state, id) => (
      state.products.filter(product=> product.id !==id),
      state.products.splice(product=> product.id, 1)
    ),
}

export default {
    state,
    getters,
    actions,
    mutations
}