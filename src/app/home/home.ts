import { Component } from '@angular/core';
import { FoodBlogComponent } from '../food-blog/food-blog.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  imports: [FoodBlogComponent, NavbarComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
