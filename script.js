import data from './games.json' assert { type: "json"};

// All genres

// var list1= []
// for (const x in data){
//     if (list1.includes(data[x]["genre"]) == false){
//         list1.push(data[x]["genre"])
//     }
// }
// console.log(list1)

function ratingHigherThen(minimumRating,games){
    for (const x in games){
        if (games[x]["rating"] >= minimumRating){
            console.log(games[x]["title"])
        }
    }
}

function containsGenre(genre, games) {
    for (const x in games){
        if (games[x]["genre"] == genre){
            console.log(games[x]["title"])
        }
    }
}

function priceRangeLowerThen(price,games){
    for (const x in games){
        if(games[x]["price"] < price){
            console.log(games[x]["title"])
        }

    }
}

const containerGames = document.getElementById('container-games');


//Make The Cards

for (const x in data){

    const divGame = document.createElement("div");
    divGame.style.display = "flex"
    containerGames.appendChild(divGame);

    const divCheckBox = document.createElement("div");
    divCheckBox.style.display = "flex";
    divCheckBox.style.width = "5%"
    divGame.appendChild(divCheckBox);

    const inputGame = document.createElement("input");
    inputGame.type = "checkbox";
    inputGame.className = "checkbox-round";
    inputGame.id = `${data[x]["title"]}-checkbox`
    divCheckBox.appendChild(inputGame)

    const divCard = document.createElement("div");
    divCard.style.display = "flex";
    divCard.style.width = "95%"
    divGame.appendChild(divCard);

    const card = document.createElement("div");
    card.className = "card"
    card.style.height = "55px"
    card.style.width = "875px"
    card.style.marginTop = "5px"
    card.style.marginBottom = "5px"
    card.style.background = "lightblue"
    card.style.padding = "12px"
    divCard.appendChild(card);

    const cardbody = document.createElement("div");
    cardbody.className = "cardbody"
    cardbody.style.display="flex"
    card.appendChild(cardbody);


    const divTitle = document.createElement("div");
    divTitle.style.width = '90%'
    divTitle.style.alignItems = "center"
    cardbody.appendChild(divTitle);

    const gameText = document.createElement("p");
    gameText.appendChild(document.createTextNode(`${data[x]["title"]}`))
    divTitle.appendChild(gameText)

    const divPrice = document.createElement("div");
    divPrice.style.right= "0px";
    divPrice.style.alignItems = "center"
    cardbody.appendChild(divPrice);

    const gamePrice = document.createElement("p");
    if (data[x]["price"] == 0){
        gamePrice.appendChild(document.createTextNode(`FREE`))
    }
    else{
        gamePrice.appendChild(document.createTextNode(`€${data[x]["price"]}`))
    }
    divPrice.appendChild(gamePrice)
}




const checkBox1 =    document.getElementById("Counter-Strike: Global Offensive-checkbox")
const test1 = document.getElementById("test1")
const button = document.getElementById('calculate-button');
button.addEventListener("click", function () {
    console.log(checkBox1.checked);
    console.log(test1.value)
});