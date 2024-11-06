<script>

  export default {
    data(){
      return {

        users: [
          {
            id: 1,
            name: 'Max',
            age: 20
          },
          {
            id: 2,
            name: "Wai",
            age: 20
          }
        ]
      }
    },
    methods: {
      addUserHandler(userData){
        this.users.push(userData)
      }
    }
  }
</script>

<template>
  <h1 id="title">Users</h1>
  <div id="content">
    <div id="active-users">
      <active-user v-for="user in users" :user="user" :key="user.id"></active-user>
    </div>
    <user-data @add-user-handler="addUserHandler"></user-data>
  </div>
</template>

<style>

  body{
    box-sizing: border-box;
  }

  #title{
    text-align: center;
    border: 1px solid grey;
  }
  #content{
    display: flex;
    justify-content: space-around;
  }
  #active-users{
    display: flex;
    flex-direction: column;
  }
</style>