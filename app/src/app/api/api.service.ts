import {Injectable} from '@angular/core';
import {AuthHttpService} from './authorized-http.service';

@Injectable()
export class ApiService {

  protected apiEndpoint = process.env.data.apiEndpoint;

  constructor (protected http: AuthHttpService) {}
}
