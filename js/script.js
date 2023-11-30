const {createApp} = Vue

createApp({
    data() {
        return{
            titolo: 'boh',
            testo: 'prova',
            counter: 0 ,
            numeroPreferito: 3, 
            età: '',
            name: ''
        }
    }
}).mount ('#app')