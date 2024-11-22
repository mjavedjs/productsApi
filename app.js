let container = document.querySelector(".container");

fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {
    console.log(data);
    data.products.map((item) => {
        console.log(item)
        let imageUrl = item.images[0];
      container.innerHTML += `
        <div class="card">
          <img src="${imageUrl}" class="card-img">
          <h3>${item.title}</h3>
          <p><strong>Category:</strong> ${item.category}</p>
          <p><strong>Price:</strong> $${item.price}</p>
       <button class="see-more-btn" onclick="seeMore(${item.id})" >SeeMore</button> ...
          
        </div>
      `;
    });
  })
  .catch((err) => {
    console.log(err);
  });


  function seeMore(id){
    let data = JSON.stringify(id);
    localStorage.setItem('card',data);
    console.log(id)
   window.location='card.html'
  }