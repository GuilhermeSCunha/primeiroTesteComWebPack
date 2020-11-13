const body = document.querySelector ('body');
import estartandodevs from "../assets/estartandodevs.png";

export function createHeader (props) {
    const header = document.createElement("header");
    const logo = document.createElement("img");
    logo.setAttribute("src", estartandodevs);
    logo.setAttribute("class", ".logo");

    header.appendChild(logo);
    header.style.backgroundColor = props;
    body.appendChild (header);
}