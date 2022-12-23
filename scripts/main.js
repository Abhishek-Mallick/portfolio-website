
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome !!");
  createText("-> Open-Source Contributor & DevOps Enthusiast.");
  await delay(700);
  createText("Starting the server...hosting project...");
  await delay(700);

  await delay(1500);
  createText("Commands which you can use  --> ");

  createCode("ls", "See list of commands available");
  createCode("about", "Know more about me");
  createCode("projects", "Have a look at my projects and the contributions🚀");
  createCode("social -a", "Lists all my socials");
  createCode("resume","view my online resume");
  createCode("exit", "To exit from the server");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/abhishek-mallick🚀";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "ls"){
    trueValue(value);
    
    createCode("projects", "Have a look at my projects and the contributions🚀");
    createCode("about", "Know more about me");
    createCode("social -a", "All my social networks.");
    createCode("resume","view my online resume");
    createCode("blogs", "All my Blogs")
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/Abhishek-Mallick' target='_blank'><i class='fab fa-github white'></i> github.com/Abhishek-Mallick</a>")
  }
  else if(value === "resume"){
    trueValue(value);
    createText("<a href='https://drive.google.com/file/d/1zwIq6vWmpDXWsuWoxWk-9c_KgBWesMhR/view?usp=sharing' target='_blank'><i class='fas fa-file white'></i> Resume</a>")
  }
  else if(value === "about"){
    trueValue(value);
    createText("Hello I'm Abhishek")
    createText("I'm currently a 2nd-year undergrad pursuing my CSE degree from KIIT.</span> I have worked on different machine learning and web-dev projects. I'm currently exploring DevOps learning how processes are brought together and automated.")
  }
  else if(value === "social -a" || value === "social" || value === "socials -a" || value === "socials -a" || value === "socials"){
    trueValue(value);
    createText("<a href='https://github.com/Abhishek-Mallicks' target='_blank'><i class='fab fa-github white'></i> github.com/Abhishek-Mallick</a>")
    createText("<a href='https://www.linkedin.com/in/abhishek-mallick09/' target='_blank'><i class='fab fa-linkedin-in white'></i> www.linkedin.com/in/abhishek-mallick09/</a>")
    createText("<a href='https://twitter.com/Abhishek____M' target='_blank'><i class='fab fa-twitter white'></i> twitter.com/Abhishek____M</a>")
  }
  else if(value === "social"){
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }
  else if(value === "blogs"){
    trueValue(value);
    createText("Blog site is under construction!!")
    // createText("<a href='https://twitter.com/Abhishek____M' target='_blank'><i class='fab fa-blogger'></i> twitter.com/Abhishek____M</a>")
    // createText("<a href='https://twitter.com/Abhishek____M' target='_blank'><i class='fab fa-blogger'></i> twitter.com/Abhishek____M</a>")

  }
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else if(value === "exit"){
    createText("Bye Bye 🤍🤍");
    await delay(700);
    
    // We can use this
    // window.location.replace("http://sidanmor.com");
    window.location.href = "https://www.google.com/" ;
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
