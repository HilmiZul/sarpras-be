/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2366224675")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_cqb6o4e416` ON `bast` (`tgl_sppb`)",
      "CREATE INDEX `idx_tnofl2irrx` ON `bast` (`unit_kerja`)",
      "CREATE INDEX `idx_kcfxkj9bv8` ON `bast` (`tgl_ba_spj`)"
    ]
  }, collection)

  // remove field
  collection.fields.removeById("relation3146494900")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2366224675")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_4hkc3yw7pa` ON `bast` (`aset`)",
      "CREATE INDEX `idx_cqb6o4e416` ON `bast` (`tgl_sppb`)"
    ]
  }, collection)

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3183783002",
    "help": "",
    "hidden": false,
    "id": "relation3146494900",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "aset",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
