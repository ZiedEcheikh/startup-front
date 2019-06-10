/**
 * @author  Zied ECHEIKH
 * @since   18/12/2017
 * @version 1.0
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { RestConfig } from './rest.config';
import { RequestMethod } from './request-method.enum';
import { RequestOptions } from './request-options';

@Injectable()
export class RestApiService {

    private Http: HttpClient;
    private urlRoot: String;

    constructor(Http: HttpClient) {
        this.Http = Http;
        this.urlRoot = RestConfig.REST_API_HOST;
    }

    private _createAuthHeaders(): HttpHeaders {
        let headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        /*if(this.userService.user) {
            headers.set('Authorization', this.identityService.user.token);
        }*/

        return headers;
    }

    public get(url: string, options?: RequestOptions) {
        return this._request(RequestMethod.Get, url, null, options);
    }

    public post(url: string, body: Object, options?: RequestOptions) {
        return this._request(RequestMethod.Post, url, body, options);
    }

    public put(url: string, body: Object, options?: RequestOptions) {
        return this._request(RequestMethod.Put, url, body, options);
    }

    public delete(url: string, options?: RequestOptions) {
        return this._request(RequestMethod.Delete, url, null, options);
    }

    private _request(method: RequestMethod, relativeUrl: string, body?: Object, options?: RequestOptions): Observable<any> {
        let url = this.urlRoot + relativeUrl;
        let requestOptions = new RequestOptions(body, this._createAuthHeaders());
        return this.Http.request(new HttpRequest(method.toString(), url, requestOptions));
    }
}
