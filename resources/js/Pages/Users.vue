<template>
  <div>
      <h1>Hello world</h1>
    <ul class="list-group mt-5">
      <li class="list-group-item list-group-item-action" v-for="user in usersList" :key="user.id">

        <div class="d-flex w-100 justify-content-between">
          <h3>{{user.name}}</h3>

          <small class="text-danger delete" @click="deleteUser(user.id)">&#10005;</small>
        </div>
        <p>{{user.email}}</p>

      </li>
    </ul>
    <h1 v-on:click="handleClick"> click here Child components 2 </h1>
    <UserChild  />
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from "vuex";

  import UserChild from "./UserChild.vue"

  export default {
    components: {UserChild},
    name: 'user-list',
    methods: {
      ...mapActions(["fetchUsers", "deleteUser"]),
      handleClick(){
        console.log("hello world");
        this.fetchUsers();
      }
    },
    computed: mapGetters(["usersList"]),
    created() {
      this.fetchUsers()
    }
  }
</script>

<style>
 .delete {
   font-size: 18px;
   cursor: pointer;
 }
</style>