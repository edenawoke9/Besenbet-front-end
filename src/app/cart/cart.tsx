import React from "react";
interface cart{
    id:number,
    name:string,
    price:number,
    quantity:number,
    image:string,

}
export function getCart(): cart[] {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem("cart") || "[]");
}
const cart:cart[]=[]
localStorage.setItem("cart",JSON.stringify(cart))
export function addToCart(item:cart){
    const cart=JSON.parse(localStorage.getItem("cart") || "[]")
    cart.push(item)
    localStorage.setItem("cart",JSON.stringify(cart))
    console.log("added product")
}
export function deleteFromCart(item:cart){
    const cart=JSON.parse(localStorage.getItem("cart") || "[]")
    const index=cart.findIndex((i:cart)=>i.name===item.name)
    cart.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(cart))
}
