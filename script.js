let screen = document.getElementById("screen")

screen.addEventListener("input", function() {
    screen.value = screen.value.replace(/[^0-9]/g, "");
});

function numberButton (value){
    screen.value += value
}

function clearScreen (){
    screen.value = ""
}

function resultS (){
    let reuslts = eval(screen.value)
    screen.value = reuslts
    return resultS
}

// Switching Dark Mode and Night Mode 

let changeMode = document.querySelector(".mode");
console.log(changeMode)


let ButtonValue = true

changeMode.addEventListener ('click', function(){
    if(ButtonValue){
        document.getElementById('screen').style.backgroundColor = "#f3f3f3"
        document.getElementById('screen').style.color = "black"
        document.querySelector(".container").style.backgroundColor = "#cfd3d5"
        document.querySelector(".mode").value = "Dark Mode"
        

    }else{
        document.getElementById('screen').style.backgroundColor = "#273f55"
        document.getElementById('screen').style.color = "#9cbd7a" 
        document.querySelector(".container").style.backgroundColor = "#162331"
        document.querySelector(".mode").value = "Light Mode"
    }

    ButtonValue = !ButtonValue
})





