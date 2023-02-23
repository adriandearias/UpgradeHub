fetch('http://localhost:3000/diary')
    .then(response => response.json())
    .then(json => {
        const body = document.querySelector('body');
        const container = document.createElement('div');;
        let dates = []
        body.appendChild(container).setAttribute('class', 'container')

        json.sort((a,b) => {
            var dateA = new Date(a.date);
            var dateB = new Date(b.date);
            return dateA - dateB
        })

        const drawItems = ((json) => {
            for (const movie of json) {
                const divNote = document.createElement('div')
                const headerThree = document.createElement('h3')
                const headerFive = document.createElement('h5')
                const p = document.createElement('p');
                const button = document.createElement('button')
    
                container.appendChild(divNote).setAttribute('class', 'note')
                divNote.appendChild(headerThree)
                divNote.appendChild(headerFive)
                divNote.appendChild(p)
                divNote.appendChild(button).setAttribute('data-key', movie.id)
                button.innerHTML = 'Borrar'
    
                headerThree.innerHTML = movie.title
                headerFive.innerHTML = movie.date
                p.innerHTML = movie.description
            }
        })

        drawItems(json);
        const allBtns = document.querySelectorAll('[data-key]');
        console.log(allBtns);

        for (const btn of allBtns) {
            btn.addEventListener('click', () =>{
                btn.parentElement.remove();
        })
        }
    })
