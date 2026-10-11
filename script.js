
// MIDAS — THE GOLDEN TOUCH
// Все фотографии загружаются из папки images

const dishes = [
    {
        id: 1,
        name: 'Золотой стейк',
        category: 'main',
        tag: 'CHEF SIGNATURE',
        price: 185,
        image: 'steyk_noir.jpg',
        description: 'Сочный стейк с авторским соусом и ароматными травами.',
        ingredients: 'Говядина, розмарин, масло, перец, овощи.'
    },
    {
        id: 2,
        name: 'Паста Альфредо',
        category: 'main',
        tag: 'ITALIAN CLASSIC',
        price: 89,
        image: 'pasta_alfredo.jpg',
        description: 'Нежная паста в сливочном соусе с пармезаном.',
        ingredients: 'Паста, сливки, пармезан, курица, чеснок.'
    },
    {
        id: 3,
        name: 'Суши Sakura',
        category: 'sushi',
        tag: 'JAPANESE SELECTION',
        price: 135,
        image: 'sushi_sakura.jpg',
        description: 'Авторский сет роллов с ярким вкусом.',
        ingredients: 'Рис, лосось, нори, сливочный сыр, авокадо.'
    },
    {
        id: 4,
        name: 'Бургер Gold',
        category: 'main',
        tag: 'GOLD COLLECTION',
        price: 105,
        image: 'gold_burger.jpg',
        description: 'Фирменный бургер с сочной котлетой и соусом.',
        ingredients: 'Говядина, булочка, чеддер, салат, лук, соус.'
    },
    {
        id: 5,
        name: 'Шоколадный фондан',
        category: 'dessert',
        tag: 'SWEET UNIVERSE',
        price: 69,
        image: 'choko_fondan.jpg',
        description: 'Тёплый шоколадный десерт с нежной серединой.',
        ingredients: 'Шоколад, масло, яйца, мука, ваниль.'
    },
    {
        id: 6,
        name: 'Ягодный лимонад',
        category: 'drink',
        tag: 'FRESH',
        price: 39,
        image: 'limanad.jpg',
        description: 'Освежающий лимонад с ягодами и мятой.',
        ingredients: 'Ягоды, лимон, мята, вода, лёд.'
    },
    {
        id: 7,
        name: 'Золотой секрет',
        category: 'secret',
        tag: 'HIDDEN GOLD',
        price: 249,
        image: 'gold_secret.jpg',
        description: 'Особенное блюдо шефа, вдохновлённое легендой о Мидасе.',
        ingredients: 'Телятина, шафран, трюфельный соус, травы.'
    },
    {
        id: 8,
        name: 'Полуночный десерт',
        category: 'secret',
        tag: 'MIDNIGHT SECRET',
        price: 99,
        image: 'polnichniy_desert.jpg',
        description: 'Тайный десерт из тёмного шоколада с ягодами.',
        ingredients: 'Шоколад, сливки, малина, ваниль.'
    },
    {
        id: 9,
        name: 'Клубничный чизкейк',
        category: 'dessert',
        tag: 'SWEET UNIVERSE',
        price: 75,
        image: 'chizkeyk.jpg',
        description: 'Нежный сливочный чизкейк с ягодным акцентом.',
        ingredients: 'Сливочный сыр, клубника, печенье, сливки.'
    },
    {
        id: 10,
        name: 'Макаруны Paris',
        category: 'dessert',
        tag: 'FRENCH PATISSERIE',
        price: 65,
        image: 'makaruni.jpg',
        description: 'Набор воздушных французских макарунов.',
        ingredients: 'Миндальная мука, сахар, белок, крем.'
    },
    {
        id: 11,
        name: 'Тирамису',
        category: 'dessert',
        tag: 'ITALIAN DESSERT',
        price: 79,
        image: 'tiramisy.jpg',
        description: 'Итальянская классика с кофейным кремом.',
        ingredients: 'Маскарпоне, кофе, савоярди, какао.'
    },
    {
        id: 12,
        name: 'Ванильный эклер',
        category: 'dessert',
        tag: 'PATISSERIE',
        price: 49,
        image: 'ecler.jpg',
        description: 'Заварной эклер с мягким ванильным кремом.',
        ingredients: 'Заварное тесто, ваниль, сливки, глазурь.'
    },
    {
        id: 13,
        name: 'Ягодная панна-котта',
        category: 'dessert',
        tag: 'BERRY COLLECTION',
        price: 69,
        image: 'panna_kotta.jpg',
        description: 'Лёгкая сливочная панна-котта с ягодами.',
        ingredients: 'Сливки, ваниль, желатин, ягодный соус.'
    },
    {
        id: 14,
        name: 'Шоколадный мусс',
        category: 'dessert',
        tag: 'DARK CHOCOLATE',
        price: 85,
        image: 'choko_muss.jpg',
        description: 'Воздушный мусс из насыщенного шоколада.',
        ingredients: 'Тёмный шоколад, сливки, какао, ваниль.'
    },
    {
        id: 15,
        name: 'Пицца MIDAS',
        category: 'main',
        tag: 'HOUSE FAVORITE',
        price: 115,
        image: 'pizza.jpg',
        description: 'Пицца с золотистой корочкой и сочной начинкой.',
        ingredients: 'Тесто, сыр, томаты, мясо, травы.'
    },
    {
        id: 16,
        name: 'Салат от шефа',
        category: 'main',
        tag: 'FRESH SELECTION',
        price: 65,
        image: 'salat.jpg',
        description: 'Свежий салат с фирменной заправкой.',
        ingredients: 'Свежие овощи, зелень, масло, соус.'
    },
    {
        id: 17,
        name: 'Виноградный напиток',
        category: 'drink',
        tag: 'DRINK SELECTION',
        price: 45,
        image: 'vino.jpg',
        description: 'Напиток из винограда для особенного вечера.',
        ingredients: 'Виноградный напиток. Точный состав уточняется.'
    }
];

// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ

const $ = id => document.getElementById(id);

const image = dish => 'images/' + dish.image;

const findDish = id => dishes.find(d => d.id === Number(id));

let selected = null;
let cart = [];
let toastTimer;

// МЕНЮ

function renderMenu(filter = 'all') {
    const shown = dishes.filter(d =>
        d.category !== 'secret' &&
        (filter === 'all' || d.category === filter)
    );

    $('menuGrid').innerHTML = shown.map(d => `
        <article class="food-card"
                 role="button"
                 tabindex="0"
                 data-dish="${d.id}"
                 aria-label="Открыть ${d.name}">

            <div class="food-image">
                <img src="${image(d)}"
                     alt="${d.name}"
                     loading="lazy">
                <span class="food-tag">${d.tag}</span>
            </div>

            <div class="food-body">
                <h3>${d.name}</h3>
                <p>${d.description}</p>

                <div class="food-bottom">
                    <strong>${d.price} TJS</strong>
                    <span>↗</span>
                </div>
            </div>
        </article>
    `).join('');

    $('menuGrid').querySelectorAll('[data-dish]').forEach(card => {
        card.onclick = () => openDish(card.dataset.dish);

        card.onkeydown = e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openDish(card.dataset.dish);
            }
        };
    });
}

renderMenu();

$('filters').querySelectorAll('[data-filter]').forEach(button => {
    button.onclick = () => {
        $('filters').querySelectorAll('button').forEach(b => {
            b.classList.remove('active');
        });

        button.classList.add('active');
        renderMenu(button.dataset.filter);
    };
});

// =====================================
// ГАЛАКТИКА — 8 ВРАЩАЮЩИХСЯ ДЕСЕРТОВ
// =====================================

// radius — расстояние от центра
// size — размер планеты
// start — начальный угол
// speed — время полного оборота в секундах

const planets = [
    { id: 5,  radius: 130,   size: 82,  start: 0,   speed: 14 },
    { id: 9,  radius: 130,   size: 82,  start: 180, speed: 14 },

    { id: 10, radius: 215,   size: 90,  start: 45,  speed: 20 },
    { id: 11, radius: 215,   size: 90,  start: 225, speed: 20 },

    { id: 12, radius: 307.5, size: 96,  start: 90,  speed: 28 },
    { id: 13, radius: 307.5, size: 96,  start: 270, speed: 28 },

    { id: 14, radius: 400,   size: 104, start: 135, speed: 37 },
    { id: 8,  radius: 400,   size: 104, start: 315, speed: 37 }
];

