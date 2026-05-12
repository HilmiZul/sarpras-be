/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_tokenKey__pb_users_auth_` ON `users` (`tokenKey`)",
      "CREATE UNIQUE INDEX `idx_email__pb_users_auth_` ON `users` (`email`) WHERE `email` != ''",
      "CREATE UNIQUE INDEX `idx_7e6o5damm5` ON `users` (`username`)",
      "CREATE INDEX `idx_yt1b2p8ty9` ON `users` (`role`)",
      "CREATE INDEX `idx_hfwerx0srw` ON `users` (`unit_kerja`)"
    ]
  }, collection)

  // update field
  collection.fields.addAt(9, new Field({
    "help": "",
    "hidden": false,
    "id": "select1466534506",
    "maxSelect": 0,
    "name": "role",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "sarpras",
      "unit",
      "pimpinan"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_tokenKey__pb_users_auth_` ON `users` (`tokenKey`)",
      "CREATE UNIQUE INDEX `idx_email__pb_users_auth_` ON `users` (`email`) WHERE `email` != ''",
      "CREATE UNIQUE INDEX `idx_7e6o5damm5` ON `users` (`username`)"
    ]
  }, collection)

  // update field
  collection.fields.addAt(9, new Field({
    "help": "",
    "hidden": false,
    "id": "select1466534506",
    "maxSelect": 0,
    "name": "role",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "sarpras",
      "unit"
    ]
  }))

  return app.save(collection)
})
