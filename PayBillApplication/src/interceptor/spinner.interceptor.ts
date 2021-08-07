import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataSharingService } from 'src/service/data-sharing.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private dataSharing: DataSharingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.dataSharing.subject.next({
      name: 'SPINNER',
      content: true,
    });
    return next.handle(request).pipe(
      tap(() => {
        this.dataSharing.subject.next({
          name: 'SPINNER',
          content: false,
        });
      })
    );
  }
}
