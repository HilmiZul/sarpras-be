/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183783002")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_bo9lbymokw` ON `aset_barang` (`sumber_aset`)",
      "CREATE INDEX `idx_kmcngmvkpv` ON `aset_barang` (`tgl_ba_spj`)",
      "CREATE INDEX `idx_kdcn23xf5g` ON `aset_barang` (`unit_kerja`)",
      "CREATE INDEX `idx_eyc2gbzsqn` ON `aset_barang` (`nama_aset_barang`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183783002")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_bo9lbymokw` ON `aset_barang` (`sumber_aset`)",
      "CREATE INDEX `idx_kmcngmvkpv` ON `aset_barang` (`tgl_ba_spj`)",
      "CREATE INDEX `idx_kdcn23xf5g` ON `aset_barang` (`unit_kerja`)"
    ]
  }, collection)

  return app.save(collection)
})
