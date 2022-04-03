import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({
  name: 'rn_sqlite',
  location: 'Documents',
});

export const createTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS vault (id INTEGER PRIMARY KEY AUTOINCREMENT, note VARCHAR(255), email VARCHAR(255), password VARCHAR(255))`,
      [],
      (sqlTxn, res) => {},
      error => {},
    );
  });
};

export const InsertData = (app_name, app_email, password) => {
  db.transaction(txn => {
    txn.executeSql(
      'INSERT INTO vault (note,email,password) VALUES (?,?,?)',
      [app_name, app_email, password],
      (sqlTxn, res) => {},
      error => {},
    );
  });
};

export const showData = setArr => {
  db.transaction(txn => {
    txn.executeSql(
      'select * from vault order by id desc',
      [],
      (sqlTxn, res) => {
        let len = res.rows.length;

        if (len > 0) {
          let results = [];
          for (let i = 0; i < len; i++) {
            let item = res.rows.item(i);
            results.push({
              id: item.id,
              note: item.note,
              email: item.email,
              password: item.password,
            });
          }
          setArr(results);
        }
      },
      error => {},
    );
  });
};

export const DeleteData = id => {
  db.transaction(async tx => {
    tx.executeSql('DELETE FROM vault' + ' WHERE ID = ?', [id]);
  });
};
