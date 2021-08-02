const LANGUAGE = "en"

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (!Client.checkForText(formText)) {
        document.getElementById('results').innerHTML = "failed to evaluate wrong text"

    }
    else {
        console.log("::: Form Submitted :::")

        const result = fetch('http://localhost:8081/nlp')
            .then(response => response.json())
            .then(res => {
                const formdata = new FormData();
                formdata.append("key", res);
                formdata.append("txt", formText);
                formdata.append("lang", LANGUAGE);

                const requestOptions = {
                    method: 'POST',
                    body: formdata,
                    redirect: 'follow'
                };
                return fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)

            })
            .then(response => response.json())
            .then(function (data) {
                console.log(data)
                document.getElementById('confidence').innerHTML = `Confidence : ${data.confidence}`
                document.getElementById('irony').innerHTML = `Irony : ${data.irony}`
                document.getElementById('subjectivity').innerHTML = `Subjectivity : ${data.subjectivity}`
                document.getElementById('score_tag').innerHTML = `Score_tag : ${data.score_tag}`
                document.getElementById('agreement').innerHTML = `Agreement : ${data.agreement}`
            })
            .catch(err => {
                console.error('Request failed', err)
                document.getElementById('results').innerHTML = "failed to evaluate text"
            })
    }

}

export { handleSubmit }
