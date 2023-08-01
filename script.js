let addPara = document.getElementById("p-button");

let addImg = document.getElementById("img-button");

let pDiv = document.getElementById("p-div");
let imgDiv = document.getElementById("img-div");
let nunBtn = document.getElementById("nun");
let nunDiv = document.getElementById("nothing");
nunDiv.style.display = "none";

imgDiv.display = "block";
pDiv.visibility = "hidden";
imgDiv.visibility = "hidden";
let num1 = 1;
let num2 = 1;
let num3 = 1;


addPara.addEventListener("click", ()=>{
    pCounter.innerHTML = "pCounter: " + num1++;
    nunDiv.style.display = "none";
    pDiv.style.display = "block";
    imgDiv.style.display = "none";
    imgDiv.visibility = "hidden";
    pDiv.visibility = "visible";
    let para = document.createElement("p");
 para.innerHTML = "get dunked on";
 para.style.color = "white";
 para.style.backgroundColor = "black";
    pDiv.append(para);    
});

addImg.addEventListener("click", ()=>{
    imgCounter.innerHTML = " imgCounter: " + num2++;
    nunDiv.style.display = "none";
    imgDiv.style.display="block";
    pDiv.style.display = "none";
    pDiv.visibility = "hidden";
    imgDiv.visibility = "visible";
    let img = document.createElement("img");
    img.src = "https://steamuserimages-a.akamaihd.net/ugc/1825656478147127777/17F48CFFCF4D0C9A23A3B19EEA5A4F72C853EBA6/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true";
    img.style.width = "200px";
    img.style.height = "200px";
    imgDiv.append(img);   
});

nunBtn.addEventListener("click", ()=>{
    nothingCounter.innerHTML = "nothing Counter: " + num3++;
imgDiv.style.display = "none";
pDiv.style.display = "none";
nunDiv.style.display = "block";

})
let pCounter = document.createElement("p");
let imgCounter = document.createElement("p");
let nothingCounter = document.createElement("p");
let counterDiv = document.querySelector("nav");




counterDiv.append(pCounter);
counterDiv.append(imgCounter);
counterDiv.append(nothingCounter);