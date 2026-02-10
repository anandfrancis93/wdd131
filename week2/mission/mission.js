let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = '#1a1a2e';
        document.querySelector('.mission-box').style.backgroundColor = '#16213e';
        document.querySelector('.mission-box').style.borderColor = '#0f3460';

        document.querySelector('h1').style.color = '#e0e0e0';
        document.querySelector('.subtitle').style.color = '#4a90d9';
        document.querySelector('.subtitle').style.borderBottomColor = '#0f3460';
        document.querySelector('.main-text').style.color = '#c0c0c0';
        document.querySelector('.italic-text').style.color = '#c0c0c0';

        let listItems = document.querySelectorAll('.mission-list li');
        listItems.forEach(item => {
            item.style.color = '#c0c0c0';
        });

        logo.src = 'images/byui-logo-white.webp';
    } else {
        document.body.style.backgroundColor = '#f0f0f0';
        document.querySelector('.mission-box').style.backgroundColor = 'white';
        document.querySelector('.mission-box').style.borderColor = '#c0c0c0';

        document.querySelector('h1').style.color = '#333';
        document.querySelector('.subtitle').style.color = '#4a90d9';
        document.querySelector('.subtitle').style.borderBottomColor = '#c0c0c0';
        document.querySelector('.main-text').style.color = '#333';
        document.querySelector('.italic-text').style.color = '#333';

        let listItems = document.querySelectorAll('.mission-list li');
        listItems.forEach(item => {
            item.style.color = '#333';
        });

        logo.src = 'images/byui-logo-blue.webp';
    }
}
