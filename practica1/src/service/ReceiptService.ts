import { Product } from '../models/Product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReceiptService {
  generateReceipt(items: Product[], total: number): void {
    let receiptContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
    receiptContent += '<receipt>\n';
    receiptContent += '  <items>\n';

    // Iterate over the items and add each one to the receipt
    items.forEach((item) => {
      receiptContent += `    <item>\n`;
      receiptContent += `      <name>${item.name}</name>\n`;
      receiptContent += `      <price>${item.price}</price>\n`;
      receiptContent += `      <quantity>${item.quantity}</quantity>\n`;
      receiptContent += `    </item>\n`;
    });

    receiptContent += '  </items>\n';
    receiptContent += `  <total>${total}</total>\n`;
    receiptContent += '</receipt>';

    this.downloadFile(receiptContent, 'receipt.xml', 'text/xml');
  }

  private downloadFile(content: string, fileName: string, mimeType: string): void {
    const blob = new Blob([content], { type: mimeType });
    const url = window.URL.createObjectURL(blob);

    // Create a temporary anchor element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    setTimeout(() => {
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }, 0);
  }
}
