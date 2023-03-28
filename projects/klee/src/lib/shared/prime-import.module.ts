import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { PaginatorModule } from 'primeng/paginator';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SidebarModule } from 'primeng/sidebar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  exports: [
    ButtonModule,
    TableModule,
    OrganizationChartModule,
    PaginatorModule,
    TimelineModule,
    CardModule,
    PanelModule,
    ConfirmDialogModule,
    SidebarModule,
    BreadcrumbModule,
    MenubarModule,
    MessagesModule,
    ToastModule,
    ImageModule,
    AvatarModule,
    SkeletonModule,
    ProgressSpinnerModule
  ]
})
export class PrimeImportModule { }
