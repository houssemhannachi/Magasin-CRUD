import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {BoardUserComponent} from './components/board-user/board-user.component';
import {BoardModeratorComponent} from './components/board-moderator/board-moderator.component';
import {BoardAdminComponent} from './components/board-admin/board-admin.component';
import {ListCategoryComponent} from "./components/list-category/list-category.component";
import {ListProductComponent} from "./components/list-product/list-product.component";
import {AddProductComponent} from "./components/add-product/add-product.component";
import {ItemListResolver} from "./_helpers/ItemListResolver";
import {AddCategoryComponent} from "./components/add-category/add-category.component";
import {EditProductComponent} from "./components/edit-product/edit-product.component";
import {AddCommandeComponent} from "./components/add-commande/add-commande.component";
import {ListClientComponent} from "./components/list-client/list-client.component";
import {AddClientComponent} from "./components/add-client/add-client.component";
import {EditClientComponent} from "./components/edit-client/edit-client.component";
import {EditCategoryComponent} from "./components/edit-category/edit-category.component";
import {ListCommandeComponent} from "./components/list-commande/list-commande.component";
import {ListActionsComponent} from "./components/list-actions/list-actions.component";
import {CategoryListResolver} from "./_helpers/CategoryListResolver";
import {HistoryResolver} from "./_helpers/HistoryResolver";
import {CommandeListResolver} from "./_helpers/CommandeListResolver";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: BoardUserComponent},
  {path: 'mod', component: BoardModeratorComponent},
  {path: 'admin', component: BoardAdminComponent},
  {path: 'category', component: ListCategoryComponent, resolve: {category: CategoryListResolver}},
  {path: 'clients', component: ListClientComponent},
  {path: 'commandes', component: ListCommandeComponent, resolve: {commande: CommandeListResolver}},
  {path: 'actions', component: ListActionsComponent, resolve: {action: HistoryResolver}},
  {path: 'products', component: ListProductComponent, resolve: {product: ItemListResolver}},
  {path: 'addProduct', component: AddProductComponent},
  {path: 'addCategory', component: AddCategoryComponent},
  {path: 'addCommande', component: AddCommandeComponent},
  {path: 'addClient', component: AddClientComponent},
  {path: 'products/edit/:id', pathMatch: 'full', component: EditProductComponent},
  {path: 'categories/edit/:id', pathMatch: 'full', component: EditCategoryComponent},
  {path: 'clients/edit/:id', pathMatch: 'full', component: EditClientComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
