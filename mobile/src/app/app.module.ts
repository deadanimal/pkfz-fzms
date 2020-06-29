import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpTokenInterceptor } from './shared/interceptor/http.token.interceptor';
import { AuthService } from './shared/services/auth/auth.service';
import { JwtService } from './shared/handler/jwt/jwt.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    JwtService,
    NativeStorage,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    /*{
      provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true
    }*/
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
