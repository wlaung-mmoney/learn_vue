<script>
    export default {
        data(){
            return {
                name: '',
                age: ''
            }
        },
        methods: {
            addUser(){
                this.$emit('add-user-handler', {name: this.name, age: this.age})
            }
        }
    }
</script>

<template>
    <div id="userForm">
        <form @submit.prevent="addUser">
            <input type="text" placeholder="enter name" v-model="name">
            <input type="number" placeholder="enter age" v-model="age">
            <button>Add User</button>
        </form>
    </div>
</template>

<style>
    #userForm{
        border: 1px solid gray;
        border-radius: 5px;
        padding: 15px;
        width: 400px;
    }

    #userForm form{ 
        padding: 5px
    }

    #userForm input{
        padding: 5px;
        display: block;
        margin-bottom: 5px;
        width: 98%;
    }
</style>