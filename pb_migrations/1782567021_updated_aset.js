/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183783002")

  // update field
  collection.fields.addAt(26, new Field({
    "help": "",
    "hidden": false,
    "id": "file1973200335",
    "maxSelect": 0,
    "maxSize": 0,
    "mimeTypes": [
      "image/jpeg",
      "image/png",
      "image/webp"
    ],
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

  // update field
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
})
