/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1267859157")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_1z38uviai2` ON `rincian_aset` (`kode_barang`)",
      "CREATE INDEX `idx_h6y354su3q` ON `rincian_aset` (`nama_barang`)"
    ],
    "name": "rincian_aset"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1267859157")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_1z38uviai2` ON `rincian_barang` (`kode_barang`)",
      "CREATE INDEX `idx_h6y354su3q` ON `rincian_barang` (`nama_barang`)"
    ],
    "name": "rincian_barang"
  }, collection)

  return app.save(collection)
})
