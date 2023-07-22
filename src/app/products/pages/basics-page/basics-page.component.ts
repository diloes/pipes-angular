import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'diego';
  public nameUpper: string = 'DIEGO';
  public fullName: string = 'dIeGO LopEz';
  public customDate: Date = new Date();
}
