import "./../App.css";

import Image from "./header";
// Function to record a transaction

function Transcation() {
  const transactionDetails = [
    {
      transno: 1010,
      date: "7 - 9 - 2023",
      type: "deposit",
      method: "billpay",
      amount: 1200,
      status: "pending",
    },
    {
      transno: 1011,
      date: "4 - 9 - 2023",
      type: "deposit",
      method: "billpay",
      amount: 1050,
      status: "pending",
    },
    {
      transno: 1012,
      date: "31 - 8 - 2023",
      type: "deposit",
      method: "billpay",
      amount: 1050,
      status: "sucess",
    },
    {
      transno: 1013,
      date: "28 - 8 - 2023",
      type: "deposit",
      method: "wire",
      amount: 100,
      status: "sucess",
    },
  ];
  // console.log(transactionDetails, "received");
  return (
    <div>
      <h2>Transaction List:</h2>
      <Image />
      <table className="pay_1" border={1}>
        <thead>
          <tr>
            <th className="pay_2">Transaction No</th>
            <th className="pay_2">Date</th>
            <th className="pay_2">Type</th>
            <th className="pay_2">Method</th>
            <th className="pay_2">Amount</th>
            <th className="pay_2">Status</th>
          </tr>
        </thead>
        {/* // function to map the transaction list */}
        <tbody>
          {transactionDetails.map((payments) => {
            return (
              <tr>
                <td className="pay_3">{payments.transno}</td>
                <td className="pay_3">{payments.date}</td>
                <td className="pay_3">{payments.type}</td>
                <td className="pay_3">{payments.method}</td>
                <td className="pay_3">{payments.amount}</td>
                <td className="pay_3">{payments.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Transcation;
