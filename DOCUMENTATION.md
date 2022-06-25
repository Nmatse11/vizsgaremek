## **1. Az alkalmazás célja**

- Az alkalmazás feladata, hogy a gyorskaja és heti menü rendeléseket lehessen leadni. Megfelelő szerepkörrel az ételek, a gyorskaják és a heti menük szerkeszthetőek, törölhetők, illetve új adatokat is fel lehet vinni. Ezen kívül a vásárlók, a rendelések és a számlák adatainak nyilvántartsa és kezelése is megoldott..

## **2. Az alkalmazás telepítése**

- Forkolni kell az adott GitHub repository tartalmát: https://github.com/Nmatse11/vizsgaremek
- A célgépre le kell klónozni az adott GitHub repository tartalmát:
  git clone https://github.com/Nmatse11/vizsgaremek.git
- Telepíteni kell az alkalmazás függőségeit:

  - Backend

    - A terminálon be kell lépni a /backend mappába és futtatni az `npm i` parancsot.

  - Frontend

    - Egy másik terminálon be kell lépni a /frontend mappába és futtatni az `npm i` parancsot.

- Ha még nincsen fenn a célgépen, akkor telepíteni kell az Angular keretrendszert az `npm i -g @angular/cli` paranccsal

## **3. Az alkalmazás konfigurálása**

A /frontend/environments mappában be kell állítani az API-végpont elérési útvonalát, ha nincs ott

- _environment.ts_ állomány: http://localhost:3000/
- _environment.prod.ts_ állomány: http://localhost:3000/

## **4. Az alkalmazás indítása**

A megadott Docker container indítása és inicializálása:

- El kell indítani a Docker Desktop alkalmazást
- A /backend mappába belépve a terminálban ki kell adni az `npm run deploy` parancsot

VAGY

- A terminálon be kell lépni a /backend mappába és futtatni az `npm start` parancsot.
- Egy másik terminálon be kell lépni a /frontend mappába és futtatni az `npm start` parancsot.
- A http://localhost:3000/ API végponton fog működni az adatbázis
- A http://localhost:4200/ API végponton fog futni az alkalmazás

_Megjegyzés_:  
A belépéshez érvényes e-mail-cím és jelszó párosok:

| E-mail                  | Jelszó   | Szerepkör |
| ----------------------- | -------- | --------- |
| admin@gmail.com         | admin    | Admin     |
| editor@gmail.com        | editor   | Editor    |
| szekeres.kata@gmail.com | customer | Customer  |

## **5. A végpontok dokumentációja**

Swagger

- Az alábbi URL-t kell beírni a böngészőbe: https://localhost:3000/api-docs

---

---

## **Linkek:**

- [User Story - Admin](https://github.com/Nmatse11/vizsgaremek/blob/main/README.md)
