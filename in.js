"use strict";
let a=0;
SAR.addEventListener('click', function(){
    if(a==-3600)
    a=900;
    a=a-900;
    vP.style.position='relative';
    vP.style.left=a+'px';
});
SAL.addEventListener('click', function(){
    if(a==0)
    a=-4500;
    a=a+900;
    vP.style.position='relative';
    vP.style.left=a+'px';
});
function getPrecScroll(){
  return 100*window.pageYOffset/(document.body.clientHeight-window.innerHeight+80);
}
document.addEventListener("scroll", function(e){
  let b=getPrecScroll();
  if(b>=94)
  {
  lin.style.width='100%';
  lin1.style.position='relative';
  lin1.style.left='99.5%';
  }
  else
  {
  lin.style.width=b+'%';
  lin1.style.position='relative';
  lin1.style.left=b-0.5+'%';
  };
  if(getPrecScroll()>=40)
  {
    up.classList.add('vis');
  }else{
    up.classList.remove('vis');
  };
  if(getPrecScroll()>=0&&getPrecScroll()<20)
  {
    a1.classList.add('active');
  }else{
    a1.classList.remove('active');
  };
  if(getPrecScroll()>=20&&getPrecScroll()<60)
  {
    a2.classList.add('active');
  }else{
    a2.classList.remove('active');
  };
  if(getPrecScroll()>=60&&getPrecScroll()<80)
  {
    a3.classList.add('active');
  }else{
    a3.classList.remove('active');
  };
  if(getPrecScroll()>=80&&getPrecScroll()<=100)
  {
    a4.classList.add('active');
  }else{
    a4.classList.remove('active');
  };

  if(getPrecScroll()>=95)
  {
    //document.body.innerHTML=document.body.innerHTML+"<section id=\"four\"><h2>Собери комплект</h2><div class=\"goods-wrapper\"><div class=\"product tov1 pro1\"><img src=\"img/goods/1.png\"><h4>Пожарная машина</h4><button id=\"ton1\"><img src=\"img/cart16.png\"></button></div><div class=\"product tov2 pro2\"><img src=\"img/goods/2.jpg\"><h4>Гоночная машина</h4><button id=\"ton2\"><img src=\"img/cart16.png\"></button></div><div class=\"product tov3 pro3\"><img src=\"img/goods/3.jpg\"><h4>Попугай</h4><button id=\"ton3\"><img src=\"img/cart16.png\"></button></div><div class=\"product tov4 pro4\"><img src=\"img/goods/4.jpg\"><h4>Аэропорт</h4><button id=\"ton4\"><img src=\"img/cart16.png\"></button></div><div class=\"product tov5 pro5\"><img src=\"img/goods/5.jpg\"><h4>Вертолет</h4><button id=\"ton5\"><img src=\"img/cart16.png\"></button></div><div class=\"product tov6 pro6\"><img src=\"img/goods/6.jpg\"><h4>Дом (красный)</h4><button id=\"ton6\"><img src=\"img/cart16.png\"></button></div></div></section>";
    let batia=document.body.querySelector(".goods-wrapper");
    let newElem1 = document.createElement('div');
    newElem1.classList='product';
    newElem1.classList.add("tov1");
    newElem1.classList.add("pro1");
    let i1 = document.createElement('img');
    i1.src = 'img/goods/1.png';
    newElem1.appendChild(i1);
    let h1 = document.createElement('h4');
    h1.innerHTML="Пожарная машина";
    newElem1.appendChild(h1);
    let bu1 = document.createElement('button');
    newElem1.appendChild(bu1);
    let im1 = document.createElement('img');
    im1.src = 'img/cart16.png';
    bu1.appendChild(im1);
    batia.appendChild(newElem1);
    newElem1.lastElementChild.addEventListener("click", function(e){
      a6.innerHTML=parseInt(a6.innerHTML)+1;
    });

    let newElem2 = document.createElement('div');
    newElem2.classList='product';
    newElem2.classList.add('tov2');
    newElem2.classList.add('pro2');
    let i2 = document.createElement('img');
    i2.src = 'img/goods/2.jpg';
    newElem2.appendChild(i2);
    let h2 = document.createElement('h4');
    h2.innerHTML="Гоночная машина";
    newElem2.appendChild(h2);
    let bu2 = document.createElement('button');
    newElem2.appendChild(bu2);
    let im2 = document.createElement('img');
    im2.src = 'img/cart16.png';
    bu2.appendChild(im2);
    batia.appendChild(newElem2);
    newElem2.lastElementChild.addEventListener("click", function(e){
      a6.innerHTML=parseInt(a6.innerHTML)+1;
    });

    let newElem3 = document.createElement('div');
    newElem3.classList='product';
    newElem3.classList.add('tov3');
    newElem3.classList.add('pro3');
    let i3 = document.createElement('img');
    i3.src = 'img/goods/3.jpg';
    newElem3.appendChild(i3);
    let h3 = document.createElement('h4');
    h3.innerHTML="Попугай";
    newElem3.appendChild(h3);
    let bu3 = document.createElement('button');
    bu3.id="ton3";
    newElem3.appendChild(bu3);
    let im3 = document.createElement('img');
    im3.src = 'img/cart16.png';
    bu3.appendChild(im3);
    batia.appendChild(newElem3);
    newElem3.lastElementChild.addEventListener("click", function(e){
      a6.innerHTML=parseInt(a6.innerHTML)+1;
    });

    let newElem4 = document.createElement('div');
    newElem4.classList='product';
    newElem4.classList.add('tov4');
    newElem4.classList.add('pro4');
    let i4 = document.createElement('img');
    i4.src = 'img/goods/4.jpg';
    newElem4.appendChild(i4);
    let h4 = document.createElement('h4');
    h4.innerHTML="Аэропорт";
    newElem4.appendChild(h4);
    let bu4 = document.createElement('button');
    bu4.id="ton4";
    newElem4.appendChild(bu4);
    let im4 = document.createElement('img');
    im4.src = 'img/cart16.png';
    bu4.appendChild(im4);
    batia.appendChild(newElem4);
    newElem4.lastElementChild.addEventListener("click", function(e){
      a6.innerHTML=parseInt(a6.innerHTML)+1;
    });

    let newElem5 = document.createElement('div');
    newElem5.classList='product';
    newElem5.classList.add('tov5');
    newElem5.classList.add('pro5');
    let i5 = document.createElement('img');
    i5.src = 'img/goods/5.jpg';
    newElem5.appendChild(i5);
    let h5 = document.createElement('h4');
    h5.innerHTML="Вертолет";
    newElem5.appendChild(h5);
    let bu5 = document.createElement('button');
    bu5.id="ton5";
    newElem5.appendChild(bu5);
    let im5 = document.createElement('img');
    im5.src = 'img/cart16.png';
    bu5.appendChild(im5);
    batia.appendChild(newElem5);
    newElem5.lastElementChild.addEventListener("click", function(e){
      a6.innerHTML=parseInt(a6.innerHTML)+1;
    });

    let newElem6 = document.createElement('div');
    newElem6.classList='product';
    newElem6.classList.add('tov6');
    newElem6.classList.add('pro6');
    let i6 = document.createElement('img');
    i6.src = 'img/goods/6.jpg';
    newElem6.appendChild(i6);
    let h6 = document.createElement('h4');
    h6.innerHTML="Дом (красный)";
    newElem6.appendChild(h6);
    let bu6 = document.createElement('button');
    bu6.id="ton6";
    newElem6.appendChild(bu6);
    let im6 = document.createElement('img');
    im6.src = 'img/cart16.png';
    bu6.appendChild(im6);
    batia.appendChild(newElem6);
    newElem6.lastElementChild.addEventListener("click", function(e){
      a6.innerHTML=parseInt(a6.innerHTML)+1;
    });
  }
});

