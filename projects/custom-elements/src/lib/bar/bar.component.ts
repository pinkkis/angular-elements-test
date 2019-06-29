import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'kk-bar',
	templateUrl: './bar.component.html',
	styleUrls: ['./bar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarComponent implements OnInit {
	public counter = 100;

	constructor() { }

	ngOnInit() {
	}

	dec(): void {
		this.counter--;
	}
}
