/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183783002")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_bo9lbymokw` ON `aset` (`sumber_aset`)",
      "CREATE INDEX `idx_kmcngmvkpv` ON `aset` (`tgl_ba_spj`)",
      "CREATE INDEX `idx_kdcn23xf5g` ON `aset` (`unit_kerja`)",
      "CREATE INDEX `idx_eyc2gbzsqn` ON `aset` (`nama_aset_barang`)",
      "CREATE INDEX `idx_eywjx5zkrc` ON `aset` (`kondisi`)",
      "CREATE INDEX `idx_wo42op99z8` ON `aset` (`merek_aset`)",
      "CREATE INDEX `idx_0knz38twsj` ON `aset` (`kodering_aset`)",
      "CREATE INDEX `idx_5t7hqwnjsh` ON `aset` (`kodering_belanja`)",
      "CREATE INDEX `idx_exh26gi41z` ON `aset` (`rincian_aset`)",
      "CREATE INDEX `idx_wjonjtoyd5` ON `aset` (`jenis_aset`)",
      "CREATE INDEX `idx_nbldrnywjf` ON `aset` (`lokasi_unit_kerja`)"
    ]
  }, collection)

  // add field
  collection.fields.addAt(19, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_40572575522",
    "help": "",
    "hidden": false,
    "id": "relation4067428604",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "lokasi_unit_kerja",
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
      "CREATE INDEX `idx_bo9lbymokw` ON `aset` (`sumber_aset`)",
      "CREATE INDEX `idx_kmcngmvkpv` ON `aset` (`tgl_ba_spj`)",
      "CREATE INDEX `idx_kdcn23xf5g` ON `aset` (`unit_kerja`)",
      "CREATE INDEX `idx_eyc2gbzsqn` ON `aset` (`nama_aset_barang`)",
      "CREATE INDEX `idx_eywjx5zkrc` ON `aset` (`kondisi`)",
      "CREATE INDEX `idx_wo42op99z8` ON `aset` (`merek_aset`)",
      "CREATE INDEX `idx_0knz38twsj` ON `aset` (`kodering_aset`)",
      "CREATE INDEX `idx_5t7hqwnjsh` ON `aset` (`kodering_belanja`)",
      "CREATE INDEX `idx_exh26gi41z` ON `aset` (`rincian_aset`)",
      "CREATE INDEX `idx_wjonjtoyd5` ON `aset` (`jenis_aset`)"
    ]
  }, collection)

  // remove field
  collection.fields.removeById("relation4067428604")

  return app.save(collection)
})
