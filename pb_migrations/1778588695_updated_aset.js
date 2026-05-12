/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183783002")

  // remove field
  collection.fields.removeById("select2567345951")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183783002")

  // add field
  collection.fields.addAt(2, new Field({
    "help": "",
    "hidden": false,
    "id": "select2567345951",
    "maxSelect": 0,
    "name": "triwulan",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "\"tw-1\"",
      "\"tw-2\"",
      "\"tw-3\"",
      "\"tw-4\""
    ]
  }))

  return app.save(collection)
})
