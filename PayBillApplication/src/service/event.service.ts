import { Injectable } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { filter, map, share } from 'rxjs/operators';
import { EventContent } from 'src/model/EventContent';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  // observable: Observable<EventContent<any> | string>;
  // observer: Observer<EventContent<any> | string>;
  // constructor() {
  //   this.observable = new Observable(
  //     (observer: Observer<EventContent<any> | string>) => {
  //       this.observer = observer;
  //     }
  //   ).pipe(share());
  // }
  // broadcast(event: EventContent<any> | string): void {
  //   if (this.observer) {
  //     this.observer.next(event);
  //   }
  // }
  // subscribe(eventName: string, callback: any): Subscription {
  //   const subscriber: Subscription = this.observable
  //     .pipe(
  //       filter((event: EventContent<any> | string) => {
  //         if (typeof event === 'string') {
  //           return event === eventName;
  //         }
  //         return event.name === eventName;
  //       }),
  //       map((event: EventContent<any> | string) => {
  //         if (typeof event !== 'string') {
  //           return event;
  //         }
  //       })
  //     )
  //     .subscribe(callback);
  //   return subscriber;
  // }
  // destroy(subscriber: Subscription): void {
  //   subscriber.unsubscribe();
  // }
}
