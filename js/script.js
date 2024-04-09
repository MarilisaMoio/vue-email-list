const { createApp } = Vue;

createApp({
    data() {
        return {
            mailArray: [],
        };
    },
    methods: {
        mailGenerator(){
            for (let i = 1; i <= 10; i++){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                this.mailArray.push(response.data.response)
                });
            };
        },
    },
    mounted() {
        this.mailGenerator()
    }
}).mount('#app');