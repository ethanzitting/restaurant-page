(()=>{"use strict";const e=(e,t,o,n)=>{const a=document.querySelector(""+e),r=document.createElement("div");r.setAttribute("id",""+t),o=o||"",r.textContent=o,"before"==(n=n||"after")?a.prepend(r):"after"==n&&a.appendChild(r)},t=(document.querySelector("body"),document.querySelector("#content"),()=>{e("#content","homeContainer"),e("#homeContainer","logo","Logo"),logo.innerHTML="<img id='logoImage' src='../images/logo.svg' alt='Cafe Logo Image'>",e("#homeContainer","brandName");let t=document.createElement("h1");t.textContent="ACME Cafe",brandName.appendChild(t);let o=document.createElement("p");o.textContent="We are a family-owned and operated cafe \n\tlocated very close to where you are now. We serve human food designed\n\tto keep you functioning.",brandName.appendChild(o),e("#homeContainer","menuImageDiv"),e("#homeContainer","menuText","Menu Text"),menuImageDiv.innerHTML='<img id="menuImage" src="../images/lightCream.jpg" alt="Image of Tasty Ice Cream">',e("#homeContainer","locationText","Location Text"),e("#homeContainer","locationImageDiv"),locationImageDiv.innerHTML='<img id="locationImage" src="../images/locationImage.jpg" alt="Image of Cafe Location">',e("#homeContainer","aboutImageDiv"),e("#homeContainer","aboutText","About Us Text"),aboutImageDiv.innerHTML='<img id="aboutImage" src="../images/orange.jpg" alt="Image of Us">',e("#homeContainer","contactText","Contact Us"),e("#homeContainer","contactImageDiv"),contactImageDiv.innerHTML='<img id="contactImage" src="../images/telepathy.png" alt="Image of You Contacting Us">'});e("body","header","","before"),e("#header","home","Home"),e("#header","menu","Menu"),e("#header","contact","Contact Us"),e("#header","about","About Us"),e("#header","more","More by Ethan"),e("body","content"),t(),e("body","footer"),e("#footer","linkedIn","LinkedIn"),e("#footer","gitHub","GitHub"),e("#footer","copywrite","© 2020"),(()=>{const o=()=>{const e=document.querySelector("#content");for(;e.firstChild;)e.removeChild(e.firstChild)},n=document.querySelector("#home"),a=document.querySelector("#menu"),r=document.querySelector("#contact"),c=document.querySelector("#about");n.addEventListener("click",(()=>{o(),t()})),a.addEventListener("click",(()=>{o(),e("#content","menuItems","Menu Items")})),r.addEventListener("click",(()=>{o(),e("#content","contactForm","Contact Form")})),c.addEventListener("click",(()=>{o(),e("#content","aboutUs","About Us")}))})()})();