function display(val) {
document.getElementById('result').value += val;
return val;
}
function solve() {
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value=y;
    var img = document.getElementById('image');
    img.src = "yogihappy.jpg";
    return y;
}
function clearScreen(){
    document.getElementById('result').value="";
    var img = document.getElementById('image');
    img.src = 'yogiangry.jpg';
}
