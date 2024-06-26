import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { TestErrorComponent } from './test-error/test-error.component';
import { ToastrModule } from 'ngx-toastr';
import { ServerErrorComponent } from './server-error/server-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { BreadcrumbComponent, BreadcrumbModule } from 'xng-breadcrumb';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerComponent, NgxSpinnerModule } from 'ngx-spinner';
 

@NgModule({
  declarations: [NavBarComponent, TestErrorComponent,ServerErrorComponent,NotFoundComponent, SectionHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates:true
    }),
    BreadcrumbModule,
    SharedModule,
     NgxSpinnerModule
  ],
  exports:[
    NavBarComponent,
    SectionHeaderComponent,
    NgxSpinnerComponent
  ]
})
export class CoreModule { }
