import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import { Operation } from '../models/operation';
import { Client } from '../models/client';
import { Wallet } from '../models/wallet';
import { Transaction } from '../models/transaction';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private serverUrl: string = `http://localhost:8222/api/v1/users`;
  private authorization = this.cookieService.get('Authorization');

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }


  public getAgentServiceById(agentId : string): Observable<any> {
    let dataUrl: string = `${this.serverUrl}/serviceByAgent/675d6abc98a04453154ddc30`;
    return this.httpClient.get(dataUrl).pipe(catchError(this.handleError));
  }


  public getClientById(clientId : number): Observable<any> {
    let dataUrl: string = `${this.serverUrl}/Profile/${clientId}`;
    console.log(this.authorization);

    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpClient.get(dataUrl, { headers }).pipe(catchError(this.handleError));
  }


  public getPaymentAccountByClientId(clientId : number): Observable<any> {
    const dataUrl: string = `${this.serverUrl}/PaymentAccount/${clientId}`;
    console.log(this.authorization);

    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpClient.get(dataUrl, { headers }).pipe(catchError(this.handleError));
  }


  getClientByPhoneNumber(phoneNumber: String): Observable<any> {
    let dataUrl: string = `${this.serverUrl}/Profile/Phone/${phoneNumber}`;
    console.log(this.authorization);

    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpClient.get(dataUrl, { headers }).pipe(catchError(this.handleError));
  }


  getClientOperation(phoneNumber: string): Observable<Operation[]> {
    let dataUrl: string = `${this.serverUrl}/history/${phoneNumber}`;
    console.log(this.authorization);

    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpClient.get<Operation[]>(dataUrl, { headers }).pipe(catchError(this.handleError));
  }

  //Error Handling
  public handleError(error: HttpErrorResponse){
    let errorMessage: string = '';
    if(error.error instanceof ErrorEvent) {
      // client error
      errorMessage = `Error : ${error.error.message}`
    } else {
      // server error
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`
    }
    return throwError(errorMessage);
  }
  
//kaoutar
   getClientById(clientId: string): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/clientbyid/${clientId}`);
  }

  getWalletByClientId(clientId: string): Observable<Wallet> {
    return this.http.get<Wallet>(`${this.apiUrl}/wallet/${clientId}`);
  }
  getTransactionsByUserId(userId: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/transactions/${userId}`);
  }

  getAllTransactionsByUserId(userId: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/all-transactions/${userId}`);
  }

  feedWallet(clientId: string, amount: number): Observable<boolean> {
    const body = { clientId, amount };
    return this.http.post<boolean>(`${this.apiUrl}/feed-wallet`, body);
  }


}
