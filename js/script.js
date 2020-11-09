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
    arr3[i] = i // что это значит?
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
        document.write(arr5[i]+' ' )
    }
}
//--------------------------------------------
// NUMBER 6
document.write ('<br>'+'------------- NUMBER 6 -------------' + '<br>')
let arr6 = ["Один", "Два", "Три", "Четыре", "Пять", "Шесть", "Семь"];
arr6 [arr6.length] = "Восемь";
document.write (arr6 [arr6.length - 1]) 
//--------------------------------------------
// NUMBER 7
document.write ('<br>'+'------------- NUMBER 7 -------------' + '<br>')
let arr7;
let arr70 = [];
while (true) {
	arr7 = prompt ("Введите число");
	if (!+arr7) { // if (arr7 == " ") почему не работает с двумя пробелами и большe?
		break;
	}
	else {
		arr70.push (arr7);
	}
}
 arr70.sort(function(a, b) {return a - b }); 
document.write (arr70);
//--------------------------------------------
// NUMBER 8
document.write ('<br>' + '------------- NUMBER 8 -------------'+ '<br>')
let arr8 = [12, false, "Текст", 4, 2, -5, 0],
i=0;
while (i < arr8.length) {
    arr8.reverse ();
    i++;// зачем тут это?
}
document.write (arr8);
//--------------------------------------------
// NUMBER 9
document.write ('<br>' + '------------- NUMBER 9 -------------'+ '<br>')
let arr9 = [5, 9, 21, , , 9, 78, , , , 6],
kol = 0;
for (let i = 0; i < arr9.length; i++) {
    if (arr9[i]== undefined) (kol ++)
}
document.write ("Количество пустых элементов массива = " + kol + '<br>') ;
//--------------------------------------------
// NUMBER 10
console.log ('------------- NUMBER 10 -------------')
//--------------------------------------------