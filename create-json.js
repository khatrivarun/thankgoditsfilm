const fs = require('fs');
require('dotenv').config();

const service_account = process.env.SERVICE_ACCOUNT_KEY;
const service_account_json = JSON.stringify(service_account);

console.log(service_account_json);

fs.writeFile('key.json', service_account_json, (error) => {
  if (error) throw error;

  console.log('Written JSON File');
});

