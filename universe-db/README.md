# universe-db

## Usage

```
const setupDatabase = require('universe-db')

setupDatabase(config)
  .then(db => {
      const { Agent, Metric } = db
  })
  .cath(err => console.error(err))
```
