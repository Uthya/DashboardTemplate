import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Menuservice {

  constructor() { }

  getMenus() {
    return [
      { name: 'Home', submenus:  null },
      { name: 'About', submenus: null },
      { name: 'Services', submenus: [{ name: 'Consulting' }, { name: 'Development' }], open: false },
      { name: 'Contact', submenus: null }
    ];
  }
}


