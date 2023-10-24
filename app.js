//PART 1
// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
];

const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = ('var(--main-bg)');
mainEl.innerHTML = '<h1>SEI ROCKS!</h1>';
mainEl.setAttribute('class', 'flex-ctr');

const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height='100%';
topMenuEl.style.backgroundColor = ('var(--top-menu-bg)')
topMenuEl.setAttribute('class', 'flex-around');

for(let menu of menuLinks) {
    const menuEl = document.createElement('a')
    menuEl.setAttribute('href', menu.href)
    menuEl.innerHTML = menu.text;
    topMenuEl.appendChild(menuEl)
}

//Part 2