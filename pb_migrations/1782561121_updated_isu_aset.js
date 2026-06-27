/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1277910678")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_t73bw48e35` ON `isu_aset` (`aset`)",
      "CREATE INDEX `idx_iklc82zkzc` ON `isu_aset` (`unit_kerja`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1277910678")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
