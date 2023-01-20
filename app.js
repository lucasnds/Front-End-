// const chk = document.getElementsByClassName('btn-on-off')
// const image = document.getElementById('image-on-off')



// chk.addEventListener("click", () => {
//     document.body.classList.toggle('dark');
//     image.classList.remove("fas fa-sun");
//     image.classList.add("fas fa-moon");
// })

// const brazil = document.getElementById('brazil')
// const usa = document.getElementById('usa')
// const h1 = document.
// const h4 = document.

// usa.addEventListener('click', (e) => {

//     e.innerText

// })
//________________________________________________________________
const btn = document.querySelector('.btn-on-off');

let lua = "./Arquivos/lua.edit.svg"
let sol = "./Arquivos/sol.edit.svg"

btn.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    // Adicionar a mudança de cor dos outros elementos
    //
    //
    //
    //

    if (document.getElementById("image").src == sol) {
        document.getElementById("image").src = lua;
        console.log('lua')
    } else if (document.getElementById("image").src == lua) {
        document.getElementById("image").src = sol;
        console.log('sol')
    }
});
console.log("fim")
    //_______________________________________________________________

// const btn = document.querySelector('.btn-on-off');

// const lua = "./Arquivos/lua.edit.svg"
// const sol = "./Arquivos/sol.edit.svg"

// let image = document.getElementById("image");

// btn.addEventListener('click', function() {
//     document.body.classList.toggle('dark');
//     if (image.src.endsWith(sol)) {
//         image.src = lua;
//         console.log("lua")
//     } else {
//         image.src = sol;
//         console.log("sol")
//     }
// });