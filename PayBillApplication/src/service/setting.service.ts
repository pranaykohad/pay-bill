import { ISetting } from './../model/Setting';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/app.constant';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  constructor(private http: HttpClient) {}

  getSetting(): Observable<ISetting> {
    return this.http.get<ISetting>(`${BASE_URL}setting`);
  }

  saveSetting(setting: ISetting): Observable<ISetting> {
    return this.http.post<ISetting>(`${BASE_URL}setting`, setting);
  }
}
