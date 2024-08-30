const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

//add a <p> with red text that says “Hey I’m red!”

const content1 = document.createElement("p");
content1.classList.add("content1");
content1.textContent="Hey, I'm red!";
content1.style.color= "red";

container.appendChild(content1);

//an <h3> with blue text that says “I’m a blue h3!”