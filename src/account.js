// Sample user account with initial balance
// let account = {
//   AccountNumber: 1236549872,
//   balance: 1000,
//   transactions: [],
// };
import Header from "./header";
// Function to check account balance
function Account() {
  return (
    <div>
      <Header />
      <h1>AccountNumber: 1236549872</h1>
      <h1>Account Balance: 10,000</h1>
    </div>
  );
  // return [account.balance, account.AccountNumber, account.transactions];
}

// Example usage:
console.log("Account Balance:", Account());
console.log("Account Balance after Payment:", Account());

export default Account;
