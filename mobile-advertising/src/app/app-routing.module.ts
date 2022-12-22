import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BulkNewCampaignComponent } from './components/bulk/bulk-new-campaign/bulk-new-campaign.component';
import { BulkCampaignSubmissionComponent } from './components/bulk/bulk-campaign-submission/bulk-campaign-submission.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RealTimeNewCampaignComponent } from './components/real-time/real-time-new-campaign/real-time-new-campaign.component';
import { CellsTableComponent } from './components/real-time/real-time-locations/cells-table/cells-table.component';
import { RealTimeLocationsComponent } from './components/real-time/real-time-locations/real-time-locations.component';
import { BulkReportComponent } from './components/bulk/bulk-report/bulk-report.component';
import { RealTimeReportComponent } from './components/real-time/real-time-report/real-time-report.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'Login', component:LoginComponent},
  { path:'home', component: HomeComponent },
  { path:'new-bulk-campaign', component: BulkNewCampaignComponent },
  { path:'bulk-campaign-submission', component: BulkCampaignSubmissionComponent },
  { path: 'BulkReport', component: BulkReportComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'real-time-newcampaign',  component: RealTimeNewCampaignComponent },
  { path: 'real-time-locations', component: RealTimeLocationsComponent },
  { path: 'real-time-locations/:id', component: CellsTableComponent },
  {path:'real-time-report',component:RealTimeReportComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
