import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

import { createCustomElement } from '@angular/elements';

import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
	declarations: [FooComponent, BarComponent],
	imports: [
		CommonModule
	],
	entryComponents: [FooComponent, BarComponent],
})
export class CustomElementsModule {
	constructor(private injector: Injector) {
		const elements: any[] = [
			[FooComponent, 'kk-foo'],
			[BarComponent, 'kk-bar']
		];

		for (const [component, name] of elements) {
			const el = createCustomElement(component, { injector });
			customElements.define(name, el);
		}
	}
}
