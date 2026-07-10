// POPUPS



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
    const container = document.querySelector(".scroll-blogs");
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute('class', 'card-container');
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


}