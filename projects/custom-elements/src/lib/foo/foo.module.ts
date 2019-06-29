import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
	declarations: [FooComponent],
	imports: [
		CommonModule
	],
	entryComponents: [FooComponent],
})
export class FooModule {
	constructor(private injector: Injector) {
		const elements: any[] = [
			[FooComponent, 'kk-foo']
		];

		for (const [component, name] of elements) {
			const el = createCustomElement(component, { injector });
			customElements.define(name, el);
		}
	}
}
