import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ServerComponent} from "./servers/server/server.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {ServersComponent} from "./servers/servers.component";
import {UserComponent} from "./users/user/user.component";
import {UsersComponent} from "./users/users.component";
import {HomeComponent} from "./home/home.component";
import {Routes, RouterModule} from "@angular/router";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
    {path: ':id/:name', component: UserComponent}
  ]},

  {path: 'servers', component: ServersComponent, children: [
    {path: ':id/edit', component: EditServerComponent},
    {path: ':id', component: ServerComponent}
  ]},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
