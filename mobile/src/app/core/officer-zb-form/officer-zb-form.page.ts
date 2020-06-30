import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-officer-zb-form',
  templateUrl: './officer-zb-form.page.html',
  styleUrls: ['./officer-zb-form.page.scss'],
})
export class OfficerZbFormPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  view() {
    let path = '/officer-zb-form-detail'
    this.router.navigate([path])
  }

}
