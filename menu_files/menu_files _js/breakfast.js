const savedData = JSON.parse(localStorage.getItem("site_data"));


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

    let main_file = document.getElementById('main_div')
    
    main_file.innerHTML = null
    main_file.innerHTML = cardlist


}
setTimeout(() => {
    renderdata(savedData.breakfast)
}, 100);


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
let arr=[]
 function cardlistt(title,image){
let obj={
    image:image,
    title:title
}

  arr.push(obj)
  localStorage.setItem('cardData', JSON.stringify(arr))
}