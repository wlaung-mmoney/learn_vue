<script>
    export default {
        props: ['user']
    }
</script>

<template>
    <div class="box">
        <h3>Username: {{ user.name }}</h3> 
        <h3>Age: {{ user.age }}</h3>     
    </div>
</template>

<style>
    .box{
        border: 1px solid grey;
        width: 400px;
        border-radius: 5px;
        text-align: center;
        margin-bottom: 5px;
    }
</style>