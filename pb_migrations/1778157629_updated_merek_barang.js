/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1182984822")

  // update collection data
  unmarshal({
    "name": "merek_aset"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1182984822")

  // update collection data
  unmarshal({
    "name": "merek_barang"
  }, collection)

  return app.save(collection)
})
