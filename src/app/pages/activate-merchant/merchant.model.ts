import {MerchantData } from '../../core/models/merchant-data.model';


export class MerchantAccountInfo{
  merchantData: MerchantData;
  accountType:string;
  bankIndcation:string;
  suspend?:boolean;
}
