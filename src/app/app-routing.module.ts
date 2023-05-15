import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MenuComponent } from "./composants/menu/menu.component";
import { FiltreComponent } from "./composants/filtre/filtre.component";
import { ImportFilesComponent } from "./composants/import-files/import-files.component";

const routes: Routes = [
  // {path:"home",  component: FiltreComponent, MychartComponent },

  {
    path: "home",
    component: MenuComponent,
    children: [
      { path: "filtre", component: FiltreComponent },
      { path: "import", component: ImportFilesComponent },
    ],
  },
  { path: "", redirectTo: "home/filtre", pathMatch: "full" },
  { path: "**", redirectTo: "home/filtre", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
