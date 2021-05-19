import {getRealm, initDB} from './Realm';
import {Alert} from 'react-native';

import moment from '../vendors/Moment';

export const saveEntry = async entry => {
  const realm = await getRealm();
  let data = {};

  try {
    /* const category = realm
    .objects('Category')
    .filtered('id == $0', entry.category.id['0']);*/
    realm.write(() => {
      data = {
        id: entry.id || Math.floor(Math.random() * 1000).toString(),
        amount: entry.amount || 0,
        entryAt: entry.entryAt || new Date(),
        address: entry.address,
        photo: entry.photo,
        latitude: entry.latitude,
        longitude: entry.longitude,
        description: entry.category.name,
        isInit: entry.isInit || false,
        category: entry.category,
      };

      realm.create('Entry', data, true);
    });

    console.log('saveEntry :: data:', JSON.stringify(data));
  } catch (error) {
    Alert.alert('Erro ao salvar os dados de lançamento');
    console.error('saveEntry :: error on save object:', JSON.stringify(data));
  }

  return data;
};

export const getEntries = async (days, category) => {
  let realm = await getRealm();

  realm = realm.objects('Entry');

  if (days > 0) {
    const date = moment().subtract(days, 'days').toDate();
    realm = realm.filtered('entryAt >= $0', date);
  }

  if (category && category.id) {
    realm = realm.filtered('category == $0', category);
  }

  const entries = realm.sorted('entryAt', true);

  console.log('entries::', JSON.stringify(entries));

  return entries;
};

export const deleteAll = async () => {
  const realm = await getRealm();

  try {
    realm.write(() => {
      realm.deleteAll();
    });
  } catch (error) {
    console.error('Erro ao deletar tudo');
  }
};

export const deleteEntry = async entry => {
  const realm = await getRealm();

  try {
    const entryRealmObject = realm
      .objects('Entry')
      .filtered('id == $0', entry.id)[0];
    realm.write(() => {
      realm.delete(entryRealmObject);
    });
  } catch (error) {
    console.error('Erro ao deletar');
  }
};
