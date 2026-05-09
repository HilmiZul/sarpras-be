/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183783002")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2952154270",
    "help": "",
    "hidden": false,
    "id": "relation3250233612",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "tahun_pengadaan",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183783002")

  // remove field
  collection.fields.removeById("relation3250233612")

  return app.save(collection)
})
