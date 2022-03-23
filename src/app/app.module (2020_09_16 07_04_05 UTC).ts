import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppheadComponent } from './apphead/apphead.component';
import { RouterModule } from '@angular/router';
import { AppheadModule } from './apphead/apphead.module';
import { UserprofileModule } from './apphead/userprofile/userprofile.module';

@NgModule({
  declarations: [
    AppComponent,
    AppheadComponent,
  ],
  imports: [
    BrowserModule,
    AppheadModule,
    UserprofileModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