up.addEventListener("click", function(e){
  document.body.scrollIntoView({behavior: 'smooth'});
  //window.scrollTo(0,0);
});
a1.addEventListener("click", function(e){
  const domRect = first.getBoundingClientRect();
  let t2=setInterval(function(){
    window.scrollBy(0, domRect.top/250);
  }, 4);
  setTimeout(function(){
    clearInterval(t2);
  },1000);
});
a2.addEventListener("click", function(e){
  const domRect = two.getBoundingClientRect();
  let t3=setInterval(function(){
    window.scrollBy(0, domRect.top/250);
  }, 4);
  setTimeout(function(){
    clearInterval(t3);
  },1000);
});
a3.addEventListener("click", function(e){
  const domRect = three.getBoundingClientRect();
  let t4=setInterval(function(){
    window.scrollBy(0, domRect.top/250);
  }, 4);
  setTimeout(function(){
    clearInterval(t4);
  },1000);
});
a4.addEventListener("click", function(e){
  const domRect = four.getBoundingClientRect();
  let t5=setInterval(function(){
    window.scrollBy(0, domRect.top/250);
  }, 4);
  setTimeout(function(){
    clearInterval(t5);
  },1000);
});
a5.addEventListener("click", function(e){
  modal.classList.remove("closed");
  modalOverlay.classList.remove("closed");
});
 
