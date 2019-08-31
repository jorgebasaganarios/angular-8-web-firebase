import { Component, OnInit } from '@angular/core';
import { AuthService } from '.././services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public isCollapsed = true;
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
}
