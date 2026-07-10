// LOAD OBJECTS INTO PAGES

function loadClayPage() {
    fetch("json/clay.json")
        .then(response => response.json())
        .then(clayObjects => {
            clayObjects.forEach(loadObjects);
        })
        .catch(error => console.error("Failed to load clay data:", error));
}

function loadObjects(object) {

    // CREATE PREVIEW CARD
    const container = document.querySelector(".scroll-blogs");
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute('class', 'card-container');
    cardContainer.setAttribute('id', object.id);
    container.append(cardContainer);

    const imgContainer = document.createElement("div");
    imgContainer.setAttribute('class', 'img-control');
    const textContainer = document.createElement("div");
    textContainer.setAttribute('class', 'text-control');
    cardContainer.append(imgContainer, textContainer);

    const thumbnail = document.createElement("img");
    thumbnail.setAttribute('src', object.thumbnail);
    thumbnail.setAttribute('alt', object.imgAlt);
    imgContainer.append(thumbnail);

    const title = document.createElement("h3");
    title.textContent = object.title;
    const date = document.createElement("p");
    date.textContent = object.date;
    textContainer.append(title, date);

    // CREATE BLOG POPUP
    const popupContainer = document.createElement("div");
    popupContainer.setAttribute('class', 'popup-container');
    popupContainer.setAttribute('id', object.popupID);
    cardContainer.append(popupContainer);

    const overlay = document.createElement("div");
    overlay.setAttribute('class', 'overlay');
    const content = document.createElement("div");
    content.setAttribute('class', 'content');
    popupContainer.append(overlay, content);

    const closeBtn = document.createElement("div");
    closeBtn.setAttribute('class', 'close-btn');
    closeBtn.innerHTML = "&times;";
    content.append(closeBtn);

    cardContainer.addEventListener("click", () => {
        togglePopup(object.popupID);
    });

    closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        togglePopup(object.popupID);
    });

}


function togglePopup(id) {
    document.getElementById(id).classList.toggle("active");
}



/* DELETE AFTER DONE TESTING */
const ccc = document.getElementById("temp");
ccc.addEventListener("click", () => {
     togglePopupTemp();
});

const btn = document.getElementById("temp-btn");
btn.addEventListener("click", (e) => {
     e.stopPropagation();
     togglePopupTemp();
});

function togglePopupTemp() {
    document.getElementById("temp-popup").classList.toggle("active");
}

