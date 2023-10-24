
// Des de aqui cogemos la informacion
Vue.component ('heroe-search', {
    data: () => {
        return {
            searchInput: "",
            
        }
    },
    props:{
        heroe: Object,
    },

    template: ` <form v-on:submit.prevent="getHeroes"><input type="text" placeholder="Search your hero..." id = "search_input" v-model.string ="searchInput"> 
    <button v-on:click = "getHeroes">  Search Heroes </button></form>`, // Creamos un nuevo boton, que al darle click te entra a la funcion de arriba y te muestra todos los heroes
    methods: {
    
        getHeroes(){
            fetch(`http://localhost:3000/api/list?search=${this.searchInput}`, {  // Hacemos el fetch
                method: 'GET'
            })
            .then(response => response.json())
            .then(data => (this.$root.overwatch = data)) // $root es un component que va al Vue index
            .catch((error) => {
                console.error('Error: ', error)
            })
        },
    },
  })

  /*    props: {
      
    },*/