const express = require('express');
const os = require('os');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const startTime = Date.now();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/status', (req, res) => {
  const uptimeSeconds = Math.floor((Date.now() - startTime) / 1000);
  res.json({
    status: 'ONLINE',
    environment: process.env.DEPLOY_ENV || 'UserLAnd Mobile Server',
    hostname: os.hostname(),
    platform: `${os.platform()} (${os.arch()})`,
    nodeVersion: process.version,
    uptimeSeconds,
    memoryMB: Math.round(process.memoryUsage().rss / 1024 / 1024),
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server live at http://0.0.0.0:${PORT}`);
});
