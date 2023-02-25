let searchbtn = document.querySelector('.searchbtn');
    let closebtn = document.querySelector('.closehbtn');
    let searchbox = document.querySelector('#search-box');

    searchbtn.onclick = function(){
        searchbox.classList.add('active');
        closebtn.classList.add('active');
        searchbtn.classList.add('active')
    }

    closebtn.onclick = function(){
        searchbox.classList.remove('active');
        closebtn.classList.remove('active');
        searchbtn.classList.remove('active');
    }


let card_product = JSON.parse(localStorage.getItem('cardData'))
console.log(card_product)

let main = document.getElementById('cart-div')
let product_img = document.getElementById('product-image');
let product_name = document.getElementById('product-title');

function displayData(data){

    main.innerHTML = ''

    card_product.forEach((el, index) =>{

        let main_cont = document.createElement('div')
        main_cont.setAttribute('id', 'main-container')
        let card = document.createElement('div')
        
        let card_info = document.createElement('div');

        card_info.setAttribute('id', 'title-cont')

        let image = document.createElement('img');
        let title = document.createElement('h1');
        let price = document.createElement('h4');
        let title2 = document.createElement('p')
        let title3 = document.createElement('h5')
        let button1 = document.createElement('button')
        let button2 = document.createElement('button')
        let increment = document.createElement('button')
        let count = document.createElement('h3')
        let decrenent = document.createElement('button')
        let remove=  document.createElement('button')

        button1.setAttribute('id','button1')
        button2.setAttribute('id','button2')

        title3.setAttribute('id', 'another-info')

         increment.setAttribute('id' ,'increment')
         decrenent.setAttribute('id' ,'decrenent')
         count.setAttribute('id','count')

         remove.setAttribute('id','remove')

        image.src = el.image;
        title.textContent = el.title
        price.textContent = "₹" + el.price
        title2.textContent = `A classic macaroni and cheese recipe featuring a special blend of cheeses including Parmesan, Cheddar, and Romano. Baked in-restaurant to form a crispy top layer of baked cheese.`

        button1.innerHTML = `<img src="https://www.chick-fil-a.com/-/media/images/cfacom/pdps/pickup-stand-alone.ashx?la=en&hash=086EC6067E49D08E76F3E5DC0E237F27" alt="">
        <h5>Order Pickup</h5>`

        button2.innerHTML = `<img src="https://www.chick-fil-a.com/-/media/images/cfacom/pdps/delivery-van.ashx?la=en&hash=25124D11AEB21121AC74F2872244AAF9" alt="">
        <h5>Order Delivery</h5>`

        title3.innerHTML = 'Show full nutrition & allergens information for this product'


        increment.innerHTML = "+"
        count.innerHTML = 1
        decrenent.innerHTML = "--"
        let counts = 2;

        remove.innerHTML = '<img src="delete.png" alt="">'

        remove.addEventListener('click', () => {
            deletedtat(card_product, index);
          })


          increment.addEventListener("click", () => {
            count.innerHTML = counts++;
          });
          decrenent.addEventListener("click", () => {
            count.innerHTML = counts--;
      
            if (counts >= 1) {
              return;
            }
          });


        card.append(image)
        card_info.append (title,title2,price, button1,button2,title3,increment, count,decrenent,remove)
        main_cont.append(card,card_info)
        main.append(main_cont)
        
    })

}
displayData(card_product)


//----------------for delete a product so here a function -------------------------->>>

function deletedtat(data, index){
    data.splice(index,1);
    localStorage.setItem("cardData", JSON.stringify(card_product));
    displayData(card_product)
  }