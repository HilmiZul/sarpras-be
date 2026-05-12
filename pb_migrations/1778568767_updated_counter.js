/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1349643154")

  // update field
  collection.fields.addAt(1, new Field({
    "help": "",
    "hidden": false,
    "id": "number2526027604",
    "max": null,
    "min": null,
    "name": "number",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1349643154")

  // update field
  collection.fields.addAt(1, new Field({
    "help": "",
    "hidden": false,
    "id": "number2526027604",
    "max": null,
    "min": null,
    "name": "number",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
