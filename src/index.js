console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
document.addEventListener('DOMContentLoaded', () => {
    const div = document.getElementById('dog-image-container');
    fetch(imgUrl)
        .then(res => res.json())
        .then(res => {
            res.message.forEach((imgSrc) => {
                const img = document.createElement('img');
                img.src = imgSrc;
                div.appendChild(img);
            })
        });
});
var ul = document.createElement('ul');
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
document.addEventListener('DOMContentLoaded', () => {
    ul = document.getElementById('dog-breeds');
    fetch(breedUrl)
        .then(res => {
            res.message.forEach((breedSrc) => {
                const img = document.createElement('breed');
                img.src = breedSrc;
                ul.appendChild(img);
            })
        })
});