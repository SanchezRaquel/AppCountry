import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';




@NgModule({
  declarations: [
   HomePagesComponent,
   AboutPagesComponent,
   SidebarComponent,
   ContactPagesComponent,
   SearchBoxComponent,
   LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
HomePagesComponent,
AboutPagesComponent,
SidebarComponent,
ContactPagesComponent,
SearchBoxComponent,
LoadingSpinnerComponent
  ]
})
export class SharedModule { }
