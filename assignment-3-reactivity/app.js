const app = Vue.createApp({
    data(){
        return {
            number: 0,
            result: ''
        }
    },
    methods: {
        add(val){
            this.number += val;
            if(this.number < 37){
                this.result = 'Not there yet!'
            }else if(this.number > 37){
                this.result = 'Too much!'
            }else{
                this.result = 37
            }
        }
    },
    watch: {
        result(){
            const that = this;
            setTimeout(()=> {
                console.log(this.number, 'hee')
                that.number = 0
            }, 5000)
        }
    }
})

app.mount('#assignment')