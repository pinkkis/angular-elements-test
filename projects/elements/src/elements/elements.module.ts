import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FooComponent } from './foo/foo.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		FooComponent
	],
	imports: [
		CommonModule
	],
	providers: [],
	entryComponents: [FooComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ElementsModule {
	constructor(private injector: Injector) {
		const elements: any[] = [
			[FooComponent, 'app-foo']
		];

		for (const [component, name] of elements) {
			const el = createCustomElement(component, { injector });
			customElements.define(name, el);
		}
	}

}
