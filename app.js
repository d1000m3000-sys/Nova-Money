load();

function add(){
let val=parseFloat(document.getElementById('amount').value);
let arr=JSON.parse(localStorage.getItem('money')||'[]');
arr.push(val);
localStorage.setItem('money',JSON.stringify(arr));
load();
}

function load(){
let arr=JSON.parse(localStorage.getItem('money')||'[]');
let total=0;
let html='';
arr.forEach(v=>{
total+=v;
html+=`<p>${v}</p>`;
});
document.getElementById('list').innerHTML=html;
document.getElementById('total').innerText=total;
}
