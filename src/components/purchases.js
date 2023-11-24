// Function to make a payment

import Image from "./home";

function Purchase() {
  const onlinePurchase = [
    {
      type: "shopping",
      id: "1011",
      quantity: "2",
      amount: "1000/-",
    },
    {
      type: "shoes",
      id: "1012",
      quantity: "1",
      amount: "2000/-",
    },
    {
      type: "Books",
      id: "1013",
      quantity: "1",
      amount: "500/-",
    },
  ];
  // console.log(transactionDetails, "received");
  return (
    <div>
      <h2>Online Purchases:</h2>
      <Image />
      <table className="pay_1" border={1}>
        <thead>
          <tr>
            <th className="pay_2">Type</th>
            <th className="pay_2">ID</th>
            <th className="pay_2">Quantity</th>
            <th className="pay_2">Amount</th>
          </tr>
        </thead>
        {/* // function to map the transaction list */}
        <tbody>
          {onlinePurchase.map((pay) => {
            return (
              <tr>
                <td className="pay_3">{pay.type}</td>
                <td className="pay_3">{pay.id}</td>
                <td className="pay_3">{pay.quantity}</td>
                <td className="pay_3">{pay.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// console.log("Making a Payment of 500:", makePayment(500));

export default Purchase;
