import { HomeComponent } from './../../../../helloAngular/helloWorld/src/app/pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  },
  //! localhost:4200/products-list <- a partir de /
  {
    path: 'products-list', //url que debe cargar la ruta
    component: ProductListComponent //el componente que tiene que pintar en esa ruta path   , tiene que estar exportado en modules.          
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
