import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link?: string;
  icon?: string;
  status?: boolean
  role?: string
}

export interface ITableItem {
  key: string
  name: string;
  title: string;
}

export interface IButtonItem {
  name: string;
}


export interface ITableColumnItem {
  key: string;
  title: string;
}

export interface ITextItem {
  key: string;
  name: string;
}

export interface IPaginatorItem {
  name: string;
}

export interface IDialogItem {
  title: string;
  message: string;
  ok: string;
  cancel: string
}

export interface IToastrItem {
  title: string;
  message: string
}

export interface IDashboardCardItem {
  title: string;
  valueType?: string
}

export interface IDashboardTitleItem {
  title: string;
}

export interface IChartLabelItem {
  label: string;
}

export interface IDateLabelItem {
  label: string;
  shortlabel: string
}

export interface IEditPageItem {
  key: string;
  title: string;
  new: string;
}

export interface IMenuCardItem {
  key: string;
  name: string;
  class: string;
  scroll: string;
  info: string;
}

export interface IScrollButtonItem {
  name: string;
  scroll: string
}

export interface IfastfoodCardItem {
  key: string;
  title: string;
  class: string
}

export interface IPatternItem {
  name: string;
  pattern: string;
  message: string
}

export interface IEditItem {
  prop: string;
  label: string;
  placeholder?: string;
  pattern: string;
  message?: string
}

export interface IAllergenItem {
  key: string,
  name: string,
  img: string
}

export interface IWelcomeItem {
  text: string
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  appName: string = 'Ételrendelés';

  address: string = '6721 Szeged Szent István tér 13.'
  addressLink: string = 'https://www.google.hu/maps/place/Szeged,+Szent+Istv%C3%A1n+t%C3%A9r+13,+6721/@46.2580117,20.1472819,17z/data=!3m1!4b1!4m5!3m4!1s0x4744880ce9d8082b:0x2eb708c1c761c49a!8m2!3d46.258008!4d20.1494706?hl=hu'

  adminNavbar: IMenuItem= { text: 'Admin', icon: 'dashboard' };

  weekText: string = 'hét';

  priceOfDayText: string = 'nap';
  priceOfWeekText: string = 'hét';

  weightText: string = 'Tömeg';
  allergenText: string = 'Allergének'

  normalPizza: string = 'Normál'
  familyPizza: string = 'Családi'

  normalPizzaKey: string = 'normal'
  familyPizzaKey: string = 'family'

  menuEditorMenuSelect: string = 'Válassz egy menü...'
  menuEditorWeekSelect: string = 'Válassz egy hetet...'

  forbiddenText: string = 'Ennek az oldalnak a megtekintéséhez nincs jogosultságod.'
  forbiddenTextPlease: string = 'Kérlek jelentkezz be adminként!'

  signupTitleText: string = 'Regisztráció'
  signupButtonText: string = 'Tovább'
  signupSaveButtonText: string = 'Regisztráció'

  orderEditErrorText: string = 'A vásárló nem található'

  generationText: string = 'FONTOS! Csak olyan hét menüjét lehet random összeállítani, ami aktuálisan nem rendelhető meg!'
  generationButtonText: string = 'Új menü generálása'
  menuSaveButtonText: string = 'FONTOS! A mentés után már nem vonható vissza a változtatás!'

  welcomeTexts: IWelcomeItem[] = [
    {text: 'Üdvözöllek az oldalon!'},
    {text: 'Mi a Zabálda nevű vállalkozásnál azért dolgozunk, hogy a kínálatunkban mindenki megtalálja a fogára valót.'},
  ];

  welcomeMenuTexts: IWelcomeItem[] = [
    {text: 'Szeretnél minden hétköznap jól lakni?'},
    {text: 'Ha a kérdésre a válaszod igen, akkor jó helyen jársz, mert mi az év minden hetére igazán finom és változatos menükkel készültünk Neked.'},
    {text: 'A kínálatunkban többféle menü közül tudsz választani.'},
    {text: 'Miért hívjuk őket menünek?'},
    {text: 'Azért nevezzük őket menünek, mert ezeket mi előre összeállítottuk Neked az év minden hetére, nem Neked kell őket összeválogatni.'},
    {text: 'Hogyan nézhetem meg a menü kínálatot?'},
    {text: 'Ha a Menük oldalra kattintasz'},
    {text: ', akkor megnézheted az aktuális heti és a következő két hétre rendelhető menüket.'},
    {text: 'Mennyibe kerül egy menü?'},
    {text: 'Az egyes menük árát feltüntettük napokra lebontva is, de ha szeretnél egy menüt megrendelni, akkor mind az öt napra meg kell rendelned, szóval valójában az egész heti árat kell majd kifizetned.'},
    {text: 'Meddig kell megrendelni?'},
    {text: 'A menük esetén fontos, hogy minden menüt legkésőbb az előző héten meg kell rendelned, csak így tudjuk vállalni az elkészítését.'},
    {text: 'Fontos, hogy csak akkor tudjuk megkezdeni a rendelt menü elkészítését, ha annak az összege az előző hét végéig megérkezik a számlánkra.'},
    {text: 'Milyen módon lehet leadni a rendelést?'},
    {text: 'Menük esetén kizárólag internes rendelésre van lehetőség. Telefonon és személyesen nem áll módunkba rendelést felvenni.'},
    {text: 'Milyen módon lehet kifizetni a rendelést?'},
    {text: 'Menük esetén bankkártyával vagy átutalással is fizetheted a rendelésedet.'},
    {text: 'Milyen csomagolásban kapom meg a megrendelt ételeket?'},
    {text: 'Minden ételt külön dobozba csomagolunk. Cégünk számára nagyon fontos a fenntarthatóság, ezért minden csomagolóanyagunk, evőeszközünk újrahasznosított, lebomló és környezetkímélő anyagból készült.'},
    {text: 'Fontos, hogy minden általunk adott doboz betehető a mikroba.'},
    {text: 'Milyen szállítási módok közül lehet választani?'},
    {text: 'Személyes átvétel'},
    {text: 'A heti menük esetén minden hétköznap reggel 7 órától lehet átvenni a Zabálda épületében az adott napra megrendelt ételt.'},
    {text: this.address},
    {text: 'A személyes átvétel teljesen ingyenes.'},
    {text: 'Kiszállítás'},
    {text: 'Szeged egész területén '},
    {text: 'ingyenes a kiszállítás. A kiszállítást reggel 7 órától kezdjük meg és igyekszünk a futárokat úgy szervezni, hogy mindenkihez legfeljebb reggel 8 óráig odaérjenek.'},
    {text: 'További kiszállítási települések:'},
    {text: 'Ezekre a településekre 1000 Ft kiszállítási díjat számolunk fel, ami az egész heti kiszállításra vonatkozik.'},
  ];

