const app = Vue.createApp({
    data(){
        return {
            tasks: [],
            taskText: '',
            show: true
        }
    },
    computed: {
        btnText(){
            return this.show ? 'Hide List' : 'Show List'
        }
    },
    methods: {
        onInputHandler(event){
            this.taskText = event.target.value
        },
        add(){
            this.tasks.push(this.taskText)
        },
        toggleHidden(){

            this.show = !this.show
        }
    }
});

app.mount('#assignment')