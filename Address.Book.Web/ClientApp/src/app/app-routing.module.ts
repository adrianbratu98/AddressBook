import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/address-list/address-list.module').then(m => m.AddressListModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