$('planets').innerHTML = planets.map(p => {
    const d = findDish(p.id);

    return `
        <button class="planet"
                data-planet="${d.id}"
                aria-label="Открыть ${d.name}"
                style="
                    --radius: ${p.radius}px;
                    --size: ${p.size}px;
                    --start: ${p.start}deg;
                    --neg-start: ${-p.start}deg;
                    --speed: ${p.speed}s;
                ">

            <span class="planet-inner">
                <img src="${image(d)}"
                     alt="${d.name}"
                     loading="lazy">

                <span class="planet-label">${d.name}</span>
            </span>
        </button>
    `;
}).join('');

// Нажатие на вращающийся десерт

$('planets').querySelectorAll('[data-planet]').forEach(planet => {
    planet.onclick = () => {
        openDish(planet.dataset.planet);
    };
});

// =====================================
// СЕКРЕТНЫЕ БЛЮДА
// =====================================

const secrets = [7, 8];

$('secretGrid').innerHTML = secrets.map((id, index) => {
    const d = findDish(id);

    return `
        <button class="secret-card"
                data-secret="${id}"
                aria-label="Открыть секретное блюдо ${index + 1}">

            <span class="eyebrow">SECRET / 0${index + 1}</span>
            <span class="lid">🍽️</span>

            <img src="${image(d)}" alt="${d.name}">

            <h3>Золотая тайна</h3>
            <p>НАЖМИ, ЧТОБЫ ОТКРЫТЬ ✦</p>
        </button>
    `;
}).join('');

$('secretGrid').querySelectorAll('[data-secret]').forEach(card => {
    card.onclick = () => {
        const d = findDish(card.dataset.secret);

        if (card.classList.contains('open')) {
            openDish(d.id);
            return;
        }

        card.classList.add('open');
        card.querySelector('h3').textContent = d.name;
        card.querySelector('p').textContent = d.price + ' TJS';

        setTimeout(() => {
            openDish(d.id);
        }, 500);
    };
});

// =====================================
// КАРТОЧКА БЛЮДА
// =====================================

function syncLock() {
    const opened =
        $('dishModal').classList.contains('open') ||
        $('drawer').classList.contains('open');

    document.body.classList.toggle('lock', opened);
}

function openDish(id) {
    const d = findDish(id);
    if (!d) return;

    selected = d;

    $('dishImage').src = image(d);
    $('dishImage').alt = d.name;
    $('dishTitle').textContent = d.name;
    $('dishDescription').textContent = d.description;
    $('dishIngredients').textContent = d.ingredients;
    $('dishPrice').textContent = d.price + ' TJS';

    $('dishModal').classList.add('open');
    $('dishModal').setAttribute('aria-hidden', 'false');

    syncLock();
    $('closeModal').focus();
}

function closeDish() {
    $('dishModal').classList.remove('open');
    $('dishModal').setAttribute('aria-hidden', 'true');
    syncLock();
}

$('closeModal').onclick = closeDish;

document.querySelector('[data-close-modal]').onclick = closeDish;

$('addCart').onclick = () => {
    if (selected) {
        addToCart(selected.id);
        closeDish();
    }
};

// =====================================
// КОРЗИНА
// =====================================

function addToCart(id) {
    const item = cart.find(x => x.id === id);

    if (item) {
        item.qty++;
    } else {
        cart.push({ id, qty: 1 });
    }

    renderCart();
    toast('✦ ДОБАВЛЕНО В ЗАКАЗ');
}

