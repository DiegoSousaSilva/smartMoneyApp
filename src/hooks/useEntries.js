import {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {getEntries, saveEntry, deleteEntry} from '../services/Entries';

const useEntries = (days, category) => {
  const [entries, setEntries] = useState();

  useFocusEffect(
    useCallback(() => {
      const loadEntries = async () => {
        const data = await getEntries(days, category);
        setEntries(data);
      };

      loadEntries();
    }, [category, days]),
  );

  return [entries, saveEntry, deleteEntry];
};

export default useEntries;
