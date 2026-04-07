const basicMenuItems = [
    { name: "Kola / Fanta / Pepsi / Sprite (1L)", price: "2.50₼" },
    { name: "Kola (2L)", price: "4.00₼" },
    { name: "Kola (0.5L)", price: "1.50₼" },
    { name: "Natura", price: "3.50₼" },
    { name: "Cappy", price: "3.00₼" },
    { name: "Bizon (0.25L)", price: "1.20₼" },
    { name: "Bizon (0.5L)", price: "2.00₼" },
    { name: "Pivə", price: "1.50₼" },
    { name: "Çay + pletka", price: "6.00₼" },
    { name: "Çay + rulet", price: "5.00₼" },
    { name: "Kapuçino", price: "1.50₼" },
    { name: "Sadə çay", price: "2.00₼" },
    { name: "Maccafe", price: "1.00₼" },
    { name: "Çips Böyük", price: "4.50₼" },
    { name: "Çips Orta", price: "2.50₼" },
    { name: "Suxarik", price: "1.50₼" },
    { name: "Tum", price: "2.00₼" },
    { name: "Qəlyan", price: "10.00₼" },
    { name: "Pendir", price: "3.00₼" },
    { name: "Noxud", price: "2.00₼" },
    { name: "Fri Orta", price: "3.00₼" },
    { name: "Fri Böyük", price: "5.00₼" },
    { name: "Tost", price: "2.00₼" },
    { name: "Pletka", price: "4.00₼" },
    { name: "Rulet", price: "3.00₼" },
    { name: "Elave pult", price: "0.50₼" }
];

const sets = [
    {
        name: "Dəm Seti",
        price: "20 AZN",
        platform: "PS3",
        duration: "2 saat",
        items: ["Pivə x4", "Pendir x1", "Çips Orta x1", "Qəlyan x1"]
    },
    {
        name: "Set 1",
        price: "15.50 AZN",
        platform: "PS5",
        duration: "2 saat",
        items: ["Kola (2L) x1", "Çips Böyük x1", "Pendir x1"]
    },
    {
        name: "Set 2",
        price: "17 AZN",
        platform: "PS5",
        duration: "3 saat",
        items: ["Tost x2", "İçki (1L) x1", "Çips Orta x1"]
    },
    {
        name: "Set 3",
        price: "23.50 AZN",
        platform: "PS5",
        duration: "4 saat",
        items: ["Tost x4", "İçki (1L) x1", "Çips Orta x1"]
    },
    {
        name: "Set 4",
        price: "26.50 AZN",
        platform: "PS5",
        duration: "2 saat",
        items: ["İçki (1L) x1", "Çips Böyük x1", "Qəlyan x1", "Rulet x1", "Sadə çay x2"]
    },
    {
        name: "Dost Seti 1",
        price: "14 AZN",
        platform: "PS4",
        duration: "2 saat",
        items: ["Kola (1L) x1", "Çips Orta x1", "Tost x1"]
    },
    {
        name: "Ele-Bele Set",
        price: "20 AZN",
        platform: "PS4",
        duration: "3 saat",
        items: ["Pivə x4", "Çips Böyük x1", "Pendir x1", "Qəlyan x1"]
    },
    {
        name: "Tələbə Seti",
        price: "16 AZN",
        platform: "PS3",
        duration: "2 saat",
        items: ["Kola (1L) x1", "Suxarik x1", "Tost x2"]
    },
    {
        name: "VIP Set 1",
        price: "18 AZN",
        platform: "PS5",
        duration: "2 saat",
        items: ["İçki (1L) x1", "Çips Böyük x1", "Pendir x1", "Rulet x1"]
    },
    {
        name: "VIP Set 2",
        price: "12 AZN",
        platform: "PS4",
        duration: "2 saat",
        items: ["Pivə x3", "Noxud x1", "Çips Orta x1"]
    },
    {
        name: "VIP Set 3",
        price: "19 AZN",
        platform: "PS5",
        duration: "3 saat",
        items: ["Tost x3", "İçki (1L) x1", "Pendir x1"]
    },
    {
        name: "Dost Seti 2",
        price: "26 AZN",
        platform: "PS5",
        duration: "4 saat",
        items: ["Pivə x6", "Çips Böyük x1", "Qəlyan x1", "Sadə çay x2"]
    },
    {
        name: "Full Set",
        price: "29 AZN",
        platform: "PS5",
        duration: "4 saat",
        items: ["Tost x4", "İçki (2L) x1", "Qəlyan x1", "Rulet x1", "Pendir x1"]
    }
];

const offers = [
    {
        name: "Pivə Seti 1",
        prices: { PS3: "8 AZN", PS4: "9 AZN", PS5: "10 AZN" },
        duration: "1 saat",
        items: ["Pivə x4", "Noxud x1"]
    },
    {
        name: "Pivə Seti 2",
        prices: { PS3: "12 AZN", PS4: "13 AZN", PS5: "14 AZN" },
        duration: "1 saat",
        items: ["Pivə x6", "Pendir x1"]
    },
    {
        name: "Pivə Seti 3",
        prices: { PS3: "16 AZN", PS4: "17 AZN", PS5: "18 AZN" },
        duration: "1 saat",
        items: ["Pivə x8", "Suxarik x1", "Noxud x1"]
    }
];

function createItemsList(items) {
    return `<ul class="items-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function createSetCard(setData, isOffer = false) {
    const article = document.createElement("article");
    article.className = isOffer ? "menu-card offer-card" : "menu-card";

    const header = document.createElement("button");
    header.type = "button";
    header.className = "card-header";

    if (isOffer) {
        const pricesMarkup = Object.entries(setData.prices)
            .map(([platform, price]) => `<p>${platform} - <strong>${price}</strong></p>`)
            .join("");

        header.innerHTML = `
            <div class="offer-headline">
                <span class="card-name">${setData.name}</span>
                <span class="offer-badge">🔥 Təklif</span>
            </div>
            <div class="card-meta">Müddət: ${setData.duration}</div>
            <div class="offer-prices">${pricesMarkup}</div>
        `;
    } else {
        header.innerHTML = `
            <div class="card-top">
                <span class="card-name">${setData.name}</span>
                <span class="card-price">${setData.price}</span>
            </div>
            <div class="card-meta">${setData.platform} • ${setData.duration}</div>
        `;
    }

    const body = document.createElement("div");
    body.className = "card-body";
    body.innerHTML = createItemsList(setData.items);

    header.addEventListener("click", () => {
        const isOpen = article.classList.contains("open");

        if (isOpen) {
            body.style.maxHeight = "0px";
            article.classList.remove("open");
            return;
        }

        article.classList.add("open");
        body.style.maxHeight = `${body.scrollHeight}px`;
    });

    article.appendChild(header);
    article.appendChild(body);
    return article;
}

function renderBasicMenu() {
    const menuList = document.getElementById("menuList");
    basicMenuItems.forEach((item) => {
        const li = document.createElement("li");
        li.className = "menu-item";
        li.innerHTML = `<span>${item.name}</span><span class="menu-price">${item.price}</span>`;
        menuList.appendChild(li);
    });
}

function renderSets() {
    const setsGrid = document.getElementById("setsGrid");
    sets.forEach((setData) => {
        setsGrid.appendChild(createSetCard(setData));
    });
}

function renderOffers() {
    const offersGrid = document.getElementById("offersGrid");
    offers.forEach((offerData) => {
        offersGrid.appendChild(createSetCard(offerData, true));
    });
}

renderBasicMenu();
renderSets();
renderOffers();
