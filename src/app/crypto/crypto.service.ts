import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

// Tipos personalizados
type PublicKey = {
  e: number;
  n: number;
};

type PrivateKey = {
  d: number;
  n: number;
};

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() { }

  // Função para calcular o máximo divisor comum (MDC) usando o algoritmo de Euclides
  private gcd(a: number, b: number): number {
    if (b === 0) {
      return a;
    }
    return this.gcd(b, a % b);
  }

  // Função para calcular o inverso multiplicativo usando o algoritmo estendido de Euclides
  private modInverse(a: number, m: number): number {
    let [oldR, r] = [a, m];
    let [oldS, s] = [1, 0];

    while (r !== 0) {
      const quotient = Math.floor(oldR / r);
      [oldR, r] = [r, oldR - quotient * r];
      [oldS, s] = [s, oldS - quotient * s];
    }

    // Garante que o resultado seja positivo
    return oldS < 0 ? oldS + m : oldS;
  }

  // Função para gerar um número primo aleatório
  private generateRandomPrime(): number {
    const isPrime = (num: number): boolean => {
      for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    };

    const randomInRange = (min: number, max: number): number => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let randomPrime = 0;
    while (true) {
      randomPrime = randomInRange(2, 100); // Defina o intervalo desejado para gerar números primos
      if (isPrime(randomPrime)) {
        break;
      }
    }

    return randomPrime;
  }

  // Função para gerar a chave pública
  private generatePublicKey(p: number, q: number): PublicKey {
    const n = p * q; // Calcula o módulo n
    const phi = (p - 1) * (q - 1); // Calcula a função totiente de Euler de n

    // Escolha um número inteiro e que seja coprimo com phi
    let e = 2;
    while (e < phi) {
      if (this.gcd(e, phi) === 1) {
        break;
      }
      e++;
    }

    return { e, n };
  }

  // Função para gerar a chave privada
  private generatePrivateKey(p: number, q: number, publicKey: PublicKey): PrivateKey {
    const { e, n } = publicKey;

    const phi = (p - 1) * (q - 1); // Calcula a função totiente de Euler de n

    // Calcula o inverso multiplicativo de e (chave pública) módulo phi
    const d = this.modInverse(e, phi);

    return { d, n };
  }

  // Método para gerar as chaves pública e privada
  public generateKeys(): Observable<{ publicKey: string; privateKey: string }> {
    return new Observable((observer: Observer<{ publicKey: string; privateKey: string }>) => {
      
      const p = this.generateRandomPrime(); // Número primo p
      const q = this.generateRandomPrime(); // Número primo q 
      const publicKey = this.generatePublicKey(p, q);
      const privateKey = this.generatePrivateKey(p, q, publicKey);

      // Codifica as chaves em formato Base64
      const publicKeyBase64 = btoa(JSON.stringify(publicKey));
      const privateKeyBase64 = btoa(JSON.stringify(privateKey));

      observer.next({ publicKey: publicKeyBase64, privateKey: privateKeyBase64 });
      observer.complete();
    });
  }

  // Método para ler as chaves de arquivos
  public readKeys(publicKeyFile: string, privateKeyFile: string): Observable<{ publicKey: string; privateKey: string }> {
    return new Observable((observer: Observer<{ publicKey: string; privateKey: string }>) => {
      const publicKeyBase64 = localStorage.getItem(publicKeyFile) as string;
      const privateKeyBase64 = localStorage.getItem(privateKeyFile) as string;

      observer.next({ publicKey: publicKeyBase64, privateKey: privateKeyBase64 });
      observer.complete();
    });
  }

  // Método para salvar as chaves em arquivos
  public saveKeys(
    publicKeyFile: string,
    privateKeyFile: string,
    publicKey: string,
    privateKey: string
  ): Observable<boolean> {
    return new Observable((observer: Observer<boolean>) => {
      localStorage.setItem(publicKeyFile, publicKey);
      localStorage.setItem(privateKeyFile, privateKey);

      observer.next(true);
      observer.complete();
    });
  }

  // Função para criptografar uma mensagem
  private encrypt(message: string, publicKey: PublicKey): string {
    const { e, n } = publicKey;
    let ciphertext = '';

    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);
      const encryptedCharCode = BigInt(charCode) ** BigInt(e) % BigInt(n);
      ciphertext += encryptedCharCode.toString() + ' ';
    }

    return ciphertext.trim();
  }

  // Função para descriptografar uma mensagem
  private decrypt(ciphertext: string, privateKey: PrivateKey): string {
    const { d, n } = privateKey;
    let plaintext = '';

    const encryptedChars = ciphertext.split(' ');
    for (let i = 0; i < encryptedChars.length; i++) {
      const encryptedCharCode = BigInt(encryptedChars[i]);
      const decryptedCharCode = encryptedCharCode ** BigInt(d) % BigInt(n);
      plaintext += String.fromCharCode(Number(decryptedCharCode));
    }

    return plaintext;
  }

  // Método para criptografar uma mensagem usando a chave pública
  public encryptMessage(message: string, publicKey: string): Observable<string> {
    return new Observable((observer: Observer<string>) => {
      const parsedPublicKey = JSON.parse(atob(publicKey)) as PublicKey;
      const ciphertext = this.encrypt(message, parsedPublicKey);

      observer.next(ciphertext);
      observer.complete();
    });
  }

  // Método para descriptografar uma mensagem usando a chave privada
  public decryptMessage(ciphertext: string, privateKey: string): Observable<string> {
    return new Observable((observer: Observer<string>) => {
      const parsedPrivateKey = JSON.parse(atob(privateKey)) as PrivateKey;
      const plaintext = this.decrypt(ciphertext, parsedPrivateKey);

      observer.next(plaintext);
      observer.complete();
    });
  }
}
