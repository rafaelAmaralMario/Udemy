new Vue({
    el: '#app',
    data: {
        humanHealth : {
            width: 100 
        } ,
        monsterHealth : {
            width: 100
        },

    },
    computed: {
        humanHealthComputed() {
            return this.humanHealth + '%';
        },
        monsterHealthComputed() {
            return this.monsterHealth + '%';           
        }
    }

    
})