import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable()
export class JwtService {

  constructor(
    private storage: NativeStorage
  ) {}

  getToken(title: string) {
    return this.storage.getItem(title)
    // return window.localStorage['jwtToken'];
  }

  saveToken(title: string, token: string) {
    // window.localStorage['jwtToken'] = token;
    this.storage.setItem(title, token)
  }

  destroyToken() {
    this.storage.clear()
    // window.localStorage.removeItem('jwtToken');
  }

  /*

  getToken(): String {
    return window.localStorage['jwtToken'];
  }

  saveToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

  */

}