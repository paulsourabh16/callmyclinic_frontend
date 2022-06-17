import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  private ls = window.localStorage;
  private $storage = new Subject<String>();

  constructor() { }

  watchStorage(): Observable<any> {
    return this.$storage.asObservable();
  }
  public setItem(key: string, value: string | boolean) {
    this.ls.setItem(key, JSON.stringify(value));
    return true;
  }

  public getItem(key: any) {
    const value: any | null = this.ls.getItem(key);
    try {
      return JSON.parse(value);
    } catch (e) {
      // console.log(e)
      return null;
    }
  }
  public clear() {
    this.ls.clear();
  }
}
