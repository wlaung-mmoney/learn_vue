const app = Vue.createApp({
    data(){
        return {
            name: 'Wai Lwin Aung',
            age: 29,
            imgLink: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Kaw_Gon_towards_Shwe_Kyar_Pwint.jpg'
        }
    },
    methods: {
        myAgeIn5Years(){
            return this.age + 5;
        },
        randomNumber(){
            return Math.random()
        }
    }
})

app.mount('#assignment')