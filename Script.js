
async function getResponse(){
    let response = await fetch('http://localhost:5000/')
    let content = await response.json()

let list = document.querySelector('.posts')
    let key;
        for (key in content){
            list.innerHTML += `
            <h2>User id: ${content[key].id}</h2>
            <p>Name: ${content[key].first_name}<p>
            <p>Lastname: ${content[key].last_name}<p>
            <p>Email: ${content[key].email}<p>
            <img src="${content[key].photo}">`
        }
}
