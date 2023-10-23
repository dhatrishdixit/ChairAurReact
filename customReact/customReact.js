function customRender(reactElement, mainContainer){
    const domElement = document.createElement(reactElement.type);
    for (const key in reactElement.props) {
            if(key == 'children') continue ;
            const element = reactElement.props[key];
            domElement.setAttribute(key,element);
    }
    domElement.innerHTML = reactElement.children;
    mainContainer.appendChild(domElement);
}

const reactElement = {
    type:'a',
    props:{
        href: 'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}
const root = document.querySelector('#root');
// root is the main container jisme ham inject karte hai react element 

customRender(reactElement, root);