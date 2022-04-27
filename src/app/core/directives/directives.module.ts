import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsAuthDirective } from './is-auth.directive';
import { IsAdminDirective } from './is-admin.directive';
import { RoleDirective } from './role.directive';



@NgModule({
  declarations: [IsAuthDirective, IsAdminDirective, IsAdminDirective, RoleDirective],
  imports: [CommonModule],
  exports: [IsAuthDirective,
            IsAdminDirective,
            RoleDirective]
})
export class DirectivesModule { }
