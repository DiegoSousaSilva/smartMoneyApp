import {useState, useEffect} from 'react';

import {getBalanceSumByCategory} from '../services/Balance';

const useBalanceSumByCategory = (days = 30) => {
  const [balanceSum, setBalanceSum] = useState([]);

  useEffect(() => {
    async function loadBalanceSumByCategory() {
      const data = await getBalanceSumByCategory(days);
      setBalanceSum([...data]);
    }

    loadBalanceSumByCategory();
  }, [days]);

  return [balanceSum];
};

export default useBalanceSumByCategory;
