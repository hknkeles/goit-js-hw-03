// TASK 2

/*Üç parametre alan makeArray adında bir fonksiyon yazın: 
firstArray, secondArray ve maxLength. Fonksiyon, firstArray'deki tüm elemanları ve ardından secondArray'deki tüm elemanları içeren yeni bir dizi oluşturmalıdır

Yeni dizideki eleman sayısı maxLength değerini aşarsa, fonksiyon dizinin maxLength değerindeki eleman uzunluğuna sahip bir kopyasını döndürmelidir.
Aksi takdirde, fonksiyon yeni dizinin tamamını döndürmelidir.
Aşağıdaki kodu alın ve doğru çalışıp çalışmadığını kontrol etmek için fonksiyonunuzun bildiriminden sonra yapıştırın. Konsol, çalışmanın sonuçlarını gösterecektir.*/

function makeArray(firstArray, secondArray, maxLength){

   const newArray = firstArray.concat(secondArray);
    
    if (newArray.length>maxLength) {
        newArray.length = maxLength;
    }

    return newArray;

}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []