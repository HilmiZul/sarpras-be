/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1685436846")

  // update collection data
  unmarshal({
    "viewRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1685436846")

  // update collection data
  unmarshal({
    "viewRule": "@request.auth.role != ''"
  }, collection)

  return app.save(collection)
})
