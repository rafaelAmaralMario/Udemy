new Vue({
    el: '#app',
    data: {
        name : 'Rafael',
        age: '27',
        image: 'https://chicorei.imgix.net/capinhas-para-celular/5201/capa-starman-5201-33495.jpg?auto=format&lossless=1&w=237&h=356&fit=crop'
    },
    methods : {
        randomFloat: function() {
            return Math.random();
        }
    }

})