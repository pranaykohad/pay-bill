import { Injectable } from '@angular/core';
import { Attachment } from 'src/model/Attachment';
import { DatePicker } from 'src/model/DatePicker';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  daysInMonth(month, year): number {
    return new Date(year, month, 0).getDate();
  }

  formatDate(date: DatePicker): string {
    return `${date.year}/${this.formatNumToTwoDigit(date.month.toString())}`;
  }

  formatNumToTwoDigit(value: string): string {
    return value.length === 1 ? '0' + value : value;
  }

  downloadFile(res: Attachment) {
    const contentType = res.mimeType;
    const urlCreator = window.URL;
    const byteString = window.atob(res.fileContent);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: contentType });
    const url = urlCreator.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    a.download = res.fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
