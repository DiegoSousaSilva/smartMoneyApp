import {useEffect, useState} from 'react';

import {
  getAllCategories,
  getCreditCategories,
  getDebitCategories,
  getInitCategories,
} from '../services/Categories';

const useCategories = () => {
  const [debitCategories, setDebitCategories] = useState();
  const [creditCategories, setCreditCategories] = useState();
  const [initCategory, setInitCategory] = useState();
  const [allCategories, setAllCategories] = useState();

  useEffect(() => {
    const loadDebitCategories = async () => {
      const data = await getDebitCategories();
      setDebitCategories(data);
    };

    const loadCreditCategories = async () => {
      const data = await getCreditCategories();
      setCreditCategories(data);
    };

    const loadAllCategories = async () => {
      const data = await getAllCategories();
      setAllCategories(data);
    };

    const loadInitCategory = async () => {
      const data = await getInitCategories();
      setInitCategory(data['0']);
    };

    loadDebitCategories();
    loadCreditCategories();
    loadAllCategories();
    loadInitCategory();
  }, []);

  return [debitCategories, creditCategories, allCategories, initCategory];
};

export default useCategories;
