window.onload = () =>{
    deleteData()
}

async function getJPH() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await response.json()
    console.log(data[0].title)
    
}

async function addData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: 'POST',
        //send the data to the backend.  data sent in a post method is contained in something known as a body.  Kind of like the  HTML body tag where we put visible html elements in it
        //we first before sending, have to stringify the data in a string JSON format
        body: JSON.stringify({
            title: 'My First Post',
            body: 'Welcome to my blog',
            userID: 1,
        }),
        headers: {
            'Content-type': 'application/json',

        },
    })
    
    let data = await response.json()
    console.log(data)

}

async function updateData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method: 'PUT',
        //send the data to the backend.  data sent in a post method is contained in something known as a body.  Kind of like the  HTML body tag where we put visible html elements in it
        //we first before sending, have to stringify the data in a string JSON format
        body: JSON.stringify({
            title: 'My First Post',
            body: 'Welcome to my blog',
            userID: 1,
        }),
        headers: {
            'Content-type': 'application/json',

        },
    })
    
    let data = await response.json()
    console.log(data)

}

async function deleteData() {
    await fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method: 'DELETE',
    })

    
}