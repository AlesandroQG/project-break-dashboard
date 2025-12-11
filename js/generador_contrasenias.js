/*

*/

const caracteres = document.getElementById("caracteres"),
generar = document.getElementById("generar"),
resultado = document.getElementById("resultado");

const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
minusculas = "abcdefghijklmnopqrstuvwxyz",
numeros = "0123456789",
simbolos = "!@#$%^&*()-_=+";

const caracteresContrasenia = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "!@#$%^&*()-_=+"];

const numeroRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

generar.addEventListener("click", () => {
    const numeroCaracteres = caracteres.value;
    if (numeroCaracteres >= 12 && numeroCaracteres <= 50) {
        let contrasenia = "";
        for (let i = 0; i < numeroCaracteres; i++) {
            const array = caracteresContrasenia[numeroRandom(0, caracteresContrasenia.length)];
            const caracter = array[numeroRandom(0, array.length)];
            contrasenia += caracter;
        }
        resultado.innerHTML = `<p>Tu nueva contraseña es: <span class="bold">${contrasenia}</span></p>`;
    }
});
