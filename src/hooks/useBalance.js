import {useEffect, useState} from 'react';

import {getBalance} from '../services/Balance';

const useBalance = () => {
  const [balance, setBalance] = useState();

  useEffect(() => {
    async function loadBalance() {
      const value = await getBalance();
      setBalance(value);
    }

    loadBalance();
  }, [balance]);

  console.log(` useBalance :: balance: ${balance}`);
  return [balance];
};

export default useBalance;
