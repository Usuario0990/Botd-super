const express = require('express')
const server = express();
 
server.all('/', (req, res) => {
    res.send('✅ Bot ChickBot Activado ✅');
});
 
function keepAlive() {
   server.listen(3000, () => { console.log("ChickBot Activo") });
}

module.exports = keepAlive;