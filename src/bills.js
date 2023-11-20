// Function to view transaction history
// let account = {
//   balance: 1000,
//   transactions: [],
// };
import Image from "./header";
import "./App.css";

function Bills() {
  const billPay = [
    {
      type: "Clothing",
      price: "1550/-",
      quantity: "2",
      total: "3100/-",
    },
    {
      type: "pizza",
      price: "700/-",
      quantity: "1",
      total: "700/-",
    },
    {
      type: "Books",
      price: "500/-",
      quantity: "2",
      total: "1000/-",
    },
    {
      type: "Electricity",
      price: "1000/-",
      total: "1000/-",
    },
  ];
  console.log("Received", billPay);
  return (
    <div>
      <h2>Bills:</h2>
      <Image />
      <table className="pay_1" border={1}>
        <thead>
          <tr>
            <th className="pay_2">Type</th>
            <th className="pay_2">Price</th>
            <th className="pay_2">Quantity</th>
            <th className="pay_2">Total</th>
          </tr>
        </thead>
        {/* // function to map the transaction list */}
        <tbody>
          {billPay.map((billpayment) => {
            return (
              <tr>
                <td className="pay_2">{billpayment.type}</td>
                <td className="pay_2">{billpayment.price}</td>
                <td className="pay_2">{billpayment.quantity}</td>
                <td className="pay_2">{billpayment.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Bills;
