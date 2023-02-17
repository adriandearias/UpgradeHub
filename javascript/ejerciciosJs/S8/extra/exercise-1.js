// En base a la api de Breaking Bad (https://breakingbadapi.com/), vamos a desarrollar una página dinámicamente 
// en la que visualizar una galería con las imagenes y los nombres de los personajes de la serie. Para ellos 
// es necesario usar el endpoint 'https://breakingbadapi.com/api/characters'.
// Si te fijas en la respuesta de la api, la imagen está en la propiedad 'img' y el título en la propiedad 'name'.

// Como no funciona la api de breakingbad utilizo la de GoT: https://thronesapi.com/
//https://thronesapi.com/api/v2/Characters

let objCharacters = null;
const body$$ = document.querySelector('body')
const divContent$$ = document.createElement('div')
divContent$$.setAttribute('class', 'div__content')
body$$.appendChild(divContent$$)


async function getCharacters(){
    const arrayCharacters = []
    for (let i = 0; i <= 52; i++) {
        const result = await fetch(`https://thronesapi.com/api/v2/Characters/${i}`)
        const character = await result.json()   
        
        const divCharacter$$ = document.createElement('div')
        const imgCharacter$$ = document.createElement('img')
        const spanCharacter$$ = document.createElement('span')
        const pCharacter$$ = document.createElement('p')

        divContent$$.appendChild(divCharacter$$)

        divCharacter$$.setAttribute('class', 'div__character')
        divCharacter$$.appendChild(imgCharacter$$)
        divCharacter$$.appendChild(spanCharacter$$)
        divCharacter$$.appendChild(pCharacter$$)

        imgCharacter$$.setAttribute('src' ,character.imageUrl)
        spanCharacter$$.innerHTML = character.fullName
        pCharacter$$.innerHTML = `Family: ${character.family}`
    }
}

window.addEventListener("DOMContentLoaded", async () => {
    console.log("DOM fully loaded and parsed");
    objCharacters = await getCharacters();
});

