let tg = window.Telegram.WebApp;
let buy = document.getElementById('buy');
let order = document.getElementById('order');

tg.expand();

buy.addEventListener('click' , () =>{
    document.getElementById('main').style.display = 'none'
    document.getElementById('form').style.display = 'flex';
})

order.addEventListener('click', () => {
    document.getElementById('error').innerHTML = '';
    let name = document.getElementById('user_name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    if (name.length <2){
        document.getElementById('error').innerText = 'Ошибка в имени';
        return;
    }

    if (email.length < 5){
        document.getElementById('error').innerText = 'Ошибка в email';
        return;
    }

    if (phone.length , 5){
        document.getElementById('error').innerText = 'Ошибка в номере';
        return;
    }

})


