function GetProducts() {
    let product = JSON.parse(localStorage.getItem('product'));


    let item = '';
    product.forEach(pr => {

        let count = 0;
        let price = pr.Price;
        let newprice = "";
        for (let i = 1; i < price.length; i++) {
            newprice += price[i];
        }

        let total = newprice * pr.Count;


        item += `
            <tr id="${pr.Id}">
            
            <td class="remove"><i class="fa-regular fa-circle-xmark"></i></td>
            <td class="photo"><a href=""><img src=${pr.Img} ></a></td>
            <td class="title">${pr.Name}</td>
            <td class="price"><span class="currency">${pr.Price}</span> </td>
            <td class="quantity" >
                <div class="quant">
                    <i class="fa-solid fa-minus minus"></i>
                    <input id="inp" class="quantity-input" value="${pr.Count}">
                    <i class="fa-solid fa-plus plus"></i>
            </div>
            </td>
            <td class="subtotal"><span class="currency">$ </span> <span class="currency1">${total}</span></td>
        </tr>
            
        `
        count++

    })
    document.getElementById('body').innerHTML = item;

}

GetProducts();
let minuses = document.querySelectorAll(".minus")
let pluses = document.querySelectorAll(".plus")
let product = JSON.parse(localStorage.getItem('product'));
let currensies = Array.from(document.querySelectorAll(".currency1"));
let totalmount = document.querySelector(".total-amount");
let subtotals = document.querySelectorAll(".subtotal");
let totalSub = 0;

function sumofSubtotals(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].lastElementChild);
        totalSub += +arr[i].lastElementChild.innerText
    }

}
sumofSubtotals(subtotals);
totalmount.lastElementChild.innerText = totalSub;
totalSub = 0;




pluses.forEach(pl => {
    pl.onclick = function (e) {
        let value = this.previousElementSibling
        let yenivalue = parseInt(value.value)
        yenivalue++
        value.value = yenivalue;


        let price = pl.parentElement.parentElement.parentElement.children[3].children[0].innerText;
        let newprice = "";
        for (let i = 1; i < price.length; i++) {
            newprice += +price[i];
        }
        let products = JSON.parse(localStorage.getItem('product'));
        let productId = this.parentElement.parentElement.parentElement.id;


        products.forEach(product => {
            if (product.Id === productId) {
                product.Count = yenivalue;

            }
        })

        localStorage.setItem('product', JSON.stringify(products))
        console.log("salam");
        let sum = newprice * yenivalue;
        e.target.parentElement.parentElement.nextElementSibling.lastElementChild.innerText = sum;
        let currensies = document.querySelectorAll(".currency1")
        console.log("sagol");
        console.log(totalSub);
        let subtotals = document.querySelectorAll(".subtotal");

        sumofSubtotals(subtotals);
        console.log(totalSub);

        totalmount.lastElementChild.innerText = totalSub;
        totalSub = 0;


    }
})

minuses.forEach(mn => {
    mn.onclick = function (e) {

        let value = this.nextElementSibling
        let yenivalue = parseInt(value.value)
        if (yenivalue === 1) {
            value.value = yenivalue
        }
        else {

            yenivalue--
            value.value = yenivalue;
        }



        let price = e.target.parentElement.parentElement.parentElement.children[3].children[0].innerHTML
        let newprice = "";
        for (let i = 1; i < price.length; i++) {
            newprice += price[i];
        }

        let products = JSON.parse(localStorage.getItem('product'));
        let productId = this.parentElement.parentElement.parentElement.id;


        products.forEach(product => {
            if (product.Id === productId) {
                product.Count = yenivalue;

            }
        })

        localStorage.setItem('product', JSON.stringify(products))


        let sum = newprice * yenivalue;
        console.log(e.target.parentElement.parentElement.nextElementSibling.lastElementChild);
        e.target.parentElement.parentElement.nextElementSibling.lastElementChild.innerText = sum;
        sumofSubtotals(subtotals);
        totalmount.lastElementChild.innerText = totalSub;
        totalSub = 0;


    }
})

CountProduct();



let removers = document.querySelectorAll(".remove")

removers.forEach(rm => {
    rm.onclick = function () {
        this.parentElement.remove()
    }
    sumofSubtotals(subtotals);
    totalmount.lastElementChild.innerText = totalSub;
    totalSub = 0;
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