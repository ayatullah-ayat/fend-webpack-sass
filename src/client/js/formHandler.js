function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
    fetchAnotherNewApi()
}
async function fetchAnotherNewApi() {
    const users = await fetch('https://api.github.com/users')
    const json = await users.json()
    let newContent = ''
    json.forEach((eachData) => {
        console.log(eachData)
        newContent += `<p>${eachData.login}</p>
                        <img style= {width: 250px} src=${eachData.avatar_url} />`
    })
    document.getElementById('new-results').innerHTML = newContent
    
}

export { handleSubmit }
