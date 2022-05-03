
var fix=document.querySelector("#four");
var array2=JSON.parse(localStorage.getItem("logindata"))||{};
if(array2==null){
    fix.innerHTML=`<h2><a href="signup.html">Signup</a></h2>
                  <h2><a href="login.html">Login</a></h2>`
}
else{
    fix.innerHTML=`<h2><a href="signup.html">Praveen</a></h2>
        <h2><a href="cart.html">Cart</a></h2>`
}
var array3=JSON.parse(localStorage.getItem("cartdata"))||[];

donbosco(array3);

function donbosco(data){
    data.forEach(function(ele,index){
var box=document.createElement("div");

var d1=document.createElement("h2");
d1.innerText=ele.brand;

var d2=document.createElement("h2");
d2.innerText=ele.name;

var d3=document.createElement("p");
d3.innerText=ele.price;

var d4=document.createElement("p");
d4.innerText=ele.size;

var d5=document.createElement("p");
d5.innerText=ele.productID

var d6=document.createElement("p");
d6.innerText=ele.catagory;

var d7=document.createElement("img");
d7.setAttribute("src",ele.img)

but=document.createElement("button");
but.innerText="Delete";
but.addEventListener("click",function(){
    callone(ele,index);
})


box.append(d7,d1,d2,d3,d4,d5,d6,but);

document.querySelector("#con").append(box);
    })
}

function callone(ele,index){
    array3.splice(index,1);
    localStorage.setItem("cartdata",JSON.stringify(array3));
    window.location.reload();
}