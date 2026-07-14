/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3333373214")

  // update collection data
  unmarshal({
    "name": "count_asset_by_sarpras"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3333373214")

  // update collection data
  unmarshal({
    "name": "count_asset_by_non_sarpras"
  }, collection)

  return app.save(collection)
})
