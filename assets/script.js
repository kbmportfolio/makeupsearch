// variable for name
// variable for description
// varbiable for price
// variable for image
// array for each element of fenty
// fetch api 

// const ul = document.querySelector('#fItems');
// const list = document.createDocumentFragment();


// document.addEventListener('DOMContentLoaded', ()=>{
//     fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=fenty')
//       .then((response) => {
//           return response.json();
//       })
//       .then((data) => {
//           let fentyItems = data;
//           fentyItems.map(function(fentyItem) {
//               let li = document.createElement('li');
//               let name = document.createElement('h2');

//               name.innerHTML = `${fentyItem.name}`;

//               li.appendChild(name);
//               list.appendChild(li);
//           });

//     })
//     .catch(function(error) {
//       console.log(error);
//     });
//     ul.appendChild(list);
//     })



// const apiURL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=fenty';

// function getData() {

//     fetch(apiURL) 
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data.name);
//     })

// }

// getData();

// console.log(getData());




// const searchMakeup = () => {

//     let apiURL = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=fenty`

//     fetch(apiURL) 
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data.name);



// }


const search = document.querySelector("#search");
const searchBtn = document.querySelector("#searchBtn");
const display = document.querySelector("#display");

function fetchData() {
    const brandName = search.value;
    const apiURL = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandName}`;

    fetch(apiURL)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            data.map(el => {
                let container = document.createElement("div");
                let name = document.createElement("h1");
                let image = document.createElement("img");
                let price = document.createElement("h2");
                let description = document.createElement("p");


                container.classList.add("cStyle");  
                name.classList.add("nStyle");  
                image.classList.add("imageStyle");
                price.classList.add("pStyle");
                description.classList.add("dStyle");

                name.textContent = el.name;
                image.src = el.image_link;
                price.textContent = `$` + el.price;
                description.textContent = el.description;

                    container.append(name, image, price, description);
                  
                display.append(container);
            })
        })
}

searchBtn.addEventListener("click", fetchData);
