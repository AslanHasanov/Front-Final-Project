function GetProducts() {
    let product = JSON.parse(localStorage.getItem('product'));
   

    let item = '';
    product.forEach(pr => {

        let count = 0;
        let price = pr.Price;
        let newprice ="";
        for(let i = 1 ; i<price.length; i++){
            newprice+=price[i];
        }

        let total=newprice*pr.Count;

        console.log(newprice);

        console.log(total);
        item += `
            <tr id="${pr.Id}">
            
            <td class="remove"><i class="fa-regular fa-circle-xmark"></i></td>
            <td class="photo"><a href=""><img src=${pr.Img} ></a></td>
            <td class="title">${pr.Name}</td>
            <td class="price"><span class="currency">${pr.Price}</span></td>
            <td class="quantity" >
                <div class="quant">
                    <i class="fa-solid fa-minus minus"></i>
                    <input id="inp" class="quantity-input" value="${pr.Count}">
                    <i class="fa-solid fa-plus plus"></i>
            </div>
            </td>
            <td class="subtotal"><span class="currency">$ ${total}</span></td>
        </tr>
            
        `    
       count++
        
    })
    document.getElementById('body').innerHTML = item;
    
}

GetProducts();

let pluses=document.querySelectorAll(".plus")
pluses.forEach(pl=>{
    pl.onclick=function(e){
        

        
        let value=this.previousElementSibling
        let yenivalue = parseInt(value.value)
        yenivalue++
        value.value=yenivalue;
       
    
        let price=e.target.parentElement.parentElement.parentElement.children[3].children[0].innerHTML
        let newprice ="";
        for(let i = 1 ; i<price.length; i++){
            newprice+=price[i];
        }
       
        let products = JSON.parse(localStorage.getItem('product'));
        let productId = this.parentElement.parentElement.parentElement.id;
        let productSumma = this.parentElement.parentElement.nextElementSibling;
       
        products.forEach(product => {
            if(product.Id===productId){
                product.Count=yenivalue;
                console.log(product.Count);

            }
        })

        localStorage.setItem('product',JSON.stringify(products))


        let sum=newprice*yenivalue; 
        console.log(sum);
        e.target.parentElement.parentElement.nextElementSibling.innerHTML="$"+sum
        
    }
})





// let inputs=document.querySelectorAll("#inp")

// inputs.forEach(input=>{
//     this.onchange=function(e){
//        count++
//         let value=e.target.value
//         let price=e.target.parentElement.parentElement.children[4].innerHTML
//         let sum=price.slice(-7,-3)
//         e.target.parentElement.parentElement.children[5].innerHTML=sum*value +"AZN"
//     }
// })