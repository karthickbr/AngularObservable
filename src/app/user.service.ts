import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  // activatedEmmiter = new EventEmitter<boolean>();
  activatedEmmiter = new Subject<boolean>();
}
