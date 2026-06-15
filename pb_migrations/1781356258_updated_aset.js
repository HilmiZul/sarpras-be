/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183783002")

  // add field
  collection.fields.addAt(25, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text537050449",
    "max": 0,
    "min": 0,
    "name": "catatan_isu",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183783002")

  // remove field
  collection.fields.removeById("text537050449")

  return app.save(collection)
})
