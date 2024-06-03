import { Component, OnInit } from '@angular/core';
import { Menuservice } from 'src/app/services/menuservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menus:any=[];

  constructor(public menuService:Menuservice){}

  ngOnInit(): void {
      this.menus = this.menuService.getMenus();
    //  [
    //   { name: 'Home', submenus: null },
    //   { name: 'About', submenus: null },
    //   { name: 'Services', submenus: [{ name: 'Consulting' }, { name: 'Development' }], open: false },
    //   { name: 'Contact', submenus: null }
    // ];
  }

  toggleSubmenu(menu: any) {
    menu.open = !menu.open;
  }


}
