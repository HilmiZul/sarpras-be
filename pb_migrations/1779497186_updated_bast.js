/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2366224675")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_cqb6o4e416` ON `bast` (`tgl_sppb`)",
      "CREATE INDEX `idx_tnofl2irrx` ON `bast` (`unit_kerja`)",
      "CREATE INDEX `idx_kcfxkj9bv8` ON `bast` (`tgl_ba_spj`)",
      "CREATE INDEX `idx_iniflj10q5` ON `bast` (`kategori`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2366224675")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_cqb6o4e416` ON `bast` (`tgl_sppb`)",
      "CREATE INDEX `idx_tnofl2irrx` ON `bast` (`unit_kerja`)",
      "CREATE INDEX `idx_kcfxkj9bv8` ON `bast` (`tgl_ba_spj`)"
    ]
  }, collection)

  return app.save(collection)
})
