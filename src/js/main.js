import home from "./views/home.js";
import about from "./views/about.js";
import contact from "./views/contact.js";



const routes = {
    "#/": { title: "Home", render: home },
    "#/about": { title: "About", render: about },
    "#/contact": { title: "Contact", render: contact },
};

 


const build=()=>{
    let view = routes[window.location.hash || "#/"]
    console.log(view, window.location.hash);
    document.title = view.title;
    app.innerHTML = view.render();
}

const init = () => {
    build();
    window.addEventListener("hashchange", () => {

        build();

    });
};

window.addEventListener("load", init);











 
 