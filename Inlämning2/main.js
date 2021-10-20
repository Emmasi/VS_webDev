
let toDoList = document.querySelector("#Bag");// Div-tag

let listnum = document.querySelector("#listan") // ol-element
let intrText = document.createElement("p");
intrText.innerText="There’s currently no people standing in line";
listnum.appendChild(intrText)


// Knappen för att lägga till, tillsammans med en check box att checka av när de är in checkade
let Addbutton = document.querySelector("#Add")//läcka till knapp
Addbutton.addEventListener("click", () => { //event klick
    intrText.remove();
    let inputValue = document.querySelector("#nameInput").value;// input värdet
    let inputBagValue = document.querySelector("#bagInput").value;// input värdet
    let liElement = document.createElement("li");//skapar lista
    let span = document.createElement("span") //skapar en span
    let checkBox = document.createElement("input")  //skapar checkbox
    checkBox.type = "checkbox"
    checkBox.style.marginLeft = "50px";
    checkBox.addEventListener("click", (e) => { //event - raderar genom att checka av
        let liParent = e.target.parentElement;
        liParent.remove();
    })
    span.innerText = inputValue +", " + " " + inputBagValue +"sty" +" bagage";// span ska ha texten av inputvärdet
    liElement.appendChild(span) //plaserar span i li
    listnum.appendChild(liElement);//placerar li-elemntet i ol
    liElement.appendChild(checkBox) // placerar checkbox i li

});

//knappen för att lägga först i listan
let Firstbutton = document.querySelector("#fast")//läcka till knapp
Firstbutton.addEventListener("click", () => { //event klick
    intrText.remove();
    let FirstValue = document.querySelector("#nameInput").value;// input värdet
    let inputBagValue = document.querySelector("#bagInput").value;// input värdet
    let liElement = document.createElement("li");//skapar lista
    liElement.style.padding = "5px";
    let span = document.createElement("span") //skapar en span
    let checkBox = document.createElement("input"); //skapar checkbox
        checkBox.type = "checkbox"
        checkBox.style.marginLeft = "50px";
        checkBox.addEventListener("click", (e) => { //event - raderar genom att checka av
            let liParent = e.target.parentElement;
            liParent.remove();
    });
    
    span.innerText = FirstValue + " " +inputBagValue +"sty";// span ska ha texten av inputvärdet
    liElement.appendChild(span) //plaserar span i li
    liElement.appendChild(checkBox) // placerar checkbox i li
    listnum.insertBefore(liElement,listnum.firstChild);//placerar li-elemntet i ol som första barn

});
