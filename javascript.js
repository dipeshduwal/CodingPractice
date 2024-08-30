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
const content2= document.createElement("h3");
content2.classList.add("content2");
content2.textContent="I'm a blue h3";
content2.style.cssText="color: blue;";

container.appendChild(content2);

//a <div> with a black border and pink background color with the following elements inside of it:
//1. another <h1> that says “I’m in a div”
//2. a <p> that says “ME TOO!”



const content3 =document.createElement("div");
content3.classList.add("content3");
content3.style.cssText="border: 2px solid black; background-color: pink";

const content4 = document.createElement("h1");
content4.classList.add("content4");
content4.textContent="I'm in a div.";

const content5= document.createElement("p");
content5.classList.add("content5");
content5.textContent="Me TOO!";

content3.appendChild(content4);
content3.appendChild(content5);

container.appendChild(content3);

//attaching event to a button
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  const btn = document.querySelector("#btn");

  btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });