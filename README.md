# Vizsgaremek

---

## Ételrendelő alkalmazás

---

---

## User story - Admin

---

### Főoldal:

**1. pont**

> _A főoldalon az üdvözlő szöveg szerepel és az alapvető információk az ételrendelés menetéről._

**Elfogadási kritérium:**  
Látványos, reszponzív kinézet.
Az információk nem túl hosszúak és összetettek, hogy a felhasználó azonnal értse, hogy mit kell tennie.

**2. pont**

> _A főoldalon és minden aloldalon látszódik az összes elérhető menüpont._

**Elfogadási kritérium:**  
Megfelelő, reszponzív menüsáv, ami az összes a felhasználó szerepkörének megfelelő menüpontot tartalmazza.
Kezdéskor bejelentkezés és regisztráció menüpontok láthatóak.
Bejelentkezés esetén a desktop nézetveb bejelentkező neve és a kijelentkezés gomb. Mobil nézetben pedig ennek megfelelő gombok.

---

---

### Heti menü aloldal (vizuális megjelenés - a végfelhasználók számára):

**1. pont**

> _Az adott hét sorszáma, a napoknak megfelelő dátumok és nevek megjelenítése legfelül._

**Elfogadási kritérium:**  
A pontos dátum folyamatos figyelése és ennek megfelelően az oldal tartalmának változtatása.

**2. pont**

> _Gombok segítségével lehet változtatni, hogy éppen melyik hét menüjét lássuk az aloldalon._

**Elfogadási kritérium:**

- Egyértelműen jelölni azt, hogy melyik hetet látjuk éppen.
- Külön gombok az előttünk álló két hét kiválasztására.

**3. pont**

> _A megfelelő dátumhoz tartozó menükonstrukciók megjelenítése._

**Elfogadási kritérium:**  
Az egyes menükonstrukciók egymástól jól elkülönítetten és reszponzívan módon való megjelenítése az aloldal betöltésekor.

**4. pont**

> _Gombok segítségével navigálhatunk az egyes menükonstrukciók között._

**Elfogadási kritérium:**  
Egy gombcsoport, aminek elemeire kattintva a megadott menü konstrukcióhoz gördül az oldal.

**5. pont**

> _A főmenük alatt megjelennek az opcionálisan választható egyéb termékek._

**Elfogadási kritérium:**
Opcionális termékek:

- Reggeli
- Desszert
- Sütemény
- Savanyúság
- Üdítő

**6. pont**

> _A menük és az opcionális termékek jól átláthatóak, reszponzívak és egyértelműek._

**Elfogadási kritérium:**

- Egyértelműen látszik, hogy melyik menü és opcionális termék mennyibe kerül egy hétre, illetve egy napra.
- A termékek rendelési kódjának feltüntetése
- A megrendeléshez szükséges gomb elhelyezése (a vásárlók bejelentkezés esetén látható) - FEJLESZTÉSI LEHETŐSÉG

**7. pont**

> _A rendelés menetének rövid feltüntetése a jobb érthetőség kedvéért._

**Elfogadási kritérium:**  
Az aloldalon feltűnő helyen elhelyezünk egy gombot, ami felugró ablakként segíti a rendelést.

---

#### Egy heti menü felépítése

**1. pont**

> _Egy menü és opcionális termék öt napra választható egy előre meghatározott áron._

**Elfogadási kritérium:**

- Könnyen azonosítható, hogy melyik étel melyik menükonstrukcióhoz tartozik.
- A leves és a főétel egy egységet alkot. Ezek ára együttesen kerül megadásra, ez adja ki egy menü egy napi árát.
- A reggelik, a desszertek, a sütemények, a savanyúságok és az üdítők opcionálisan vásárolhatóak a menühöz. Ezek ára szintén feltüntetésre kerül és nincsenek benne a menü sem napi, sem heti árában.

**2. pont**

> _Az ételek kártyás megjelenítése._

**Elfogadási kritérium:**

- Az ételeket kártyák segítségével jelenítjük meg egy adott napra egy adott menühöz kapcsolva.
- A kártyán látszik az adott étel neve és egy info ikon, aminek a segítségével megnézhetjük a róla készült fotó és a hozzá tartozó allergéneket.
- Az információk között szerepel, hogy mekkora mennyiségben (grammal vagy literben) rendelhetjük meg az adott ételt a kiválasztott menükonstrukcióból.

  **3. pont**

  > _Allergének jelölése._

**Elfogadási kritérium:**

- Az egyes ételekhez tartozó allergén anyagok feltüntetése a nevük alatt kis piktogramok segítségével.
- A piktogramokhoz tartoznak jelmagyarázatok.
- Amikor a piktogram fölé visszük a kurzort, szövegesen jelenítse meg a jelentését.

---

---

### Gyorskaják aloldal (vizuális megjelenés - a végfelhasználók számára):

**1. pont**

> _Röviden ismertetése a gyorskaja rendelésének menetére._

**Elfogadási kritérium:**  
Mivel a gyorskaják rendelése teljesen eltér a menüs megoldástól ezért, a felhasználók segítségére egyértelműen, tömören és pontokba szedve leírjuk a rendelés menetét.
Az ingyenes kiszállítási területeket is feltüntetjük, illetve, hogy mennyibe kerül a kiszállítás távolabbi címekre. Ezenkívül személyes átvétel is választható.
A vállalt kiszállítási időt is megadjuk.

**2. pont**

> _Az elérhető gyors kaják felsorolása._

**Elfogadási kritérium:**  
A gyorskaják fajták szerint jól elkülönítve, felsorolva jelennek meg.
Ezekhez nem tartozik kép, viszont az allergéneket itt is feltüntetjük.
Minden sor végén szerepel az adott ételhez tartozó ár, illetve egy megrendelés gomb (a vásárlók bejelentkezés esetén látható) - FEJLESZTÉSI LEHETŐSÉG
A hét csoport:

- Pizzák
- Hamburgerek
- Gyros
- Köretek
- Saláták
- Desszertek
- Üdítők

### Regisztrációs aloldal:

**1. pont**

> _A regisztráció a megfelelő, valid adatok megadásával történik._

**Elfogadási kritérium:**  
Űrlapos formában kérjük be az adatokat.
Kell email cím és jelszó, illetve a rendeléshez szükség van az illető telefonszámára, címére és a kiszállítási címre.
Az űrlap kitöltése közben már automatikusan történik a validáció.
Hiba esetén szöveges hibaüzenetben jelöljük a felhasználónak a problémát.
Sikeres regisztráció esetén a szerepkörben megfelelő oldalra navigálunk át.
Mégse gombra kattintás esetén a főoldalra térünk vissza.

### Belépési aloldal:

**1. pont**

> _A korábban regisztrált felhasználók bejelentkezésére szolgáltató oldal._

**Elfogadási kritérium:**  
Űrlapos formában kérjük be az adatokat.
Kell email cím és jelszó.
A bejelentkezés gombra kattintáskor történik a validáció és az autentikáció.
Hiba esetén szöveges hibaüzenetben jelöljük a felhasználónak a problémát.
Sikeres belépés esetén a szerepkörben megfelelő oldalra navigálunk át.

### Dashboard aloldal:

**1. pont**

> _Az adatbázisban nyilvántartott adatokból kinyert összefüggések grafikonos és táblázatos megjelenítése._

**Elfogadási kritérium:**  
Az adatbázisban rögzített adatok alapján különböző statisztikákat készítünk.
Reszponzívan, grafikonos és táblázatos formában jelenjenek meg az adatok, hogy gyorsan információt kapjunk a vállalkozás jelenlegi helyzetéről.

### Ételek aloldal:

**1. pont**

> _Az adatbázisban nyilvántartott adatok táblázatos megjelenítése._

**Elfogadási kritérium:**  
Az adatbázisban szereplő összes étel felsorolása táblázatos formában.

**2. pont**

> _A kapott listában kereshetünk._

**Elfogadási kritérium:**  
Egy kereső mező segítségével kereshetünk a listában, illetve oszlopfejléc megadásával egy adott oszlop adatai között is kereshetünk.

**3. pont**

> _A kapott listát rendezhetjük._

**Elfogadási kritérium:**  
Az oszlopok fejlécére kattintva ABC rendbe vagy fordítva, illetve ha számokról van szó, akkor növekvő vagy csökkenő sorrendbe rendezhetjük az egész táblázatot az adott oszlop alapján.

**4. pont**

> _Oldalléptetés._

