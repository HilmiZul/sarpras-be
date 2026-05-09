/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_40572575522")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_a4rxkrmvj0` ON `lokasi_aset` (`nama_lokasi`)",
      "CREATE INDEX `idx_zxkmf5uvk9` ON `lokasi_aset` (`unit_kerja`)"
    ]
  }, collection)

  // add field
  collection.fields.addAt(2, new Field({
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
  const collection = app.findCollectionByNameOrId("pbc_40572575522")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_a4rxkrmvj0` ON `lokasi_aset` (`nama_lokasi`)"
    ]
  }, collection)

  // remove field
  collection.fields.removeById("relation1574479526")

  return app.save(collection)
})
