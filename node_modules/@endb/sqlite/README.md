# `@endb/sqlite`

> SQLite adapter for [Endb](https://github.com/chroventer/endb)

## Installation

```shell
npm install @endb/sqlite
```

## Usage

```javascript
const Endb = require('endb');
const endb = new Endb('sqlite://path/to/database.sqlite');
```

```javascript
const EndbSqlite = require('@endb/sqlite');

const store = new EndbSqlite({
  uri: 'sqlite://path/to/database.sqlite',
  table: 'cache',
  busyTimeout: 10000,
});
const endb = new Endb({ store });
```
