import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { FooModule } from 'custom-elements';

@NgModule({
	declarations: [
		AppComponent,
		SafeHtmlPipe
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FooModule
	],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
