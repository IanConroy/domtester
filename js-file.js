const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redPara = document.createElement("p");
redPara.textContent = "Hey I'm red!";
document.body.appendChild(redPara);
redPara.style.color = "red";

const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3!";
document.body.appendChild(blueH3);
blueH3.style.color = "blue";

const newDiv = document.createElement("div");

const newH1 = document.createElement("h1");
newH1.textContent = "I'm in a div";
const newP = document.createElement("p");
newP.textContent = "ME TOO!";
newDiv.appendChild(newH1);
newDiv.appendChild(newP);
document.body.appendChild(newDiv);