const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redPara = document.createElement("p");
redPara.textContent = "Hey I'm red!";
document.body.appendChild(redPara);
document.getElementsByName(redPara).style.color = "red";