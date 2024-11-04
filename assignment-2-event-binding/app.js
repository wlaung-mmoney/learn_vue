const app = Vue.createApp({
    data(){
        return {
            text_one: '',
            text_two: ''
        }
    },
    methods: {
        alert(){
            alert("Hello There!")
        },
        keydownFun(event){
            this.text_one = event.target.value;
        },
        enterFun(event){
            this.text_two = event.target.value;
        }
    }
});

app.mount('#assignment')