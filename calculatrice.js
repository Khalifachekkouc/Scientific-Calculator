let screen = document.getElementById("screen");

function appendValue(value){
    screen.value += value;
}
function clearScreen(){
    screen.value = "";
}
function deleteLast(){
    screen.value = screen.value.slice(0, -1);
}
function calculate(){
    try{
        let result = eval(screen.value);
        screen.value = Number.isInteger(result) ? result : result.toFixed(4);
    }catch(error){
        screen.value = "Error";
        setTimeout(clearScreen, 1500);
    }
}