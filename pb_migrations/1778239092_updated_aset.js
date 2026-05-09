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
      "CREATE INDEX `idx_eywjx5zkrc` ON `aset` (`kondisi_barang`)",
      "CREATE INDEX `idx_wo42op99z8` ON `aset` (`merek_barang`)",
      "CREATE INDEX `idx_0knz38twsj` ON `aset` (`kodering_aset`)",
      "CREATE INDEX `idx_5t7hqwnjsh` ON `aset` (`kodering_belanja`)",
      "CREATE INDEX `idx_exh26gi41z` ON `aset` (`rincian_barang`)",
      "CREATE INDEX `idx_wjonjtoyd5` ON `aset` (`kategori_aset`)"
    ]
  }, collection)

  // add field
  collection.fields.addAt(24, new Field({
    "help": "",
    "hidden": false,
    "id": "select1774524421",
    "maxSelect": 0,
    "name": "kategori_aset",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "aset",
      "bahan"
    ]
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
      "CREATE INDEX `idx_eywjx5zkrc` ON `aset` (`kondisi_barang`)",
      "CREATE INDEX `idx_wo42op99z8` ON `aset` (`merek_barang`)",
      "CREATE INDEX `idx_0knz38twsj` ON `aset` (`kodering_aset`)",
      "CREATE INDEX `idx_5t7hqwnjsh` ON `aset` (`kodering_belanja`)",
      "CREATE INDEX `idx_exh26gi41z` ON `aset` (`rincian_barang`)"
    ]
  }, collection)

  // remove field
  collection.fields.removeById("select1774524421")

  return app.save(collection)
})