  welcomeFastfoodTexts: IWelcomeItem[] = [
    {text: 'Szeretnél gyorsan jól lakni?'},
    {text: 'Ha a kérdésre a válaszod igen, akkor jó helyen jársz, mert igazán finom gyorskaják készítésével is foglalkozunk.'},
    {text: 'Miért hívjuk őket gyorskajáknak?'},
    {text: 'Azért nevezzük őket gyorskajáknak, mert mindegyiket itt helyben a megrendelés után kezdjük el elkészíteni és azonnal kiszállítjuk, amint végeztünk vele.'},
    {text: 'Hol nézhetem meg a gyorskaja kínálatot?'},
    {text: 'Ha a Gyorskaják oldalra kattintasz'},
    {text: ', akkor megnézheted az aktuális gyorskaja kínálatunkat.'},
    {text: 'Mennyibe kerülnek a gyorskaják?'},
    {text: 'Minden egyes gyorskajánál feltüntettük az árát. Pizzák esetén van lehetőség normál és családi pizza méretek közül választani.'},
    {text: 'Mettől meddig lehet rendelni?'},
    {text: 'Minden nap reggel 8-21 óráig fogadjuk a rendeléseket.'},
    {text: 'Milyen módon lehet leadni a rendelést?'},
    {text: 'Gyorskaják esetén telefonon, személyesen vagy interneten, ezen az oldalon keresztül is leadhatod a rendelésedet. '},
    {text: 'Milyen módon lehet kifizetni a rendelést?'},
    {text: 'Gyorskaják esetén készpénzzel, Szép kártyával, bankkártyával vagy átutalással is fizetheted a rendelésedet.'},
    {text: 'Milyen szállítási módok közül lehet választani?'},
    {text: 'Személyes átvétel'},
    {text: 'Minden gyorskaja rendelés esetén fél órán belül jöhetsz a megrendelt ételekért.'},
    {text: 'A személyesen megrendelt gyorskaját elkészülését megvárhatod üzletünkbe is.'},
    {text: this.address},
    {text: 'A személyes átvétel teljesen ingyenes.'},
    {text: 'Kiszállítás'},
    {text: 'Szeged egész területén '},
    {text: 'ingyenes a kiszállítás. Az általunk vállalt kiszállítási maximum egy óra a megrendeléstől kezdve.'},
    {text: 'További kiszállítási települések:'},
    {text: 'Ezekre a településekre 1000 Ft kiszállítási díjat számolunk fel.'},
  ];

  cityItems: IWelcomeItem[] = [
    {text: 'Algyő'},
    {text: 'Sándorfalva'},
    {text: 'Szatymaz'},
    {text: 'Zsombó'},
    {text: 'Kiskundorozsma'},
    {text: 'Domaszék'},
    {text: 'Röszke'},
    {text: 'Újszentiván'},
    {text: 'Tiszasziget'},
    {text: 'Deszk'},
    {text: 'Mórahalom'},
    {text: 'Tiszaliget'},
    {text: 'Bordány'},
    {text: 'Makó'},
    {text: 'Zákányszék'},
    {text: 'Bordány'},
    {text: 'Maroslele'},
    {text: 'Klárafalva'},
    {text: 'Kübekháza'},
  ]

  navbarItems: IMenuItem[] = [
    { text: 'Főoldal', link: '/', icon: 'home' },
    { text: 'Menük', link: '/menu', icon: 'restaurant_menu' },
    { text: 'Gyorskaják', link: '/fastfood', icon: 'local_pizza' },
  ];

  adminNavbarItems: IMenuItem[] = [
    { text: 'Statisztika', link: '/admin' },
    { text: 'Menü szerkesztő', link: '/menu-editor' },
    { text: 'Termékek', link: '/menu/product' },
    { text: 'Kategóriák', link: '/menu/category' },
    { text: 'Vásárlók', link: '/customer' },
    { text: 'Rendelések', link: '/menu/order' },
    { text: 'Számlák', link: '/bill' }
  ];

  loginNavbarItems: IMenuItem[] = [
    { role: 'admin', text: 'Nagy Petra - Admin', link: '/', icon: 'person', status: true},
    { role: 'editor', text: 'Kiss Réka - Szerkesztő', link: '/', icon: 'person', status: true},
    { role: 'customer', text: '', link: '/profil', icon: 'person', status: true},
    { role: 'admin, editor, customer', text: 'Kijelentkezés', link: '/', icon: 'logout', status: true },
    { text: 'Bejelentkezés', link: '/login', icon: 'person', status: false },
    { text: 'Regisztráció', link: '/signup', icon: 'person_add', status: false },
  ];

