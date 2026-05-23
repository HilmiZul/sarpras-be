/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1685436846")

  // remove field
  collection.fields.removeById("text3743039888")

  // remove field
  collection.fields.removeById("text1503646119")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1685436846")

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text3743039888",
    "max": 0,
    "min": 0,
    "name": "logo_sekolah",
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
    "id": "text1503646119",
    "max": 0,
    "min": 0,
    "name": "logo_provinsi",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
