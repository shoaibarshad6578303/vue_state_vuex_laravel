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
    {
      path: '/component1',
      component: () => import('../Pages/component1.vue'),
      name: 'component1'
    },
    {
      path: '/component2',
      component: () => import('../Pages/component2.vue'),
      name: 'component2'
    },
    {
      path: '/component3',
      component: () => import('../Pages/component3.vue'),
      name: 'component3'
    },
  ]
  
  export default routes;
  