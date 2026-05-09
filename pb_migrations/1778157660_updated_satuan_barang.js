/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_370348349")

  // update collection data
  unmarshal({
    "name": "satuan_aset"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_370348349")

  // update collection data
  unmarshal({
    "name": "satuan_barang"
  }, collection)

  return app.save(collection)
})
