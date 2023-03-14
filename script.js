import data from './games.json' assert { type: "json"};


function ratingHigherThen(minimumRating,games){
    for (const x in games){
        if (games[x]["rating"] >= minimumRating){
            console.log(games[x]["title"])
        }
    }
}

function containsGenre(games, genre) {
    let gamesThatContainGenre = []
    for (const x in games){
        if (games[x]["genre"] == genre){
            gamesThatContainGenre.push(games[x])
        }
    }
    return(gamesThatContainGenre)
}

function priceRangeLowerThen(games,price){
    let gamesThatContainPrice = []
    for (const x in games){
        if(games[x]["price"] < price){
            gamesThatContainPrice.push(games[x])
        }
    }
    console.log()
    return(gamesThatContainPrice)
}

const containerGames = document.getElementById('container-games');


function makeTheCards(games){
    for (const x in games){
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
        inputGame.id = `${games[x]["title"]}-checkbox`
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
        gameText.appendChild(document.createTextNode(`${games[x]["title"]}`))
        divTitle.appendChild(gameText)
    
        const divPrice = document.createElement("div");
        divPrice.style.right= "0px";
        divPrice.style.alignItems = "center"
        cardbody.appendChild(divPrice);
    
        const gamePrice = document.createElement("p");
        if (games[x]["price"] == 0){
            gamePrice.appendChild(document.createTextNode(`FREE`))
        }
        else{
            gamePrice.appendChild(document.createTextNode(`€ ${games[x]["price"]}`))
        }
        divPrice.appendChild(gamePrice)
    }

}


makeTheCards(data)


var list1= []
for (const x in data){
    if (list1.includes(data[x]["genre"]) == false){
        list1.push(data[x]["genre"])
    }
}

const selectGenre = document.getElementById("selectGenre")
for (const y in list1){
    const option = document.createElement("option");
    option.value = list1[y]
    option.text = list1[y]
    selectGenre.add(option)
}


const checkBox1 = document.getElementById("Counter-Strike: Global Offensive-checkbox")

const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener("click", function () {
    console.log(checkBox1.checked);
    console.log(selectGenre.value)
});


const genreButton = document.getElementById("genreButton")
genreButton.addEventListener("click", function (){
    containerGames.innerHTML= '';
    makeTheCards(containsGenre(data,selectGenre.value))
})

const priceInput =  document.getElementById("priceInput")
const priceButton = document.getElementById("priceButton")
priceButton.addEventListener("click", function (){
    containerGames.innerHTML= '';
    console.log(priceInput.value)
    makeTheCards(priceRangeLowerThen(data,priceInput.value))
})
