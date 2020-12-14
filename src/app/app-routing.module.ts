import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppResultComponent } from './components/app-result/app-result.component';
import { AppSearchComponent } from './components/app-search/app-search.component';
import { AppErrorComponent } from './components/app-error/app-error.component';

const routes: Routes = [
  { path: "", component: AppSearchComponent, pathMatch: "full" }, 
  { path: ":id", component: AppResultComponent },
  { path: "**", component: AppErrorComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
