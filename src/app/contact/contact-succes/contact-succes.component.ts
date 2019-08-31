import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-contact-succes',
  templateUrl: './contact-succes.component.html',
  styleUrls: ['./contact-succes.component.css']
})
export class ContactSuccesComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
