import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app.constant';
import { ILedger } from 'src/model/Ledger';
import { HttpHeaders } from '@angular/common/http';
import { Attachment } from 'src/model/Attachment';

@Injectable({
  providedIn: 'root',
})
export class LedgerService {
  constructor(private http: HttpClient) {}

  saveLedger(ledger: ILedger): Observable<ILedger> {
    return this.http.post<ILedger>(`${BASE_URL}paybill`, ledger);
  }

  getPayBill(empId: number, date: string): Observable<ILedger> {
    return this.http.get<ILedger>(
      `${BASE_URL}paybill?empId=${empId}&date=${date}`
    );
  }

  downloadPayBill(ledger: ILedger): Observable<Attachment> {
    return this.http.post<Attachment>(`${BASE_URL}paybill/download`, ledger);
  }
}
