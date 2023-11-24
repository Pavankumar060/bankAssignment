import Header from "./header";

const Account = () => {
  return (
    <div>
      <Header />
      <h1>AccountNumber: 1236549872</h1>
      <h1>Account Balance: 10,000</h1>
    </div>
  );
  // return [account.balance, account.AccountNumber, account.transactions];
};

// Example usage:
console.log("Account Balance:", Account());
console.log("Account Balance after Payment:", Account());

export default Account;