  tableItems: ITableItem[] = [
    {key: 'menu/product', name: "étel", title: 'Ételek'},
    {key: 'fastfood/product', name: "gyorskaja", title: 'Gyorskaják'},
    {key: 'menu/category', name: "menü kategória", title: 'Menü kategóriák'},
    {key: 'fastfood/category', name: "gyorskaja kategória", title: 'Gyorskaja kategóriák'},
    {key: 'customer', name: "vásárló", title: 'Vásárlók'},
    {key: 'menu/order', name: "menü rendelés", title: 'Menü rendelések'},
    {key: 'fastfood/order', name: "gyorskaja rendelés", title: 'Gyorskaja rendelések'},
    {key: 'bill', name: "számla", title: 'Számlák'},
  ]

  addButton: IButtonItem[] = [
    {name: 'Új'},
    {name: 'hozzáadása'}
  ]

  filterItems: IButtonItem[] = [
    {name: 'Keresés'},
    {name: 'oszlopok szerint'},
    {name: 'Bármilyen egyezés'}
  ]

  foodMenuItems: ITableColumnItem[] = [
    {key: 'name', title: 'Név'},
    {key: 'menu', title: 'Menü'},
    {key: 'allergens', title: 'Allergének'},
    {key: 'category', title: 'Kategória'},
    {key: 'vegan', title: 'Vegán'},
    {key: 'active', title: 'Elérhető'},
  ];

  foodCategoryMenuItems: ITableColumnItem[] = [
    {key: 'categoryCode', title: 'Kategória kód'},
    {key: 'menu', title: 'Menü'},
    {key: 'notes', title: 'Fajta'},
    {key: 'price', title: 'Ár'},
    {key: 'weigh', title: 'Mennyiség'},
  ];

  fastfoodMenuItems: ITableColumnItem[] = [
    {key: 'name', title: 'Név'},
    {key: 'menu', title: 'Fajta'},
    {key: 'allergens', title: 'Allergének'},
    {key: 'category', title: 'Kategória'},
    {key: 'active', title: 'Elérhető'},
  ];

  fastfoodCategoryMenuItems: ITableColumnItem[] = [
    {key: 'categoryCode', title: 'Kategória kód'},
    {key: 'menu', title: 'Menü'},
    {key: 'price', title: 'Ár'},
    {key: 'size', title: 'Méret'},
  ];

  customerItems: ITableColumnItem[] = [
    {key: 'firstName', title: 'Vezetéknév'},
    {key: 'lastName', title: 'Keresztnév'},
    {key: 'email', title: 'Email cím'},
    {key: 'phonenumber', title: 'Telefonszám'},
    {key: 'shipAddress', title: 'Kiszállítási cím'},
    {key: 'active', title: 'Elérhető'},
  ];

  orderItems: ITableColumnItem[] = [
    {key: 'customerID', title: 'Vásárló neve'},
    {key: 'date', title: 'Rendelés dátuma'},
    {key: 'amount', title: 'Összeg'},
    {key: 'shipping', title: 'Kiszállítás'},
    {key: 'status', title: 'Státusz'}
  ];

  billMenuItems: ITableColumnItem[] = [
    {key: 'orderDate', title: 'Rendelés dátuma'},
    {key: 'billDate', title: 'Számla dátuma'},
    {key: 'orderID', title: 'Megrendelő neve'},
    {key: 'type', title: 'Típus'},
    {key: 'amount', title: 'Összeg'},
    {key: 'status', title: 'Státusz'}
  ];

  foodItems: ITextItem[] = [
    {key: 'breakfast', name: 'reggeli'},
    {key: 'soup', name: 'leves'},
    {key: 'main_course', name: 'főétel'},
    {key: 'dessert', name: 'desszert'},
    {key: 'cake', name: 'sütemény'},
    {key: 'pickles', name: 'savanyúság'},
    {key: 'drink', name: 'üdítő'},
    {key: 'salata', name: 'saláta'},
    {key: 'side_dish', name: 'köret'},
    {key: 'menu', name: 'menü'},
    {key: 'fastfood', name: 'gyorskaja'},
    {key: 'prime', name: 'főmenü'},
    {key: 'option', name: 'opcionális'},
    {key: 'primary', name: 'elsődleges'},
    {key: 'secondary', name: 'mellékeles'}
  ];

  unitItems: ITextItem[] = [
    {key: 'size', name: 'cm'},
    {key: 'liter', name: 'l'},
    {key: 'weigh', name: 'g' }
  ];

  toolTipsItems: ITextItem[] = [
    {key: 'activeTrue', name: 'Elérhető'},
    {key: 'activeFalse', name: 'Nem elérhető'},
    {key: 'button', name: 'Szerkesztés'},
    {key: 'button', name: 'Törlés'},
    {key: 'button', name: 'Megtekintés'},
    {key: 'veganTrue', name: 'Vegetáriánus'},
    {key: 'veganFalse', name: 'Nem vegetáriánus'},
  ]

  statusItems: ITextItem[] = [
    {key: 'new', name: 'Új'},
    {key: 'paid', name: 'Fizetett'},
    {key: 'free', name: 'Ingyenes kiszállítás'},
    {key: 'personal', name: 'Személyes átvétel'},
    {key: 'shipping', name: 'Kiszállítás'},
  ]

