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
const responsive = 'Responsive'
const h1Projects = "Portfolio"
const h3Projects = "Most recent projects"
const h1TagAbout = document.querySelector('.header-responsive h1')
const h4TagAbout = document.querySelector('.header-responsive h4')
const pTagAbout = document.querySelector('.text p')
const h3TagSkills = document.querySelector('.skills h3')
const h3TagPassions = document.querySelector('.passions h3')
const homeMenuTag = document.querySelector("a[href='#home']");
const aboutMenuTag = document.querySelector("a[href='#about']");
const projectsMenuTag = document.querySelector("a[href='#projects']");
const contactMenuTag = document.querySelector("a[href='#contact']");
const h1TagProjects = document.querySelector('#projects h1')
const h3TagProjects = document.querySelector('#projects h3')
const responsiveTag = document.querySelector('.responsive')

h1TagAbout.textContent = h1Title;
h4TagAbout.textContent = h4Title;
pTagAbout.textContent = pTitle;
h3TagSkills.textContent = h3Skills;
h3TagPassions.textContent = h3Passions;
homeMenuTag.textContent = home;
aboutMenuTag.textContent = about;
projectsMenuTag.textContent = projects;
contactMenuTag.textContent = contact;
h1TagProjects.textContent = h1Projects;
h3TagProjects.textContent = h3Projects;
//responsiveTag.textContent = responsive;
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
    const h1ProjectsPTBR = "Portfólio"
    const h3ProjectsPTBR = "Meus projetos mais recentes"
        //const responsivePTBR = "Responsividade"

    h1TagAbout.textContent = h1TitlePTBR;
    h4TagAbout.textContent = h4TitlePTBR;
    pTagAbout.textContent = pTitlePTBR;
    h3TagSkills.textContent = h3SkillsPTBR;
    h3TagPassions.textContent = h3PassionsPTBR;
    homeMenuTag.textContent = home;
    aboutMenuTag.textContent = aboutPTBR;
    projectsMenuTag.textContent = projectsPTBR;
    contactMenuTag.textContent = contactPTBR;
    h1TagProjects.textContent = h1ProjectsPTBR;
    h3TagProjects.textContent = h3ProjectsPTBR;
    //responsiveTag.textContent = responsivePTBR;
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
    h1TagProjects.textContent = h1Projects;
    h3TagProjects.textContent = h3Projects;
    // responsiveTag.textContent = responsive;
})

const btn = document.querySelector('.btn-on-off img');
let lua = "./Arquivos/lua.edit.svg"
let sol = "./Arquivos/sol.svg"
const h1TagAboutDark = document.querySelector('.text h1')
const pTagAboutDark = document.querySelector('.text p')
const h3TagSkillsAndPassionsDark = document.querySelectorAll('#skillsAndPassions h3')
const ulTagSkillsAndPassionsDark = document.querySelectorAll('ul')



btn.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    h1TagAboutDark.classList.toggle('dark');
    pTagAboutDark.classList.toggle('dark');
    //h3TagSkillsAndPassionsDark.classList.toggle('dark');
    h3TagSkillsAndPassionsDark.forEach(ul => {
        ul.classList.toggle("dark");
    });
    ulTagSkillsAndPassionsDark.forEach(ul => {
        ul.classList.toggle("dark");
    });

    if (document.getElementsByClassName("sun").src != sol) {
        document.getElementsByClassName("sun").src = lua;
        console.log('lua')
    } else if (document.getElementsByClassName("sun").src != lua) {
        document.getElementsByClassName("sun").src = sol;
        console.log('sol')
    }
});
console.log("fim")