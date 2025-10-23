const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use('/', routes);

app.get('/healthz', (req, res) => res.json({ ok: true, ts: Date.now() }));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'internal_server_error' });
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`✅ Server running on port ${port}`));
}

module.exports = app;
