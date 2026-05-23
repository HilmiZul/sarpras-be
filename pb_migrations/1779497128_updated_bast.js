/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2366224675")

  // add field
  collection.fields.addAt(7, new Field({
    "help": "",
    "hidden": false,
    "id": "date3491513778",
    "max": "",
    "min": "",
    "name": "tgl_ba_spj",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2366224675")

  // remove field
  collection.fields.removeById("date3491513778")

  return app.save(collection)
})
