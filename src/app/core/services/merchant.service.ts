import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/auth.models';

@Injectable({ providedIn: 'root' })
export class MerchantProfileService{
  constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/api/login`);
    }

    register(merchant: User) {
        return this.http.post(`/merchant/register`, merchant);
    }

}
