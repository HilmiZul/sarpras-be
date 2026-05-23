/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2366224675")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4057257552",
    "help": "",
    "hidden": false,
    "id": "relation1574479526",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "unit_kerja",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2366224675")

  // remove field
  collection.fields.removeById("relation1574479526")

  return app.save(collection)
})
