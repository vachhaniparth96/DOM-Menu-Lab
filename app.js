//PART 1
// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
        {text: 'all', href: '/catalog/all'},
        {text: 'top selling', href: '/catalog/top'},
        {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
        {text: 'new', href: '/orders/new'},
        {text: 'pending', href: '/orders/pending'},
        {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
        {text: 'profile', href: '/account/profile'},
        {text: 'sign out', href: '/account/signout'},
    ]},
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
//4.0 - 4.5
const subMenuEl = document.getElementById('sub-menu'); //4.0
subMenuEl.style.height='100%'; //4.1
subMenuEl.style.backgroundColor = ('var(--sub-menu-bg)'); //4.2
subMenuEl.setAttribute('class','flex-around'); //4.3
subMenuEl.style.position = 'absolute'; //4.4
subMenuEl.style.top = '0'; //4.5

//5.1
const topMenuLinks = document.querySelectorAll("#top-menu a");
console.log(topMenuLinks)

let showingSubMenu = false;

//5.2-5.9
topMenuEl.addEventListener('click', function(e) { //5.2
    e.preventDefault();
    // console.dir(menuLinks);
    // console.dir(e.target)
    if (e.target.tagName !== 'A') {
        return
    }

    if(e.target.classList.contains('active')) { //5.3
        e.target.classList.remove('active');
        showingSubMenu = false;
        subMenuEl.style.top = 0;
        return
    }

    for(let link of topMenuLinks) { //5.4
        link.classList.remove('active')
    }

    if(e.target.tagName === 'A') { //5.5
        e.target.classList.add('active');
    }

    const subLinkExists = menuLinks.find(function(link) { //5.6
        if(link.text === e.target.innerHTML) {
            // console.log(link.subLinks)
            // console.log(e.target.innerHTML)
            return e.target.innerHTML;
        }
    })

    if('subLinks' in subLinkExists) {
        showingSubMenu = true;
    } else {
        showingSubMenu = false;
    }

    
    if(showingSubMenu) { //5.7
        buildSubMenu(subLinkExists.subLinks)
        subMenuEl.style.top = '100%';
    } else {
        subMenuEl.style.top = 0;
        mainEl.innerHTML = '<h1>about</h1>'
    }

    function buildSubMenu(subLinks){ //5.8
        subMenuEl.innerHTML = '';
        for(let subLink of subLinks) {
            const linkEl = document.createElement('a');
            linkEl.setAttribute('href', subLink.href);
            linkEl.innerHTML = subLink.text;
            subMenuEl.appendChild(linkEl);
        }
    }
})

//6.0 - 6.3
subMenuEl.addEventListener('click', function(e) { //6.0
    e.preventDefault();
    if(e.target.tagName !=='A') {
        return
    }
    // console.log(e.target.textContent)

    showingSubMenu = false; //6.1
    subMenuEl.style.top = 0;

    for(let link of topMenuLinks) { //6.2
        link.classList.remove('active')
    }

    mainEl.innerHTML = `<h1>${e.target.textContent}</h1>` //6.3
})