const savedData = JSON.parse(localStorage.getItem("site_data"));


 function renderdata(data) {
 let newdata = data.map((el) =>{
    return {
        image: el.image,
        title: el.title,
        price: Math.floor(Math.random() * 500)
    }
 })

    let cardlist = `
<div class="card-list">
${newdata
            .map((item) =>
                getcard(
                    item.image,
                    item.title,
                    item.desc?item.desc:"Chick-fil-A Chick-n-Minis™",
                    item.price
                )
            )
            .join('')}
</div>
`;

    let main_file = document.getElementById('main_div')
    
    main_file.innerHTML = null
    main_file.innerHTML = cardlist


}
setTimeout(() => {
    renderdata(savedData.treats)
}, 1000);


function getcard(image, title, desc,price) {
    let card = `
    <div class="child_div1">
    <img src=${image}>
    <a href=""  class="title">${title}</a>
    <p class="nutrients">${desc}</p>
    <button  onclick="cardlistt('${title}', '${image}','${price}')" class="child_div_btn">Order now</button>
           </div>
           `;
           
    return card
}
let arr=[]
function cardlistt(title, image, price) {
    
    let existingData = JSON.parse(localStorage.getItem('cardData')) || [];
  
    
    let itemExists = existingData.some((item) => item.title === title);
  
    if (itemExists) {
     
      alert(`item is already in cart. Please make changes if needed.`);
    } else {
      
      let newData = {
        image: image,
        title: title,
        price: price
      };
      existingData.push(newData);
  
      
      localStorage.setItem('cardData', JSON.stringify(existingData));
  
      
      alert(`item added to cart!`);
    }
  }