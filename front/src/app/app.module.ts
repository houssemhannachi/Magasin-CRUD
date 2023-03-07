import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {BoardAdminComponent} from './components/board-admin/board-admin.component';
import {BoardModeratorComponent} from './components/board-moderator/board-moderator.component';
import {BoardUserComponent} from './components/board-user/board-user.component';

import {authInterceptorProviders} from './_helpers/auth.interceptor';
import {ListCategoryComponent} from './components/list-category/list-category.component';
import {ListProductComponent} from './components/list-product/list-product.component';
import {AddProductComponent} from './components/add-product/add-product.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {EditProductComponent} from './components/edit-product/edit-product.component';
import {AddCategoryComponent} from './components/add-category/add-category.component';
import {AddCommandeComponent} from './components/add-commande/add-commande.component';
import {ImageUploadComponent} from "./components/image-upload/image-upload.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";
import { AddClientComponent } from './components/add-client/add-client.component';
import { ListClientComponent } from './components/list-client/list-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { ListCommandeComponent } from './components/list-commande/list-commande.component';
import {MatSelectModule} from "@angular/material/select";
import { ListActionsComponent } from './components/list-actions/list-actions.component';
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ListCategoryComponent,
    ListProductComponent,
    AddProductComponent,
    EditProductComponent,
    AddCategoryComponent,
    AddCommandeComponent,
    ImageUploadComponent,
    AddClientComponent,
    ListClientComponent,
    EditClientComponent,
    EditCategoryComponent,
    ListCommandeComponent,
    ListActionsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatPaginatorModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
