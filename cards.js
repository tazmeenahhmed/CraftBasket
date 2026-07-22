// LOAD OBJECTS INTO PAGES
function loadClayPage() {
    fetch("json/clay.json")
        .then(response => response.json())
        .then(clayObjects => {
            clayObjects.forEach(loadObjects);
        })
        .catch(error => console.error("Failed to load clay data:", error));
}

function loadPaintingPage() {
    fetch("json/painting.json")
        .then(response => response.json())
        .then(paintingObjects => {
            paintingObjects.forEach(loadObjects);
        })
        .catch(error => console.error("Failed to load painting data:", error));
}

function loadCardboardPage() {
    fetch("json/cardboard.json")
        .then(response => response.json())
        .then(cardboardObjects => {
            cardboardObjects.forEach(loadObjects);
        })
        .catch(error => console.error("Failed to load cardboard data:", error));
}

function loadMiscPage() {
    fetch("json/misc.json")
        .then(response => response.json())
        .then(miscObjects => {
            miscObjects.forEach(loadObjects);
        })
        .catch(error => console.error("Failed to load misc data:", error));
}

function loadTheatrePage() {
    fetch("json/theatre.json")
        .then(response => response.json())
        .then(theatreObjects => {
            theatreObjects.forEach(loadObjects);
        })
        .catch(error => console.error("Failed to load theatre data:", error));
}

function loadDesignPage() {
    fetch("json/design.json")
        .then(response => response.json())
        .then(designObjects => {
            designObjects.forEach(loadObjects);
        })
        .catch(error => console.error("Failed to load design data:", error));
}

// CREATE PAGE CONTENTS
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
    container.append(popupContainer);

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

    // BLOG POPUP CONTENTS
    const contentInside = document.createElement("div");
    contentInside.setAttribute('class', 'content-container');
    content.append(contentInside);

    const slider = document.createElement("div");
    slider.setAttribute('class', 'slider');
    const blogContent = document.createElement("div");
    blogContent.setAttribute('class', 'blog-content');
    contentInside.append(slider, blogContent);

    const dimension = document.createElement("div");
    dimension.setAttribute('class', 'img-dimensions');
    const blogImg = document.createElement('img');
    blogImg.setAttribute('class', 'current-img-popup');
    blogImg.src = object.gallery[0];
    dimension.append(blogImg);

    const navDots = document.createElement("div");
    navDots.setAttribute('class', 'nav-dots');
    for (let i = 0; i < object.gallery.length; i++) {
        const navBtn = document.createElement("button");
        navBtn.setAttribute('class', 'nav-btn');
        navBtn.addEventListener("click", (e) => {
            //e.stopPropagation();
            showSlide(blogImg, object.gallery, navDots, i);
        });

        if (i === 0) { navBtn.classList.add('class', 'active'); }
        navDots.append(navBtn);
    }
    slider.append(dimension, navDots);

    const blogTitle = document.createElement('h2');
    blogTitle.textContent = object.title;
    const blogDate = document.createElement('h3');
    blogDate.textContent = object.date;
    const breakLine = document.createElement('br');
    const blogParagraph = document.createElement('p');
    blogParagraph.textContent = object.description;
    const blogInspo = document.createElement('p');
    const bold = document.createElement("strong");
    bold.textContent = "Inspiration: ";
    blogInspo.append(bold, object.inspiration);
    blogContent.append(blogTitle, blogDate, breakLine, blogParagraph, blogInspo);
}


function togglePopup(id) {
    document.getElementById(id).classList.toggle("active");
}

// POPUP IMAGE SLIDER
function showSlide(img, gallery, navDots, index) {
    img.src = gallery[index];

    navDots.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    navDots.children[index].classList.add("active");
}


