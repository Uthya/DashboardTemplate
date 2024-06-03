import { Component, OnInit } from '@angular/core';
import { Menuservice } from '../services/menuservice.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

sidebarOpen = true;
menus:any=[];

constructor(public menuService: Menuservice){

}
ngOnInit(): void {
  this.menus = this.menuService.getMenus();
}

toggleSidebar() {
  this.sidebarOpen = !this.sidebarOpen;
}

toggleSubmenu(menu: any) {
  menu.open = !menu.open;
}
}