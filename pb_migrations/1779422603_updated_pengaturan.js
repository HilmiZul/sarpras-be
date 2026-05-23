/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1685436846")

  // add field
  collection.fields.addAt(6, new Field({
    "help": "",
    "hidden": false,
    "id": "file3743039888",
    "maxSelect": 0,
    "maxSize": 0,
    "mimeTypes": null,
    "name": "logo_sekolah",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "help": "",
    "hidden": false,
    "id": "file1503646119",
    "maxSelect": 0,
    "maxSize": 0,
    "mimeTypes": null,
    "name": "logo_provinsi",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1685436846")

  // remove field
  collection.fields.removeById("file3743039888")

  // remove field
  collection.fields.removeById("file1503646119")

  return app.save(collection)
})
