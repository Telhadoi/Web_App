let tg = window.Telegram.WebApp;
let buy = document.getElementById('buy');
let order = document.getElementById('order');

tg.expand();

buy.addEventListener('click' , () =>{
    document.getElementById('main').style.display = 'none'
    document.getElementById('form').style.display = 'flex';
})



