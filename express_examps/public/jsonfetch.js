window.onload = () =>{
    getUser()
}

async function getUser() {
    let response = await fetch("/jsontest")
    let data = await response.json()
    console.log(data.name)
    document.getElementById("name").innerText = data.name
    document.getElementById("username").innerText = data.username
    
}