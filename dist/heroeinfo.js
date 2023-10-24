
// Crea la lista de todos los heroes
Vue.component('heroe-info', { // heroes-info es el nombre del tag html que queremos crear.
  data: () => {
    return {
        show:{
          default: true,
          type: Boolean
        } ,
        
    }
  },
  props:{
  heroe: Object,
  /*show: {
    default: true,
    type: Boolean
  }*/
  },

  template: `
  <div v-if = "show"> 
    <img :src=heroe.portrait /> 
    <p class = "name">Name: {{ heroe.name }}</p> 
    <p class = "role">Role: {{ heroe.role }}</p> 
    <button v-on:click = "mas"> mas </button>
  </div>  


  <div v-else>
    <img :src=heroe.portrait /> 
    <p class = "name">Name: {{ heroe.name }}</p> 
    <p class = "role">Role: {{ heroe.role }}</p>
    <p class = "description">Description: {{ heroe.message }}</p>
    <button v-on:click = "mas"> menos </button> 
  </div>`  //Estructura del template (InnerHTML)
  ,
  methods:{
    
    /*mas(){
        fetch(`http://localhost:3000/api/detail`, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(heroe), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
      
      show = !show;
    }*/
    mas(){

      this.show = !this.show;
    }
    /*mas(){
      show = !show;
      alert("hola k tal2");
    }*/



  },

}
)

/*props: {
  , // Tiene un hero de tipo objeto. Esto lo pasamos desde overwatch en el index
  //show = Boolean,
},*/

//<p class = "message">message: {{ heroe.message }}</p>