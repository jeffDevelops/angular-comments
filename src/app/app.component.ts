import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContenteditableModel } from './edit-inline-service.service';

export class Comment {
	text: string;
	author: string;
	id: number;
} 

export let commentsArray: Comment[] = [
	{text: 'first comment!', author: 'Jamal', id: 0},
	{text: 'nice work!', author: 'Justin', id: 1},
	{text: 'I would also like to congratulate you!', author: 'Caroline', id: 2}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	comments = commentsArray;

	addComment(form: NgForm) {
		console.log(form.value);
		let newComment = form.value;
		this.comments.push(newComment);
		for (let i = 0; i < this.comments.length; i++) {
			this.comments[i].id = i;
			console.log(this.comments[i]);
		}
	}
	deleteComment(id) {
		for (let i = 0; i < this.comments.length; i++) {
			if (id === this.comments[i].id) {
				this.comments.splice(id, 1);
			}
		}
		for (let i = 0; i < this.comments.length; i++) {
			this.comments[i].id = i;
			console.log(this.comments[i]);
		}
	}
	editDetails(id, updatedAuthor, updatedText) {
		for (let i = 0; i < this.comments.length; i++) {
			if (id === this.comments[i].id) {
				this.comments[i].author = updatedAuthor;
				this.comments[i].text = updatedText;
			}
		}
	}
}
