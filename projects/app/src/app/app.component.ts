import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';
	htmlStringWithComponent = `<p> asdfasdf </p> <app-foo></app-foo> <hr>`;
}