**Elfogadási kritérium:**  
A táblázatban megjelenő adatok könnyebb áttekintése miatt nem jelenítjük meg az összes adatot egy oldalon, hanem oldalléptető segítségével adjuk meg, hogy hány adatot szeretnénk látni egy oldalon, illetve, hogy melyik oldalra szeretnénk navigálni a sorban. Külön gomb van az első és az utolsó oldal eléréséhez.

**5. pont**

> _Új étel felvétele_

**Elfogadási kritérium:**  
Mindkettő főkategória (menükhöz kapcsolódó ételek és gyorskaják) esetén a megfelelő gombra kattintva új ételt vehetünk fel az adatbázisba.
Űrlapos formában történik az adatok bevitele.
A mentés előtt automatikus validáció történik, ami nem engedi a rossz adatok elmentését.
A sikeres mentés esetén egy felugró üzenetet kapunk a műveletről és visszatérünk a listaoldalra, ahol már a friss adatok látszanak.
A mégsére kattintva szintén visszatérünk a listaoldalra.

**6. pont**

> _Egy étel adatainak megtekintése_

**Elfogadási kritérium:**  
Mivel a listaoldalon csak kevés adatot tudunk jól láthatóan megjeleníteni, ezért a táblázat utolsó cellájában minden ételhez tartozik egy információs gomb. Erre kattintva egy új oldalra kerülünk, ahol menühöz kapcsolódó étel esetén a róla készült fotót is megnézhetjük, illetve űrlapos formában megjelennek az adatok is.
Az menühöz tartozó ételekhez esetén nem csak azt nézhetjük meg, ami az adatbázisban szerepel, hanem azokat az adatok is láthatóak, hogy

- hányszor szerepelt eddig összesen
- melyik héten volt, van vagy lesz elérhető

Megfelelő gombra kattintva szerkeszthetjük és törölhetjük az adott ételt.
A mégsére kattintva visszatérünk a listaoldalra.

**7. pont**

> _Egy étel törlése az adatbázisból_

**Elfogadási kritérium:**  
Egy adott ételt kétféleképpen is törölhetünk az adatbázisból.
A listaoldalon a táblázat utolsó cellájában lévő törlés gombbal.
Vagy a információs oldalon az adatok alján lévő törlés gomb segítségével.
A törlés előtt egy biztonsági kérdést kapunk, amiben meg kell erősítenünk, hogy valóban törölni szeretnénk-e az adott ételt.
A sikeres törlés esetén egy felugró üzenetet kapunk a műveletről és visszatérünk a listaoldalra, ahol már a frissített adatok látszanak.
A mégse gombra kattintva szintén visszatérünk a listaoldalra.

### Kategóriák aloldal:

**1. pont**

> _Az adatbázisban nyilvántartott kategória táblázatos megjelenítését szolgálja._

**Elfogadási kritérium:**  
Az adatbázisban szereplő kategóriák megjelenítése.
Külön az ételekre, külön a gyorskajákra.

**2. pont**

> _A kapott listában kereshetünk._

**Elfogadási kritérium:**  
Egy kereső mező segítségével kereshetünk a listában, illetve oszlopfejléc megadásával egy adott oszlop adatai között is kereshetünk.

**3. pont**

> _A kapott listát rendezhetjük._

**Elfogadási kritérium:**  
Az oszlopok fejlécére kattintva ABC rendbe vagy fordítva, illetve ha számokról van szó, akkor növekvő vagy csökkenő sorrendbe rendezhetjük az egész táblázatot az adott oszlop alapján.

**4. pont**

> _Oldalléptetés._

**Elfogadási kritérium:**  
A táblázatban megjelenő adatok könnyebb áttekintése miatt nem jelenítjük meg az összes adatot egy oldalon, hanem oldalléptető segítségével adjuk meg, hogy hány adatot szeretnénk látni egy oldalon, illetve, hogy melyik oldalra szeretnénk navigálni a sorban. Külön gomb van az első és az utolsó oldal eléréséhez.

**5. pont**

> _Minden egyes étel vagy gyorskaja egy adott kategóriához tartozik._

**Elfogadási kritérium:**  
Mivel a menühöz tartozó ételek és a gyorskaják elkülönülnek egymástól, ezért az ezekhez tartozó kategóriákat is külön listázhatjuk. Ezt a gombok segítségével oldhatjuk meg. Kattintás esetén újra töltődik a táblázat a megfelelő adatokkal.
Minden egyes ételnél és gyorskajánál szerepel a kategória neve és kódja. A kategóriák listázásra, szerkesztése azért fontos, mert így egyszerre tudjuk az egész adatbázisban az adott kategóriához tartozó ételek árát és mennyiségét változtatni.

