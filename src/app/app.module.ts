import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./register/register.component";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./routes/routes";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./guards/auth.guard";
import { NotifyComponent } from "./notify/notify.component";
import { NotifyService } from "./services/notify.service";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    NotifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [AuthService, AuthGuard, NotifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
