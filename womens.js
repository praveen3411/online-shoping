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



    

productData=[
    {
    brand: "Puma",
    name: "selena floral FileList",
    price: "2000",
    size: "X,XX,XXL",
    productID: "women1",
    catagory: "Casual",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/w/twentydressesmix_dr0935_1_984da863.jpg?rnd=20200526195200",
  },
  {
    brand: "Gap",
    name: "balck bella",
    price: "1347",
    size: "X,M,L,XX,XXL",
    productID: "women2",
    catagory: "festive",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/1/4/146117301_1_7fcd0574.jpg?rnd=20200526195200",
  },
  {
    brand: "Puma",
    name: "chil pill supersoft palysuit",
    price: "799",
    size: "M,L,XX,XXS",
    productID: "women3",
    catagory: "party",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/c/achwsivc466_1_a6c9da54.jpg?rnd=20200526195200",
  },
  {
    brand: "Gap",
    name: "plus size womens",
    price: "2000",
    size: "X,M,L,XXS,XXL",
    productID: "women4",
    catagory: "formal",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/i/n/ind158-pnk_1_3dc181e4.jpg?rnd=20200526195200",
  },
  {
    brand: "Bady Moo",
    name: "balck bella",
    price: "1347",
    size: "X,M,L",
    productID: "women5",
    catagory: "workout",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/p/h/pheeta-pht0067_1_96256fbd.jpg?rnd=20200526195200",
  },
  {
    brand: "Pepe jeans",
    name: "plus size womens",
    price: "979",
    size: "XXS,M,L",
    productID: "women6",
    catagory: "travel",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/o/_/o_228327501_1_857abfa6.jpg?rnd=20200526195200",
  },
  {
    brand: "Puma",
    name: "chil pill supersoft palysuit",
    price: "2000",
    size: "XXL,M,L",
    productID: "women7",
    catagory: "sports",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/w/twentydressesmix_dr0769_1_90caf4b3.jpg?rnd=20200526195200",
  },
  {
    brand: "Gap",
    name: "chil pill supersoft palysuit",
    price: "1347",
    size: "X,M,L,XX",
    productID: "women8",
    catagory: "Casual",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/k/a/kazo-123019black_1_85f6e006.jpg?rnd=20200526195200",
  },
  {
    brand: "Bady Moo",
    name: "balck bella",
    price: "976",
    size: "XS,M,L,XX",
    productID: "women9",
    catagory: "festive",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/r/t/rtor0011_1_67335460.jpg?rnd=20200526195200",
  },
  {
    brand: "Gap",
    name: "woman cotton off white",
    price: "456",
    size: "X,L,XX",
    productID: "women10",
    catagory: "party",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/h/ahtufrgfe19523_1_e0416277.jpg?rnd=20200526195200"
  },
  {
    brand: "Bee bay",
    name: "woman cotton off white",
    price: "986",
    size: "M,L,XXS",
    productID: "women11",
    catagory: "formal",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/c/achwkea595-1_dc090828.jpg?rnd=20200526195200",
  },
  {
    brand: "Kaniroot",
    name: "chill pill supersoft",
    price: "567",
    size: "S,M,L,XXl",
    productID: "women12",
    catagory: "workout",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/2/3/238451501_1_43bf9c90.jpg?rnd=20200526195200",
  },
  {
    brand: "Bee bay",
    name: "Curev multi-Color",
    price: "765",
    size: "S,X,L,XXl",
    productID: "women13",
    catagory: "travel",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/r/t/rtor0011_1_67335460.jpg?rnd=20200526195200",
  },
  {
    brand: "Gap",
    name: "Mega striple",
    price: "9999",
    size: "S,M,X,XXL",
    productID: "women14",
    catagory: "sports",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/o/_/o_119512401_1_e2d71be7.jpg?rnd=20200526195200",
  },
  {
    brand: "Puma",
    name: "balck bella",
    price: "1347",
    size: "S,M,X,XXL",
    productID: "women15",
    catagory: "Casual",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/1/4/146117301_1_7fcd0574.jpg?rnd=20200526195200",
  },
  {
    brand: "Kaniroot",
    name: "chil pill supersoft palysuit",
    price: "799",
    size: "S,M,L,XXL",
    productID: "women16",
    catagory: "festive",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/c/achwsivc466_1_a6c9da54.jpg?rnd=20200526195200",
  },
  {
    brand: "Puma",
    name: "plus size womens",
    price: "2000",
    size: "S,XX",
    productID: "women17",
    catagory: "party",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/i/n/ind158-pnk_1_3dc181e4.jpg?rnd=20200526195200",
  },
  {
    brand: "Gap",
    name: "balck bella",
    price: "1347",
    size: "S,M,XX,XXL",
    productID: "women18",
    catagory: "formal",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/p/h/pheeta-pht0067_1_96256fbd.jpg?rnd=20200526195200",
  },
  {
    brand: "Bee bay",
    name: "plus size womens",
    price: "979",
    size: "M,XXL,XX",
    productID: "women19",
    catagory: "workout",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/o/_/o_228327501_1_857abfa6.jpg?rnd=20200526195200",
  },
  {
    brand: "Puma",
    name: "chil pill supersoft palysuit",
    price: "2000",
    size: "M,X,L,XXL",
    productID: "women20",
    catagory: "travel",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/w/twentydressesmix_dr0769_1_90caf4b3.jpg?rnd=20200526195200",
  },
  {
    brand: "Puma",
    name: "chil pill supersoft palysuit",
    price: "1347",
    size: "M,L,XXL",
    productID: "women21",
    catagory: "sport",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/k/a/kazo-123019black_1_85f6e006.jpg?rnd=20200526195200",
  },
  {
    brand: "Gap",
    name: "balck bella",
    price: "976",
    size: "S,XX",
    productID: "women22",
    catagory: "Casual",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/r/t/rtor0011_1_67335460.jpg?rnd=20200526195200",
  },
  {
    brand: "Puma",
    name: "woman cotton off white",
    price: "456",
    size: "XXL",
    productID: "women23",
    catagory: "festive",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/h/ahtufrgfe19523_1_e0416277.jpg?rnd=20200526195200"
  },
  {
    brand: "Gap",
    name: "woman cotton off white",
    price: "986",
    size: "S,X,L",
    productID: "women24",
    catagory: "party",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/c/achwkea595-1_dc090828.jpg?rnd=20200526195200",
  },
  {
    brand: "Kaniroot",
    name: "chill pill supersoft",
    price: "567",
    size: "S,XXL,XX",
    productID: "women25",
    catagory: "formal",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/2/3/238451501_1_43bf9c90.jpg?rnd=20200526195200",
  },
]
var array3=JSON.parse(localStorage.getItem("cartdata"))||[];

productData.forEach(function(ele){
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
    but.innerText="Add To Cart";
    but.addEventListener("click",function(){
        callone(ele);
    })
    

    box.append(d7,d1,d2,d3,d4,d5,d6,but);

    document.querySelector("#bomma").append(box);
})

function callone(ele){
array3.push(ele);
localStorage.setItem("cartdata",JSON.stringify(array3));
}