  paginatorItems: IPaginatorItem[] = [
    {name: 'Sor / lap:'},
    {name: 'Következő lap'},
    {name: 'Előző lap'},
    {name: 'Utolsó lap'},
    {name: 'Első lap'}
  ]

  dialogItems: IDialogItem[] = [
    {title: 'Megerősítés', message: 'Biztos vagy benne, hogy törölni szeretnéd?', ok: 'Igen', cancel: 'Mégse'}
  ]

  orderDialogItems: IDialogItem[] = [
    {title: 'Rendelési információk', message: '', ok: 'Ok', cancel: 'Vissza'}
  ]

  orderMenuDialog: IButtonItem[] = [
    {name: 'Először is a rendeléshez be kell jelentkezni.'},
    {name: 'Ezután a gombok segítségével kiválaszthatod azt a hetet, amikor rendelni szeretnél.'},
    {name: 'A listából válogass a Neked tetsző menük közül.'},
    {name: 'A rendeléshez a kosár ikonra kell kattintani és ugyanitt beállíthatod, hogy hány adagot szeretnél rendelni az adott termékből.'},
    {name: 'Bármilyen allergia esetén fontos, hogy figyelj az allergia ikonokra.'},
    {name: 'Fontos, hogy egy adott hétre irányuló megrendelésnek legkésőbb az előző hét végig be kell érkeznie.'},
    {name: 'Végül válassz kiszállítási módot:'},
    {name: 'Személyes átvétel: INGYENES'},
    {name: 'Szegedi kiszállítás: INGYENES'},
    {name: 'Távolabbi településekre: 1000 Ft/hét'},
    {name: 'Az aznapi menüvel a kiszállítást minden hétköznap reggel 7 órától kezdjük meg és mindenkihez legfeljebb reggel 8 óráig odaérünk.'},
  ]

  orderFastfoodDialog: IButtonItem[] = [
    {name: 'A gyorskajákat személyesen és telefonon is megrendelheted.'},
    {name: 'Az online rendeléshez be kell jelentkezni.'},
    {name: 'Ezután a gombok segítségével kiválaszthatod a Neked tetsző gyorskaját/gyorskajákat.'},
    {name: 'Fontos, hogy nem lehet darabszámot beállítani, vagyis ha egy termékből többet szeretnél rendelni, akkor többször kell elhelyezned a kosárba.'},
    {name: 'Pizzából választhatsz, hogy normál vagy családi méretet szeretnél.'},
    {name: 'Bármilyen allergia esetén fontos, hogy figyelj az allergia ikonokra.'},
    {name: 'Végül válassz kiszállítási módot:'},
    {name: 'Személyes átvétel: INGYENES'},
    {name: 'Szegedi kiszállítás: INGYENES'},
    {name: 'Távolabbi településekre: 1000 Ft/kiszállás'},
    {name: 'Kiszállítás esetén az általunk vállalt kiszállítási határidő a rendelés beérkezése követő 1 óra.'},
  ]

  toastrItems: IToastrItem[] = [
    {title: 'Törlés', message: 'A törlés megtörtént!'},
    {title: 'Hozzáadás', message: 'A hozzáadás sikeres!'},
    {title: 'Módosítás', message: 'A módosítás sikeres!'},
    {title: 'Regisztráció', message: 'A regisztráció sikeres!'},
    {title: 'Mentés', message: 'A mentés sikeres!'}
  ]

  dashboardCardItems: IDashboardCardItem[] = [
    {title: 'Aktív vásárlók száma', valueType: 'db'},
    {title: 'Menürendelések', valueType: 'db'},
    {title: 'Gyorskajarendelések', valueType: 'db'},
    {title: 'Kintlévőségek'},
    {title: 'Ételfajták', valueType: 'db'},
    {title: 'Leadott rendelések száma', valueType: 'db'},
    {title: "Név"},
    {title: "Darab"},
    {title: "Realizált bevétel"},
    {title: "Bevétel"},
    {title: "Összesen"},
    {title: "Név"},
    {title: "Rendelések száma"},
    {title: "Realizált bevétel"},
    {title: "Kiszállítások"},
  ]

  dashboardTitleItems: IDashboardTitleItem[] = [
    {title: 'Összesítő adatok'},
    {title: 'Még nem teljesített rendelések'},
    {title: 'Menü - Statisztika'},
    {title: 'Összesen'},
    {title: 'Gyorskaja - Statisztika'},
  ]

  dashboardTdCardItems: ITableColumnItem[] = [
    {key: 'N', title: 'Nyugdíjas menü'},
    {key: 'A', title: 'Alap menü'},
    {key: 'B', title: 'Basic menü'},
    {key: 'E', title: 'Extra menü'},
    {key: 'F', title: 'Fitness menü'},
    {key: 'V', title: 'Vegán menü'},
    {key: 'Z', title: 'Zero menü'},
    {key: 'R1', title: 'Alap reggeli menü'},
    {key: 'R2', title: 'Basic reggeli menü'},
    {key: 'D', title: 'Desszert menü'},
    {key: 'S', title: 'Sütemény menü'},
    {key: 'SA', title: 'Savanyúság menü'},
    {key: 'I', title: 'Üdítő menü'},
    {key: 'PIZ', title: 'Pizza'},
    {key: 'GY1', title: 'Gyros (pita)'},
    {key: 'GY2', title: 'Gyros (tál)'},
    {key: 'HAMB1', title: 'Hamburger (alap)'},
    {key: 'HAMB2', title: 'Hamburger (normál)'},
    {key: 'HAMB3', title: 'Hamburger (extra)'},
    {key: 'SAL', title: 'Saláta'},
    {key: 'KÖR', title: 'Köret'},
    {key: 'DES', title: 'Desszert'},
    {key: 'DR', title: 'Üdítő'},
    {key: 'free', title: 'Ingyenes'},
    {key: 'personal', title: 'Személyes átvétel'},
    {key: 'shipping', title: 'Kiszállítás'},
  ];

