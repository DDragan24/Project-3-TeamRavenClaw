/*csvtojson = fromFile('https://raw.githubusercontent.com/DDragan24/Project-3-TeamRavenClaw/main/Resources/DPIC%20Execution%20Database%20-%20U.S.%20Executions.csv')
.then((jsonOBJ) => {
    console.log(jsonObj);
});*/
var inmateData = require('node.js')
inmateData()
  .fromFile('https://raw.githubusercontent.com/DDragan24/Project-3-TeamRavenClaw/main/Resources/DPIC%20Execution%20Database%20-%20U.S.%20Executions.csv')  // Specify the path to your CSV file
  .then((jsonObj) => {
    fs.writeFileSync('node.js', JSON.stringify(jsonObj, null, 2));
    console.log('Conversion completed. JSON data saved to output.json');
  })
  .catch((err) => {
    console.error('An error occurred:', err);
  });