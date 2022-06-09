import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link?: string;
  icon?: string;
  status?: boolean
}

export interface ITableItem {
  key: string
  name: string;
  title: string;
}

export interface IAddButtonItem {
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

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  appName: string = 'Ételrendelés';

  adminNavbar: IMenuItem= { text: 'Admin', icon: 'dashboard' };

  navbarItems: IMenuItem[] = [
    { text: 'Főoldal', link: '/', icon: 'home' },
    { text: 'Menük', link: '/menu', icon: 'restaurant_menu' },
    { text: 'Gyorskaják', link: '/fastfood', icon: 'local_pizza' },
  ];

  adminNavbarItems: IMenuItem[] = [
    { text: 'Statisztika', link: '/admin' },
    { text: 'Menü szerkesztő', link: '/menu-editor' },
    { text: 'Termékek', link: '/product' },
    { text: 'Kategóriák', link: '/category' },
    { text: 'Vásárlók', link: '/customer' },
    { text: 'Rendelések', link: '/order' },
    { text: 'Számlák', link: '/bill' }
  ];

  loginNavbarItems: IMenuItem[] = [
    { text: 'Nagy Petra', link: '/', icon: 'person', status: true},
    { text: 'Kijelentkezés', link: '/', icon: 'rlogout', status: true },
    { text: 'Bejelentkezés', link: '/signin', icon: 'person', status: false },
    { text: 'Regisztráció', link: '/signup', icon: 'person_add', status: false },
  ];

  tableItems: ITableItem[] = [
    {key: 'food', name: "étel", title: 'Ételek'},
    {key: 'menu-category', name: "menü kategória", title: 'Menü kategóriák'},
    {key: 'fastfood', name: "gyorskaja", title: 'Gyorskaják'},
    {key: 'fastfood-category', name: "gyorskaja kategória", title: 'Gyorskaja kategóriák'},
    {key: 'customer', name: "vásárló", title: 'Vásárlók'},
    {key: 'order-menu', name: "menü rendelés", title: 'Menü rendelések'},
    {key: 'order-fastfood', name: "gyorskaja rendelés", title: 'Gyorskaja rendelések'},
    {key: 'bill', name: "számla", title: 'Számlák'},
  ]

  addButton: IAddButtonItem[] = [
    {name: 'Új'},
    {name: 'hozzáadása'}
  ]

  foodMenuItems: ITableColumnItem[] = [
    {key: 'id', title: '#'},
    {key: 'name', title: 'Név'},
    {key: 'menu', title: 'Menü'},
    {key: 'allergens', title: 'Allergének'},
    {key: 'category', title: 'Kategória'},
    {key: 'vegan', title: 'Vegán'},
    {key: 'active', title: 'Elérhető'},
  ];

  foodCategoryMenuItems: ITableColumnItem[] = [
    {key: 'id', title: '#'},
    {key: 'categoryCode', title: 'Kategória kód'},
    {key: 'menu', title: 'Menü'},
    {key: 'notes', title: 'Fajta'},
    {key: 'price', title: 'Ár'},
    {key: 'weight', title: 'Mennyiség'},
  ];

  fastfoodMenuItems: ITableColumnItem[] = [
    {key: 'id', title: '#'},
    {key: 'name', title: 'Név'},
    {key: 'menu', title: 'Menü'},
    {key: 'allergens', title: 'Allergének'},
    {key: 'category', title: 'Kategória'},
    {key: 'active', title: 'Elérhető'},
  ];

  fastfoodCategoryMenuItems: ITableColumnItem[] = [
    {key: 'id', title: '#'},
    {key: 'categoryCode', title: 'Kategória kód'},
    {key: 'menu', title: 'Menü'},
    {key: 'price', title: 'Ár'},
    {key: 'size', title: 'Méret'},
  ];

  customerItems: ITableColumnItem[] = [
    {key: 'id', title: '#'},
    {key: 'firstName', title: 'Vezetéknév'},
    {key: 'lastName', title: 'Keresztnév'},
    {key: 'email', title: 'Email cím'},
    {key: 'phonenumber', title: 'Telefonszám'},
    {key: 'shipAddress', title: 'Kiszállítási cím'},
    {key: 'active', title: 'Elérhető'},
  ];

  orderItems: ITableColumnItem[] = [
    {key: 'id', title: '#'},
    {key: 'customerID', title: 'Vásárló neve'},
    {key: 'date', title: 'Rendelés dátuma'},
    {key: 'amount', title: 'Összeg'},
    {key: 'shipping', title: 'Kiszállítás'},
    {key: 'status', title: 'Státusz'}
  ];

  billMenuItems: ITableColumnItem[] = [
    {key: 'id', title: '#'},
    {key: 'orderDate', title: 'Rendelés dátuma'},
    {key: 'billDate', title: 'Számla dátuma'},
    {key: 'orderID', title: 'Rendelés azonosító'},
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
    {key: 'option', name: 'opcionális'}
  ];

  unitItems: ITextItem[] = [
    {key: 'size', name: 'cm'},
    {key: 'liter', name: 'l'},
    {key: 'weight', name: 'g' }
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
    {name:  'Első lap'}
  ]

  dialogItems: IDialogItem[] = [
    {title: 'Megerősítés', message: 'Biztos vagy benne, hogy törölni szeretnéd?', ok: 'Igen', cancel: 'Mégse'}
  ]

  toastrItems: IToastrItem[] = [
    {title: 'Törlés', message: 'A törlés megtörtént!'}
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

  constructor() {}
}
