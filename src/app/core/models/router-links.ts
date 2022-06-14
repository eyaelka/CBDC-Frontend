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
  linkDefineRegulationLocalTransfer= "http://localhost:10050/politique/createtxregulationlocal";
  linkDefineRegulationTransferAbroad= "http://localhost:10050/politique/createtxregulationinterpays";
  linkGetLastMoneyRegulation = "http://localhost:10050/politique/regulationmassemonnetaire";
  linkGetLastDeviseRegulation ="http://localhost:10050/politique/regulationdevise" ;
  linkGetLastLocalTxRegulation ="http://localhost:10050/politique/txregulationlocal";
  linkGetLastInterpaysTxRegulation ="http://localhost:10050/politique/txregulationinterpays";
  linkGetAllCommercialBanks = "http://localhost:10050/getAllCommercialBanks";
  linkGetCurrentBalance = "http://localhost:10050/getCurrentBalance";
  linkCreateMoney = "http://localhost:10050/createmoney";
  linkSendMoney = "http://localhost:10050/interbanktransaction";
  linkGetAllMoneySentBySender = "http://localhost:10050/getAllTx";
  linkGetAllDatesMoneySentBySender = "http://localhost:10050/getAllTxDates";
  linkGetAllTxBySender = "http://localhost:10050/getAllTxByCentralBank"



  //Commercial Bank Link
  linkAddCommercialBank = "http://localhost:10051/commercialbank/create";
  linkUpdateCommercialBank = "http://localhost:10051/commercialbank/update";
  linkDeactivateCommercialBank = "http://localhost:10051/commercialbank/deleteoractiveorswithacountytype";
  linkCommercialBankLoginPath = "http://localhost:10051/login"


}
