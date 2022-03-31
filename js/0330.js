/* 1. Žinomas skaicius n. Parašykite programa, kuri nustatytu ar skaicius yra blogas ar geras? 
Neigiamas – „Blogas“, teigiamas „Geras“. Pasitikrinkite: Kai n = 20, turetume gauti: Skaicius geras.
*/

let n = 20
if (n >= 0) {console.log('Skaicius geras');
    
} else {console.log('Skaicius blogas');
}

/*2. Mokinys eina gatve ir prieina sankryža reguliuojama šviesoforu. Sudarykite programa, kuri nustatytu, 
kaip turi pasielgti mokinys? Žinome šviesoforo spalvos koda n, 1-žalia, 2geltona, 3-raudona. 
Pasitikrinkite: Kai n= 2, turetume gauti: Palaukite.  */


if (n = 2) 
{console.log("Palaukti")};

/*3. Gintautas planuoja persikraustyti i naujus namus ir jam reikia sudeti visas turimas knygas i dežes. 
 Gintautas turi d dežiu ir k knygu. Parašykite programa, kuri apskaiciuotu, ar Gintauto turimos knygos tilps i dežes,
 jei i viena deže telpa po n knygu. Pasitikrinkite: Kai d=2, k=8, n=5 tuomet ekrane turi buti rodomas 
 pranešimas: Knygos telpa i dežes; kai d=3, k=18, n=5 tuomet ekrane turi buti rodomas pranešimas: Knygos netelpa i dežes.*/

 d = 3;
 k = 18;
 n = 5;
if (k / n <= d) { console.log('Knygos telpa i dezes')
} else

if(k / n > d) {console.log('Knygos netelpa i dezes')};



/* 4. Duoti du sveikieji skaiciai a ir b. Parašykite programa, kuri didesni skaiciu pamažintu vienetu,
 o mažesni padidintu vienetu. */

 let a = 3;
 let b = 8;
 
 if (a>b) {
     a--; b++;
 } else {
     a--; b++;
 }
 
 console.log(a);
 console.log(b);

 /*5. Saulius sutaupė c centų ir už juos nusprendė nusipirkti ledų. Parduotuvėje porcija ledų kainuoja p centų.
  Parašykite programą, kuri suranda, kiek porcijų ledų k nusipirks Saulius ir kiek centų m dar liks. 
  Pasitikrinkite Kai c=50, p=20, turi būti : Saulius nusipirks 2 porcijas, liks centų 10. 
  Gali prireikti panaudoti Math.floor() funkciją. */

  let c = 99;
  let p = 20;
 
  let porcijosK = Math.floor(c/p);
  let grazaM = c - (p*porcijosK);
  console.log(`Saulius nusipirks ${porcijosK} porcijas, liks ${grazaM} centu`);

  /* 6. Yra n degtukų. Parašykite programą, kuri nustatytų, ar iš tų degtukų galima sudėti lygiakraštį trikampį. 
  Dėliojamai figūrai turi būti panaudoti visi degtukai. Degtukų laužyti negalima. 
  Pasitikrinkite: jei n = 6, turi būti: Trikampį sudėlioti galima. jei n = 4, turi būti: Trikampį sudėlioti negalima.*/

  let degtukai = 12; 
  
  if (degtukai % 3  === 0) {
    console.log("Trikampį sudėlioti galima");
  } else {console.log("Trikampio sudėlioti negalima");
};

/*7. Parašykite programą, kuri žinant mėnesio numerį n atspausdintų to mėnesio dienų kiekį d. 
(tarkime, kad metai yra paprastieji) (pvz. n=5, ats. d=31; n=2 ats. d=28)  
31 28 31 30 31 30 31 31 30 31 30 31*/

let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
n=8;
console.log(`ats. d=${monthDays [n-1]}`);

/*8. Du broliai nesutaria, kuriam tvarkyti kambarį. Jie meta kauliuką. Jei iškrenta skaičius 1, 3 arba 5 – kambarį tvarko jaunėlis,
 jei 2, 4 arba 6 – vyresnėlis.
 Parašykite programą, kuri įvedus iškritusį skaičių k, ekrane rodytų pranešimą „Kambarį tvarkys jaunėlis“, 
 arba „Kambarį tvarkys vyresnėlis“. Pasitikrinkite: kai k = 1, ekrane turi būti: Kambarį tvarkys jaunėlis. 
 Kai k = 4, ekrane turi būti: Kambarį tvarkys vyresnėlis. */

 let kauliukoSkaicius = 2

 if (kauliukoSkaicius % 2  === 0) {
    console.log("Kambarį tvarkys vyresnėlis");
  } else {console.log("Kambarį tvarkys jaunėlis");
};

/*9. Pirmosios olimpinės žaidynės įvyko 1896 metais ir toliau organizuojamos kas ketveri metai. Jei žaidynės neįvyksta, 
tie metai vis tiek laikomi olimpiniais, o žaidynėms skiriamas eilės numeris. Parašykite programą, kuri surastų m-ųjų metų
 olimpinių žaidynių numerį n. Jei metai neolimpiniai, turi būti spausdinama „Metai neolimpiniai“. Pasitikrinkite. 
 Kai m = 1904, turi būti spausdinama: n = 3. Kai m = 2005, turi būti spausdinama: Metai neolimpiniai.*/

 


