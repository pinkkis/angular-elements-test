import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsModule } from 'projects/elements/src/elements/elements.module';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
	declarations: [
		AppComponent,
		SafeHtmlPipe
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ElementsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
