const fs = require('fs');

const service_account = process.env.SERVICE_ACCOUNT_KEY;
const service_account_json = JSON.stringify(service_account);

fs.writeFile('key.json', service_account_json, (error) => {
  if (error) throw error;

  console.log('Written JSON File', Object.keys(service_account_json));
});

