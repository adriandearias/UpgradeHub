// Basandote en el siguiente html, elimina todos los nodos que tengan la clase 
//.fn-remove-me

const fnRemoveMe = document.querySelectorAll('.fn-remove-me')

for (const singleP of fnRemoveMe) {
    singleP.remove()
}

