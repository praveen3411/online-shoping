document.querySelector("form").addEventListener("submit",myfunction2);
var array1=JSON.parse(localStorage.getItem("userdata"))||{};
var array2=JSON.parse(localStorage.setItem("logindata"))||{};

function myfunction2(){
    event.preventDefault();
    var logindata={
        logemail:roy.roy1.value,
        logpass:roy.roy2.value
    };
    if(array1==null){
        alert("Create a account");
    }
    else if(array1.useremail==logindata.logemail && array1.userpass==logindata.logpass){
        alert("Login Successful");
        localStorage.setItem("logindata",JSON.stringify(array1));
        window.location.href="index.html";
    }
    else{
        alert("User Does'nt Exist");
    }
}