  billChartLabel: IChartLabelItem[] = [
    {label: 'Kintlévőségek'},
    {label: 'Kiegyenlített számlák összege'},
    {label: 'Kintlévőségek'},
    {label: 'Realizált bevételek'},
    {label: 'Menü rendelések'},
    {label: 'Gyorskaja rendelések'},
  ]

  cityChartLabel: IChartLabelItem[] = [
    {label: 'Szállítási területek eloszlása'},
    {label: 'Menük'},
    {label: 'Gyorskaják'},
    {label: 'Fizetett rendelések darabszáma'},
    {label: 'Fizetett rendelések bevétele'},
  ]

  dateChartLabel: IChartLabelItem[] = [
    {label: 'Havi eloszlás'},
    {label: 'Menük'},
    {label: 'Gyorskaják'},
    {label: 'Fizetett rendelések darabszáma'},
    {label: 'Fizetett rendelések bevétele'},
  ]

  dateLabels: IDateLabelItem[] = [
    {label: 'Január', shortlabel: 'Jan'},
    {label: 'Február', shortlabel: 'Febr'},
    {label: 'Március', shortlabel: 'Már'},
    {label: 'Április', shortlabel: 'Ápr'},
    {label: 'Május', shortlabel: 'Máj'},
    {label: 'Június', shortlabel: 'Jún'},
    {label: 'Július', shortlabel: 'Júl'},
    {label: 'Augusztus', shortlabel: 'Aug'},
    {label: 'Szeptember', shortlabel: 'Szept'},
    {label: 'Október', shortlabel: 'Oket'},
    {label: 'November', shortlabel: 'Nov'},
    {label: 'December', shortlabel: 'Dec'}
  ]

  menuCardItems: IMenuCardItem[] = [
    {key: 'N', name: 'Nyugdíjas menü', class: "menu_N", scroll: 'scrollmenu', info: "Alap menüvel megegyező ételek, csak kisebb kiszerelésben."},
    {key: 'A', name: 'Alap menü', class: "menu_ABE", scroll: 'scrollmenu', info: "Hagyományos konyha, egyszerű ételek."},
    {key: 'B', name: 'Basic menü', class: "menu_ABE", scroll: 'scrollmenu', info: "Hagyományos konyha, összetettebb ételek."},
    {key: 'E', name: 'Extra menü', class: "menu_ABE", scroll: 'scrollmenu', info: "Hagyományos konyha, különlegesebb ételek."},
    {key: 'F', name: 'Fitness menü', class: "menu_F", scroll: 'scrollfitness', info: "Csökkentett kalóriabevitelt biztosító ételek."},
    {key: 'V', name: 'Vegán menü', class: "menu_V", scroll: 'scrollvegan', info: "A vega és vegán életmód követői egyaránt fogyaszthatják."},
    {key: 'Z', name: 'Zero menü', class: "menu_Z", scroll: 'scrollzero', info: "Glutén, laktóz és hozzáadott cukor nélkül készült ételek."},
    {key: 'R1', name: 'Reggeli alap', class: "menu_R", scroll: 'scrollbreakfast', info: ""},
    {key: 'R2', name: 'Reggeli basic', class: "menu_R", scroll: 'scrollbreakfast', info: ""},
    {key: 'D', name: 'Desszert', class: "menu_D", scroll: 'scrolldessert', info: ""},
    {key: 'S', name: 'Sütemény', class: "menu_S", scroll: 'scrollcake', info: ""},
    {key: 'SA', name: 'Savanyúság', class: "menu_SA", scroll: 'scrollpickles', info: ""},
    {key: 'I', name: 'Üdítő', class: "menu_I", scroll: 'scrolldrink', info: ""}
  ];

  menuCardHeaderText: IButtonItem[] = [
    {name: 'Kód'},
    {name: 'Név és ár'},
    {name: 'Hétfő'},
    {name: 'Kedd'},
    {name: 'Szerda'},
    {name: 'Csütörtök'},
    {name: 'Péntek'}
  ];

  allergensItems: IAllergenItem[] = [
    {key: 'gluten', name: 'Glutén', img: '../../../assets/images/small_icons/gluten_small.jpg'},
    {key: 'milk', name: 'Tej', img: '../../../assets/images/small_icons/milk_small.jpg'},
    {key: 'soya', name: 'Szója', img: '../../../assets/images/small_icons/soya_small.jpg'},
    {key: 'egg', name: 'Tojás', img: '../../../assets/images/small_icons/egg_small.jpg'},
    {key: 'peanut', name: 'Földimogyoró', img: '../../../assets/images/small_icons/peanut_small.jpg'},
    {key: 'walnut', name: 'Diófélék', img: '../../../assets/images/small_icons/walnut_small.jpg'}
  ];

  menuPrimeButtonText: IScrollButtonItem[] = [
    {name: 'Hagyományos konyha', scroll: 'menu'},
    {name: 'Fitness menük', scroll: 'fitness'},
    {name: 'Vegán ételek', scroll: 'vegan'},
    {name: 'Mentes ételek', scroll: 'zero'},
  ];

  menuOptionButtonText: IScrollButtonItem[] = [
    {name: 'Reggelik', scroll: 'breakfast'},
    {name: 'Desszertek' , scroll: 'dessert'},
    {name: 'Sütik', scroll: 'cake'},
    {name: 'Savanyúságok', scroll: 'pickles'},
  ];

