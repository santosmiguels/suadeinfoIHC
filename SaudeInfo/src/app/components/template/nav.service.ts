import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NavService {
    state = new BehaviorSubject<boolean>(false)

    constructor(private http:HttpClient) { }

    open(){
        this.state.next(true)
    }

    close(){
        this.state.next(false)
    }

    toggle(){
        this.state.next(!this.state.value)
    }
}
