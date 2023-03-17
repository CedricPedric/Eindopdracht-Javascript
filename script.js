import data from './games.json' assert { type: "json"};


function ratingHigherThen(games,rating){
    let gamesThatContainRating = []
    for (const x in games){
        if (games[x]["rating"] == rating){
            gamesThatContainRating.push(games[x])
        }
    }
    return(gamesThatContainRating)
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
        if(games[x]["price"] <= price){
            gamesThatContainPrice.push(games[x])
        }
    }
    console.log()
    return(gamesThatContainPrice)
}

function makeTheCards(games){
    for (const x in games){
        const divGame = document.createElement("div");
        divGame.className = "flex-containers"
        containerGames.appendChild(divGame);
    
        const divCheckBox = document.createElement("div");
        divCheckBox.className = "divCheckBox"
        divGame.appendChild(divCheckBox);
        
        const inputGame = document.createElement("input");
        inputGame.type = "checkbox";
        inputGame.className = "checkbox-round";
        inputGame.id = `${games[x]["title"]}`
        divCheckBox.appendChild(inputGame)
        
        const divCard = document.createElement("div");
        divCard.className = "divCard"
        divGame.appendChild(divCard);
        
        const card = document.createElement("div");
        card.className = "card gameCards"
        divCard.appendChild(card);
    
        const cardbody = document.createElement("div");
        cardbody.className = "cardbody flex-containers"
        card.appendChild(cardbody);

        const divTitle = document.createElement("div");
        divTitle.className = "divTitle"
        cardbody.appendChild(divTitle);
        
        const gameText = document.createElement("p");
        gameText.appendChild(document.createTextNode(`${games[x]["title"]}`))
        divTitle.appendChild(gameText)
        
        const divPrice = document.createElement("div");
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

function checkSelectedGames(games){
    let selectedGames = []
    for (const x in games){
        let y = document.getElementById(`${games[x]["title"]}`)
        if (y.checked == true){
            selectedGames.push(games[x])
        } 
    }
    return selectedGames
}

function makeTheCart(games){
    const inCart = games
    for (const x in games){
        const divGame = document.createElement("div");
        divGame.className = "flex-containers"
        containerGames.appendChild(divGame);

        const divCard = document.createElement("div");
        divCard.className = "divCard"
        divCard.style.width = "90%"
        divGame.appendChild(divCard);
        
        const card = document.createElement("div");
        card.className = "card gameCards"
        divCard.appendChild(card);
    
        const cardbody = document.createElement("div");
        cardbody.className = "cardbody flex-containers"
        card.appendChild(cardbody);

        const divTitle = document.createElement("div");
        divTitle.className = "divTitle"
        cardbody.appendChild(divTitle);
        
        const gameText = document.createElement("p");
        gameText.appendChild(document.createTextNode(`${games[x]["title"]}`))
        divTitle.appendChild(gameText)
        
        const divPrice = document.createElement("div");
        cardbody.appendChild(divPrice);
        
        const gamePrice = document.createElement("p");
        if (games[x]["price"] == 0){
            gamePrice.appendChild(document.createTextNode(`FREE`))
        }
        else{
            gamePrice.appendChild(document.createTextNode(`€ ${games[x]["price"]}`))
        }
        divPrice.appendChild(gamePrice)

        const divCheckBox = document.createElement("div");
        divCheckBox.className = "divCheckBox"
        divGame.appendChild(divCheckBox);
        
        const deleteButton = document.createElement("button");
        deleteButton.id = `${games[x]["title"]}`
        deleteButton.className = "btn btn-primary deleteButtons"
        deleteButton.innerHTML = "Delete"
        deleteButton.addEventListener("click", function () {
            divGame.remove()
            delete inCart[x]
            priceChange(inCart)
        })
        divCheckBox.appendChild(deleteButton)
}}

function priceChange(inCart){
    console.log(inCart)
    if (inCart.lenght != 0){
        var y = 0
        for (const x in inCart){
            y += inCart[x]["price"] 
        }
        console.log(y)
        document.getElementById("priceText").innerText = `€${y.toFixed(2)}`
    }
    else{
        document.getElementById("priceText").innerText = `€0.00`
    }
}

const containerGames = document.getElementById('container-games');
var onScreenGames = data

makeTheCards(data)

//Makes The Select Container Dynamic and contain genres that are in the json
var list1= []
for (const x in data){
    if (list1.includes(data[x]["genre"]) == false){
        list1.push(data[x]["genre"]);
    };
};
const selectGenre = document.getElementById("selectGenre")
for (const y in list1){
    const option = document.createElement("option");
    option.value = list1[y];
    option.text = list1[y];
    selectGenre.add(option);
};

// ahh yes very good code keep at it with yo coding skills -Brenda

const genreButton = document.getElementById("genreButton")
genreButton.addEventListener("click", function (){
    containerGames.innerHTML= '';
    onScreenGames = containsGenre(data,selectGenre.value)
    makeTheCards(containsGenre(data,selectGenre.value))
});

const priceInput =  document.getElementById("priceInput")
const priceButton = document.getElementById("priceButton")
priceButton.addEventListener("click", function (){
    containerGames.innerHTML= '';
    onScreenGames = priceRangeLowerThen(data,priceInput.value)
    makeTheCards(priceRangeLowerThen(data,priceInput.value))
});

const selectRating = document.getElementById("selectRating")
const ratingButon = document.getElementById("ratingButton")
ratingButon.addEventListener("click", function (){
    containerGames.innerHTML= '';
    onScreenGames = ratingHigherThen(data,selectRating.value)
    console.log(onScreenGames)
    makeTheCards(ratingHigherThen(data,selectRating.value))
});


const filterContainer = document.getElementById("filterContainer")
const calculateButton = document.getElementById('calculateButton');

const containerPriceButton = document.getElementById("containerPriceButton")
calculateButton.addEventListener("click", function () {

    calculateButton.remove()
    const checkedGames = checkSelectedGames(onScreenGames)
    containerGames.innerHTML = ''
    filterContainer.innerHTML='<h1>Winkelmandje<h1>'
    makeTheCart(checkedGames)

    const containerCalculation = document.createElement("div")
    containerCalculation.className = "card  priceTextCard"
    containerPriceButton.appendChild(containerCalculation)

    const containerCalculationBody = document.createElement("div")
    containerCalculationBody.className = "cardbody priceTextCardBody"
    containerCalculation.appendChild(containerCalculationBody)

    const priceText = document.createElement("p");
    priceText.id = "priceText"
    containerCalculationBody.appendChild(priceText)
    priceChange(checkedGames)
});