  menuDrinkButtonText: IScrollButtonItem[] = [
    {name: 'Üdítők', scroll: 'drink'},
  ];

  fastfoodTitle: IfastfoodCardItem[] = [
  {key: 'PIZ', title: 'Pizzák', class: 'fastfood-card-pizza'},
  {key: 'GY', title: 'Gyrosok', class: 'fastfood-card-gyros'},
  {key: 'HAMB', title: 'Hamburgerek', class: 'fastfood-card-hamb'},
  {key: 'SAL', title: 'Saláták', class: 'fastfood-card-salata'},
  {key: 'KÖR', title: 'Köretek', class: 'fastfood-card-sidedish'},
  {key: 'DES', title: 'Desszertek', class: 'fastfood-card-dessert'},
  {key: 'DR', title: 'Üdítők', class: 'fastfood-card-drink'},
  ]

  fastfoodPrimaryTitle: ITableColumnItem[] = [
    {key: 'PIZ', title: 'Pizzák'},
    {key: 'GY', title: 'Gyrosok'},
    {key: 'HAMB', title: 'Hamburgerek'},
  ]

  fastfoodSecondaryTitle: ITableColumnItem[] = [
    {key: 'SAL', title: 'Saláták'},
    {key: 'KÖR', title: 'Köretek'},
    {key: 'DES', title: 'Desszertek'},
    {key: 'DR', title: 'Üdítők'},
  ]

  menuEditorFormText: IButtonItem[] = [
    {name: 'Válassz egy ételt...'},
    {name: 'Szerkesztés'},
    {name: 'Mentés'},
    {name: 'Mégse'},
  ];

  menuEditorSelectItems: ITextItem[] = [
    {key: 'A', name: 'Alap menü'},
    {key: 'B', name: 'Basic menü'},
    {key: 'E', name: 'Extra menü'},
    {key: 'F', name: 'Fitness menü'},
    {key: 'V', name: 'Vegán menü'},
    {key: 'Z', name: 'Zero menü'},
    {key: 'R1', name: 'Reggeli alap'},
    {key: 'R2', name: 'Reggeli basic'},
    {key: 'D', name: 'Desszert'},
    {key: 'S', name: 'Sütemény'},
    {key: 'SA', name: 'Savanyúság'},
  ];

  loginText: IButtonItem[] = [
    {name: 'Bejelentkezés'},
    {name: 'Email cím'},
    {name: 'Jelszó'},
    {name: 'Vissza'},
    {name: 'A megadott email cím vagy jelszó hibás.'}
  ];

  patternItems: IPatternItem[] = [
    {name: 'firstName', pattern: '^([A-Ű]{1}[a-űA-Ű ]{3,25}){1,3}$', message: 'A vezetéknévnek nagybetűvel kell kezdődnie és legalább 3 karakter hosszú legyen.'},
    {name: 'lastName', pattern: '^([A-Ű]{1}[a-űA-Ű ]{3,25}){1,3}$', message: 'A keresztnévnek nagybetűvel kell kezdődnie és legalább 3 karakter hosszú legyen.'},
    {name: 'email', pattern: '^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}(.[a-z]{2,})*$', message: 'Nem megfelelő email cím formátum.'},
    {name: 'password', pattern: '^[a-zA-Z0-9]{5,}$', message: 'A jelszó legalább 5 karakter hosszú legyen.'},
    {name: 'phonenumber', pattern: '^06(20|30|70)/[0-9]{7}$', message: 'A megadott telefonszám formátum nem helyes. (0620/1234567)'},
    {name: 'zip', pattern: '^[1-9]{1}[0-9]{3}$', message: 'Az irányítószám legalább 4 számból álljon és nem lehet az első számjegy nulla.'},
    {name: 'city', pattern: '^([A-Ű]{1}[a-űA-Ű ]{2,}){1,3}$', message: 'A városnév legalább három karakter hosszú legyen és nem tartalmazhat számokat és speciális karaktereket.'},
    {name: 'street', pattern: '^([A-Ű]{1}[a-űA-Ű ]{2,}){1,3}$', message: 'A utcanév nem tartalmazhat számokat és speciális karaktereket.'},
    {name: 'date', pattern: '^(20)[0-9]{2}. (0[1-9]|1[0-2]). (0[1-9]|[12][0-9]|3[01]).$', message: 'Nem megfelelő dátum formátum. (ÉÉÉÉ. HH. NN.)'},
    {name: 'id', pattern: '^[0-9]{1,}$', message: 'A sorszám csak számokat tartalmazhat.'},
    {name: 'amount', pattern: '^[0-9]{1,}$', message: 'A összeg csak számokat tartalmazhat és nem lehet nulla.'},
    {name: 'name', pattern: '^[a-űA-Ű-, ]{5,}$', message: 'A névnek legalább 5 karakter hosszúnak kell lennie.'},
    {name: 'descripiton', pattern: '^[a-űA-Ű, ]{5,}$', message: 'A leírásnak legalább 5 karakter hosszúnak kell lennie.'},
    {name: 'notes', pattern: '^[a-űA-Ű0-9,./ ]{3,}$', message: 'A megjegyzésnek legalább 3 karakter hosszúnak kell lennie. Betűkön és számokon kívül csak vesszőt, pontot és perjelet tartalmazhat.'},
    {name: 'categoryCode', pattern: '^[a-űA-Ű0-9]{1,4}$', message: 'A kategóriakód maximum 4 karakter hosszú lehet és csak betűkből és/vagy számból állhat.'},
  ]

