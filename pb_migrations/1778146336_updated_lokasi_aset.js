/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4057257552")

  // update collection data
  unmarshal({
    "name": "unit_kerja"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4057257552")

  // update collection data
  unmarshal({
    "name": "lokasi_aset"
  }, collection)

  return app.save(collection)
})
