import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';
	htmlStringWithComponent = `<p> asdfasdf </p> <kk-foo></kk-foo> <hr> <kk-bar></kk-bar>`;
}
