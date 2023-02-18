
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
        image: "./img/carritoPhots/PiqueMachoCF.jpg",
        description: "Carne de res de pulpa, chorizo viena, papa frita locoto y tomate."
    },
    {
        cod: 2,
        cantidad: 1,
        entero: 0,
        name: "Pique Especial Dimas",
        price: 165.00,
        image: "./img/carritoPhots/PiqueEspecialCF.jpg",
        description: "Carne de pulpa, chorizo viena, chorizo parrillero, morcilla, pollo, ubre, papa frita, tomate y locoto."
    },
    {
        cod: 3,
        cantidad: 1,
        entero: 0,
        name: "Charque",
        price: 110,
        image: "./img/carritoPhots/CharqueCf.jpg",
        description: "Carne de res, mote, huevos, quesillo, papa huayco."
    },
    {
        cod: 4,
        cantidad: 1,
        entero: 0,
        name: "Picante de Lengua",
        price: 67,
        image: "./img/carritoPhots/OragenFondo.jpg",
        description: "Lengua de res, papa blanca, arroz, chuño con huevo, aji y ensalada."
    },
    {
        cod: 5,
        cantidad: 1,
        entero: 0,
        name: "Picante de pollo",
        price: 67,
        image: "./img/carritoPhots/OragenFondo.jpg",
        description: "Pollo, papa blanca, arroz, chuño con huevo, aji y ensalada."
    },
    {
        cod: 6,
        cantidad: 1,
        entero: 1,
        name: "Picante Mixto",
        price: 67,
        image: "./img/carritoPhots/PicanteLenguaCF.jpg",
        description: "Lengua de res, pollo, papa blanca, arroz, chuño con huevo aji y ensalada."
    },
    {
        cod: 7,
        cantidad: 1,
        entero: 0,
        name: "Conejo lambreado",
        price: 67,
        image: "./img/carritoPhots/ConejoCF.jpg",
        description: "Conejo, arroz, papa blanca, chuño con huevo y ensalada."
    },
    {
        cod: 8,
        cantidad: 1,
        entero: 0,
        name: "Picante de Conejo",
        price: 67,
        image: "./img/carritoPhots/OragenFondo.jpg",
        description: "Conejo, arroz, papa blanca, chuño con huevo, aji y ensalada."
    },
    ,
    {
        cod: 9,
        cantidad: 1,
        entero: 0,
        name: "Chank'a de Conejo",
        price: 67,
        image: "./img/carritoPhots/OragenFondo.jpg",
        description: "Conejo, arroz, papa blanca, chuño con huevo y ensalada."
    },
    ,
    {
        cod: 10,
        cantidad: 1,
        entero: 0,
        name: "Pato al vino",
        price: 80,
        image: "./img/carritoPhots/PatoVinoCF.jpg",
        description: "Medio pato, arroz, papa dorada chuño con huevo, jugo y ensalada."
    },
    ,
    {
        cod: 11,
        cantidad: 1,
        entero: 0,
        name: "Pato especial Dimas",
        price: 150,
        image: "./img/carritoPhots/OragenFondo.jpg",
        description: "Pato entero, con guarniciones, arroz, papa dorada y ensalada."
    },
    ,
    {
        cod: 12,
        cantidad: 1,
        entero: 0,
        name: "Planchita",
        price: 110,
        image: "./img/carritoPhots/PlanchitaCFA.jpg",
        description: "Churrascos, chorizo parrillero, chorizo viena, queso, huevos, yuca, papa frita, plátano y chorrellana."
    },
    ,
    {
        cod: 13,
        cantidad: 1,
        entero: 0,
        name: "Lapping",
        price: 67,
        image: "./img/carritoPhots/LappingCF.jpg",
        description: "Carne de res, arroz, choclo, papa y soltero con queso."
    },
    ,
    {
        cod: 14,
        cantidad: 1,
        entero: 0,
        name: "Lomo a la paila",
        price: 67,
        image: "./img/carritoPhots/OragenFondo.jpg",
        description: "Lomo de res, huevo, papa frita y caldo."
    },
    ,
    {
        cod: 15,
        cantidad: 1,
        entero: 0,
        name: "Lomo montado",
        price: 67,
        image: "./img/carritoPhots/OragenFondo.jpg",
        description: "Carne de res, huevo, arroz, papa frita y ensalada."
    },
    ,
    {
        cod: 16,
        cantidad: 1,
        entero: 0,
        name: "Cordero costillar",
        price: 67,
        image: "./img/carritoPhots/CostillarCF.jpg",
        description: "Costilla de cordero, arroz, papa frita y ensalada."
    },
    ,
    {
        cod: 17,
        cantidad: 1,
        entero: 0,
        name: "Cordero Brazuelo",
        price: 67,
        image: "./img/carritoPhots/BrazueloCF.jpg",
        description: "Carne de cordero, arroz, papa frita y ensalada."
    },
    ,
    {
        cod: 17,
        cantidad: 1,
        entero: 0,
        name: "Milanesa de lomo",
        price: 67,
        image: "./img/carritoPhots/OragenFondo.jpg",
        description: "Carne de res, huevo, arroz, papa frita y ensalada."
    },
    ,
    {
        cod: 17,
        cantidad: 1,
        entero: 0,
        name: "Milanesa de pollo",
        price: 62,
        image: "./img/carritoPhots/OragenFondo.jpg",
        description: "Milanesa de pollo, arroz, papa frita y ensalada."
    },
] 
let productosFilter = [];
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
const input_search = document.querySelector(".input-search");

