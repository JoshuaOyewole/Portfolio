//DYNAMIC FOOTER YEAR
document.getElementById('date').innerText = new Date().getFullYear();

//RESPONSIVE MENU
const toggleBtn = document.getElementById('hidden');
const nav =  document.querySelector('.list-group');
toggleBtn.addEventListener('click', ()=>{
    nav.classList.toggle('block');
    nav.classList.toggle('show');
});