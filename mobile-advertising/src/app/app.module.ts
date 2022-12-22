import { AuthenticationService } from './components/login/services/authentication.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderHomeComponent } from './components/home/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { BulkNewCampaignComponent } from './components/bulk/bulk-new-campaign/bulk-new-campaign.component';
import { BulkCampaignSubmissionComponent } from './components/bulk/bulk-campaign-submission/bulk-campaign-submission.component';
import { CellsTableComponent } from './components/real-time/real-time-locations/cells-table/cells-table.component';
import { MultiSmsComponent } from './components/bulk/bulk-campaign-submission/multi-sms/multi-sms.component';
import { BulkReportComponent } from './components/bulk/bulk-report/bulk-report.component';
import { RealTimeReportComponent } from './components/real-time/real-time-report/real-time-report.component';
import { SmsFooterComponent } from './components/sms-footer/sms-footer.component';
import { LocationComponent } from './components/bulk/bulk-new-campaign/location/location.component';
import { LocationSearchPipe } from './components/bulk/bulk-new-campaign/location/pipes/location-search.pipe';
import { HandsetComponent } from './components/bulk/bulk-new-campaign/handset/handset.component';
import { RealTimeLocationsComponent } from './components/real-time/real-time-locations/real-time-locations.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DialogueBoxComponent } from './components/dialogue-box/dialogue-box.component';
import { RealTimeNewCampaignComponent } from './components/real-time/real-time-new-campaign/real-time-new-campaign.component';
import { RealTimeDialogueBoxComponent } from './components/real-time/real-time-locations/real-time-dialogue-box/real-time-dialogue-box.component';
import { FormsModule } from '@angular/forms';
import 'hammerjs';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select'; 
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatRadioModule} from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatSortModule } from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import { NgxMatDatetimePicker } from '@angular-material-components/datetime-picker/public-api';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  
import { MatDialogModule } from '@angular/material/dialog';

import { UserActivityComponent } from './components/bulk/bulk-new-campaign/user-activity/user-activity.component';
import { UserPlanComponent } from './components/bulk/bulk-new-campaign/user-plan/user-plan.component';
import { ArpuComponent } from './components/bulk/bulk-new-campaign/arpu/arpu.component';
import { SenderDataComponent } from './components/real-time/real-time-new-campaign/sender-data/sender-data.component';
import { CampaginDetailsComponent } from './components/real-time/real-time-new-campaign/campagin-details/campagin-details.component';
import { MessageDetailsComponent } from './components/real-time/real-time-new-campaign/message-details/message-details.component';
import { SenderNameService } from './components/shared/services/sender-name.service';
import { SenderNameComponent } from './components/shared/components/sender-name/sender-name.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderHomeComponent,
    BulkCampaignSubmissionComponent,
    SidenavComponent,
   BulkNewCampaignComponent,
   RealTimeNewCampaignComponent,
   RealTimeLocationsComponent,
   HeaderComponent,
   CellsTableComponent,
   MultiSmsComponent,
   BulkReportComponent,
   RealTimeReportComponent,
   SmsFooterComponent,
   LocationComponent,
   LocationSearchPipe,
   HandsetComponent,
   DialogueBoxComponent,
   RealTimeDialogueBoxComponent,
  
   UserActivityComponent,
   UserPlanComponent,
   ArpuComponent,
   SenderDataComponent,
   CampaginDetailsComponent,
   MessageDetailsComponent,
   SenderNameComponent,

  ],

  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    FormsModule, 
    MatSelectModule,
    MatTooltipModule,
    MatRadioModule,
    MatPaginatorModule,
    MatTableModule,
    MatSidenavModule,
    MatSortModule,
    MatTabsModule,
    MatIconModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    NgxMaterialTimepickerModule,
    CommonModule,
    HttpClientModule,
    MatDialogModule,
     

  ],
  providers: [AuthenticationService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    SenderNameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
