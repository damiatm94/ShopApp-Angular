import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-app-angular';
  private tabNames = ['Warehouse', 'Orders', 'Shop'];
  private activeTabName = this.tabNames[0];

  private changeActiveTab(tabName: string) {
    this.activeTabName = tabName;
  }
}
