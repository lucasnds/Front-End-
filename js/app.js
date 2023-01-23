//PADRÃO
const h1Title = "Hi, I'm Lucas Nascimento"
const h4Title = "Front-end developer"
const pTitle = "I am a software engineering student and appreciator, focused on website and systems development and a dream maker. Always looking to improve my knowledge through projects, courses and exchange of experiences. Focusing in my dream."
const h3Skills = "My Skills"
const h3Passions = "Passions"
const home = "HOME"
const about = "ABOUT"
const projects = "PROJECTS"
const contact = "CONTACT"
let h1TagAbout = document.querySelector('.header-responsive h1')
let h4TagAbout = document.querySelector('.header-responsive h4')
let pTagAbout = document.querySelector('.text p')
let h3TagSkills = document.querySelector('.skills h3')
let h3TagPassions = document.querySelector('.passions h3')
let homeMenuTag = document.querySelector("a[href='#home']");
let aboutMenuTag = document.querySelector("a[href='#about']");
let projectsMenuTag = document.querySelector("a[href='#projects']");
let contactMenuTag = document.querySelector("a[href='#contact']");

h1TagAbout.textContent = h1Title;
h4TagAbout.textContent = h4Title;
pTagAbout.textContent = pTitle;
h3TagSkills.textContent = h3Skills;
h3TagPassions.textContent = h3Passions;
homeMenuTag.textContent = home;
aboutMenuTag.textContent = about;
projectsMenuTag.textContent = projects;
contactMenuTag.textContent = contact;
//PORTUGUÊS-BRASIL
const brazil = document.querySelector('#brazil')

brazil.addEventListener('click', function() {
    const h1TitlePTBR = "Olá, Eu sou Lucas Nascimento"
    const h4TitlePTBR = "Desenvolvedor Front-End"
    const pTitlePTBR = "Sou estudante e apreciador da engenharia de software, focado em desenvolvimento de sites e sistemas e um realizador de sonhos. Sempre buscando aprimorar meus conhecimentos através de projetos, cursos e troca de experiências. Focando no meu sonho."
    const h3SkillsPTBR = "Minhas Habilidades"
    const h3PassionsPTBR = "Paixões"
        // const homePTBR = "HOME"
    const aboutPTBR = "SOBRE"
    const projectsPTBR = "PROJETOS"
    const contactPTBR = "CONTATO"

    h1TagAbout.textContent = h1TitlePTBR;
    h4TagAbout.textContent = h4TitlePTBR;
    pTagAbout.textContent = pTitlePTBR;
    h3TagSkills.textContent = h3SkillsPTBR;
    h3TagPassions.textContent = h3PassionsPTBR;
    homeMenuTag.textContent = home;
    aboutMenuTag.textContent = aboutPTBR;
    projectsMenuTag.textContent = projectsPTBR;
    contactMenuTag.textContent = contactPTBR;
})

//INGLÊS-USA
const usa = document.querySelector('#usa')

usa.addEventListener('click', function() {

    h1TagAbout.textContent = h1Title;
    h4TagAbout.textContent = h4Title;
    pTagAbout.textContent = pTitle;
    h3TagSkills.textContent = h3Skills;
    h3TagPassions.textContent = h3Passions;
    homeMenuTag.textContent = home;
    aboutMenuTag.textContent = about;
    projectsMenuTag.textContent = projects;
    contactMenuTag.textContent = contact;

})

const btn = document.querySelector('.btn-on-off img');
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