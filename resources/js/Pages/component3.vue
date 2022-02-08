<template>
  <div>
  <div class="">
   <Component1/>
   </div>
    <div>
   <Component2/>
  </div>
  </div>
</template>

<script>
  import Component1 from './component1.vue';
  import Component2 from './component2.vue';


  export default {
    name: "component3",
    components: {
      Component1,Component2
    },
    data() {
      return {
       
      };
    },
    methods: {

    },
    
  };
</script>