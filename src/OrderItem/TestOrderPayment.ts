import { ABA } from '../PaymentGetway/Getway/ABA';
import { PayPal } from '../PaymentGetway/Getway/Papal';
import { ACLEDA } from '../PaymentGetway/Getway/Acilida';
import { PaymentService } from '../PaymentGetway/service/PaymentService';
import { Order } from './OrderItem';
import { PaymentMethod } from '../PaymentGetway/Enum/PaymentMethod';


    // choose gateway dynamically
function getGateway(method: PaymentMethod) {
  // The case keyword is part of the switch statement. It allows you to execute different blocks of code depending on the value of a variable.
  // Uses case to pick the correct gateway.
  //  The switch statement evaluates a value or expression, and executes code based on which case matches.
  switch (method) {
    case PaymentMethod.ABA: return new ABA();
    case PaymentMethod.PAYPAL: return new PayPal();
    case PaymentMethod.ACLEDA: return new ACLEDA();
    default: throw new Error('Unsupported payment method');
  }
}

const method = PaymentMethod.PAYPAL;
const gateway = getGateway(method);
const service = new PaymentService(gateway);
console.log(gateway);


const order = new Order("order_001", 99.99);
service.checkout(order).then(result => {
  console.log("Order Status:", result.status);
  console.log("Transaction ID:", result.transactionId);
});
// test run it
//ts-node ./src/OrderItem/TestOrderPayment.ts