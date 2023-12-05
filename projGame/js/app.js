let day_night = document.getElementById('day_night');
let day_night2 = document.getElementById('day_night2');
day_night2.style.display = "none";
day_night.addEventListener('click', () => {
    document.documentElement.style.setProperty('--color-1', 'rgb(184, 184, 184, .5)');
    document.documentElement.style.setProperty('--color-2', '#000');
    document.documentElement.style.setProperty('--color-3', '#fff');
    document.documentElement.style.setProperty('--color-4', 'rgb(0, 0, 0, .5)');
    document.documentElement.style.setProperty('--color-5', '#663da6');
    day_night.style.display = "none";
    day_night2.style.display = "unset";
});

day_night2.addEventListener('click', () => {
    document.documentElement.style.setProperty('--color-1', '#262b3f');
    document.documentElement.style.setProperty('--color-2', '#fff');
    document.documentElement.style.setProperty('--color-3', '#1e2337');
    document.documentElement.style.setProperty('--color-4', 'rgb(255, 255, 255, .5)');
    document.documentElement.style.setProperty('--color-5', 'greenyellow');
    day_night.style.display = "unset";
    day_night2.style.display = "none";
});

// Battery Navigator
let active_battery = document.getElementById('active_battery');
let batter_icon = document.getElementById('battery_icon');
let battery_level = document.getElementById('battery_level');
let audio = new Audio('audio/Charging.mp3');
//audio.play();

navigator.getBattery().then(battery => {
    const battery_level_change = () => {
        battery_level.innerText = (battery_level * 100) + "%";
    }
    setInterval(battery_level_change, 1000);
    battery_level_change();

    batter_icon.value = battery.charging;
    // alert(battery_icon.value);

    battery.addEventListener('chargingchange', () => {
        switch (battery.charging) {
            case true:
                battery_icon.classList.remove('bi-battery-half');
                battery_icon.classList.add('bi-battery-charging');
                active_battery.classList.add('active_battery');
                battery_icon.style.color = "#fff";
                audio1.play();
                break;
            case false:
                battery_icon.classList.add('bi-battery-half');
                battery_icon.classList.remove('bi-battery-charging');
                active_battery.classList.remove('active_battery');
                battery_icon.style.color = "unset";
                break;
        }
    })
});

let wifi = document.getElementById('wifi');
const wifi_change = () => {
    if (navigator.onLine) {
        wifi.style.color = "var(--color-5)";
    } else {
        wifi.style.color = "";
    }
}
setInterval(wifi_change, 100);
wifi_change();

// 2 Pagina Javascript Start

let img_change = document.getElementById('img_change');

const change_img_data = () => {
    setTimeout(() => {
        img_change.style.background = "url('../images/games/thelastbn.jpg') no-repeat center center/cover"
    }, 1000);
    setTimeout(() => {
        img_change.style.background = "url('../images/games/thelastbn1.jpg') no-repeat center center/cover"
    }, 3000);
    setTimeout(() => {
        img_change.style.background = "url('../images/games/thelastbn2.jpg') no-repeat center center/cover"
    }, 6000);
}

setInterval(change_img_data, 9000);
change_img_data();

// 3 Pagina Javascript Start

let img_change_2 = document.getElementById('img_change_2');

const change_img_data_2 = () => {
    setTimeout(() => {
        img_change_2.style.background = "url('../images/games/gta_2') no-repeat center center/cover"
    }, 1000);
    setTimeout(() => {
        img_change_2.style.background = "url('../images/games/gta_3') no-repeat center center/cover"
    }, 3000);
    setTimeout(() => {
        img_change_2.style.background = "url('../images/games/gta_4') no-repeat center center/cover"
    }, 6000);
}

setInterval(change_img_data_2, 9000);
change_img_data_2();

//done

let play = document.getElementById('play');
let video = document.getElementById('video');

play.addEventListener('click', ()=> {
    if (video.paused || video.currentTime <= 0) {
        video.play();
        video.style.display = "flex";
        img_change.style.display = "none";
        play.innerHTML = '<i class="bi bi-pause-fill"></i> Pause';
    } else {
        video.pause();
        video.style.display = '';
        img_change.style.display = '';
        play.innerHTML = '<i class="bi bi-play-fill"></i> Play';
    }
});

video.addEventListener('ended', ()=> {
    video.pause();
    video.style.display = '';
    img_change.style.display = '';
    play.innerHTML = '<i class="bi bi-play-fill"></i> Play';
});

const JoinData = [
    {
    name: "Jeef [admin]",
    game: "Grand Theft Auto V",
    img: "../images/persons/adm.jpg",
    price: "R$ 50,00"
},
    {
    name: "Amaya666",
    game: "Tomb Raider",
    img: "../images/persons/amaya.jpg",
    price: "R$ 16,00"
},
    {
    name: "RamiroKfren2839",
    game: "Fifa 18",
    img: "../images/persons/ramiro.jpg",
    price: "R$ 36,00"
},
    {
    name: "AbelTroll04",
    game: "Minecraft",
    img: "../images/persons/abel.jpg",
    price: "R$ 10,00"
},
    {
    name: "GuuhsBiuld",
    game: "Red Dead Redemption",
    img: "../images/persons/guhs.jpg",
    price: "R$ 42,00"
},
]

let index = 0;

let join_new_member = document.getElementsByClassName('join_new_member')[0];

function UpdateDiv() {
    setInterval(() => {
        let card = document.createElement('div');
        card.classList.add('card');
        if (index == JoinData.length) {
            index = 0;
        } else {
            index++;
        }
        const { name, game, img, price } = JoinData[index - 1];
        card.innerHTML = `
        <img src="${img}" alt="">
                            <div class="content">
                                <div class="h6_price">
                                    <h5>${game}</h5>
                                    <span>Apenas compra</span>
                                    <h6>${price}</h6>
                                </div>
                                <p>${name}</p>
                            </div>
        `
        join_new_member.appendChild(card);
        join_new_member.scrollTop += 100;
    }, 1000);
};

document.addEventListener('DOMContentLoaded', ()=> {
    UpdateDiv();
})


