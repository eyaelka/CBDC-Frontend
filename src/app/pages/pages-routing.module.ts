import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NgApexchartsModule } from 'ng-apexcharts';
import { CentralbankWalletComponent } from './centralbank-wallet/centralbank-wallet.component';
import { UserWalletComponent } from './user-wallet/user-wallet.component';
import { MerchantWalletComponent } from './merchant-wallet/merchant-wallet.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { DefaultComponent } from './dashboards/default/default.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { CommercialbankComponent } from './commercialbank/commercialbank.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { ActivateMerchantComponent } from './activate-merchant/activate-merchant.component';
import { RegulateMoneyComponent } from './regulate-money/regulate-money.component';
import { RegulateDeviseComponent } from './regulate-devise/regulate-devise.component';
import { RegulatetransferComponent } from './regulatetransfer/regulatetransfer.component';
import { CommercialbankWalletComponent } from './commercialbank-wallet/commercialbank-wallet.component';
import { UserlistComponent } from './userlist/userlist.component';
const routes: Routes = [


  { path: 'dashboard', component: DefaultComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'user-wallet', component:UserWalletComponent },
  { path: 'merchant-wallet',component:MerchantWalletComponent },
  { path: 'regulatedevise', component:RegulateDeviseComponent},
  { path: 'regulatetransfer', component:RegulatetransferComponent},
  { path: 'centralbank-wallet', component:CentralbankWalletComponent},
  { path: 'commercialbank-wallet', component:CommercialbankWalletComponent},
  { path: 'commercialbank', component:CommercialbankComponent},
  { path : 'users', component:UserlistComponent},
  { path: 'enduser/activation/:token', component:ActivateAccountComponent},
  { path: 'merchant/activation/:token', component:ActivateMerchantComponent},
  { path: 'regulatemoney', component:RegulateMoneyComponent},
  { path: 'filemanager', component: FilemanagerComponent },
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  { path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
  //{ path: 'crypto', loadChildren: () => import('./crypto/crypto.module').then(m => m.CryptoModule) },
  { path: 'email', loadChildren: () => import('./email/email.module').then(m => m.EmailModule) },
  { path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },
  { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },
  { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'charts', loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule) },
  { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
