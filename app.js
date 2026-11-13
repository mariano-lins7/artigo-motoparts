const products = [
 {id:1,name:"Capacete fechado esportivo",category:"Capacetes",price:389.90,desc:"Consulte tamanhos e grafismos disponíveis.",emoji:"🪖",tag:"DESTAQUE"},
 {id:2,name:"Luva motociclista",category:"Proteção",price:89.90,desc:"Modelos e numerações sob consulta.",emoji:"🧤",tag:""},
 {id:3,name:"Kit relação",category:"Peças",price:149.90,desc:"Confirme marca, modelo e ano da moto.",emoji:"⚙️",tag:""},
 {id:4,name:"Bauleto traseiro",category:"Acessórios",price:279.90,desc:"Consulte litragem e compatibilidade.",emoji:"🧳",tag:""},
 {id:5,name:"Adesivos e personalização",category:"Acessórios",price:39.90,desc:"Opções de cores e modelos.",emoji:"🏁",tag:""},
 {id:6,name:"Camiseta Artigo",category:"Vestuário",price:79.90,desc:"Consulte tamanhos disponíveis.",emoji:"👕",tag:""}
];
let cart = [];
let activeCategory = "Todos";
const money = n => n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const grid = document.getElementById("productGrid");
function renderProducts(){
 const term=document.getElementById("searchInput").value.toLowerCase();
 const list=products.filter(p=>(activeCategory==="Todos"||p.category===activeCategory)&&(p.name+" "+p.category+" "+p.desc).toLowerCase().includes(term));
 document.getElementById("productCount").textContent=`${list.length} ${list.length===1?"produto":"produtos"}`;
 grid.innerHTML=list.length?list.map(p=>`<article class="product"><div class="product-art"><span>${p.emoji}</span>${p.tag?`<b class="product-tag">${p.tag}</b>`:""}</div><div class="product-info"><small>${p.category}</small><h3>${p.name}</h3><p>${p.desc}</p><div class="product-foot"><span class="price">${money(p.price)}</span><button class="add-btn" data-add="${p.id}">+ Adicionar</button></div></div></article>`).join(""):`<p class="empty">Nenhum produto encontrado. Tente outra busca.</p>`;
 grid.querySelectorAll("[data-add]").forEach(btn=>btn.addEventListener("click",()=>addToCart(Number(btn.dataset.add))));
}
function addToCart(id){const item=cart.find(x=>x.id===id);item?item.qty++:cart.push({id,qty:1});renderCart();document.getElementById("cartPanel").classList.add("open");document.getElementById("overlay").classList.add("show");}
function renderCart(){
 const count=cart.reduce((s,x)=>s+x.qty,0),total=cart.reduce((s,x)=>s+x.qty*products.find(p=>p.id===x.id).price,0);
 document.getElementById("cartCount").textContent=count;document.getElementById("cartTotal").textContent=money(total);
 document.getElementById("checkoutBtn").disabled=!count;
 document.getElementById("cartItems").innerHTML=count?cart.map(x=>{const p=products.find(y=>y.id===x.id);return `<div class="cart-line"><div><b>${p.name}</b><small>${money(p.price)} cada</small></div><div class="qty"><button data-minus="${p.id}">−</button><b>${x.qty}</b><button data-plus="${p.id}">+</button></div></div>`}).join(""):`<p class="empty">Seu carrinho está vazio.</p>`;
 document.querySelectorAll("[data-minus]").forEach(b=>b.onclick=()=>changeQty(+b.dataset.minus,-1));document.querySelectorAll("[data-plus]").forEach(b=>b.onclick=()=>changeQty(+b.dataset.plus,1));
}
function changeQty(id,d){const x=cart.find(a=>a.id===id);if(x){x.qty+=d;if(x.qty<=0)cart=cart.filter(a=>a.id!==id);}renderCart();}
function closeCart(){document.getElementById("cartPanel").classList.remove("open");document.getElementById("overlay").classList.remove("show");}
document.getElementById("categories").addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(!b)return;activeCategory=b.dataset.category;document.querySelectorAll(".category").forEach(x=>x.classList.toggle("active",x===b));renderProducts();});
document.getElementById("searchInput").addEventListener("input",renderProducts);
document.getElementById("openCart").onclick=()=>{document.getElementById("cartPanel").classList.add("open");document.getElementById("overlay").classList.add("show");};
document.getElementById("closeCart").onclick=closeCart;document.getElementById("overlay").onclick=closeCart;
document.getElementById("checkoutBtn").onclick=()=>{closeCart();document.getElementById("checkoutModal").classList.add("show");};
document.getElementById("closeCheckout").onclick=()=>document.getElementById("checkoutModal").classList.remove("show");
document.getElementById("checkoutForm").addEventListener("submit",e=>{
 e.preventDefault();const f=new FormData(e.target);const lines=cart.map(x=>{const p=products.find(y=>y.id===x.id);return `${x.qty}x ${p.name} — ${money(p.price*x.qty)}`;}).join("\n");
 const total=cart.reduce((s,x)=>s+x.qty*products.find(p=>p.id===x.id).price,0);
 const msg=`Olá, Artigo Moto Parts! Quero solicitar este pedido:\n\n${lines}\n\nSubtotal: ${money(total)}\n\nNome: ${f.get("name")}\nWhatsApp: ${f.get("phone")}\nCidade: ${f.get("city")}\nEntrega: ${f.get("delivery")}\nPagamento preferido: ${f.get("payment")}\nObservações: ${f.get("notes")||"Não informado"}\n\nGostaria de confirmar estoque, frete e formas de pagamento.`;
 const phone=window.ARTIGO_WHATSAPP||"";
 if(!phone){alert("A loja ainda precisa configurar o número oficial do WhatsApp no arquivo app.js. Seus dados não foram enviados.");return;}
 window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,"_blank");
});
document.getElementById("requestLink").onclick=e=>{e.preventDefault();const phone=window.ARTIGO_WHATSAPP||"";if(!phone){alert("A loja ainda precisa configurar o número oficial do WhatsApp no arquivo app.js.");return;}window.open(`https://wa.me/${phone}?text=${encodeURIComponent("Olá! Gostaria de consultar uma peça ou acessório que não encontrei no catálogo.")}`,"_blank");};
document.getElementById("year").textContent=new Date().getFullYear();
renderProducts();renderCart();