**6. pont**

> _Új kategória felvétele_

**Elfogadási kritérium:**  
Megfelelő gombra kattintva új kategóriát vehetünk fel az adatbázisba.
Űrlapos formában történik az adatok bevitele.
A mentés előtt automatikus validáció történik, ami nem engedi a rossz adatok elmentését.
A sikeres mentés esetén egy felugró üzenetet kapunk a műveletről és visszatérünk a listaoldalra, ahol már a friss adatok látszanak.
A mégse gombra kattintva szintén visszatérünk a listaoldalra.

**7. pont**

> _Egy kategória adatainak megtekintése_

**Elfogadási kritérium:**  
Mivel a listaoldalon csak kevés adatot tudunk jól láthatóan megjeleníteni, ezért a táblázat utolsó cellájában minden kategóriához tartozik egy információs gomb. Erre kattintva egy új oldalra kerülünk, ahol űrlapos formában megjelennek az adott kategória adatai. Megfelelő gombra kattintva szerkeszthetjük és törölhetjük az adott kategóriát.
A mégse gombra kattintva visszatérünk a listaoldalra.

**8. pont**

> _Egy kategória törlése az adatbázisból_

**Elfogadási kritérium:**  
Egy adott kategóriát kétféleképpen is törölhetünk az adatbázisból.
A listaoldalon a táblázat utolsó cellájában lévő törlés gombbal.
Vagy a információs oldalon az adatok alján lévő törlés gomb segítségével.
A törlés előtt egy biztonsági kérdést kapunk, amiben meg kell erősítenünk, hogy valóban törölni szeretnénk-e az adott kategóriát.
A sikeres törlés esetén egy felugró üzenetetkapunk a műveletről és visszatérünk a listaoldalra, ahol már a frissített adatok látszanak.
A mégse gombra kattintva szintén visszatérünk a listaoldalra.

### Menü szerkesztése aloldal:

**1. pont**

> _Az adatbázisban szereplő összes menü szerkesztésére szolgáló oldal._

**Elfogadási kritérium:**  
Könnyen átlátható táblázatos forma, ahol egy űrlap segítségével állíthatjuk be, hogy az egyes menüket az összes hetére.

**2. pont**

> _Minden menünek külön jelenik meg._

**Elfogadási kritérium:**  
Gombok segítségével választhatunk, hogy éppen melyik menüt szeretnénk szerkeszteni. Ez azért fontos, mert így csak az adott menühöz tartozó ételek fognak megjelenni az űrlapon.
Fontos, hogy az aktuálisan megrendelhető három hét menüje nem szerkeszthető.

**3. pont**

> _Menük random generálása._

**Elfogadási kritérium:**  
Az admin és az editor munkáját megkönnyítően egy random menügeneráló gomb is került az oldalra, ami automatikusan készíti el a menüterveket egy adott konstrukcióhoz egy adott hétre.
Természetesen ezeket később még lehet módosítani.

### Vásárlók aloldal:

**1. pont**

> _Az adatbázisban nyilvántartott vásárlók táblázatos megjelenítése._

**Elfogadási kritérium:**  
Az adatbázisban szereplő összes vásárló felsorolása táblázatos formában.

**2. pont**

> _A kapott listában kereshetünk._

**Elfogadási kritérium:**  
Egy kereső mező segítségével kereshetünk a listában, illetve oszlopfejléc megadásával egy adott oszlop adatai között is kereshetünk.

**3. pont**

> _A kapott listát rendezhetjük._

**Elfogadási kritérium:**  
Az oszlopok fejlécére kattintva ABC rendbe vagy fordítva, illetve ha számokról van szó, akkor növekvő vagy csökkenő sorrendbe rendezhetjük az egész táblázatot az adott oszlop alapján.

**4. pont**

> _Oldalléptetés._

**Elfogadási kritérium:**  
A táblázatban megjelenő adatok könnyebb áttekintése miatt nem jelenítjük meg az összes adatot egy oldalon, hanem oldalléptető segítségével adjuk meg, hogy hány adatot szeretnénk látni egy oldalon, illetve, hogy melyik oldalra szeretnénk navigálni a sorban. Külön gomb van az első és az utolsó oldal eléréséhez.

**5. pont**

