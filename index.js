// TODO: Look at the HTML and see what id you need to access

// TODO: Open your json server
// ! If you need to a refresher on this, the command for this is
// ! pineed to the slack channel
// TODO: Fetch the cats that exist in the database
// TODO: Create a div element for each cat and append to "cat-container"
// TODO: Iterate through your data and add it to the cat div,
// TODO: Create an h3, img, and p tag to hold your data and
// TODO: append it to the created div
// ////////////////////////////////////////////////////////////
const container = document.getElementById("cat-container")
fetch("http://localhost:3000/cats")
.then(res => res.json())
.then(cat => cat.forEach(e => {

    const div = document.createElement("div")
    container.append(div);
    const name = document.createElement("h3")
    const image = document.createElement("img")
    const breed = document.createElement("p")
    div.append(name, image, breed)
    name.innerText = e.name;
    image.src = e.image;
    breed.textContent = e.breed;


    
}))













// ////////////////////////////////////////////////////////////
// TODO: Fetch again and repeat to add dogs to the "dog-container"
// ////////////////////////////////////////////////////////////
 

 
const container2 = document.getElementById("dog-container");

 fetch("http://localhost:3000/dogs")
.then(res => res.json())
.then(dog => dog.forEach(e => {

    const div = document.createElement("div")
    container2.append(div);
    const name = document.createElement("h3")
    const image = document.createElement("img")
    const breed = document.createElement("p")
    div.append(name, image, breed)
    name.innerText = e.name;
    image.src = e.image;
    breed.textContent = e.breed;

}))














