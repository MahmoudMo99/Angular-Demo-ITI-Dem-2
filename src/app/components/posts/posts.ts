import { Component, OnInit } from '@angular/core';
import { IPost } from '../../models/i-post';
import { Posts as postsService } from '../../services/posts';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-posts',
  imports: [FormsModule],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {
  posts: IPost[] = [];

  newPost: IPost = { title: '', body: '', id: 0, userId: 1 };

  constructor(private postService: postsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getAllPosts().subscribe({
      next: (result) => {
        this.posts = result.posts;
        // console.log(this.posts);
      },
      error: () => alert('Failed to load data'),
      // complete: () => console.log('Donnnne'),
    });
  }

  addPost() {
    if (!this.newPost.title.trim() || !this.newPost.body.trim()) return;

    this.postService.addPost(this.newPost).subscribe({
      next: (post) => {
        this.posts.unshift(post);
        alert('Post is added');

        this.newPost = { title: '', body: '', id: 0, userId: 1 };
      },
      error: () => alert('Failed to add post'),
    });
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe({
      next: () => {
        this.posts = this.posts.filter((p) => p.id !== id);
      },
      error: () => alert('Failed to delete post'),
    });
  }
}
