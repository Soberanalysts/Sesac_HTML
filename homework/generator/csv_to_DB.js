// const fs = require('fs');
// const sqlite3 = require('sqlite3');
// const db = new sqlite3.Database('database.db');

// const csv = require('csv-parser');


// fs.createReadStream('temp.csv')
//   .pipe(csv())
//   .on('data', (row) => {
//     connection.query(
//       'INSERT INTO Users (id, title, content) VALUES (?, ?, ?)',
//       [row.id, row.title, row.content],
//       (err, results) => {
//         if (err) console.error(err);
//         else console.log('Inserted:', results.insertId);
//       }
//     );
//   })
//   .on('end', () => {
//     console.log('CSV file successfully processed');
//     connection.end();
//   });

// Parse CSV data
// const rows = csv.trim().split('\n');
// const headers = rows[0].split(',');
// const data = rows.slice(1).map(row => {
//   const values = row.split(',');
//   return {
//     id: Number(values[0]),
//     title: values[1],
//     content: values.slice(2).join(',').replace(/"/g, '').trim() // Handle commas within content
//   };
// });

// // Create the table if it doesn't exist
// db.run(
//   `CREATE TABLE IF NOT EXISTS Users (
//     id INTEGER PRIMARY KEY,
//     title TEXT,
//     content TEXT
//   )`,
//   (err) => {
//     if (err) {
//       console.error('Error creating table:', err.message);
//       return;
//     }

//     // Insert data into the table
//     const insertQuery = `INSERT INTO Users (id, title, content) VALUES (?, ?, ?)`;
//     const stmt = db.prepare(insertQuery);

//     data.forEach(user => {
//       stmt.run([user.id, user.title, user.content], (err) => {
//         if (err) {
//           console.error('Error inserting data:', err.message);
//         }
//       });
//     });

//     stmt.finalize();

//     console.log('Data successfully inserted into the SQLite database.');
//   }
// );

// // Close the database connection
// db.close((err) => {
//   if (err) {
//     console.error('Error closing database:', err.message);
//   } else {
//     console.log('Database connection closed.');
//   }
// });

const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

// Read CSV file
const csvFilePath = path.join(__dirname, 'temp.csv');
const csvData = fs.readFileSync(csvFilePath, 'utf-8');

// Parse CSV data
const rows = csvData.trim().split('\n');
const headers = rows[0].split(',');
const data = rows.slice(1).map(row => {
  const values = row.split(',');
  return {
    id: Number(values[0]),
    title: values[1],
    content: values.slice(2).join(',').replace(/"/g, '').trim() // Handle commas within content
  };
});

// Open SQLite database (creates it if it doesn't exist)
const db = new sqlite3.Database('./database.db');

// Create the table if it doesn't exist
db.run(
  `CREATE TABLE IF NOT EXISTS Users (
    id INTEGER PRIMARY KEY,
    title TEXT,
    content TEXT
  )`,
  (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
      return;
    }

    // Insert data into the table
    const insertQuery = `INSERT INTO Users (id, title, content) VALUES (?, ?, ?)`;
    const stmt = db.prepare(insertQuery);

    data.forEach(user => {
      stmt.run([user.id, user.title, user.content], (err) => {
        if (err) {
          console.error('Error inserting data:', err.message);
        }
      });
    });

    stmt.finalize();

    console.log('Data successfully inserted into the SQLite database.');
  }
);

// Close the database connection
db.close((err) => {
  if (err) {
    console.error('Error closing database:', err.message);
  } else {
    console.log('Database connection closed.');
  }
});