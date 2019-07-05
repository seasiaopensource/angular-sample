import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SelectiveStrategy } from "@src/app/root/selective-strategy";
import { PageNotFoundComponent } from "@src/app/root/components/page-not-found/page-not-found-component";

const routes: Routes = [
  {
    path: "",
    loadChildren: "@src/app/home/home.module#HomeModule",
    data: { preload: true }
  },
  {
    path: "",
    loadChildren: "@src/app/help/help.module#HelpModule",
    data: { preload: true }
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRootRoutingModule {}
