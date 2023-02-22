fetch('http://localhost:3000/diary')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        const body = document.querySelector('body');
        const container = document.createElement('div');;
        let dates = []
        body.appendChild(container).setAttribute('class', 'container')
        
        for (const movie of json) {
            console.log(movie);
            dates.push(movie.date.sort((a, b) => a.date - b.date));
        }

        console.log(dates);
    })