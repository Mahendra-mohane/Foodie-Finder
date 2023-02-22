
let arr=['https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Daypart%20Hero/Winter23/Winter23-DotCom-D_710x580-2.1.jpg?h=580&w=710&la=en',
         'https://st3.depositphotos.com/1000504/17303/i/450/depositphotos_173037454-stock-photo-fresh-tasty-burger.jpg',
         'https://img.freepik.com/premium-photo/delicious-juicy-burger-isolated-white-background-fast-food_554439-38.jpg?w=900',
         'https://img.freepik.com/premium-photo/cheese-burger-with-onion-tomato-lettuce-bacon-white-background_499484-1161.jpg?w=900',
        'https://img.freepik.com/premium-photo/divided-hamburger_147620-1303.jpg?w=740']
  let hederArray=['Partners in deliciousness','Make it a milkshake break']
        let count=0;
        let count1=0

        let main=document.querySelector('#slid-image')
       
     
        let hederslid=document.querySelector('#heder')
        console.log(heder)
         
                   function changeImage()
                     {
                        hederslid.innertext=hederArray[count1]
                      let img=document.querySelector('#sliding')
                      img.setAttribute("src",arr[count])
                       count++
                       count1++
                       if(count==4)
                         {
                          count=0
                         }
                         if(count1==2)
                         {
                            count=0
                         }
                      }
      
      setInterval(changeImage,4000)



      