import { CryptoService } from './../../crypto/crypto.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-encrypt-page',
  templateUrl: './encrypt-page.component.html',
  styleUrls: ['./encrypt-page.component.scss']
})
export class EncryptPageComponent {

  constructor(private crypto: CryptoService) {}

  generateKeys(): void {
    this.crypto.generateKeys().subscribe(data => {
      this.downloadFileFromBase64(data.publicKey, 'public-key.txt');
      this.downloadFileFromBase64(data.privateKey, 'private-key.txt');
    });
  }

  downloadFileFromBase64(base64Encoded: string, filename: string): void {
    const decodedData = atob(base64Encoded);
    const blob = new Blob([decodedData], { type: "application/octet-stream" });
    const fileUrl = URL.createObjectURL(blob);
  
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = filename;
  
    link.click();
  }

  encrypt(): void {
  }
}
