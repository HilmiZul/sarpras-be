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
      "CREATE INDEX `idx_wjonjtoyd5` ON `aset` (`jenis_aset`)"
    ]
  }, collection)

  // update field
  collection.fields.addAt(11, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1267859157",
    "help": "",
    "hidden": false,
    "id": "relation1819970370",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "rincian_aset",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(12, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_370348349",
    "help": "",
    "hidden": false,
    "id": "relation4280757324",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "satuan_aset",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(22, new Field({
    "help": "",
    "hidden": false,
    "id": "select2780029406",
    "maxSelect": 0,
    "name": "kondisi",
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

  // update field
  collection.fields.addAt(24, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1182984822",
    "help": "",
    "hidden": false,
    "id": "relation286961264",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "merek_aset",
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
      "CREATE INDEX `idx_eywjx5zkrc` ON `aset` (`kondisi_barang`)",
      "CREATE INDEX `idx_wo42op99z8` ON `aset` (`merek_barang`)",
      "CREATE INDEX `idx_0knz38twsj` ON `aset` (`kodering_aset`)",
      "CREATE INDEX `idx_5t7hqwnjsh` ON `aset` (`kodering_belanja`)",
      "CREATE INDEX `idx_exh26gi41z` ON `aset` (`rincian_barang`)",
      "CREATE INDEX `idx_wjonjtoyd5` ON `aset` (`jenis_aset`)"
    ]
  }, collection)

  // update field
  collection.fields.addAt(11, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1267859157",
    "help": "",
    "hidden": false,
    "id": "relation1819970370",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "rincian_barang",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(12, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_370348349",
    "help": "",
    "hidden": false,
    "id": "relation4280757324",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "satuan_barang",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(22, new Field({
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

  // update field
  collection.fields.addAt(24, new Field({
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
})
