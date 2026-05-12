/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1267859157")

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text2488178339",
    "max": 0,
    "min": 0,
    "name": "kodering_aset",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text1283225270",
    "max": 0,
    "min": 0,
    "name": "nama_rekening_aset",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1267859157")

  // remove field
  collection.fields.removeById("text2488178339")

  // remove field
  collection.fields.removeById("text1283225270")

  return app.save(collection)
})
