import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from '@modules/form/components/form.component';
import { MapComponent } from '@modules/map/components/map.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full',
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
