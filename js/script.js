const burgermenu = () => {
    const burger = document.querySelector('.header-burger');
    const menu = document.querySelector('.header__nav');

    burger.addEventListener('click', () => {
        menu.classList.toggle('nav__active');
    });
};

burgermenu();

const historySwap = () => {
    const button = document.querySelector('.history__more');
    const htext = document.querySelectorAll('.history__text');
    var i = 0;

    button.addEventListener('click', () => {
        if (i !== 2) {
            htext[i].style.display = 'none';
            htext[i + 1].style.display = 'block';
            i++
        } else {
            htext[i].style.display = 'none';
            htext[i + 1].style.display = 'block';
            button.style.display = 'none';
        }
    });
};

historySwap()

const mySwap = () => {
    const card = document.querySelectorAll('.other-card');
    const butnext = document.querySelectorAll('.button-next');
    const butprev = document.querySelectorAll('.button-prev');
    let i = 0;

    butnext[3].addEventListener('click', () => {
        if (i != 2) {
            card[i].classList.toggle('hidden');
            card[i + 1].classList.toggle('hidden');
            i++
        } else {
            card[i].classList.toggle('hidden');
            card[i + 1].classList.toggle('hidden');
            i++
        };
    });

    butprev[3].addEventListener('click', () => {
        if (i != 0) {
            card[i].classList.toggle('hidden');
            card[i - 1].classList.toggle('hidden');
            i--
        } else {
            card[i].classList.toggle('hidden');
            card[i - 1].classList.toggle('hidden');
            i--
        };
    });
};

mySwap();

const myScroll = () => {
    const links = document.querySelectorAll('.header__link');

    const newArray = [...links];

    newArray.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault()

            const id = element.getAttribute('href').substring(1)
            const section = document.getElementById(id)

            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            } else {
                console.log('Такое не имею')
            }
        })
    })
};

myScroll()