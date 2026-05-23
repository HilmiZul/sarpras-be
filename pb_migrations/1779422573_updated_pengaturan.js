/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1685436846")

  // add field
  collection.fields.addAt(5, new Field({
    "exceptDomains": null,
    "help": "",
    "hidden": false,
    "id": "url1193203524",
    "name": "website_sekolah",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "exceptDomains": null,
    "help": "",
    "hidden": false,
    "id": "email1458619183",
    "name": "email_sekolah",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "email"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "help": "",
    "hidden": false,
    "id": "number38868767",
    "max": null,
    "min": null,
    "name": "kodepos_sekolah",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1685436846")

  // remove field
  collection.fields.removeById("url1193203524")

  // remove field
  collection.fields.removeById("email1458619183")

  // remove field
  collection.fields.removeById("number38868767")

  return app.save(collection)
})
