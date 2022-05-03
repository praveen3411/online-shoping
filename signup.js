document.querySelector("form").addEventListener("submit",myfunction);
var array1=JSON.parse(localStorage.getItem("userdata"))||{};
function myfunction(){
    event.preventDefault();
    var userdata={
        username:don1.don2.value,
        useremail:don1.don3.value,
        userpass:don1.don4.value
    };
    localStorage.setItem("userdata",JSON.stringify(userdata));
    window.location.href="login.html";
    form.reset();
}