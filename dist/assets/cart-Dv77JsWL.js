import"./style-nRbtDkBv.js";import{g as c,s as n}from"./utils-BKKPmlPP.js";function e(){const t=(c("so-cart")||[]).map(r=>d(r));document.querySelector(".product-list").innerHTML=t.join(""),document.querySelectorAll(".cart-card__remove").forEach(r=>{r.addEventListener("click",l)})}function d(a){return`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img src="${a.Image}" alt="${a.Name}" />
  </a>
  <a href="#">
    <h2 class="card__name">${a.Name}</h2>
  </a>
  <p class="cart-card__color">${a.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${a.FinalPrice}</p>
  <span class="cart-card__remove" data-id="${a.Id}">&#10005;</span>
</li>`}function l(a){const t=a.target.dataset.id,s=(c("so-cart")||[]).filter(o=>o.Id!==t);n("so-cart",s),e()}e();
