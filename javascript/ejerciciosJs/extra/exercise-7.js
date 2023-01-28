//Dado el siguiente string

const text = `gracioso-pero-no-gracioso-de-risa-gracioso-de-raro`

//transformalo en el siguiente (Mayusculas incluidas)
//`Gracioso Pero No Gracioso De Risa Gracioso De Raro`

let textNew = text.split('-')

for (let i = 0; i < textNew.length; i++) {
    textNew[i] = textNew[i].charAt(0).toUpperCase() + textNew[i].slice(1)
}

const strNew = textNew.join(" ")

console.log(strNew);