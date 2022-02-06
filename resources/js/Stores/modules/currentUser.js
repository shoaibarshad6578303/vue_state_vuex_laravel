const state={
    //  user:{
    //      email : "test@gmail.com",
    //  },
     a:'',
}
const getters={};

const mutations={
    updateA: (state, value) => state.a = value
 }

 const actions= {
   updateA(context, value) { 
       context.commit('updateA', value);
    }
 }

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}