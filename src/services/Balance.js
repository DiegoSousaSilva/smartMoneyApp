import {getRealm} from './Realm';

export const getBalance = async () => {
  const realm = await getRealm();

  const entries = realm.objects('Entry');

  let entriesJSON = entries.sorted('entryAt', true).toJSON();

  let amounts = entriesJSON.map(entry => {
    let amount = entry.amount;
    return amount;
  });

  let sumTotal = amounts.reduce(function (total, amount) {
    return total + amount;
  }, 0);

  console.log(`Balance :: entries/amount : ${sumTotal}`);

  return sumTotal;
};
