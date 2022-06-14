export class TransactionInterbancaire{
  accountSender?: string;
  defaultAmount?: number;
  currentAmount?: number;
  amountToTransfert?: number;
  accountReceiver?: number;
  motifTransaction?: string;
  pays?: string;
  appFees?: number;
  centralBankFees?: number;
  date?: string;
  nameDevise?: string;
}
