const app = Vue.createApp({
    data(){
        return {
            className: '',
            hidden: false,
            bgColor: ''
        }
    },
    methods: {
        inputClass(event){
            this.className = event.target.value
        },
        toggleDiv(){
            console.log(!this.hidden)
            this.hidden = !this.hidden;
        },
        changeBgColor(event){
            this.bgColor = event.target.value
        }
    }
})

app.mount('#assignment')