but.addEventListener("click", function(e){
  pole.classList.remove('unvisible');
  pole.classList.add('unvisible');
  text.innerHTML="<strong>"+'Уважаемый, '+lastname_field.value+' '+firstname_field.value[0]+'.'+"</strong>"+"<br>"+'Наши специалисты уже получили Вашу заявку и свяжутся с Вами в ближайшее время по телефону'+"<br>"+"<strong>"+phone_field.value+"</strong>"+"<br>"+'Спасибо за обращение!';
  console.log(lastname_field.innerHTML);
});
ton1.addEventListener("click", function(e){
  a6.innerHTML=parseInt(a6.innerHTML)+1;
});
ton2.addEventListener("click", function(e){
  a6.innerHTML=parseInt(a6.innerHTML)+1;
});
ton3.addEventListener("click", function(e){
  a6.innerHTML=parseInt(a6.innerHTML)+1;
});
ton4.addEventListener("click", function(e){
  a6.innerHTML=parseInt(a6.innerHTML)+1;
});
ton5.addEventListener("click", function(e){
  a6.innerHTML=parseInt(a6.innerHTML)+1;
});
ton6.addEventListener("click", function(e){
  a6.innerHTML=parseInt(a6.innerHTML)+1;
});
let preloader=document.body.querySelector(".preloader");
let boi=document.body.querySelector(".legoman");
let t1=setInterval(function(){
  boi.classList.toggle("bigsmall");
}, 1000);
setTimeout(function(){
  preloader.remove();
  clearInterval(t1);
  //clearInterval(t2);
},3000);



document.addEventListener("scroll", function(e){
  let pro1=document.body.querySelectorAll(".pro1");
  for(let i=0;i<pro1.length;i++)
  {
    const dom1 = pro1[i].getBoundingClientRect();
    if((document.body.clientHeight-dom1.bottom)>=1500)
    {
      pro1[i].classList.add("effekt1");
      pro1[i].classList.remove("tov1");
    }
    else{
      pro1[i].classList.add("tov1");
      pro1[i].classList.remove("effekt1");
    }
  };
  let pro2=document.body.querySelectorAll(".pro2");
  for(let i=0;i<pro2.length;i++){
    const dom2 = pro2[i].getBoundingClientRect();
    if((document.body.clientHeight-dom2.bottom)>=1500)
    {
      pro2[i].classList.add("effekt2");
      pro2[i].classList.remove("tov2");
    }
    else{
      pro2[i].classList.add("tov2");
      pro2[i].classList.remove("effekt2");
    }
  }

  let pro3=document.body.querySelectorAll(".pro3");
  for(let i=0;i<pro3.length;i++){
    const dom3 = pro3[i].getBoundingClientRect();
    if((document.body.clientHeight-dom3.bottom)>=1500)
    {
      pro3[i].classList.add("effekt3");
      pro3[i].classList.remove("tov3");
    }
    else{
      pro3[i].classList.add("tov3");
      pro3[i].classList.remove("effekt3");
    }
  }

  let pro4=document.body.querySelectorAll(".pro4");
  for(let i=0;i<pro4.length;i++){
    const dom4 = pro4[i].getBoundingClientRect();
    if((document.body.clientHeight-dom4.bottom)>=1500)
    {
      pro4[i].classList.add("effekt4");
      pro4[i].classList.remove("tov4");
    }
    else{
      pro4[i].classList.add("tov4");
      pro4[i].classList.remove("effekt4");
    }
  }

  let pro5=document.body.querySelectorAll(".pro5");
  for(let i=0;i<pro5.length;i++){
    const dom5 = pro5[i].getBoundingClientRect();
    if((document.body.clientHeight-dom5.bottom)>=1500)
    {
      pro5[i].classList.add("effekt5");
      pro5[i].classList.remove("tov5");
    }
    else{
      pro5[i].classList.add("tov5");
      pro5[i].classList.remove("effekt5");
    }
  }

  let pro6=document.body.querySelectorAll(".pro6");
  for(let i=0;i<pro6.length;i++){
    const dom6 = pro6[i].getBoundingClientRect();
    if((document.body.clientHeight-dom6.bottom)>=1500)
    {
      pro6[i].classList.add("effekt6");
      pro6[i].classList.remove("tov6");
    }
    else{
      pro6[i].classList.add("tov6");
      pro6[i].classList.remove("effekt6");
    }
  }
});
 
closebutton.addEventListener("click", function(e){
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});




