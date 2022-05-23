export class MyRouterLink{
  //User Link
  linkSendEmailVerificationToUser = "http://localhost:10053/enduser/sendcodeverification";
  linkUserNotifyAdmin = "http://localhost:10053/enduser/notifyAdmin"; ;

  //Merchant Link
  linkSendEmailVerificationToMerchant = "http://localhost:10054/merchant/sendcodeverification";
  linkAddMerchant = "http://localhost:10054/merchant/create";
  linkNotifyAdmin = "http://localhost:10054/merchant/notifyAdmin";
  linkCreateMerchant = "http://localhost:10054/merchant/create";

  //CentralBank Link
  linkAddCentralBank = "http://localhost:10050/centralbank/save";
  linkCentralBankLoginPath = "http://localhost:10050/login";
  linkDefineRegulationMoney ="http://localhost:10050/politique/createmassemonnetaire";
  linkDefineRegulationDevise ="http://localhost:10050/politique/createdeviseregulation";


  //Commercial Bank Link
  linkAddCommercialBank = "http://localhost:10051/commercialbank/create";
  linkUpdateCommercialBank = "http://localhost:10051/commercialbank/update";
  linkDeactivateCommercialBank = "http://localhost:10051/commercialbank/deleteoractiveorswithacountytype";
  linkCommercialBankLoginPath = "http://localhost:10051/login"


}
