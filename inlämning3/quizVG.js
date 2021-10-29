//refrech knapp
let StartOver = document.querySelector("#StartOver")
StartOver.innerText = "Börja om"
StartOver.addEventListener("click", () => {
    window.location.reload("StartOver")
})

//dark light mode
let Mode = document.querySelector(".mode")
Mode.innerText = "🌞"
Mode.addEventListener("click", (e) => {
    if (e.target.innerText == "🌞") {
        e.target.innerText = "🌛"
    } else {
        e.target.innerText = "🌞"
    }
    document.body.classList.toggle("dark-mode");
})
// svars alt.
let radioButton = document.querySelectorAll('input[type="radio"]')
//min lista när jag läggar alla valda svar.
let allCheck = []
//Svars knapp.
let SvarKnapp = document.querySelector("#Svar")
SvarKnapp.innerText = "Se Svar"
SvarKnapp.addEventListener("click", (e) => {
    // när svarsknappen klickas på tas alla de värden som blivit valda och placeras i allCheck
    radioButton.forEach((btn) => {
        if (btn.checked === true) {
            allCheck.push(btn.value);
        }
    })
    //filtrerar ut de svaren som har value true
    let resultat = allCheck.filter(allCheck => {
        return allCheck == "true"
    })
    //checkbox array
    let allCheckbox=[]
    let checkBox = document.querySelectorAll('input[type="checkbox"]')
    let checkBoxAll = document.querySelectorAll('input[type="checkbox"]:checked')
    //Kolla om antalet checkade boxar är större än 4. 
    //för varje checkbox kolla om den är checkad.lägg det checkade värdet i allcheckbox.
     checkBox.forEach((btn) =>{
         if(checkBoxAll.length > 4){
            return allCheckbox
         }else if(btn.checked === true){
            allCheckbox.push(btn.value)
         }
     })
     //filtrera ut alla true värden.
     let santCheck = allCheckbox.filter(allCheckbox => {
         return allCheckbox == "true"
     })
     // om det är 4 sty true värden, pusha in i arrayen resultat.
    function antal(x) {
        if (santCheck.length == 4){
             resultat.push(santCheck)
        }    
    }
    antal(santCheck)
    console.log(checkBox)
    console.log(resultat)


     

    // om variabeln resultat längde är större än 7 skrivs svarText ur.(samma för else if, men >5)
    // Arrayen resultat består av antal true och en array. i ifsatsen frågar jag efter resultat längd.
    let svarText = document.createElement("p")
    svarText.style.fontSize = "40px"
    let QuizDiv = document.querySelector("#frågor")
    if (resultat.length > 7) {
        svarText.innerText = " Du är ett riktigt Walt Disney stjärna! Du hade över 75% Rätt!"
        svarText.style.color = "green"
        QuizDiv.innerText = ""
        QuizDiv.appendChild(svarText)

    }
    else if (resultat.length > 5) {
        svarText.innerText = " Du kan dina  Walt Disney filmer. Du hade över 50% Rätt!"
        svarText.style.color = "orange"
        QuizDiv.innerText = ""
        QuizDiv.appendChild(svarText)
    }
    else {
        svarText.innerText = "Under 50% rätt.Fy skäms! Du behöver plugga på!"
        svarText.style.color = "red"
        QuizDiv.innerText = ""
        QuizDiv.appendChild(svarText)
    }
    e.target.style.display ="none";
})