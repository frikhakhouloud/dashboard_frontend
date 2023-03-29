import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './composants/menu/menu.component';
import { FiltreComponent } from './composants/filtre/filtre.component';

const routes: Routes = [
  {
    path: 'home',
    component: MenuComponent,
    children: [{ path: 'filtre', component: FiltreComponent }],
  },
  { path: '', redirectTo: 'home/filtre', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
