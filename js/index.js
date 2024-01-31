let services = [
    {
        img: ('./icon/system/windows.png'),
        h2: 'Windows',
        h3: 'Operatsion sistemalarini o`rnatish',
        h4: 'Windows dasturlarini o`rnatish va tushuntirib berish'
    },
    {
        img: ('./icon/system/terminal.png'),
        h2: 'Linux',
        h3: 'Operatsion sistemalarini o`rnatish',
        h4: 'Linux dasturlarini o`rnatish va tushuntirib berish'
    },
    {
        img: ('./icon/system/laptop.png'),
        h2: 'Kurslar',
        h3: 'Kompyuter savodxonligi',
        h4: 'Qisqa vaqt ichida kompyuter bilan ishlashni o`rganing'
    },
    {
        img: ('./icon/system/global.png'),
        h2: 'Web sayt',
        h3: 'Kreativ dezayn va doimiy texnik qo`llab-quvvatlash',
        h4: 'Avtomatlashtirilgan tizim orqali vaqtingizni tejang'
    }
]

let servis = document.getElementById('servis-cards')

services.forEach(e => {
    servis.innerHTML += `
        <div class="servis-card">
            <img src=${e.img} alt="">
            <h2>${e.h2}</h2>
            <h3>${e.h3}</h3>
            <h4>${e.h4}</h4>
        </div>

        <div class="services-card_back"></div>
    `
});