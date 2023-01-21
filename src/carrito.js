
/* Activar hamburguesa */
/* document.querySelector(".navegation-primary__bars").onclick = ()=>{
    document.querySelector(".navegation-primary__nav-bar").classList.toggle("show");
} */
/* Scroll abajo  */
window.addEventListener("scroll",()=>{
    var header = document.querySelector(".navegation-primary-bg");
    header.classList.toggle("down", window.scrollY>0);

    /* var navbar = document.querySelector(".navegation-primary__nav-bar");

    navbar.classList.toggle("down", window.scrollY>0); */
})


/* Productos */
const productos = [
    {
        cod: 1,
        cantidad: 1.00,
        entero: 0,
        name: "Pique Macho",
        price: 110.00,
        image: "./img/PiqueMachoM.jpeg",
        description: "Carne de res de pulpa, chorizo viena, papa frita locoto y tomate."
    },
    {
        cod: 2,
        cantidad: 1,
        entero: 0,
        name: "Pique de Lomo",
        price: 135.00,
        image: "./img/carritoPhots/PiqueMacho.png",
        description: "Carne de res de pulpa, chorizo viena, papa frita locoto y tomate."
    },
    {
        cod: 3,
        cantidad: 1,
        entero: 0,
        name: "Charque",
        price: 110,
        image: "./img/",
        description: "Carne de res de pulpa, chorizo viena, papa frita locoto y tomate."
    },
    {
        cod: 4,
        cantidad: 1,
        entero: 0,
        name: "Planchita",
        price: 110,
        image: "./img/",
        description: "Carne de res de pulpa, chorizo viena, papa frita locoto y tomate."
    },
    {
        cod: 5,
        cantidad: 1,
        entero: 0,
        name: "Picante Lengua",
        price: 110,
        image: "./img/",
        description: "Carne de res de pulpa, chorizo viena, papa frita locoto y tomate."
    },
    {
        cod: 6,
        cantidad: 1,
        entero: 0,
        name: "Picante Pollo",
        price: 110,
        image: "./img/",
        description: "Carne de res de pulpa, chorizo viena, papa frita locoto y tomate."
    },
    {
        cod: 7,
        cantidad: 1,
        entero: 0,
        name: "Picante Mixto",
        price: 110,
        image: "./img/",
        description: "Carne de res de pulpa, chorizo viena, papa frita locoto y tomate."
    },
    {
        cod: 8,
        cantidad: 1,
        entero: 0,
        name: "Pique Especial Dimas",
        price: 110,
        image: "./img/BrazueloM.jpeg",
        description: "Carne de res de pulpa, chorizo viena, papa frita locoto y tomate."
    }
] 
/*  carrito */
let carritoProducts = [];

const container_productos = document.querySelector(".products");
const carrito = document.querySelector(".carrito");
const carrito_icon = document.querySelector(".carrito__icon");
const carrito_number = document.querySelector(".carrito__number");
const detail_product = document.querySelector(".detail-product");
const detail_product_table = document.querySelector(".detail-product__table");
/* const total_price = document.querySelector(".total"); */
const modal_content = document.querySelector(".modal");
const modal_edit = document.querySelector(".modal-edit");
const btn_accept = document.querySelector(".btn-accept");
const btn_cancel = document.querySelector(".btn-cancel");
const detail_product_continue = document.querySelector(".detail-product__continue");
const btn_close = document.querySelector(".btn-close");
const modal_content_text = document.querySelector(".modal-content-text");
const modal_edit_minus = document.querySelector(".modal-edit__minus") 
const modal_edit_plus = document.querySelector(".modal-edit__plus") 
const modal_content_dishes = document.querySelector(".modal-content__dishes") 

const modal_btn_add = document.querySelector(".modal-btn__add");
const contador_productos = document.querySelector(".contador");
const btn_close_item = document.querySelector(".btn-close__item");

let item_delete;
let item_edit;
/* information about place and curtomer */


document.addEventListener("DOMContentLoaded",()=>{
    carritoProducts = JSON.parse(localStorage.getItem("carrito")) || []
    
    item_edit = localStorage.getItem("item") || [];
    console.log(item_edit);
    showProductsCar();
})

function showProducts(){
    productos.forEach((producto,index)=>{
        container_productos.innerHTML += `
            <div class="products__element">
                <img src="${producto.image}" alt="Foto producto">
                <h5>${producto.name}</h5> 
                <p>${producto.description}</p> 
                <p>Precio:${producto.price }</p> 
                <button onclick = addProduct(${producto.cod})>Agregar a carrito</button>
            </div
        ` 
    })
}



modal_edit_minus.addEventListener("click",()=>{
    subtract();
})
modal_edit_plus.addEventListener("click",()=>{
    plus();
})

function subtract(){
    if(item_edit.cantidad > 1){
        item_edit.cantidad--;
    }
    contador_productos.value = item_edit.cantidad;

    let priceTotal = item_edit.cantidad * item_edit.price;
    modal_btn_add.textContent = `Agregar Bs.${priceTotal}` 

    saveStorage();
    localStorage.setItem("item",item_edit)
}    

