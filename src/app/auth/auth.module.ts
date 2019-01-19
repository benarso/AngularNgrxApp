import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromLogin from './reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
import { AuthRoutingModule} from './auth-routing.module';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from '../auth/components/login/login.component';


@NgModule({
  declarations: [LoginPageComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', fromLogin.reducer),
    EffectsModule.forFeature([AuthEffects]),
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class AuthModule { }
