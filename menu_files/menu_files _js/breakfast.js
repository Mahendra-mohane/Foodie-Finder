let main_file = document.getElementById('main_div')
const savedData = JSON.parse(localStorage.getItem("site_data"));

//asdfghjkxcvgh
function renderdata(data) {
    let cardlist = `
<div class="card-list">
${data
            .map((item) =>
                getcard(
                    item.image,
                    item.title,
                    item.desc?item.desc:"Chick-fil-A Chick-n-Minis™",
                )
            )
            .join('')}


</div>
`;
    main_file.innerHTML = null
    main_file.innerHTML = cardlist
}
console.log(savedData.breakfast)
renderdata(savedData.breakfast)
function getcard(image, title, desc) {
    let card = `
    <div class="child_div1">
    <img src=${image}>
    <a href=""  class="title">${title}</a>
    <p class="nutrients">${desc}</p>
    <button  onclick="cardlistt('${title}', '${image}')" class="child_div_btn">Order now</button>
           </div>
           `;
           
    return card
}
 function cardlistt(title,image){
let obj={
    image:image,
    title:title
}
console.log(obj)
localStorage.setItem("view_product_data", JSON.stringify(obj));
}