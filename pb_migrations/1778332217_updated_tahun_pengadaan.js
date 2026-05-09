/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2952154270")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.role = 'sarpras'",
    "updateRule": "@request.auth.role = 'sarpras'"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2952154270")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id = 'sarpras'",
    "updateRule": "@request.auth.id = 'sarpras'"
  }, collection)

  return app.save(collection)
})
