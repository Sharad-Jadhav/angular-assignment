import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-assignment',
  templateUrl: './password-assignment.component.html',
  styleUrls: ['./password-assignment.component.css']
})
export class PasswordAssignmentComponent {
  showSecret = false;
  log : any[] = [];

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    // let num = this.log.length + 1;
    this.log.push(new Date());
  }

}
