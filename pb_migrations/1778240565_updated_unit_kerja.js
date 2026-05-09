/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4057257552")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_oq2x8i83bk` ON `unit_kerja` (`jabatan_unit_kerja`)"
    ]
  }, collection)

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text2548240273",
    "max": 0,
    "min": 0,
    "name": "jabatan_unit_kerja",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4057257552")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  // remove field
  collection.fields.removeById("text2548240273")

  return app.save(collection)
})
