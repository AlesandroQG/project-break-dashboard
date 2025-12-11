/*

*/

const listado = document.getElementById("listado"),
name = document.getElementById("nombre-link"),
url = document.getElementById("url-link"),
guardar = document.getElementById("guardar");

const obtenerLinks = () => localStorage.getItem("links") ? JSON.parse(localStorage.getItem("links")) : {};
const guardarLinks = (links) => localStorage.setItem("links", JSON.stringify(links));

const eliminarLink = (link, links) => {
    delete links[link];
    guardarLinks(links);
};

const cargarLinks = () => {
    const links = obtenerLinks();
    const template = (nombre, enlace) => {
        return `<li><a href="${enlace}" target="_blank">${nombre}</a><button class="delete" data-enlace="${nombre}">x</button></li>`;
    };
    const structure = Object.keys(links).map((nombre) => {
        const enlace = links[nombre];
        return template(nombre, enlace);
    }).join("");
    listado.innerHTML = structure;
    const deleteBtns = Array.from(document.getElementsByClassName("delete"));
    deleteBtns.map((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const nombre = btn.dataset.enlace;
            eliminarLink(nombre, obtenerLinks());
            cargarLinks();
        });
    });
};

cargarLinks();

guardar.addEventListener("click", () => {
    const nombreVal = name.value, enlace = url.value;
    if (nombreVal && enlace) {
        const links = obtenerLinks();
        links[nombreVal] = enlace;
        guardarLinks(links);
        name.value = "";
        url.value = "";
        cargarLinks();
    }
});
