const routes = [
    {
      path: '',
      component: () => import('../Pages/AddUser.vue'),
      name: 'home'
    },
    {
      path: '/user-list',
      component: () => import('../Pages/Users.vue'),
      name: 'user-list'
    },
    {
      path: '/add-product',
      component: () => import('../Pages/addProduct.vue'),
      name: 'addProduct'
    },
    {
      path: '/product-list',
      component: () => import('../Pages/products.vue'),
      name: 'producs'
    },
  ]
  
  export default routes;
  