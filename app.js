function check(){
    var value= document.getElementById('data').value;
    // var res= Math.sign(value);
    if (value>0){
        res = `${value} Is a positive Number`;
    }
    else if(value<0){
        res = `${value} Is a negative Number`
    }
    else if (value==0){
        res = `${value} Is a Zero`
    }
    else {
        res =`${value} Is not a number`
    }
    document.getElementById('res').innerText = res;
}
// var value= document.getElementById('data').value;
//     var res= Math.sign(value);
//     document.getElementById('res').innerText = res;
// }