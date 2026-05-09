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
      "CREATE INDEX `idx_eywjx5zkrc` ON `aset_barang` (`kondisi_barang`)"
    ]
  }, collection)

  // add field
  collection.fields.addAt(20, new Field({
    "help": "",
    "hidden": false,
    "id": "select2780029406",
    "maxSelect": 0,
    "name": "kondisi_barang",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "B",
      "RR",
      "RB",
      "Mutasi ke OPD Lain",
      "Pencatatan Ganda",
      "Hilang"
    ]
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
      "CREATE INDEX `idx_eyc2gbzsqn` ON `aset_barang` (`nama_aset_barang`)"
    ]
  }, collection)

  // remove field
  collection.fields.removeById("select2780029406")

  return app.save(collection)
})
