import {} from "./heroeinfo.js"
import {} from "./heroesearcher.js"

// Componente que guarda la información de los otros componentes
var app = new Vue ({
    el: '#app',
    data: {
        overwatch: [], 
        searcher:  "",
        show: "",
    },
});
