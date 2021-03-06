import Realm from 'realm';
import CategorySchema from '../schemas/CategorySchema';
import EntrySchema from '../schemas/EntrySchema';
import {getDefaultCategories} from './Categories';
import {cleanInitialized} from './Welcome';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 1,
  });

  //dropDB();
  //cleanInitialized();
  initDB(realm);

  return realm;
};

export const initDB = realm => {
  const categoriesLength = realm.objects('Category').length;

  console.log(` initDB:: categories length: ${categoriesLength}`);

  if (categoriesLength === 0) {
    const categories = getDefaultCategories();

    console.log('initDB :: initing db ...');

    try {
      realm.write(() => {
        categories.forEach(category => {
          console.log(
            `initDB:: creating category: ${JSON.stringify(category)}`,
          );

          realm.create('Category', category, true);
        });
      });

      console.log(`initDB :: Categories from db: ${realm.objects('Category')}`);
    } catch (error) {}
  } else {
    console.log('initDB:: categories already existing...');
  }
};

const dropDB = realm => {
  realm.write(() => {
    realm.deleteAll();
  });
};
