let storeData = JSON.parse(localStorage.getItem('card'));
console.log(storeData)
let container = document.querySelector(".container");

fetch(`https://dummyjson.com/products/${storeData}`)

  .then((res) => res.json())
  .then((res) => {
    console.log("API Response:", res); 
    let imageUrl = res.images[0];   
        console.log("Image URL:", imageUrl);
    container.innerHTML = `
        <div class=" card" id="card-1">
          <img src="${imageUrl}" class="card-img">

          <h3>${res.title}</h3>
          <p><strong>Category:</strong> ${res.category}</p>
          <p>${res.description}</p>
             <p>The Ration of this products is  ${res.rating}</p>
             <p> ${res.returnPolicy}</p>
             <p>  Minimume Qunatity order is ${res.minimumOrderQuantity}</p>
        </div>
    `;
  })
  .catch((error) => console.error("Error fetching product:", error));
