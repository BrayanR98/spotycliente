//PASOS PARA CONSUMIR UN API 

//1.pa onde voy?(conocer tecnicamente la uri del servicio o api a consumir)
const URI ='https://api.spotify.com/v1/artists/65HuWBUC1d8ty1q6J42Nfi/top-tracks?market=US'
const TOKEN = 'Bearer BQABQBh7_XDYI1Joiw8Fqvu2jW-SwesYHB2ZOyqsZjsIUeS57uYE8Kd7qhkNiK9y6A0PnQd_yDL0ZLjQsmOmQoe2Im5741gN6kQM1nKWDW2_nSNWovhdwOrdChtqWLSwWjXdV8dqXKsIu1AHEo-q4Mu963p3ou5NQOo'
//ARMO LA PETICION ( QUE VAS A HACER OME)
const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}
//3.CONUSMIR EL API (el que va al servidor)
fetch(URI,PETICION)
.then(function(respuesta){ return respuesta.json()})// garantizar el formato de respuesta sea json
.then(function(respuesta){pintacanciones(respuesta)}) //hago lo que quiera con la respuesta
.catch(function(respuesta){console.log(respuesta)}) // muestro el error
//FUNCION PARA PINTAR LA INFO QUE LLEGA DEL API
function pintacanciones(canciones) {
    
    const fila = document.getElementById('fila')

    //recorro el arreglo de canciones 
    canciones.tracks.forEach( function(cancion) {
        
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)
        //crear una columna para cada cancion
        let columna = document.createElement('div')
        columna.classList.add('col')
        // creo la tarjeta 
        let tarjeta=document.createElement('div')
        tarjeta.classList.add('card','h-100')
        let foto = document.createElement('img')
        foto.classList.add('card-img-top')
        foto.src=cancion.album.images[0].url
        // creo el audio
        let audio = document.createElement('audio')
        audio.classList.add('w-100')
        audio.src=cancion.preview_url
        audio.setAttribute('controls','controls')
        //padres e hijos
        let titulo= document.createElement('h2')
        titulo.classList.add('card-title')
        titulo.textContent=cancion.name
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(foto)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        
    });
}
