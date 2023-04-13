// var x=prompt('Ededi daxil edin');
// if (x > 99 && x < 1000) {
//     var teklik = x % 10
//     var onluq = ((x - teklik)/10)%10
//     var z=onluq*10+teklik
//     var yuzluk=(x-z)/100

//     if(teklik==onluq && onluq==yuzluk){
//         alert('Ededin butun reqemleri beraberdir')
//     }
//     else{
//         alert('Ededin reqemleri beraber deyil')
//     }
// }


var char = prompt('Simvolu daxil edin');
switch (char) {
    case "a":
        alert("Azerbaycan dili secildi");
        break;
    case "r":
        alert("Rus dili secildi");
        break;
    case "e":
        alert("İngilis dili secildi");
        break;
    default:
        alert("Yanlish sorgu");
        break;
} 