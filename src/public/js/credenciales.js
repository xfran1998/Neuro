var botones = document.querySelectorAll('button.form__button.button.submit');
console.log(botones);

botones.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('click_user');
        
        ( async () => {
            get_page_async(`usuario`);
        })();
    });
});
