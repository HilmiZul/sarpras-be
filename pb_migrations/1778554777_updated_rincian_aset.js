/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1267859157")

  // remove field
  collection.fields.removeById("text1055381724")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1267859157")

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text1055381724",
    "max": 0,
    "min": 0,
    "name": "merek",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
