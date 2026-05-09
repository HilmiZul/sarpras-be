/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_40572575522")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_a4rxkrmvj0` ON `lokasi_aset_unit_kerja` (`nama_lokasi`)",
      "CREATE INDEX `idx_zxkmf5uvk9` ON `lokasi_aset_unit_kerja` (`unit_kerja`)"
    ],
    "name": "lokasi_aset_unit_kerja"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_40572575522")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_a4rxkrmvj0` ON `lokasi_aset` (`nama_lokasi`)",
      "CREATE INDEX `idx_zxkmf5uvk9` ON `lokasi_aset` (`unit_kerja`)"
    ],
    "name": "lokasi_aset"
  }, collection)

  return app.save(collection)
})
