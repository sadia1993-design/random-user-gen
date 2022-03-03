const app = Vue.createApp({

    data() {
        return {
            title : 'Mr',
            firstName : 'John',
            lastName : 'Doe',
            email : 'John@email.com',
            gender : 'male',
            picture : 'https://randomuser.me/api/portraits/men/10.jpg',
            cell : '0984075043'
        }
    },

    methods : {
        async changeUser(){
            const res = await fetch('https://randomuser.me/api');
            const { results}  = await res.json();
            console.log(results)

            this.title = results[0].name.title,
            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.cell = results[0].cell,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
        }
    }

})


app.mount('#app');