import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
    <p>success-alert works!</p>
  `,
  styles: [`
    p {
      background-color: lightcyan;
      padding: 0.5rem;
      border: 1px solid green;
    }
  `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
