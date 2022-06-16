export class MyRouterLink{
  //User Link
  linkSendEmailVerificationToUser = "http://localhost:10053/enduser/sendcodeverification";
  linkUserNotifyAdmin = "http://localhost:10053/enduser/notifyAdmin";
  linkUserUpdate ="http://localhost:10053/enduser/update";
  linkDesactivateUser = "http://localhost:10053/enduser/deleteoractiveorswithacountytype";

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
  linkGetCurrentBalance = "http://localhost:10050/CurrentBalance";
  linkCreateMoney = "http://localhost:10050/createmoney";
  linkSendMoney = "http://localhost:10050/interbanktransaction";
  linkGetAllMoneySentBySender = "http://localhost:10050/getAllTx";
  linkGetAllDatesMoneySentBySender = "http://localhost:10050/getAllTxDates";
  linkGetAllTxBySender = "http://localhost:10050/getAllTxByCentralBank";
  linkSentRecieveBalance = "http://localhost:10050/allUpdatesBalance";



  //Commercial Bank Link
  linkAddCommercialBank = "http://localhost:10051/commercialbank/create";
  linkUpdateCommercialBank = "http://localhost:10051/commercialbank/update";
  linkDeactivateCommercialBank = "http://localhost:10051/commercialbank/deleteoractiveorswithacountytype";
  linkCommercialBankLoginPath = "http://localhost:10051/login"
  linkGetAllUsers = "http://localhost:10051/getAllUsers";
  linkGetLastInterpaysTxRegulationBSR ="http://localhost:10051/politique/txregulationinterpays";
  linkGetLastLocalTxRegulationBSR ="http://localhost:10051/politique/txregulationlocal";
  linkGetLastDeviseRegulationBSR ="http://localhost:10051/politique/regulationdevise" ;
  linkGetLastMoneyRegulationBSR = "http://localhost:10051/politique/regulationmassemonnetaire";
  linkSentRecieveBalanceBSR = "http://localhost:10051/allUpdatesBalance";
  linkGetCurrentBalanceBSR = "http://localhost:10051/CurrentBalance";
  linkGetAllMoneySentBySenderBSR = "http://localhost:10051/getAllTx";
  linkGetAllTxBySenderBSR = "http://localhost:10051/getAllTxByCommercialBank";
  linkSendMoneyBSR = "http://localhost:10051/interbanktransaction";












}
