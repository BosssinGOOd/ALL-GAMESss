

const container = document.getElementById("cardsContainer");
const filter = document.getElementById("categoryFilter");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector("#modal .close-btn");

const favoriteCounter = document.getElementById("favoriteCounter");
const openFavorites = document.getElementById("openFavorites");
const favoritesModal = document.getElementById("favoritesModal");
const closeFavorites = document.getElementById("closeFavorites");
const favoritesList = document.getElementById("favoritesList");
const games = [
    { title: "Counter-Strike", category: "fantasy", img: "https://avatars.mds.yandex.net/i?id=7aa3a462dbf2891d41b01b851a77390f32c51714-4012095-images-thumbs&n=13", desc: "Один из самых популярных командных шутеров в мире." },
    { title: "Minecraft", category: "classic", img: "https://avatars.mds.yandex.net/i?id=060769d52651bdfd3faa806c8ada2d7ca6a5d75f-8568171-images-thumbs&n=13", desc: "Песочница с бесконечными возможностями." },
    { title: "Grand Theft Auto V", category: "fantasy", img: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png", desc: "Открытый мир с криминальным сюжетом." },
    { title: "The Witcher 3", category: "fantasy", img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg", desc: "Культовая ролевая игра с богатым миром." },
    { title: "Terraria", category: "classic", img: "https://avatars.mds.yandex.net/i?id=0f91537f674b0ea683bb5c4891d91cba59c874fe-11869273-images-thumbs&n=13", desc: "2D-песочница с исследованием и приключениями." },
    { title: "Stardew Valley", category: "classic", img: "https://avatars.mds.yandex.net/i?id=602275daddb81108f820353fa938190e7f038b61-8529854-images-thumbs&n=13", desc: "Фермерский симулятор с RPG-элементами." },
    { title: "Silent Hill 2", category: "detective", img: "https://avatars.mds.yandex.net/i?id=a8909afaefbe923e87a5f52fdccc20ddfd0b98ba-5233821-images-thumbs&n=13", desc: "Туман, страх и сильный сюжет." },
    { title: "The Evil Within", category: "detective", img: "https://avatars.mds.yandex.net/get-entity_search/2363292/1227098696/S600xU_2x", desc: "Напряжённый хоррор с выживанием." },
    { title: "The Last of Us", category: "classic", img: "https://avatars.mds.yandex.net/get-entity_search/10767883/1196910146/SUx182_2x", desc: "The Last of Us — игра в жанрах action-adventure." },
    { title: "Red Dead Redemption", category: "classic", img: "https://avatars.mds.yandex.net/get-entity_search/5542822/551836602/SUx104_2x", desc: "Red Dead Redemption — компьютерная игра в жанре action-adventure." },
    { title: "Five Nights at Freddy’s", category: "detective", img: "https://avatars.mds.yandex.net/get-entity_search/4759071/1228890855/SUx182_2x", desc: "Five Nights at Freddy’s — point-and-click survival horror." },
    { title: "The Dark Pictures Anthology", category: "detective", img: "https://avatars.mds.yandex.net/i?id=e55911b85e7cf9d059954e2aca1fa6374ea6d7ea-10385082-images-thumbs&n=13", desc: "Интерактивное кино с элементами survival horror." },
    { title: "Metro Exodus", category: "fantasy", img: "https://avatars.mds.yandex.net/get-entity_search/1589423/1227716259/SUx182_2x", desc: "Metro Exodus — шутер от первого лица." },
    { title: "S.T.A.L.K.E.R.", category: "fantasy", img: "https://avatars.mds.yandex.net/get-entity_search/10920629/1227512394/SUx182_2x", desc: "S.T.A.L.K.E.R. — шутер с элементами RPG." },
    { title: "Hollow Knight", category: "fantasy", img: "https://avatars.mds.yandex.net/get-entity_search/2001742/1238285801/SUx182_2x", desc: "Метроидвания с красивой анимацией и сложными боями." },
    { title: "Celeste", category: "classic", img: "https://avatars.mds.yandex.net/get-entity_search/2269087/1237041816/SUx182_2x", desc: "Платформер с эмоциональной историей и сложными уровнями." },
    { title: "Peek", category: "classic", img: "https://avatars.mds.yandex.net/i?id=a6dc6bb599356ab02ad15e2be652a92019cf0819-12527471-images-thumbs&n=13", desc: "Платформер с эмоциональной историей и сложными уровнями." },
    { title: "SUPERNORMAL", category: "detective", img: "https://avatars.mds.yandex.net/i?id=66d4b02db55dae9f9cf8361b3362baf8a6926da2-4275701-images-thumbs&n=13", desc: "SUPERNORMAL, вдохновленная Allison Road - хоррор, события происходят в обычной квартире, скрывающей мрачные тайны. Воплотитесь в роль детектива Уайетта, его задача - раскрыть исчезновения дочери Масато Сакамото. Ищите подсказки и раскройте зловещую правду." },
    { title: "Team Fortress 2", category: "fantasy", img: "https://avatars.mds.yandex.net/i?id=84b7c841e09c4fca83fd3a68bc8df693-6976749-images-thumbs&n=13", desc: "Team Fortress 2 (TF2) — компьютерная игра в жанре многопользовательского шутера от первого лица, разработанная и изданная компанией Valve Corporation." },
    { title: "Cyberpunk 2077", category: "fantasy", img: "https://avatars.mds.yandex.net/i?id=2a0000019bb893d6ee3362949b7afdf27458-989033-fast-images&n=13", desc: "Cyberpunk 2077 — приключенческая ролевая игра с открытым миром в жанре экшн-адвенчуры, разработанная и изданная студией CD Projekt RED." },
    { title: "DOOM Eternal", category: "classic", img: "https://avatars.mds.yandex.net/i?id=62a918b06642ec7d888cb309805770cf106dd0c6-5128282-images-thumbs&n=13", desc: "Армии ада вторглись на Землю. Станьте Палачом Рока и убейте демонов во всех измерениях, чтобы спасти человечество. Они боятся только… тебя." },
    { title: "The Dark Pictures Anthology", category: "detective", img: "https://repack-igruha.net/uploads/posts/2026-01/25668f87b8_library_600x900.webp", desc: "Серия убийств шокирует Голливуд! Используйте свои детективные навыки: исследуйте место преступления, ищите улики, раскройте тайну. Кто стоит за этими загадочными убийствами?." },
    { title: "Nobody Wants to Die", category: "detective", img: "https://avatars.mds.yandex.net/i?id=31805cb96c6d5edd442f4c0cfc060d29909c137a-12184992-images-thumbs&n=13", desc: "Добро пожаловать в мрачный Нью-Йорк 2329 года, где люди обрели великий дар — бессмертие, за которое нужно платить. В этой интерактивной нуарной истории вам предстоит стать детективом Джеймсом Карра, который идёт на крупный риск, чтобы поймать серийного убийцу, устроившего охоту на элиту города." },
    { title: "Sherlock Holmes Chapter One", category: "classic", img: "https://images.gog-statics.com/1fdef6bd9c10a5bd0d99a63007eb95e8ab07e81661f7abea5d7f476e0b4b74ca.jpg", desc: "В детективном триллере, действие которого происходит на опасном экзотическом острове, молодой Шерлок Холмс расследует загадочную смерть матери и пытается найти своё место в жизни." },
];
const totalGames = document.getElementById("totalGames");

const openCommunity = document.getElementById("openCommunity");
const communityModal = document.getElementById("communityModal");
const closeCommunity = document.getElementById("closeCommunity");
const messageInput = document.getElementById("messageInput");
const sendMessage = document.getElementById("sendMessage");
const messagesBlock = document.getElementById("messages");

function getFavorites() { return JSON.parse(localStorage.getItem("favorites")) || []; }
function updateFavoriteCounter() { favoriteCounter.textContent = getFavorites().length; }
function loadFavorites() {
    favoritesList.innerHTML = "";
    const favorites = getFavorites();
    if (!favorites.length) { favoritesList.innerHTML = "<p>Нет любимых игр 😔</p>"; return; }
    favorites.forEach(title => {
        const game = games.find(g => g.title === title);
        if (!game) return;
        const div = document.createElement("div");
        div.className = "favorite-item";
        div.innerHTML = `<img src="${game.img}" alt="${game.title}"><span>${game.title}</span><button class="removeFavorite">Удалить</button>`;
        div.querySelector(".removeFavorite").addEventListener("click", () => {
            let fav = getFavorites().filter(f => f !== game.title);
            localStorage.setItem("favorites", JSON.stringify(fav));
            updateFavoriteCounter(); loadFavorites(); renderCards(filter.value);
        });
        favoritesList.appendChild(div);
    });
}
openFavorites.addEventListener("click", () => { loadFavorites(); favoritesModal.classList.remove("hidden"); });
closeFavorites.addEventListener("click", () => { favoritesModal.classList.add("hidden"); });
favoritesModal.addEventListener("click", e => { if (e.target === favoritesModal) favoritesModal.classList.add("hidden"); });

function updateTotalGames(category = "all") {
    totalGames.textContent = games.filter(g => category === "all" || g.category === category).length;
}

function renderCards(category = "all") {
    container.innerHTML = "";
    const favorites = getFavorites();
    games.filter(g => category === "all" || g.category === category).forEach(game => {
        const card = document.createElement("div"); card.className = "card";
        card.innerHTML = `<div class="card-img">
      <img src="${game.img}" alt="${game.title}">
      <div class="card-overlay"><span class="icon">🎮</span><span>Подробнее</span></div>
      <button class="favorite-btn ${favorites.includes(game.title) ? "active" : ""}">❤</button>
    </div><h3>${game.title}</h3>`;
        const favBtn = card.querySelector(".favorite-btn");
        favBtn.addEventListener("click", () => {
            let fav = getFavorites();
            if (fav.includes(game.title)) { fav = fav.filter(f => f !== game.title); favBtn.classList.remove("active"); }
            else { fav.push(game.title); favBtn.classList.add("active"); }
            localStorage.setItem("favorites", JSON.stringify(fav)); updateFavoriteCounter();
        });
        card.querySelector(".card-img").addEventListener("click", e => {
            if (e.target.classList.contains("favorite-btn")) return;
            modalImg.src = game.img; modalImg.alt = game.title;
            modalTitle.textContent = game.title; modalDesc.textContent = game.desc;
            modal.classList.remove("hidden");
        });
        container.appendChild(card);
    });
    updateTotalGames(category);
}

closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", e => { if (e.target === modal) modal.classList.add("hidden"); });

filter.addEventListener("change", () => { renderCards(filter.value); });

openCommunity.addEventListener("click", e => { e.preventDefault(); communityModal.classList.remove("hidden"); loadMessages(); });
closeCommunity.addEventListener("click", () => communityModal.classList.add("hidden"));
communityModal.addEventListener("click", e => { if (e.target === communityModal) communityModal.classList.add("hidden"); });
sendMessage.addEventListener("click", () => {
    const text = messageInput.value.trim(); if (!text) return;
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(text); localStorage.setItem("messages", JSON.stringify(messages));
    messageInput.value = ""; loadMessages();
});
function loadMessages() {
    messagesBlock.innerHTML = "";
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages
}
const header = document.querySelector(".header");
const toggleHeaderBtn = document.getElementById("toggleHeader");

toggleHeaderBtn.addEventListener("click", () => {
    header.classList.toggle("hidden-header");

    if (header.classList.contains("hidden-header")) {
        toggleHeaderBtn.textContent = "⬇ Открыть";
        document.body.style.paddingTop = "70px";
    } else {
        toggleHeaderBtn.textContent = "⬆ Свернуть";
        document.body.style.paddingTop = "320px";
    }
});
if (header && toggleHeaderBtn) {
    toggleHeaderBtn.addEventListener("click", () => {
        header.classList.toggle("hidden-header");

        if (header.classList.contains("hidden-header")) {
            toggleHeaderBtn.textContent = "⬇ Развернуть";
            document.body.style.paddingTop = "80px";
        } else {
            toggleHeaderBtn.textContent = "⬆ Свернуть";
            document.body.style.paddingTop = "320px";
        }
    });
}

updateCounters();
renderCards();
