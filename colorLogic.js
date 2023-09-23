function calculateScore(){
    var playerScore = [132, 233, 453, 533, 1144]
    var sum = 0
    for (let index = 0; index < playerScore.length; index++)
            sum += playerScore[index]
            alert(sum)
}


function changeColor(){
    document.getElementById("someID").style.color ="red";
}

function variables (){
    var name = ""
    var age = 0

    name = "Benny"
    age = 15

    alert(name+age)
    console.log(name+age);
}

function arrays(){
    var score=[100, 150, 250, 1000]
    alert(score[0])
    alert(score[1])
    alert(score[2])
    alert(score[3])
}

function userLogin(){
    var result = prompt("Put in login credentials")

    alert(result)
}