> _Új vásárló felvétele_

**Elfogadási kritérium:**
Alap esetben a regisztrációs aloldalon történő adatok megadásával történik az új felhasználók felvétele. Viszont van arra is lehetőség, hogy a megfelelő gombra kattintva új vásárlót vehessünk fel az adatbázisba.
Űrlapos formában történik az adatok bevitele.
A mentés előtt automatikus validáció történik, ami nem engedi a rossz adatok elmentését.
A sikeres mentés esetén egy felugró üzenetetkapunk a műveletről és visszatérünk a listaoldalra, ahol már a friss adatok látszanak.
A mégse gombra kattintva szintén visszatérünk a listaoldalra.

**7. pont**

> _Egy vásárló adatainak megtekintése_

**Elfogadási kritérium:**  
Mivel a listaoldalon csak kevés adatot tudunk jól láthatóan megjeleníteni, ezért a táblázat utolsó cellájában minden vásárlóhoz tartozik egy információs gomb. Erre kattintva egy új oldalra kerülünk, ahol űrlapos formában megjelennek a vásárló adatai.
Az alapinformációkon túl láthatjuk, hogy az adott vásárló milyen ételt, mikor és hányszor vásárolt.
Megfelelő gombra kattintva szerkeszthetjük és törölhetjük az adott vásárlót.
A mégse gombra kattintva visszatérünk a listaoldalra.

**8. pont**

> _Egy vásárló törlése az adatbázisból_

**Elfogadási kritérium:**  
Egy adott vásárlót kétféleképpen is törölhetünk az adatbázisból.
A listaoldalon a táblázat utolsó cellájában lévő törlés gombbal.
Vagy a információs oldalon az adatok alján lévő törlés gomb segítségével.
A törlés előtt egy biztonsági kérdést kapunk, amiben meg kell erősítenünk, hogy valóban törölni szeretnénk-e az adott vásárlót.
A sikeres törlés esetén egy felugró üzenetetkapunk a műveletről és visszatérünk a listaoldalra, ahol már a frissített adatok látszanak.
A mégsére kattintva szintén visszatérünk a listaoldalra.

### Megrendelések aloldal:

**1. pont**

> _Az adatbázisban nyilvántartott megrendelések táblázatos megjelenítése._

**Elfogadási kritérium:**  
Az adatbázisban szereplő összes megrendelés felsorolása táblázatos formában.
Mivel a menühöz tartozó ételek és a gyorskaják elkülönülnek egymástól, ezért az ezekhez tartozó rendeléseket külön listázhatjuk. Ezt a gombok segítségével oldhatjuk meg. Kattintás esetén újra töltődik a táblázat a megfelelő adatokkal.
Egy megrendelés id alapján össze van kötve a vásárlók adatbázisával, a könnyebb értelmezhetőség miatt, amikor egy megrendelést adatait látjuk, akkor az id helyett a vásárló neve jelenik meg.

**2. pont**

> _A kapott listában kereshetünk._

**Elfogadási kritérium:**  
Egy kereső mező segítségével kereshetünk a listában, illetve oszlopfejléc megadásával egy adott oszlop adatai között is kereshetünk.

**3. pont**

> _A kapott listát rendezhetjük._

**Elfogadási kritérium:**  
Az oszlopok fejlécére kattintva ABC rendbe vagy fordítva, illetve ha számokról van szó, akkor növekvő vagy csökkenő sorrendbe rendezhetjük az egész táblázatot az adott oszlop alapján.

**4. pont**

> _Oldalléptetés._

**Elfogadási kritérium:**  
A táblázatban megjelenő adatok könnyebb áttekintése miatt nem jelenítjük meg az összes adatot egy oldalon, hanem oldalléptető segítségével adjuk meg, hogy hány adatot szeretnénk látni egy oldalon, illetve, hogy melyik oldalra szeretnénk navigálni a sorban. Külön gomb van az első és az utolsó oldal eléréséhez.

**5. pont**

> _Új megrendelés felvétele_

**Elfogadási kritérium:**
Alap esetben a regisztrációs kosáron keresztül történik az új megrendelés felvétele. Viszont van arra is lehetőség, hogy a megfelelő gombra kattintva új megrendelést vegyen fel az admin az adatbázisba.
Űrlapos formában történik az adatok bevitele.
A mentés előtt automatikus validáció történik, ami nem engedi a rossz adatok elmentését.
A sikeres mentés esetén egy felugró üzenetetkapunk a műveletről és visszatérünk a listaoldalra, ahol már a friss adatok látszanak.
A mégse gombra kattintva szintén visszatérünk a listaoldalra.

