let container = document.getElementById("news");
let allNews = JSON.parse(localStorage.getItem("news") || "[]");

function render(news){
container.innerHTML="";
news.forEach(n=>{
container.innerHTML += `
<div class="card" onclick='openArticle(${JSON.stringify(n)})'>

${n.image ? `<img src="${n.image}">` : ""}

<h3>${n.title}</h3>
<p>${n.category || "General"}</p>
</div>
`;
});
}

render(allNews);

// SEARCH
function searchNews(){
let val=document.getElementById("search").value.toLowerCase();
let filtered=allNews.filter(n=>n.title.toLowerCase().includes(val));
render(filtered);
}

// FILTER
function filterCat(cat){
if(cat=="All"){render(allNews);return;}
let filtered=allNews.filter(n=>n.category==cat);
render(filtered);
}

// OPEN ARTICLE
function openArticle(n){
localStorage.setItem("openArticle",JSON.stringify(n));
window.location="article.html";
}