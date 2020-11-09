// NUMBER 1
document.write ('------------- NUMBER 1 -------------' + '<br>')
let arr1 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr1.length; i++) {
	document.write(arr1[i] + '<br>');
}
//--------------------------------------------
// NUMBER 2
document.write ('------------- NUMBER 2 -------------' + '<br>')
let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i]> -10 && arr2[i]<-3){
    document.write(arr2[i] + '<br>');
}
}
//--------------------------------------------
// NUMBER 3
document.write ('------------- NUMBER 3 -------------' + '<br>')
let arr3 = [];
let result = 0;
for (let i = 23; i <= 57; i++) {
    arr3[i] = i
    document.write (arr3[i] + ' ')
    result += i;
}
document.write (`<br> Сумма элементов массива = ${result} <br> `)
//--------------------------------------------
// NUMBER 4
document.write ('------------- NUMBER 4 -------------' + '<br>')
let arr4 = ['10', '20','30', '50', '235', '3000']; 
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i][0] == "1" || arr4[i][0] == "2" || arr4[i][0] == "5") {
      document.write (arr4[i]+ '<br>') ;
}
}
//--------------------------------------------
// NUMBER 5
document.write ('------------- NUMBER 5 -------------' + '<br>')
let arr5 = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
for (let i=0; i < arr5.length; i++) {
    if (i == 5 || i == 6 ) {
        document.write('<b>' + arr5[i]+' ' + '</b>');
    }
    else {
        document.write(arr5[i]+' ')
    }
}
//--------------------------------------------
// NUMBER 6
console.log ('------------- NUMBER 6 -------------')
//--------------------------------------------
// NUMBER 7
console.log ('------------- NUMBER 7 -------------')
//--------------------------------------------
// NUMBER 8
console.log ('------------- NUMBER 8 -------------')
//--------------------------------------------
// NUMBER 9
console.log ('------------- NUMBER 9 -------------')
//--------------------------------------------
// NUMBER 10
console.log ('------------- NUMBER 10 -------------')
//-------------------------------------------