  editPageText: IButtonItem[] = [
    {name: 'A *-gal jelölt mezők kitöltése kötelező'},
    {name: 'Mentés'},
    {name: 'Törlés'},
    {name: 'Mégse'},
    {name: 'Rendelések'},
    {name: 'normál'},
    {name: 'családi'},
    {name: 'db'},
    {name: 'Lakcím'},
    {name: 'Szállítási cím'},
    {name: 'Rendelések'},
    {name: 'Új elem hozzáadása'},
    {name: 'Vissza'},
    {name: 'Ételek száma ebben a kategóriában'},
    {name: 'Összes rendelés ebből a kategóriából'},
    {name: 'Ennyiszer szerepel a heti menükben összesen'},
    {name: 'Hetek, amikor megrendelhető'},
    {name: 'Profil megtekintése'},
    {name: 'Profil szerkesztése'},
    {name: 'Szerkesztés'},
    {name: 'Eddig leadott menü rendelések'},
    {name: 'Eddig leadott gyorskaja rendelések'},
    {name: 'Ezzel az email címmel már létezik felhasználó. Kérlek jelentkezz be!'},
  ];

  editPageItems: IEditPageItem[] = [
    {key: 'bill', title: 'A kiválasztott számla adatai', new: 'Új számla hozzáadása' },
    {key: 'customer', title: 'A kiválasztott vásárló adatai', new: 'Új vásárló hozzáadása' },
    {key: 'food', title: 'A kiválasztott étel adatai', new: 'Új étel hozzáadása' },
    {key: 'fastfood', title: 'A kiválasztott gyorskaja adatai', new: 'Új gyorskaja hozzáadása' },
    {key: 'category', title: 'A kiválasztott kategória adatai', new: 'Új kategória hozzáadása' },
    {key: 'order', title: 'A kiválasztott rendelés adatai', new: 'Új rendelés hozzáadása' },
  ];

  billEditItems: IEditItem[] = [
    {prop: 'orderDate', label: 'Rendelés dátuma', placeholder: 'Rendelés dátuma...', pattern: this.patternItems[8].pattern, message: this.patternItems[8].message},
    {prop: 'billDate', label: 'Számla dátuma', placeholder: 'Számla dátuma...', pattern: this.patternItems[8].pattern, message: this.patternItems[8].message},
    {prop: 'orderID', label: 'Rendelés sorszáma', placeholder: 'Rendelés sorszáma...', pattern: this.patternItems[9].pattern, message: this.patternItems[9].message},
    {prop: 'type', label: 'Típus',  pattern: ''},
    {prop: 'amount', label: 'Összeg', placeholder: 'Összeg...', pattern: this.patternItems[10].pattern, message: this.patternItems[10].message},
    {prop: 'status', label: 'Státusz', pattern: ''},
    {prop: 'orderID', label: 'Megrendelő', placeholder: 'Megrendelő...', pattern: this.patternItems[0].pattern, message: this.patternItems[0].message}
  ];

  fastfoodEditItems: IEditItem[] = [
    {prop: 'name', label: 'Név', placeholder: 'Név...', pattern: this.patternItems[11].pattern, message: this.patternItems[11].message},
    {prop: 'menu', label: 'Fajta', pattern: ''},
    {prop: 'category', label: 'Kategória', pattern: ''},
    {prop: 'allergens', label: 'Allergének', pattern: ''},
    {prop: 'descripiton', label: 'Leírás', placeholder: 'Leírás...', pattern: this.patternItems[12].pattern, message: this.patternItems[12].message},
    {prop: 'active', label: 'Elérhető', pattern: ''},
  ];

  fastfoodEditMenuItems: IEditPageItem[] = [
    {key: 'PIZ', title: 'pizza', new: 'pizza'},
    {key: 'HAM',title: 'hamburger', new: 'hamburger'},
    {key: 'GY',title: 'gyros', new: 'gyros'},
    {key: 'SAL',title: 'salata', new: 'saláta'},
    {key: 'KÖR',title: 'side_dish', new: 'köret'},
    {key: 'DES',title: 'dessert', new: 'desszert'},
    {key: 'DR',title: 'drink', new: 'üdítő'}
  ];

  foodEditItems: IEditItem[] = [
    {prop: 'name', label: 'Név', placeholder: 'Név...', pattern: this.patternItems[11].pattern, message: this.patternItems[11].message},
    {prop: 'menu', label: 'Menüfajta', pattern: ''},
    {prop: 'category', label: 'Kategória', pattern: ''},
    {prop: 'allergens', label: 'Allergének', pattern: ''},
    {prop: 'vegan', label: 'Vegetáriánus', pattern: ''},
    {prop: 'fitness', label: 'Fitness', pattern: ''},
    {prop: 'active', label: 'Elérhető', pattern: ''},
  ]

  foodEditMenuItems: IEditPageItem[] = [
    {key: 'A', title: 'soup', new: 'leves'},
    {key: 'A', title: 'main_course', new: 'főétel'},
    {key: 'B',title: 'soup', new: 'leves'},
    {key: 'B',title: 'main_course', new: 'főétel'},
    {key: 'E',title: 'soup', new: 'leves'},
    {key: 'E',title: 'main_course', new: 'főétel'},
    {key: 'F',title: 'main_course', new: 'főétel'},
    {key: 'V',title: 'soup', new: 'leves'},
    {key: 'V',title: 'main_course', new: 'főétel'},
    {key: 'Z',title: 'soup', new: 'leves'},
    {key: 'Z',title: 'main_course', new: 'főétel'},
    {key: 'R1',title: 'breakfast', new: 'reggeli'},
    {key: 'R2',title: 'breakfast', new: 'reggeli'},
    {key: 'D',title: 'dessert', new: 'desszert'},
    {key: 'S',title: 'cake', new: 'sütemény'},
    {key: 'SA',title: 'pickles', new: 'savanyúság'},
    {key: 'I',title: 'drink', new: 'üdítő'}
  ]

