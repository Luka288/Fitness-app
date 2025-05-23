import{a as P}from"./chunk-VADU3PMF.js";import{e as p,g as $,j,m as f,o as A}from"./chunk-IB7F6B6N.js";import{A as m,Kc as F,R as w,W as I,X as a,a as c,b as g,cc as S,e as v,n as h,o,p as b,s as l}from"./chunk-WI2OL4WN.js";var O=class d{constructor(r){this.API=r}http=a(S);alertsService=a(A);auth=a(F);Fire=a(j);getFood(r){return this.http.get(`${this.API}/${r}.json`).pipe(l(t=>{let e={fat:t.product.nutriments.fat,salt:t.product.nutriments.salt,energyKcal:t.product.nutriments["energy-kcal"],proteins:t.product.nutriments.proteins,carbohydrates:t.product.nutriments.carbohydrates,sugars:t.product.nutriments.sugars};return g(c({},t),{productData:e})}),m(t=>(this.alertsService.toast("Cant find barcode","error","red"),b(()=>t))))}storeData(r){return v(this,null,function*(){let t=this.auth.currentUser;if(!t)return;let e=new Date().toISOString().split("T")[0],i=f(this.Fire,`users/${t.uid}/nutrition/${e}`);try{let u=yield p(i),s={};if(u.exists()){let y=u.data();s=c({},y);for(let D in r)if(r.hasOwnProperty(D)){let n=D;r[n]&&typeof r[n]=="number"?s[n]=(y[n]||0)+r[n]:s[n]=r[n]}}else s=c({},r);yield $(i,s,{merge:!0}),this.alertsService.toast("Data stored","success","green")}catch(u){throw this.alertsService.toast("Something went wrong","error","red"),u}})}getdailyMeals(){let r=this.auth.currentUser;if(!r)return o(null);let t=new Date().toISOString().split("T")[0],e=f(this.Fire,`users/${r.uid}/nutrition/${t}`);return h(p(e)).pipe(l(i=>i.exists()?i.data():null),m(()=>o(null)))}getAllMeals(){let r=this.auth.currentUser;if(!r)return o(null);let t=f(this.Fire,`users/${r.uid}/nutrition`);return h(p(t)).pipe(l(e=>e.exists()?e.data():null),m(()=>o(null)))}static \u0275fac=function(t){return new(t||d)(I(P))};static \u0275prov=w({token:d,factory:d.\u0275fac,providedIn:"root"})};export{O as a};
