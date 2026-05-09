/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183783002")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_bo9lbymokw` ON `aset_barang` (`sumber_aset`)",
      "CREATE INDEX `idx_kmcngmvkpv` ON `aset_barang` (`tgl_ba_spj`)",
      "CREATE INDEX `idx_kdcn23xf5g` ON `aset_barang` (`unit_kerja`)",
      "CREATE INDEX `idx_eyc2gbzsqn` ON `aset_barang` (`nama_aset_barang`)",
      "CREATE INDEX `idx_eywjx5zkrc` ON `aset_barang` (`kondisi_barang`)",
      "CREATE INDEX `idx_wo42op99z8` ON `aset_barang` (`merek_barang`)",
      "CREATE INDEX `idx_0knz38twsj` ON `aset_barang` (`kodering_aset`)",
      "CREATE INDEX `idx_5t7hqwnjsh` ON `aset_barang` (`kodering_belanja`)",
      "CREATE INDEX `idx_exh26gi41z` ON `aset_barang` (`rincian_barang`)"
    ]
  }, collection)

  // add field
  collection.fields.addAt(23, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1182984822",
    "help": "",
    "hidden": false,
    "id": "relation286961264",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "merek_barang",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183783002")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_bo9lbymokw` ON `aset_barang` (`sumber_aset`)",
      "CREATE INDEX `idx_kmcngmvkpv` ON `aset_barang` (`tgl_ba_spj`)",
      "CREATE INDEX `idx_kdcn23xf5g` ON `aset_barang` (`unit_kerja`)",
      "CREATE INDEX `idx_eyc2gbzsqn` ON `aset_barang` (`nama_aset_barang`)",
      "CREATE INDEX `idx_eywjx5zkrc` ON `aset_barang` (`kondisi_barang`)"
    ]
  }, collection)

  // remove field
  collection.fields.removeById("relation286961264")

  return app.save(collection)
})