**7. pont**

> _Egy megrendelés adatainak megtekintése_

**Elfogadási kritérium:**  
Mivel a listaoldalon csak kevés adatot tudunk jól láthatóan megjeleníteni, ezért a táblázat utolsó cellájában minden megrendeléshez tartozik egy információs gomb. Erre kattintva egy új oldalra kerülünk, ahol űrlapos formában megjelennek a megrendelés adatai.
Ezen az oldalon szerepel az adott rendelés összes tétele, feltüntetve a kategóriát és rendelési mennyiséget.
Megfelelő gombra kattintva szerkeszthetjük és törölhetjük az adott megrendelést.
A mégsére kattintva visszatérünk a listaoldalra.

**8. pont**

> _Egy megrendelés törlése az adatbázisból_

**Elfogadási kritérium:**  
Egy adott megrendelést kétféleképpen is törölhetünk az adatbázisból.
A listaoldalon a táblázat utolsó cellájában lévő törlés gombbal.
Vagy a információs oldalon az adatok alján lévő törlés gomb segítségével.
A törlés előtt egy biztonsági kérdést kapunk, amiben meg kell erősítenünk, hogy valóban törölni szeretnénk-e az adott megrendelést.
A sikeres törlés esetén egy felugró üzenetet kapunk a műveletről és visszatérünk a listaoldalra, ahol már a frissített adatok látszanak.
A mégsére kattintva szintén visszatérünk a listaoldalra.

### Számlák aloldal:

**1. pont**

> _Az adatbázisban nyilvántartott számlák táblázatos megjelenítése._

**Elfogadási kritérium:**  
Az adatbázisban szereplő összes számla felsorolása táblázatos formában. Egy számla id alapján össze van kötve a rendelések adatbázissal, a könnyebb értelmezhetőség miatt, amikor egy megrendelést adatait látjuk, akkor az id helyén a rendelés azonodító jelenik meg.

**2. pont**

> _A kapott listában kereshetünk._

**Elfogadási kritérium:**  
Egy kereső mező segítségével kereshetünk a listában, illetve oszlopfejléc megadásával egy adott oszlop adatai között is kereshetünk.

**3. pont**

> _A kapott listát rendezhetjük._

**Elfogadási kritérium:**  
Az oszlopok fejlécére kattintva ABC rendbe vagy fordítva, illetve ha számokról van szó, akkor növekvő vagy csökkenő sorrendbe rendezhetjük az egész táblázatot az adott oszlop alapján.

**4. pont**

> _Oldalléptetés._

**Elfogadási kritérium:**  
A táblázatban megjelenő adatok könnyebb áttekintése miatt nem jelenítjük meg az összes adatot egy oldalon, hanem oldalléptető segítségével adjuk meg, hogy hány adatot szeretnénk látni egy oldalon, illetve, hogy melyik oldalra szeretnénk navigálni a sorban. Külön gomb van az első és az utolsó oldal eléréséhez.

**5. pont**

> _Új számla felvétele_

**Elfogadási kritérium:**
Alap esetben a megrendelésekből egy gombnyomásra generálódnak az új számlák. De van arra is lehetőség, hogy a megfelelő gombra kattintva új számlát vegyen fel az admin az adatbázisba.
Űrlapos formában történik az adatok bevitele.
A mentés előtt automatikus validáció történik, ami nem engedi a rossz adatok elmentését.
A sikeres mentés esetén egy felugró üzenetetkapunk a műveletről és visszatérünk a listaoldalra, ahol már a friss adatok látszanak.
A mégsére kattintva szintén visszatérünk a listaoldalra.

**7. pont**

> _Egy számla adatainak megtekintése_

**Elfogadási kritérium:**  
Mivel a listaoldalon csak kevés adatot tudunk jól láthatóan megjeleníteni, ezért a táblázat utolsó cellájában minden megrendeléshez tartozik egy információs gomb. Erre kattintva egy új oldalra kerülünk, ahol űrlapos formában megjelennek a megrendelés adatai.
Ezek az adatok a számviteli törvénynek megfelelően nem szerkeszthetőek.
A vissza gombra kattintva visszatérünk a listaoldalra.
