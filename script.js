let newsBox = document.getElementById("news");
let leaksBox = document.getElementById("leaks");

let allNews = JSON.parse(localStorage.getItem("news") || []);

function render(){
newsBox.innerHTML="";
leaksBox.innerHTML="";

allNews.forEach((n,i)=>{

let card = `
<div class="card" onclick="openArticle(${i})">
${n.image ? `<img src="${n.image}">` : ""}
<h3>${n.title}</h3>
<p>${n.category||"General"}</p>
<div style="color:#aaa;font-size:12px">👁 ${n.views||0} views</div>
</div>
`;

newsBox.innerHTML += card;

if(n.title.toLowerCase().includes("leak")){
leaksBox.innerHTML += card;
}

});
}

render();

function openArticle(i){
allNews[i].views = (allNews[i].views||0)+1;
localStorage.setItem("news",JSON.stringify(allNews));
localStorage.setItem("openArticle",JSON.stringify(allNews[i]));
window.location="article.html";
}