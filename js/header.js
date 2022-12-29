// function printHeader(currentPage) {

//     let homeLink, reviewzLink, authorzLink = "";
//     if (currentPage == "Home") {
//         homeLink = " current";
//     } else if (currentPage == "Reviewz") {
//         reviewzLink = " current";
//     } else if (currentPage == "Authorz") {
//         authorzLink = " current";
//     }
// }

// header.innerHTML = `<header class="header" id="header">
// <nav class="navbar container">
//     <a href="./index.html">
//         <h1 class="logo">2 Jewz Food Reviewz</h1>
//     </a>

//     <div class="menu" id="menu">
//         <ul class="list">
//             <li class="list-item">
//                 <a href="/Users/sicherman/FrontEnd/frontEndOne/index.html" class="list-link">Home</a>
//             </li>
//             <li class="list-item">
//                 <a href="/Users/sicherman/FrontEnd/frontEndOne/html/reviewz.html" class="list-link">Reviewz</a>
//             </li>
//             <li class="list-item">
//                 <a href="/Users/sicherman/FrontEnd/frontEndOne/html/authorz.html" class="list-link">Authorz</a>
//             </li>
//         </ul>
//     </div>
// </nav>
// </header>`

// document.querySelectorAll('.list-link').forEach(link => {
//     if(link.href == window.location.href){
//         link.setAttribute("class", "list-link current")
//     }
// })

// var itemList = document.getElementById("menu")
// var items = itemList.getElementsByClassName("list-link")

// for (var i = 0; i < items.length; i++) {
//     items[i].addEventListener("click", function(){
//         var current = document.getElementsByClassName("current");

//         if (current.length > 0){
//             current[0].className = current[0].className.replace(" current", "");
//         }

//         this.className += " current";
//     });
// }


