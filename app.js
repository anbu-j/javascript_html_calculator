

var add = () => {
    var addInputOne = document.getElementById("addInputOne").value
    var addInputTwo = document.getElementById("addInputTwo").value
    var sum;
    sum = parseInt(addInputOne) + parseInt(addInputTwo)
    alert("The sum is"+ sum)

console.log(addInputOne)
console.log(addInputTwo)
console.log(sum)
}
var sub = ()=> {
    var subInputOne = document.getElementById("subInputOne").value
    var subInputTwo = document.getElementById("subInputTwo").value
    var difference;
    difference = parseInt(subInputOne) - parseInt(subInputTwo)
    alert("The diffrence is" + difference)
    console.log(subInputOne)
    console.log(subInputTwo)
    console.log(difference)
}
var Div = () => {
    var divInputOne = document.getElementById("divInputOne").value
    var divInputTwo = document.getElementById("divInputTwo").value
    var Quotient;
    Quotient = parseInt(divInputOne) / parseInt(divInputTwo)
    alert("The quotient is" + Quotient)
    console.log(divInputOne)
    console.log(divInputTwo)
    console.log(Quotient)
    }
    var Mul = () => {
        var mulInputOne = document.getElementById("mulInputOne").value
        var mulInputTwo = document.getElementById("mulInputTwo").value
        var Product;
        Product = parseInt(mulInputOne) * parseInt(mulInputTwo)
        alert("The product is" + Product)
        console.log(mulInputOne)
        console.log(mulInputTwo)
        console.log(Quotient)

    }
    var Avg = () => {
        var avgInputOne = document.getElementById("avgInputOne").value
        var avgInputTwo = document.getElementById("avgInputTwo").value
        var avgInputThree = document.getElementById("avgInputThree").value
        var avgInputFour = document.getElementById("avgInputFour").value
        var avgInputFive = document.getElementById("avgInputFive").value
        var numOfInput = document.getElementById("numOfInput").value
        var Average;
        Average = (parseInt(avgInputOne) + parseInt(avgInputTwo) + parseInt(avgInputThree) + parseInt(avgInputFour) + parseInt(avgInputFive)) / parseInt(numOfInput)
        alert("The average of 5 numbers is" + Average)
        console.log(avgInputOne)
        console.log(avgInputTwo)
        console.log(avgInputThree)
        console.log(avgInputFour)
        console.log(avgInputFive)
        console.log(numOfInput)
        console.log(Average)
    }