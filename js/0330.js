/* 1. Žinomas skaicius n. Parašykite programa, kuri nustatytu ar skaicius yra blogas ar geras? 
Neigiamas – „Blogas“, teigiamas „Geras“. Pasitikrinkite: Kai n = 20, turetume gauti: Skaicius geras.
*/

let n = 20
if (n >= 0) {console.log('Skaicius geras');
    
} else {console.log('Skaicius blogas');
}


/*3. Gintautas planuoja persikraustyti i naujus namus ir jam reikia sudeti visas turimas knygas i dežes. 
 Gintautas turi d dežiu ir k knygu. Parašykite programa, kuri apskaiciuotu, ar Gintauto turimos knygos tilps i dežes,
 jei i viena deže telpa po n knygu. Pasitikrinkite: Kai d=2, k=8, n=5 tuomet ekrane turi buti rodomas 
 pranešimas: Knygos telpa i dežes; kai d=3, k=18, n=5 tuomet ekrane turi buti rodomas pranešimas: Knygos netelpa i dežes.*/

 const d = 2;
 const k = 8;
 const n4 = 5;
if (k / n4 <= d) { console.log('Knygos telpa i dezes')
} else

if(k / n4 > d) {console.log('Knygos netelpa i dezes')};

/*2. Mokinys eina gatve ir prieina sankryža reguliuojama šviesoforu. Sudarykite programa, kuri nustatytu, 
kaip turi pasielgti mokinys? Žinome šviesoforo spalvos koda n, 1-žalia, 2geltona, 3-raudona. 
Pasitikrinkite: Kai n= 2, turetume gauti: Palaukite.  */


if (n = 2) 
{console.log("Palaukti")};

/* Duoti du sveikieji skaiciai a ir b. Parašykite programa, kuri didesni skaiciu pamažintu vienetu,
 o mažesni padidintu vienetu. */

 let a = 2;
 let b = 4;

console.log(a);
console.log(b);

a++;
console.log(a)

b--;
console.log(b);