function updateContador(){
    let priceTotal = contador_productos.value * item_edit.price;
    modal_btn_add.textContent = `Agregar Bs.${priceTotal}` 
    console.log("contador")
}

function plus(){
    /* carritoProducts.map( (prod) => {
    if(item_edit.cod === prod.cod){
        prod.cantidad++;
        contador_productos.value = prod.cantidad;
    }
    } )  */
    item_edit.cantidad++;
    contador_productos.value = item_edit.cantidad;

    let priceTotal = item_edit.cantidad * item_edit.price;
    modal_btn_add.textContent = `Agregar Bs.${priceTotal}` 
    
    saveStorage();
    localStorage.setItem("item",JSON.stringify(item_edit));
}

function addProduct(cod){
    /* let exist = carritoProducts.some(product => product.cod === cod);
    
    if(!exist){
        let product = productos.find(product => product.cod === cod);
        carritoProducts.push(product);
    } */
    showModalEdit(cod);
    /* saveStorage();
    console.log(carritoProducts)
    showProductsCar(); */
}

modal_btn_add.addEventListener("click", () =>{
    modal_edit.classList.add("show-modal");
    let exist = carritoProducts.some(prod => prod.cod === item_edit.cod);
    if(exist){
        carritoProducts.map(prod =>{
            if(prod.cod === item_edit.cod){
                //prod.cantidad = item_edit.cantidad;
                prod.cantidad = contador_productos.value;
            }
        })
    }else{
        carritoProducts.push(item_edit);
    }
    carrito_number.textContent = carritoProducts.length;
    console.log(carritoProducts)
    saveStorage();
    showProductsCar();
})
function showModalEdit(cod){
    let exist = carritoProducts.some(product => product.cod === cod);
    let item;
    
    item = productos.find(prod=>prod.cod === cod);
    item_edit = {...item};
    localStorage.setItem("item",JSON.stringify(item_edit));
    modal_edit.classList.remove("show-modal");
    modal_content_text.innerHTML = `
        <div class = "modal-edit__header">
            <h5>${item.name}</h5>
            <p>${item.description}</p>
        </div>
    `
    contador_productos.value = 1;
    modal_btn_add.textContent = `Agregar Bs.${item.price}` 
}

carrito.addEventListener("click",()=>{
    console.log("click");
    container_productos.classList.add("hide-products");
    detail_product.classList.remove("hide-menu");
    if(carritoProducts.length > 0){
        showProductsCar();
    }else{
        console.log("carrit empty")
         showCarritoEmpty();
    }
})

function showCarritoEmpty(){
    carrito_number.textContent = carritoProducts.length;
    detail_product.innerHTML = `
        <div class="detail-product__empty contenedor">
            <h5>Tu carrito está vacío</h5>
            <button>Ve al menú</button>
        </div>
    `
}

function showProductsCar(){
    carrito_number.textContent = carritoProducts.length;
    detail_product_table.innerHTML = `
        <tr class="row">
            <th class="row__cant" >Cant.</th>
            <th class="row__product" >Producto</th>
            <th class="row__price" >Precio</th>
            <th></th>
        </tr>
    `
    carritoProducts.forEach(prod=>{
        detail_product_table.innerHTML += `
            <tr class="row">
                <td class="row__cant" >${prod.cantidad}x</td>
                <td class="row__product" >${prod.name}</td>
                <td class="row__price" >${prod.price * prod.cantidad}</td>
                <td>
                    <a onclick = editItem(${prod.cod}) >
                        <i class="fa fa-pencil icon-edit"></i> 
                    <a/>
                    <a onclick = removeItem(${prod.cod})>
                        <i class="fa fa-times-circle icon-delete"></i> 
                    </a>
                </td>
            </tr>
        `
    })
        let total = carritoProducts.reduce((acc, el) => acc + (el.price* el.cantidad), 0);
        detail_product_table.innerHTML += `
            <tr>
                <td colspan="2" class="">Total (Bs.)</td>
                <td class="row__price">${total}</td>
                <td></td>
            </tr>
        `
    
}
function editItem(cod){
    showModalEditItem(cod)
}
function showModalEditItem(cod){
    let item = carritoProducts.find(prod=>prod.cod === cod);
    item_edit = {...item};
    localStorage.setItem("item",JSON.stringify(item_edit));
    modal_edit.classList.remove("show-modal");
    modal_content_text.innerHTML = `
        <div class = "modal-edit__header">
            <h5>${item.name}</h5>
            <p>${item.description}</p>
        </div>
    `
    contador_productos.value = item.cantidad;
    modal_btn_add.textContent = `Agregar Bs.${item.price}` 
}

function removeItem( cod ){
    modal_content.classList.remove("show-modal");
    item_delete = cod;
}

btn_cancel.addEventListener("click",()=>{
    modal_content.classList.add("show-modal");
})
btn_close.addEventListener("click",()=>modal_content.classList.add("show-modal"));

btn_close_item.addEventListener("click",()=>{
    modal_edit.classList.add("show-modal");
});

btn_accept.addEventListener("click",()=>{
    modal_content.classList.add("show-modal");

    carritoProducts = carritoProducts.filter(prod=>{
        return prod.cod != item_delete;
    })
    item_delete = 0;
    console.log(carritoProducts);
    saveStorage();
    if(carritoProducts.length > 0){
        showProductsCar();
    }else{
        console.log("carrit empty")
         showCarritoEmpty();
    }
})



function saveStorage(){
    localStorage.setItem("carrito",JSON.stringify(carritoProducts));
}
showProducts();

/* Continue order */

const modal_order = document.querySelector(".modal-order");
const modal_order_content = document.querySelector(".modal-order__content");
const modal_order_view1 = document.querySelector(".modal-order__view1");
const input_delivery = document.querySelector(".input-delivery");
const input_recojo = document.querySelector(".input-recojo");
const moda_order_place = document.querySelector(".moda-order__place");
const modal_order_address = document.querySelector(".modal-order__address");
const modal_order_place = document.querySelector(".modal-order__place")
const modal_order_dayhours = document.querySelector(".modal-order__dayhours");
const input_rightnow = document.querySelector(".input-rightnow")
const input_later = document.querySelector(".input-later")
const input_day = document.querySelector(".input-day")
const btn_closeOrder = document.querySelector(".btn-close__order");
const input_cash = document.querySelector(".input-cash")
const input_transferencia = document.querySelector(".input-transferencia")
const order_header_one = document.querySelector(".order_header_one")
const order_header_two = document.querySelector(".order_header_two")
const modal_order_container = document.querySelector(".modal-order__container")
const modal_order_products = document.querySelector(".modal-order__products")

const modal_order_view2 = document.querySelector(".modal-order__view2");
const btn_next = document.querySelector(".btn-next");
const btn_whatsapp = document.querySelector(".btn-whatsapp");



detail_product_continue.addEventListener("click", function(){
    modal_order.classList.remove("show-modal-order");
    modal_order_place.style.display = "none"
    modal_order_dayhours.style.display = "none";
    modal_order_container.style.display = "block";
    order_header_one.classList.add("active-number");
    order_header_two.classList.remove("active-number");
    
})

input_delivery.addEventListener("change",(e)=>{
    input_delivery.checked = true;
    input_recojo.checked = false;
 
    modal_order_address.style.display = "block";
    modal_order_place.style.display = "none"
})


input_recojo.addEventListener("change",(e)=>{
    input_delivery.checked = false;
    input_recojo.checked = true;
    modal_order_address.style.display = "none";
    modal_order_place.style.display = "block"
})


input_rightnow.addEventListener("change",(e)=>{
    input_rightnow.checked = true;
    input_later.checked = false;
    modal_order_dayhours.style.display = "none"
})


input_later.addEventListener("change",(e)=>{
    var fecha = new Date(); 
    var mes = fecha.getMonth()+1;
    var dia = fecha.getDate()
    var ano = fecha.getFullYear();
    if(dia<10)
        dia='0'+dia; 
    if(mes<10)
    mes='0'+mes 
    input_day.value = ano+"-"+mes+"-"+dia;
    input_rightnow.checked = false;
    input_later.checked = true;
    modal_order_dayhours.style.display = "flex"
})

btn_closeOrder.addEventListener("click",()=>{
    modal_order.classList.add("show-modal-order");
})


input_cash.addEventListener("change",(e)=>{
    input_transferencia.checked = false;
    input_cash.checked = true;
   
})


input_transferencia.addEventListener("change",(e)=>{
    input_transferencia.checked = true;
    input_cash.checked = false;
})

order_header_one.addEventListener("click",()=>{
    modal_order_container.style.display = "block";
    order_header_one.classList.add("active-number");
    order_header_two.classList.remove("active-number");
    modal_order_view2.style.display = "none";
    console.log("1")
})

order_header_two.addEventListener("click",()=>{
    modal_order_container.style.display = "none";
    order_header_two.classList.add("active-number");
    order_header_one.classList.remove("active-number");
    modal_order_view2.style.display = "block";
    showDetailProduct();
})

function showDetailProduct(){
    modal_order_products.innerHTML = `
        <tr class="row">
            <th class="row__cant" >Cant.</th>
            <th class="row__product" >Producto</th>
            <th class="row__price" >Precio</th>
        </tr>
    `
    carritoProducts.forEach(prod=>{
        modal_order_products.innerHTML += `
            <tr class="row">
                <td class="row__cant" >${prod.cantidad}x</td>
                <td class="row__product" >${prod.name}</td>
                <td class="row__price" >${prod.price * prod.cantidad}</td>     
            </tr>
        `
    })
        let total = carritoProducts.reduce((acc, el) => acc + (el.price* el.cantidad), 0);
        modal_order_products.innerHTML += `
            <tr>
                <td colspan="2" class="">Total (Bs.)</td>
                <td class="row__price">${total}</td>
                <td></td>
            </tr>
        `
}

btn_next.addEventListener("click",()=>{
    modal_order_container.style.display = "none";
    order_header_two.classList.add("active-number");
    order_header_one.classList.remove("active-number");
    modal_order_view2.style.display = "block";
    showDetailProduct();
})