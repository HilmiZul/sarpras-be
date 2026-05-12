/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4057257552")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_oq2x8i83bk` ON `unit_kerja` (`jabatan_unit_kerja`)",
      "CREATE INDEX `idx_7hooarqoda` ON `unit_kerja` (`kode_lokasi`)"
    ]
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text2241664293",
    "max": 0,
    "min": 0,
    "name": "kode_lokasi",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4057257552")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_oq2x8i83bk` ON `unit_kerja` (`jabatan_unit_kerja`)"
    ]
  }, collection)

  // remove field
  collection.fields.removeById("text2241664293")

  return app.save(collection)
})
