(()=>{"use strict";const e=(e,t,o,n)=>{const a=document.querySelector(""+e),r=document.createElement("div");r.setAttribute("id",""+t),o=o||"",r.innerHTML=o,"before"==(n=n||"after")?a.prepend(r):"after"==n&&a.appendChild(r)},t=(document.querySelector("#home"),document.querySelector("#menu"),document.querySelector("#contact"),e=>{const t=document.querySelector(""+e);t.removeAttribute("class"),t.setAttribute("class","fakeLink")}),o=e=>{t("#home"),t("#menu"),t("#contact"),document.querySelector(""+e).setAttribute("class","active")},n=(document.querySelector("body"),document.querySelector("#content"),()=>{e("#content","homeContainer"),e("#homeContainer","logo","<img id='logoImage' src='images/logo.svg' alt='Cafe Logo Image'>"),e("#homeContainer","brandName",'<h1>ACME Cafe</h1><p id="descriptionText">We are an owned and operated cafe \n\tlocated VERY close to where you are right now. We serve human food designed\n\tto [redacted].</p>'),e("#homeContainer","menuImageDiv",'<img id="menuImage" src="images/lightCream.jpg" alt="Image of Tasty Ice Cream">'),e("#homeContainer","menuText",'<p>See what foods we offer to you. This is the offer. We\'re offering food to you.</p><button id="menuButton">See Our "Menu"</button>'),e("#homeContainer","locationText","<p>We are convenietly located directly behind you. We like how you've decorated the place.</p><button>Turn Around</button>"),e("#homeContainer","locationImageDiv",'<img id="locationImage" src="images/locationImage.jpg" alt="Image of Cafe Location">'),e("#homeContainer","aboutImageDiv",'<img id="aboutImage" src="images/orange.jpg" alt="Image of Us">'),e("#homeContainer","aboutText","<p>With a combined [redacted] years of culinary experience, we can.</p><ul><li> - Trustworthy</li><li> - The Lesser Evil</li><li> - Won't Betray You Again</li><li> - We DO NOT alter our clients memories.</li></ul><button></button>"),e("#homeContainer","contactText",'<p>Get in touch with us! You can link with our mind by thinking any thought, or you can just whisper. We can hear you just fine. We\'re right behind you.</p><button id="contactButton">Contact Us</button>'),e("#homeContainer","contactImageDiv",'<img id="contactImage" src="images/telepathy.png" alt="Image of You Contacting Us">'),o("#home")}),a=()=>{e("#content","menuContainer");const t=(e,t,o,n,a)=>{let r=`${n}${a}`;return{parentID:`#${n}Container`,foodID:r,htmlToUse:`<div id="${r}" class="${n}Img"><img src="${e}" alt="${t}"></div><div id="${n}${a}Text" class="${n}Text"><h1>${t}</h1><p>${o}</p></div>`}};e("#menuContainer","appTitle","<h1>Appetizers</h1>"),e("#menuContainer","appContainer");const n=t("dist/images/bananas.jpg","Bananas","Eat them quickly!","app",1);e(n.parentID,n.foodID,n.htmlToUse);const a=t("images/pineapple.jpg","Pineapple","Firm, strong pinapple.","app",2);e(a.parentID,a.foodID,a.htmlToUse);const r=t("images/orangeBall.jpg","Orange","It's the color orange.","app",3);e(r.parentID,r.foodID,r.htmlToUse),e("#menuContainer","entreTitle","<h1>Entres</h1>"),e("#menuContainer","entreContainer");const i=t("images/groundBeef.jpg","Beef","Very soft beef.","entre",1);e(i.parentID,i.foodID,i.htmlToUse);const c=t("images/baguette.jpg","Baguette","A very french decision.","entre",2);e(c.parentID,c.foodID,c.htmlToUse);const s=t("images/paperBurger.jpg","Burger","Please eat the borgor.","entre",3);e(s.parentID,s.foodID,s.htmlToUse),e("#menuContainer","dessertTitle","<h1>Desserts</h1>"),e("#menuContainer","dessertContainer");const m=t("images/terramisu.jpg","Terramisu","Big Dish, Very Filling","dessert",1);e(m.parentID,m.foodID,m.htmlToUse);const u=t("images/fruitPie.jpg","Fruit Pie","Large, will hydrate you brother.","dessert",2);e(u.parentID,u.foodID,u.htmlToUse);const d=t("images/donut.jpg","Donut","A rare find.","dessert",3);e(d.parentID,d.foodID,d.htmlToUse),e("#menuContainer","drinkTitle","<h1>Drinks</h1>"),e("#menuContainer","drinkContainer");const l=t("images/orangeJuice.jpg","Orange Juice","Taste the Orange.","drink",1);e(l.parentID,l.foodID,l.htmlToUse);const h=t("images/latte.jpg","Latte","Our hairiest latte.","drink",2);e(h.parentID,h.foodID,h.htmlToUse);const g=t("images/beer.jpg","Beer","Very strong mouth-feel.","drink",3);e(g.parentID,g.foodID,g.htmlToUse),o("#menu")},r=()=>{e("#content","contactContainer"),e("#contactContainer","temp","<h1>Do Not Contact Us. We're Sleeping</h1>"),o("#contact")};e("body","header","","before"),e("#header","home","Home"),home.setAttribute("class","fakeLink"),e("#header","menu","Menu"),menu.setAttribute("class","fakeLink"),e("#header","contact","Contact Us"),contact.setAttribute("class","fakeLink"),e("#header","more",'<a href="https://www.ethanzitting.com" target="_blank">More by Ethan</a>'),e("body","content"),n(),e("body","footer"),e("#footer","linkedIn",'<a href="https://www.linkedin.com/in/ethanzitting/" target="_blank">LinkedIn</a>'),e("#footer","gitHub",'<a href="https://github.com/ethanzitting" target="_blank">GitHub</a>'),e("#footer","copywrite","© 2020"),(()=>{const e=()=>{const e=document.querySelector("#content");for(;e.firstChild;)e.removeChild(e.firstChild)},t=document.querySelector("#home"),o=document.querySelector("#menu"),i=document.querySelector("#contact"),c=document.querySelector("#menuButton"),s=document.querySelector("#contactButton");t.addEventListener("click",(()=>{e(),n()})),o.addEventListener("click",(()=>{e(),a()})),i.addEventListener("click",(()=>{e(),r()})),c.addEventListener("click",(()=>{e(),a()})),s.addEventListener("click",(()=>{e(),r()}))})()})();