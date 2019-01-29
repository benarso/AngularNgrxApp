import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module.tns';

import { AutoGeneratedComponent } from './auto-generated/auto-generated.component';
import {TodoListComponent} from './todo/presentation/containers/todo-list/todo-list.component';
import {TodoModule} from './todo/todo.module.tns';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './reducers';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './app.effects';
import 'nativescript-localstorage'
import {NativeScriptHttpClientModule} from 'nativescript-angular/http-client';
import {AppComponent} from './app.component.tns';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    AutoGeneratedComponent
  ],
  imports: [
    NativeScriptModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([AppEffects]),
    AppRoutingModule,
      NativeScriptHttpClientModule,
      TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
