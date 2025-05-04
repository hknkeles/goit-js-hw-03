// TASK 1

/*Slug — her zaman küçük harfli bir dizedir ve sözcükler tire ile ayrılmıştır.

Anladınız mı? Şimdi elimizdeki göreve devam edelim!

Makalenin başlığını, title parametresini alan ve bu dizeden oluşturulan slug'ı döndüren bir slugify(title) işlevi yazın.

title parametresinin değeri, sözcükleri yalnızca boşluklarla ayrılmış dizeler olacaktır.
Tüm slug karakterleri küçük harf olmalıdır.
Tüm slug kelimeler bir tire ile ayrılmalıdır. */

function slugify(title){

    return title.toLowerCase().split(" ").join("-");
}


console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

