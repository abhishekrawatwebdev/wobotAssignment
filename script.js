let sizes = document.getElementsByClassName("sizes");
console.log(sizes);

for (let i = 0; i < sizes.length; i++) {

    sizes[i].addEventListener('click', () => {
        for (let i = 0; i < sizes.length; i++) {
            sizes[i].classList.remove("active-size");
        }
        sizes[i].classList.add("active-size");

    })
}