let item_delete;
let item_edit;
/* information about place and curtomer */


document.addEventListener("DOMContentLoaded",()=>{
    carritoProducts = JSON.parse(localStorage.getItem("carrito")) || []
    
    item_edit = localStorage.getItem("item") || [];
    console.log(item_edit);
    showProductsCar();
})

function showProducts( ){
    let productosFood = []; 
    productosFilter.length > 0 ? productosFood = productosFilter: productosFood = productos
    container_productos.innerHTML = "";
    productosFood.forEach((producto,index)=>{
        container_productos.innerHTML += `
            <div class="products__element">
                <img src="${producto.image}" alt="Foto producto">
                <h5>${producto.name}</h5> 
                <p>${producto.description}</p> 
                <p>Precio: ${producto.price }Bs</p> 
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
            <button> <a href="carrito.html">Ve al menú </a></button>
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

input_search.addEventListener("input",(e)=>{
    productosFilter = productos.filter( prod => prod.name.toLowerCase().includes(e.target.value))
    console.log(productosFilter)
    showProducts();
})

function handleInputChange (e){
    console.log("e")
}


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
const input_address = document.querySelector(".input-address");
const input_clarification = document.querySelector(".input-clarification");
const input_hour = document.querySelector(".input-hour");

const body = document.getElementById("body");

detail_product_continue.addEventListener("click", function(){
    body.style.overflowY = "hidden";
    modal_order.classList.remove("show-modal-order");
    modal_order_view2.style.display ="none";
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
    body.style.overflowY = "auto"
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

btn_whatsapp.addEventListener("click" , () =>{
    sendWhatsapp();
    cleanStorage();
    body.style.overflowY = "auto";
})
function cleanStorage(){
    carritoProducts = [];
    localStorage.removeItem("carrito");
    localStorage.removeItem("item");
    modal_order.classList.add("show-modal-order");
    container_productos.classList.remove("hide-products");
    detail_product.classList.add("hide-menu");
    carrito_number.textContent = 0;
}
 
function sendWhatsapp(){
    let sms = "Hola me gutaria relizar el siguiente pedido. %0A %0A";
    let number = "65322739";
    
    carritoProducts.forEach( (prod, index) => {
        sms += `${prod.cantidad}x  ${prod.name} %0A %0A`
    })
    sms += "Forma de entrega: "
    if(input_delivery.checked){//validar direccion 
        sms += "Delivery. %0A"
    }else{
        sms += "Recojo. %0A"
    }
    if(input_rightnow.checked){
        sms = sms + "Orden: ahora mismo. %0A"
    }else{
        sms += `Orden: fecha:${input_day.value} hora:${input_hour.value}\n %0A`
    }
    sms += "Direccion de entrega: " + input_address.value + "%0A";
    sms += input_clarification.value + "%0A"
    if(input_cash.checked){
        sms += `Método de pago: Efectivo`
    }else{
        sms += `Método de pago: Transferencia`
    }


    var win = window.open(`https://wa.me/${number}?text=%20${sms}`,'_blank')
}