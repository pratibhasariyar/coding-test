import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceXDetailsComponent } from './space-xdetails/space-xdetails.component';


const routes: Routes = [
  {path: '', component:SpaceXDetailsComponent},
  {path: 'home', component:SpaceXDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
