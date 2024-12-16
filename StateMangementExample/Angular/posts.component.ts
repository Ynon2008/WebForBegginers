// post.component.ts
import { Component, OnInit } from "@angular/core";
import { PostService } from "./post.service";

@Component({
  selector: "app-post",
  template: `
    <div *ngFor="let post of posts | async">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  `,
})
export class PostComponent implements OnInit {
  posts: Observable<any>;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
}

import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-demo",
  template: "<p>Angular Component</p>",
})
export class DemoComponent implements OnInit, OnDestroy {
  ngOnInit() {
    console.log("componnet initalized!");
  }

  ngOnDestroy() {
    console.log("Component is destroyed :(");
  }
}
