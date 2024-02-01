let source = [{
    title: "Стартуем",
    desc: "қҴ\xa4ӄҹҷҼӅӆӄҴӊҼӒ\xa4ӁҴ\xa4ӅҴҽӆҹ",
    src: "GLHF",
    reward: 50,
    exp: 10
}, {
    title: "Ночная пчёлка",
    desc: "қҴ\xa4Ӆҵӂӄ\xa4ҹҺҹҸҹӁҹҶӁӂҽ\xa4ӁҴҷӄҴҸӏ\xa4Ӆ\xa4\xb4\xb4\xbe\xb4\xb4\xa4Ӄӂ\xa4\xb4\xb4\xbe\xb4\xb9",
    src: "NightButterfly",
    reward: 100,
    exp: 50
}, {
    title: "Хорошая попытка",
    desc: "қҴ\xa4ӃӇӅӆӂҽ\xa4ӄҹһӇҿӐӆҴӆ\xa4Ҷ\xa4ӅӃӄҴҶӂӋӁҼҾҹ",
    src: "GG",
    reward: 20,
    exp: 10
}, {
    title: "HackerMan",
    desc: "қҴ\xa4ӁҴӉӂҺҸҹӁҼҹ\xa4ӅҾӄӏӆӂҷӂ\xa4ӑҿҹӀҹӁӆҴ\xa4ӁҴ\xa4ӅҴҽӆҹ\xa4Ҽ\xa4ҾҿҼҾ\xa4Ӄӂ\xa4ӁҹӀӇ",
    src: "HackerMan",
    reward: 1e3,
    exp: 1e3
}, {
    title: "Постоянный клиент",
    desc: "қҴ\xa4ӃӂӅҹӍҹӁҼҹ\xa4ӅҴҽӆҴ\xa4Ӆ\xa4ӃӂӁҹҸҹҿӐӁҼҾҴ\xa4Ӄӂ\xa4ҶӂӅҾӄҹӅҹӁӐҹ",
    src: "DaysSeven",
    reward: 500,
    exp: 200
}, {
    title: "Мини",
    desc: "қҴ\xa4ҶӉӂҸ\xa4Ӌҹӄҹһ\xa4ӇӅӆӄӂҽӅӆҶӂ\xa4Ӆ\xa4ӌҼӄҼӁӂҽ\xa4ӀҹӁӐӌҹ\xa4\xbb\xb4\xb4\xf4\xfc",
    src: "Mobile",
    reward: 10,
    exp: 10
}, {
    title: "Шопоголик",
    desc: "қҴ\xa4ӃҹӄҶӇӒ\xa4ӃӂҾӇӃҾӇ\xa4Ҷ\xa4ӀҴҷҴһҼӁҹ",
    src: "Shoping",
    reward: 50,
    exp: 50
}, {
    title: "Скрудж Макдак",
    desc: "қҴ\xa4ӁҴҾӂӃҿҹӁҼҹ\xa4\xb5\xb4\xb4\xb4\xb4\xa4ӅҹӄҹҵӄҴ",
    src: "Money",
    reward: 50,
    exp: 500
}, {
    title: "На стиле",
    desc: "қҴ\xa4ӃӂҾӇӃҾӇ\xa4ӅӀҴҽҿҼҾҴ\xb0\xa4ӅӆҴӆӇӅҴ\xb0\xa4ӄҴӀҾҼ\xa4Ҽ\xa4ӇӅӆҴӁӂҶҾҼ\xa4ҴҶҴӆҴӄҴ",
    src: "Style",
    reward: 100,
    exp: 200
}, {
    title: "Непостоянный",
    desc: "қҴ\xa4ӅӀҹӁӇ\xa4ӁҼҾӁҹҽӀҴ",
    src: "ChangeLogin",
    reward: 200,
    exp: 100
}, {
    title: "Снимаю шляпу",
    desc: "қҴ\xa4ӁҴӉӂҺҸҹӁҼҹ\xa4ӇӓһҶҼӀӂӅӆҼ\xa4ӁҴ\xa4ӅҴҽӆҹ",
    src: "SafetySite",
    reward: 1500,
    exp: 1500
}, {
    title: "Волонтёр",
    desc: "қҴ\xa4ӂӆӃӄҴҶҾӇ\xa4ӂҵӄҴӆӁӂҽ\xa4ӅҶӓһҼ",
    src: "Volunteer",
    reward: 50,
    exp: 50
}, {
    title: "Четвертовать",
    desc: "қҴ\xa4ӃӄӂҶҹҸҹӁҼҹ\xa4ӁҴ\xa4ҷҿҴҶӁӂҽ\xa4ӅӆӄҴӁҼӊҹ\xa4ҵӂҿҹҹ\xa4\xba\xa4ӋҴӅӂҶ",
    src: "Quarter",
    reward: 300,
    exp: 200
}, {
    title: "Любопытный",
    desc: "қҴ\xa4ӂӆҾӄӏӆҼҹ\xa4ӅӆӄҴӁҼӊӏ\xa4\xb8\xb4\xb8",
    src: "Curious",
    reward: 100,
    exp: 200
}, {
    title: "Мега мозг",
    desc: "қҴ\xa4ҾҿҼҾ\xa4Ӄӂ\xa4ӑӆӂҽ\xa4ҴӋҼҶҾҹ",
    src: "LeftBrain",
    reward: 30,
    exp: 50
}, {
    title: "Коллекционер",
    desc: "ҥӂҵӄҴӆӐ\xa4Ҽ\xa4ӃӂҿӇӋҼӆӐ\xa4ӁҴҷӄҴҸӇ\xa4һҴ\xa4ӂҸӁӇ\xa4ҾӂҿҿҹҾӊҼӒ",
    src: "Collection",
    reward: 400,
    exp: 50
}, {
    title: "Бывалый",
    desc: "ңӂҿӇӋҼӆӐ\xa4\xb9\xa4ӇӄӂҶҹӁӐ",
    src: "ExpPeople",
    reward: 300,
    exp: 50
}, {
    title: "Богатей",
    desc: "қҴҸӂӁҴӆҼӆӐ\xa4Ҷ\xa4ӃҹӄҶӏҽ\xa4ӄҴһ",
    src: "DonateMan",
    reward: 500,
    exp: 500
}, {
    title: "Шпаргалка",
    desc: "ҥҾҴӋҴӆӐ\xa4ӄҹӌҹӁҼҹ\xa4ҿӒҵӂҽ\xa4һҴҸҴӋҼ",
    src: "Solution",
    reward: 50,
    exp: 50
}, {
    title: "Транжира",
    desc: "ңӂӆӄҴӆҼӆӐ\xa4\xb5\xb4\xb4\xb4\xb4\xa4ӅҹӄҹҵӄҴ",
    src: "SoldMoney",
    reward: 200,
    exp: 500
}, {
    title: "Знай своего врага",
    desc: "ңӂӅӀӂӆӄҹӆӐ\xa4ӃӄӂӈҼҿӐ\xa4ҸӄӇҷӂҷӂ\xa4ӃӂҿӐһӂҶҴӆҹҿӓ",
    src: "Enemy",
    reward: 50,
    exp: 50
}, {
    title: "Предприниматель",
    desc: "ҖӏӅӆҴҶҼӆӐ\xa4ӑҿҹӀҹӁӆ\xa4ҾӂҿҿҹҾӊҼҼ\xa4ӁҴ\xa4ӄӏӁҾҹ",
    src: "Salesman",
    reward: 20,
    exp: 20
}];

const banList = ["￘","￝","ﾰ"]

source.forEach(elem=>{
    let desc = ""
    for (let index = 0; index < elem.desc.length; index++) {
        const char = String.fromCharCode(elem.desc.charCodeAt(index)-132)
        desc+=banList.indexOf(char) == -1 ? char: " "
    }
    const p = document.createElement("p")
    p.innerText = `Название: ${elem.title}, Описание: ${desc}, Исходник: ${elem.src}, Серебро: ${elem.reward}, Название: ${elem.exp}`
    document.body.appendChild(p)
})