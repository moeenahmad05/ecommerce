import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostService } from "../post.service";

@Component({
    selector: "app-post-create",
    templateUrl: "./post-create.component.html",
    styleUrl: "./post-create.component.css"
})

export class PostCreateComponent{
    enteredTitle = "";
    enteredContent = "";

    constructor(public postService: PostService) {}
    
    onAddPost(form: NgForm) {
        if(form.invalid) {
            return;
        }
        this.postService.addPost(form.value.title, form.value.content);
        form.resetForm();
    }
}