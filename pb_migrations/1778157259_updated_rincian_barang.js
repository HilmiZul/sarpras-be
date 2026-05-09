/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1267859157")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_1z38uviai2` ON `rincian_barang` (`kode_barang`)",
      "CREATE INDEX `idx_h6y354su3q` ON `rincian_barang` (`nama_barang`)"
    ]
  }, collection)

  // remove field
  collection.fields.removeById("text286961264")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1267859157")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_1z38uviai2` ON `rincian_barang` (`kode_barang`)",
      "CREATE INDEX `idx_wbdcu4wrdp` ON `rincian_barang` (`merek_barang`)"
    ]
  }, collection)

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text286961264",
    "max": 0,
    "min": 0,
    "name": "merek_barang",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
