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
import { ProfileComponent } from "./profile/profile.component";
import { UserService } from "./services/user.service";
import { PrettyDatePipe } from "./pipes/pretty-date.pipe";
import { WallComponent } from './profile/wall/wall.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { FollowComponent } from './profile/follow/follow.component';
import { FollowService } from "./services/follow.service";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    NotifyComponent,
    ProfileComponent,
    PrettyDatePipe,
    WallComponent,
    EditProfileComponent,
    FollowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [AuthService, AuthGuard, NotifyService, UserService, FollowService],
  bootstrap: [AppComponent]
})
export class AppModule {}
