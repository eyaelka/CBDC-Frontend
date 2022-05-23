import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";

////////



import { ArchwizardModule } from 'angular-archwizard';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
///////
import {DecimalPipe} from '@angular/common';

import { NgbNavModule, NgbDropdownModule, NgbModalModule, NgbTooltipModule , NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SimplebarAngularModule } from 'simplebar-angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import bootstrapPlugin from "@fullcalendar/bootstrap";
import { LightboxModule } from 'ngx-lightbox';

import { WidgetModule } from '../shared/widget/widget.module';
import { UIModule } from '../shared/ui/ui.module';

import { PagesRoutingModule } from './pages-routing.module';

//import { DashboardsModule } from './dashboards/dashboards.module';
import { EcommerceModule } from './ecommerce/ecommerce.module';
//import { CryptoModule } from './crypto/crypto.module';
import { EmailModule } from './email/email.module';
import { InvoicesModule } from './invoices/invoices.module';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { ContactsModule } from './contacts/contacts.module';
import { BlogModule } from "./blog/blog.module";
import { UtilityModule } from './utility/utility.module';
import { UiModule } from './ui/ui.module';
import { FormModule } from './form/form.module';
import { TablesModule } from './tables/tables.module';
import { IconsModule } from './icons/icons.module';
import { ChartModule } from './chart/chart.module';
import { CalendarComponent } from './calendar/calendar.component';
import { MapsModule } from './maps/maps.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';

import { FilemanagerComponent } from './filemanager/filemanager.component';
import { CommercialbankComponent } from './commercialbank/commercialbank.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { ActivateMerchantComponent } from './activate-merchant/activate-merchant.component';
import { RegulateMoneyComponent } from './regulate-money/regulate-money.component';
//import { CentralbankWalletComponent } from './centralbank-wallet/centralbank-wallet.component';
import { UserWalletComponent } from './user-wallet/user-wallet.component';
import { MerchantWalletComponent } from './merchant-wallet/merchant-wallet.component';
import { RegulateDeviseComponent } from './regulate-devise/regulate-devise.component';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  bootstrapPlugin
]);

@NgModule({
  declarations: [CalendarComponent, ChatComponent, FilemanagerComponent, CommercialbankComponent, ActivateAccountComponent, ActivateMerchantComponent, RegulateMoneyComponent, UserWalletComponent, MerchantWalletComponent, RegulateDeviseComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    PagesRoutingModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    //DashboardsModule,
    //CryptoModule,
    EcommerceModule,
    EmailModule,
    InvoicesModule,
    HttpClientModule,
    ProjectsModule,
    UIModule,
    DropzoneModule,
    TasksModule,
    ContactsModule,
    BlogModule,
    UtilityModule,
    UiModule,
    FormModule,
    TablesModule,
    IconsModule,
    ChartModule,
    WidgetModule,
    MapsModule,
    FullCalendarModule,
    NgbNavModule,
    NgbTooltipModule,
    NgbCollapseModule,
    SimplebarAngularModule,
    LightboxModule,
    ArchwizardModule
      ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [DecimalPipe]



})
export class PagesModule { }
