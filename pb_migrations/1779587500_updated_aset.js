/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183783002")

  // update field
  collection.fields.addAt(21, new Field({
    "help": "",
    "hidden": false,
    "id": "file3287711876",
    "maxSelect": 0,
    "maxSize": 0,
    "mimeTypes": [
      "image/jpeg",
      "image/png",
      "image/webp"
    ],
    "name": "foto_barang",
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

  // update field
  collection.fields.addAt(21, new Field({
    "help": "",
    "hidden": false,
    "id": "file3287711876",
    "maxSelect": 0,
    "maxSize": 0,
    "mimeTypes": [
      "image/jpeg",
      "image/png"
    ],
    "name": "foto_barang",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  return app.save(collection)
})
