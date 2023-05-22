import { CryptoService } from './../../crypto/crypto.service';
import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-encrypt-forms',
  templateUrl: './encrypt-forms.component.html',
  styleUrls: ['./encrypt-forms.component.scss']
})
export class EncryptFormsComponent {
  @Input() type!: 'encrypt' | 'decrypt';
  @ViewChild('fileInput') fileInput: any;
  keyFileBase64: string | undefined;
  result: string | undefined;
  formGroup = new FormGroup({
    originText: new FormControl(''),
    resultText: new FormControl('')
  })

  constructor(private crypto: CryptoService) {}

  selectFile(): void {
    this.fileInput.nativeElement.click();
  }

  handleFileSelected(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];

      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const fileData: string = e.target.result;
        this.keyFileBase64 = fileData.split(',')[1];
        // Use the base64Data as needed
        console.log('Base64 data:', this.keyFileBase64);
      };
      reader.readAsDataURL(file);
    }
  }

  processText(): void {
    console.log()
    if(this.type == 'encrypt' && this.keyFileBase64) {
      this.encrypt(this.formGroup.controls['originText'].value as string, this.keyFileBase64 as string);
    } else if(this.type == 'decrypt' && this.keyFileBase64) {
      this.decrypt(this.formGroup.controls['originText'].value as string, this.keyFileBase64 as string);
    }
  }

  encrypt(plainText: string, publicKeyBase64: string): void {
    this.crypto.encryptMessage(plainText, publicKeyBase64).subscribe(result => {
      console.log(result)
      this.formGroup.controls['resultText'].setValue(result);
    });
  }

  decrypt(encodedText: string, privateKeyBase64: string): void {
    this.crypto.decryptMessage(encodedText, privateKeyBase64).subscribe(result => this.formGroup.controls['resultText'].setValue(result));
  }
}
