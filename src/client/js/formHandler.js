function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const sentences = 1
    Client.checkForName(formText)
    // fetch("https://covid-19-data.p.rapidapi.com/country?name=egypt", {
    //     "method": "GET",
    //     "headers": {
    //         'x-rapidapi-key': '70ef4dc995mshcbb669326dbbda1p1bd7f1jsn6b7f8ca24fac',
    //         "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
    //     }
    // }).catch(err => {
    //     console.error(err);
    // });

    console.log("::: Form Submitted :::")

    const result = fetch('http://localhost:8081/nlp')
        .then(response => response.json())
        .then(res => {
            console.log(res);
            return fetch(`https://api.meaningcloud.com/summarization-1.0?key=${res}&txt=${formText}&sentences=${sentences}`, {
                'method': 'POST'
            })
        })
        .then(response => response.json())
        .then(function (data) {
            console.log(data)
            document.getElementById('results').innerHTML = data.summary
        })
        .catch(err => {
            console.error('Request failed', err)
            document.getElementById('results').innerHTML = "failed to summa rize text"
        })

}

export { handleSubmit }
