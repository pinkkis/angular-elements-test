import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-foo',
	templateUrl: './foo.component.html',
	styleUrls: ['./foo.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooComponent implements OnInit {
	public counter: number = 0;

	constructor() { }

	ngOnInit() {
	}

	inc(): void {
		this.counter++;
	}
}
