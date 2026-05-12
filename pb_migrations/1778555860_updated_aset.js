/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183783002")

  // remove field
  collection.fields.removeById("text2488178339")

  // remove field
  collection.fields.removeById("text1283225270")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183783002")

  // add field
  collection.fields.addAt(17, new Field({
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
  collection.fields.addAt(18, new Field({
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
})
