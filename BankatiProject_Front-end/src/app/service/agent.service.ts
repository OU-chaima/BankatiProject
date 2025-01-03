
// import { CookieService } from './cookie.service';

import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {catchError, Observable, throwError} from "rxjs";
import {IAgent} from "../models/Agent";
import {Operation} from "../client/models/operation";
import {IClient} from "../models/Client";
import {IAgentServices} from "../models/AgentServices";


@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private serverUrl = `http://localhost:8010/api/v1/users`;


  private authorization = this.cookieService.get('Authorization');

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
  }

  public createClient(clientRegisterRequest: IClient): Observable<IClient> {

    const dataUrl = `${this.serverUrl}/client`;
    return this.httpClient.post<IClient>(dataUrl, clientRegisterRequest)
      .pipe(catchError(this.handleError));
  }


  public getAllClients(): Observable<IClient[]> {

    const dataUrl = `${this.serverUrl}/client/allClients`;

    return this.httpClient.get<IClient[]>(dataUrl, ).pipe(catchError(this.handleError));
  }
  //const dataUrl = `${this.serverUrl}/listByAgent/${idAgent}`;
  //console.log(this.authorization);
/*
  public getAllClientsByAgentId(idagent: number): Observable<IClient[]> {

    const dataUrl = `${this.serverUrl}/listByAgent/${idagent}`;
    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpClient.get<IClient[]>(dataUrl, {headers}).pipe(catchError(this.handleError));
  }

  */



  public deleteClient(id: number): Observable<{}> {


    const dataUrl = `${this.serverUrl}/client/${id}`;
    console.log("URL de suppression:", dataUrl);
    return this.httpClient.delete<{}>(dataUrl).pipe(catchError(this.handleError));

  }
  public viewDetailsClient(id: number): Observable<{}> {


    const dataUrl = `${this.serverUrl}/client/${id}`;
    console.log("URL de suppression:", dataUrl);
    return this.httpClient.delete<{}>(dataUrl).pipe(catchError(this.handleError));

  }



  public getClient(id: string): Observable<IClient> {
    const headers = {
      'Authorization': `${this.authorization}`
    };
    const dataUrl = `${this.serverUrl}/client/${id}`;
    return this.httpClient.get<IClient>(dataUrl, {headers}).pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client error
      errorMessage = `Error : ${error.error.message}`;
    } else {
      // server error
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }


  getAgentById(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.serverUrl}/client/${id}`);
  }

  getAgentOperation(id: number): Observable<Operation[]> {
    const dataUrl = `${this.serverUrl}/operations/${id}`;
    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpClient.get<Operation[]>(dataUrl, {headers}).pipe(catchError(this.handleError));
  }

  updateClient(id: string, client:  IClient): Observable<IClient>  {
    return this.httpClient.put<any>(`${this.serverUrl}/client/${id}`, client);


  }

  public createService(client: IAgentServices, id: number): Observable<IAgentServices> {
    const headers = {
      'Authorization': `${this.authorization}`
    };
    //const dataUrl = `${this.serverUrl}/services/${id}`;
    const dataUrl = `${this.serverUrl}/service/123`;
    return this.httpClient.post<IAgentServices>(dataUrl, client, {headers}).pipe(catchError(this.handleError));
  }


  public getAllAgentServices(): Observable<IAgentServices[]> {
    //const dataUrl = `${this.serverUrl}/serviceByAgent/${idAgent}`;
    const dataUrl = `${this.serverUrl}/serviceByAgent/123`;

    const headers = {
      'Authorization': `${this.authorization}`
    };

    return this.httpClient.get<IAgentServices[]>(dataUrl, {headers}).pipe(catchError(this.handleError));
  }

  public deleteService(serviceId: number): Observable<HttpResponse<{}>> {
    const headers = {
      'Authorization': `${this.authorization}`
    };
    const dataUrl = `${this.serverUrl}/service/delete/${serviceId}`;
    return this.httpClient.delete<HttpResponse<{}>>(dataUrl, {headers}).pipe(catchError(this.handleError));
  }

  public updateService(service: IAgentServices, serviceId: number): Observable<IAgentServices> {

    const headers = {
      'Authorization': `${this.authorization}`
    };
    const dataUrl = `${this.serverUrl}/service/update/${serviceId}`;
    return this.httpClient.put<IAgentServices>(dataUrl, service, {headers}).pipe(catchError(this.handleError));
  }


  public getService(serviceId: number): Observable<IAgentServices> {
    const headers = {
      'Authorization': `${this.authorization}`
    };
    //const dataUrl = `${this.serverUrl}/serviceByAgent/${serviceId}`;
    const dataUrl = `${this.serverUrl}/serviceByAgent/123}`;
    return this.httpClient.get<IAgentServices>(dataUrl, {headers}).pipe(catchError(this.handleError));
  }

  getAgentByPhoneNumber(phoneNum: string) {
    return

  }
}
