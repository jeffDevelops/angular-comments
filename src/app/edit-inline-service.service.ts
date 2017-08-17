import { Injectable } from '@angular/core';
import { Directive,
				 ElementRef, 
				 Input, 
				 Output, 
				 EventEmitter,
				 SimpleChanges } from '@angular/core';

@Directive({
	selector: '[contenteditableModel]',
	host: {
		'(keyup)': 'onKeyup()'
	}
})

export class ContenteditableModel {
	@Input('contenteditableModel') model: string;
	@Output('contenteditableModel') update = new EventEmitter();
	private lastViewModel: string;

	constructor(private elRef: ElementRef) {}

	ngOnChanges(changes: SimpleChanges) {
		//if our model changes and the current value isn't equal to the last value...
		if (changes['model'] && changes['model'].currentValue !== this.lastViewModel) {
			this.lastViewModel = this.model; //update it.
			this.refreshView();
		}
	}

	onKeyUp() {
		let value = this.elRef.nativeElement.innerText;
		this.lastViewModel = value;
		this.update.emit(value);
	}

	private refreshView() {
		this.elRef.nativeElement.innerText = this.model; 
	}
}

@Injectable()
export class EditInlineServiceService { //Bahahahaha, leaving this

	ContenteditableModel;

  constructor() { }

}
