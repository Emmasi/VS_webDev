let quizG = [
    {
        Fråga: "Filmen Lejonkungen handlar om lejonet Simbas. När hans pappa dör, av en olyckshändelse, flyr han iväg för att sedan återvänd till lejonriket för att ta sin plats som kung.",
        Type: false,
        Svar: "Simbas pappa blir dödad av sin bror Scar",
    },
    {
        Fråga: "Pongo, från filmen ett hundra en dalmatiner, är en Labrador som försöker hjälpa de 101 valparna fly från Cruella",
        Type: false,
        Svar: "Pongo tillhör dalmatin",
    },
    {
        Fråga: "I filmen lilla sjöjungfrun vill Ariel så gärna leva sitt liv som människa, att hon ingår ett avtal med en häxa. Ariel måste ge sin röst till henne i utbyte mot ett par människoben ",
        Type: true,
    },

    {
        Fråga: "Mowgli är en föräldrarlös pojke som blir bästa vän med Baloo, som är en björn",
        Type: true,
    },
    {
        Fråga: "Guldfisken Nemo i filmen Hitta Nemo, kommer bort från sin pappa",
        Type: false,
        Svar: "Nemo och hans pappa är clownfiskar"
    },
    {
        Fråga: "När Mulan åker ut i krig måste hon låtsas vara man",
        Type: true,
    },
    {
        Fråga: "I filmen Kung Fu Panda följer vi pandan Po. Han blir utseed till drakkrigaren och blir tränad av Master Shifu. I den engelsktalande filmen är det Jackie Chan som gör rösten till Pandan Po ",
        Type: false,
        Svar: "Jackie Chan gör rösten till appan, Det är Jack Black som är rösten till Pandan",
    },
    {
        Fråga: "Aladdin är föräldrarlös och lever på gatan när han träffar prinsessan Jasmine",
        Type: true,
    },
    {
        Fråga: "Dumbo är en elefant som kan flyga. Han bor med sin mamma på en cirkus",
        Type: true,
    },
    {
        Fråga: "Tarzan och hans föräldrar blir strandsatta på en ö. Efter att hans föräldrar omkommit får han växer upp med schimpanser",
        Type: false,
        Svar: "När Tarzans föräldrar omkommer är det en flock gorillor som har han om honom."
    },

]

let QuizFrågor = document.querySelector("#Quiz")
let fråga = document.querySelector("#Knappar")

let EasyButton = document.querySelector("#Easy")
EasyButton.addEventListener("click", () => {

    function myArray(item) {
        // Ol-tagg
        let lista = document.querySelector("#quizLista")

        //for loop gemom arrayen. tar fram vaje .fråga och .Type
        for (var i = 0; i < item.length; i++) {
            // li-taggar:
            let numLista = document.createElement("li");
            // divtag som innehåller text
            let divText = document.createElement("div")
            //divtag som innehåller divtext och knappar
            let div = document.createElement("div")
            numLista.style.margin = "20px";
            numLista.style.fontSize = "20px"
            //tar fram Frågan från min array.
            let Nodfråga = document.createTextNode(item[i].Fråga)
            Nodfråga.innerText = item[i].Fråga;

            // om frångan är ett sant eller falskt påstående
            let isSant = item[i].Type;
            // Rätt svar.
            let svarDiv = document.createElement("div")

            // knappen sant + style + function
            let sant = document.createElement("button")
            sant.style.width = "70px"
            sant.style.height = "40px"
            sant.style.fontSize = "15px"
            sant.innerText = "SANT";
            // knapp funktion för sant
            sant.addEventListener("click", (e) => {
                // tömmer svardiv taggen för varje knapptryck.
                svarDiv.innerText = "";
                // om frågan har Type false, men användaren trycker på knappen sant. skriver ut fel svar
                if (!isSant) {
                    let isSant = document.createElement("p")
                    isSant.innerText = "Fel Svar";
                    isSant.style.color = "red";
                    svarDiv.appendChild(isSant)
                    // om frågan har Type true och användaren trycker på knappen sant. skriver ut rätt svar
                } else if (isSant) {
                    let isSant = document.createElement("p")
                    isSant.innerText = "Rätt Svar"
                    isSant.style.color = "green";
                    svarDiv.appendChild(isSant)
                } else {
                    alert("Nått gick fel. Försök igen")
                }
            })
            // knappen falsk + style + function
            let falsk = document.createElement("button")
            falsk.style.width = "70px"
            falsk.style.height = "40px"
            falsk.style.fontSize = "15px"
            falsk.innerText = "FALSKT"
            // samma fast motsatt som santknappen
            falsk.addEventListener("click", () => {
                svarDiv.innerText = "";
                if (!isSant) {
                    let isSant = document.createElement("p")

                    isSant.innerText = "Rätt Svar"
                    isSant.style.color = "green";
                    svarDiv.appendChild(isSant)
                } else if (isSant) {
                    let isSant = document.createElement("p")
                    isSant.innerText = "Fel Svar"
                    isSant.style.color = "red";
                    svarDiv.appendChild(isSant)
                } else {
                    alert("Nått gick fel. Försök igen")

                }
            })

            //lägger allt på sin plats
            divText.appendChild(Nodfråga);
            div.appendChild(divText)
            div.appendChild(svarDiv)
            div.appendChild(sant)
            div.appendChild(falsk)
            numLista.appendChild(div);
            lista.appendChild(numLista);
        }


        // retunera listan
        return lista;
    }
    myArray(quizG)


    //refresh knapp  
    let Refresh = document.createElement("button")
    Refresh.innerText = "Börja om"
    Refresh.addEventListener("click", () => {
        window.location.reload("Refresh")
    })
    document.querySelector("#Knappar").appendChild(Refresh)
})
