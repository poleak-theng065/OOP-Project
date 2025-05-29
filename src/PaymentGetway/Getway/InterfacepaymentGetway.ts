
export interface IPaymentGateway {
  process(amount: number): Promise<string>;  
  refund(transactionId: string): Promise<boolean>;
}
