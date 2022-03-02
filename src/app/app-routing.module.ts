import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ComponentComponent } from './component/component.component';
import { ContactComponent } from './contact/contact.component';
import { MenubarComponent } from './menubar/menubar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'menu' },
  {
    path: 'menu', component: MenubarComponent,

    children: [
      { path: '', pathMatch: 'full', redirectTo: 'aboutus' },
      { path: 'component', component: ComponentComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'aboutus', component: AboutusComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
