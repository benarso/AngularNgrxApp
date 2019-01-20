import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoginCredentials} from '../models/login-credentials';
import {AuthenticatedResponse} from '../models/authenticated-response';

@Injectable({
    providedIn: 'root'
})
export abstract class AuthService {

    protected constructor(protected http: HttpClient) {
    }

    abstract authenticate(credentials: LoginCredentials): Observable<AuthenticatedResponse>;
}
