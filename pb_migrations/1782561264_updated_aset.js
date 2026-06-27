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

  // add field
  collection.fields.addAt(26, new Field({
    "help": "",
    "hidden": false,
    "id": "file1973200335",
    "maxSelect": 0,
    "maxSize": 0,
    "mimeTypes": null,
    "name": "foto_isu",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183783002")

  // remove field
  collection.fields.removeById("text537050449")

  // remove field
  collection.fields.removeById("file1973200335")

  return app.save(collection)
})