function renderCart() {
    const count = cart.reduce((sum, x) => sum + x.qty, 0);
    $('cartCount').textContent = count;

    if (cart.length === 0) {
        $('cartItems').innerHTML = `
            <div class="cart-empty">
                ✦<br>
                В корзине пока пусто.<br>
                Выбери блюда из меню.
            </div>
        `;
    } else {
        $('cartItems').innerHTML = cart.map(item => {
            const d = findDish(item.id);

            return `
                <div class="cart-item">
                    <img src="${image(d)}" alt="${d.name}">

                    <div class="cart-item-info">
                        <h3>${d.name}</h3>
                        <span>${d.price * item.qty} TJS</span>

                        <div class="qty">
                            <button data-qty="${d.id}" data-delta="-1"
                                    aria-label="Уменьшить">−</button>

                            <strong>${item.qty}</strong>

                            <button data-qty="${d.id}" data-delta="1"
                                    aria-label="Увеличить">+</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    const total = cart.reduce((sum, item) => {
        const d = findDish(item.id);
        return sum + d.price * item.qty;
    }, 0);

    $('total').textContent = total + ' TJS';

    $('cartItems').querySelectorAll('[data-qty]').forEach(button => {
        button.onclick = () => {
            const id = Number(button.dataset.qty);
            const delta = Number(button.dataset.delta);

            const item = cart.find(x => x.id === id);
            if (!item) return;

            item.qty += delta;

            cart = cart.filter(x => x.qty > 0);

            renderCart();
        };
    });
}

renderCart();

function openCart() {
    closeDish();

    $('drawer').classList.add('open');
    $('drawer').setAttribute('aria-hidden', 'false');

    syncLock();
    $('closeDrawer').focus();
}

function closeCart() {
    $('drawer').classList.remove('open');
    $('drawer').setAttribute('aria-hidden', 'true');
    syncLock();
}

$('cartTrigger').onclick = openCart;
$('bottomCart').onclick = openCart;
$('closeDrawer').onclick = closeCart;
$('drawerShade').onclick = closeCart;

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeDish();
        closeCart();
    }
});

// =====================================
// ОТПРАВКА В WHATSAPP
// =====================================

$('sendOrder').onclick = () => {
    if (cart.length === 0) {
        toast('СНАЧАЛА ВЫБЕРИ БЛЮДА');
        return;
    }

    let message = 'Здравствуйте! Хочу заказать в MIDAS:\n\n';

    cart.forEach((item, index) => {
        const d = findDish(item.id);

        message +=
            `${index + 1}. ${d.name} × ${item.qty} — ` +
            `${d.price * item.qty} TJS\n`;
    });

    const total = cart.reduce((sum, item) => {
        const d = findDish(item.id);
        return sum + d.price * item.qty;
    }, 0);

    message += '\nИТОГО: ' + total + ' TJS';

    // УКАЖИ НОМЕР WHATSAPP РЕСТОРАНА
    // Например: '992XXXXXXXXX'
    // Если номер пустой, WhatsApp откроет выбор получателя.

    const restaurantPhone = '';

    const url =
        'https://wa.me/' +
        restaurantPhone +
        '?text=' +
        encodeURIComponent(message);

    window.open(url, '_blank', 'noopener,noreferrer');
};

// =====================================
// УВЕДОМЛЕНИЯ
// =====================================

function toast(message) {
    $('toast').textContent = message;
    $('toast').classList.add('show');

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        $('toast').classList.remove('show');
    }, 2600);
}

// =====================================
// МОБИЛЬНОЕ МЕНЮ
// =====================================

$('menuToggle').onclick = () => {
    const open = $('nav').classList.toggle('open');

    $('menuToggle').textContent = open ? '✕' : '☰';
    $('menuToggle').setAttribute('aria-expanded', String(open));
};

$('nav').querySelectorAll('a').forEach(link => {
    link.onclick = () => {
        $('nav').classList.remove('open');
        $('menuToggle').textContent = '☰';
        $('menuToggle').setAttribute('aria-expanded', 'false');
    };
});

// =====================================
// АНИМАЦИЯ ПРОКРУТКИ
// =====================================

function updateScroll() {
    const max =
        document.documentElement.scrollHeight - innerHeight;

    $('progress').style.width =
        (max > 0 ? scrollY / max * 100 : 0) + '%';

    $('header').classList.toggle('scrolled', scrollY > 40);
}

addEventListener('scroll', updateScroll, { passive: true });
updateScroll();

// =====================================
// ПОЯВЛЕНИЕ БЛОКОВ
// =====================================

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08
    });

    document.querySelectorAll('.reveal').forEach(element => {
        observer.observe(element);
    });
} else {
    document.querySelectorAll('.reveal').forEach(element => {
        element.classList.add('visible');
    });
}
