import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// ParticleJS
import { ParticlesModule } from 'angular-particle';

// Angular Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

// Router
import { RouterModule, Routes} from '@angular/router';

// Other Pages to be used in the Router
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CountdownComponent } from './countdown/countdown.component';

const appRoutes: Routes = [
  { path: '', component: CountdownComponent },
  { path: 'events', component: EventsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    HomeComponent,
    AboutComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule, // import for the storage features
    AngularFirestoreModule, // import for the database features
    AngularFireAuthModule , // import for the authentication feature
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
