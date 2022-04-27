import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { ERoles } from 'src/app/core/domain/enums';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
import { PaginatorModule } from 'primeng/paginator';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: ':id', component: UserDetailComponent },
  { path: 'form/create', component: UserFormComponent, canActivate: [RoleGuard], data: { role: ERoles.ADMIN } },
  { path: 'form/update/:id', component: UserFormComponent, canActivate: [RoleGuard], data: { role: [ERoles.EDITOR, ERoles.ADMIN]} },
  { path: 'page/:pageNumber', component: UsersListComponent}
];

@NgModule({
  declarations: [
    UsersListComponent,
    UserDetailComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    InputSwitchModule,
    DirectivesModule,
    PaginatorModule,
    CalendarModule,
    RouterModule.forChild(routes)

  ],
  exports: [
    UsersListComponent,
    UserDetailComponent,
    UserFormComponent
  ]
})
export class UsersModule { }
