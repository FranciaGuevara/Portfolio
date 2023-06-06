import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FSComponent } from './pDetails/fs/fs.component';
import { DMComponent } from './pDetails/dm/dm.component';
import { DAComponent } from './pDetails/da/da.component';
import { DVComponent } from './pDetails/dv/dv.component';
import { VAAComponent } from './proDetails/vaa/vaa.component';
import { SMProposalComponent } from './proDetails/smproposal/smproposal.component';
import { PRPlanComponent } from './proDetails/prplan/prplan.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    FSComponent,
    DMComponent,
    DAComponent,
    DVComponent,
    VAAComponent,
    SMProposalComponent,
    PRPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
