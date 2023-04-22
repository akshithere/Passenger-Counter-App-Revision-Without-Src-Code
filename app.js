let count=0;
function incrementBtn() {
console.log("The increment button is clicked")
    count = count + 1;
    document.getElementById("incrementedvalue").innerHTML=count;
    }


function saveBtn() {

    console.log("The save button is clicked")
    document.getElementById("savedvalue").innerHTML= count + "-"
}