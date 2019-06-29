import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ElementsModule } from './elements/elements.module';
import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ElementsModule, { ngZone: 'noop' })
	.catch(err => console.error(err));