  customerEditItems: IEditItem[] = [
    {prop: 'firstName', label: 'Vezetéknév', placeholder: 'Vezetéknév...', pattern: this.patternItems[0].pattern, message: this.patternItems[0].message},
    {prop: 'lastName', label: 'Keresztnév', placeholder: 'Keresztnév...', pattern: this.patternItems[1].pattern, message: this.patternItems[1].message},
    {prop: 'email', label: 'Email cím', placeholder: 'Email cím...', pattern: this.patternItems[2].pattern, message: this.patternItems[2].message},
    {prop: 'phonenumber', label: 'Telefonszám', placeholder: 'Telefonszám...', pattern: this.patternItems[4].pattern, message: this.patternItems[4].message},
    {prop: 'address', label: 'Irányítószám', placeholder: 'Irányítószám...', pattern: this.patternItems[5].pattern, message: this.patternItems[5].message},
    {prop: 'address', label: 'Város', placeholder: 'Város...', pattern: this.patternItems[6].pattern, message: this.patternItems[6].message},
    {prop: 'address', label: 'Közterület', placeholder: 'Közterület...', pattern: this.patternItems[7].pattern, message: this.patternItems[7].message},
    {prop: 'address', label: 'Házszám', placeholder: 'Házszám...', pattern: ''},
    {prop: 'address', label: 'Megjegyzés', placeholder: 'Megjegyzés...', pattern: ''},
    {prop: 'shipAddress', label: 'Irányítószám', placeholder: 'Irányítószám...', pattern: this.patternItems[5].pattern, message: this.patternItems[5].message},
    {prop: 'shipAddress', label: 'Város', placeholder: 'Város...', pattern: this.patternItems[6].pattern, message: this.patternItems[6].message},
    {prop: 'shipAddress', label: 'Közterület', placeholder: 'Közterület...', pattern: this.patternItems[7].pattern, message: this.patternItems[7].message},
    {prop: 'shipAddress', label: 'Házszám', placeholder: 'Házszám...', pattern: ''},
    {prop: 'shipAddress', label: 'Megjegyzés', placeholder: 'Megjegyzés...', pattern: this.patternItems[13].pattern, message: this.patternItems[13].message},
    {prop: 'active', label: 'Aktív', pattern: ''},
  ]

  userEditItems: IEditItem[] = [
    {prop: 'email', label: 'Email cím', placeholder: 'Email cím...', pattern: this.patternItems[2].pattern, message: this.patternItems[2].message},
    {prop: 'password', label: 'Jelszó', placeholder: 'Jelszó...', pattern: this.patternItems[3].pattern, message: this.patternItems[3].message}
  ]

  orderMenuEditItems: IEditItem[] = [
    {prop: 'date', label: 'Rendelés dátuma', placeholder: 'Rendelés dátuma...', pattern: this.patternItems[8].pattern, message: this.patternItems[8].message},
    {prop: 'customerID', label: 'Vásárló', pattern: ''},
    {prop: 'order', label: 'Rendelési hét', pattern: ''},
    {prop: 'order', label: 'Rendelt menü', pattern: ''},
    {prop: 'order', label: 'Mennyiség', pattern: ''},
    {prop: 'amount', label: 'Összeg', placeholder: 'Összeg...', pattern: this.patternItems[10].pattern, message: this.patternItems[10].message},
    {prop: 'shipping', label: 'Szállítás',  pattern: ''},
    {prop: 'status', label: 'Státusz', pattern: ''},
  ];

  orderFastfoodEditItems: IEditItem[] = [
    {prop: 'date', label: 'Rendelés dátuma', placeholder: 'Rendelés dátuma...', pattern: this.patternItems[8].pattern, message: this.patternItems[8].message},
    {prop: 'customerID', label: 'Vásárló', pattern: ''},
    {prop: 'order', label: 'Termék', pattern: ''},
    {prop: 'order', label: 'Megjegyzés', pattern: ''},
    {prop: 'amount', label: 'Összeg', placeholder: 'Összeg...', pattern: this.patternItems[10].pattern, message: this.patternItems[10].message},
    {prop: 'shipping', label: 'Szállítás',  pattern: ''},
    {prop: 'status', label: 'Státusz', pattern: ''},
  ];

  categoryMenuEditItems: IEditItem[] = [
    {prop: 'categoryCode', label: 'Kategóriakód', placeholder: 'Kategóriakód...', pattern: this.patternItems[14].pattern, message: this.patternItems[14].message},
    {prop: 'menu', label: 'Menüfajta', pattern: ''},
    {prop: 'notes', label: 'Megjegyzés', pattern: ''},
    {prop: 'price', label: 'Ár', pattern: ''},
    {prop: 'weigh', label: 'Mennyiség', pattern: ''},
  ];

  categoryFastfoodEditItems: IEditItem[] = [
    {prop: 'categoryCode', label: 'Kategóriakód', placeholder: 'Kategóriakód...', pattern: this.patternItems[14].pattern, message: this.patternItems[14].message},
    {prop: 'menu', label: 'Menüfajta', pattern: ''},
    {prop: 'notes', label: 'Megjegyzés', pattern: ''},
    {prop: 'price', label: 'Ár', pattern: ''},
    {prop: 'size', label: 'Méret', pattern: ''},
  ];

  constructor() {}
}
