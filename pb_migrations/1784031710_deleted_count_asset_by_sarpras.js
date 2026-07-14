/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3333373214");

  return app.delete(collection);
}, (app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "help": "",
        "hidden": false,
        "id": "number2660322358",
        "max": null,
        "min": null,
        "name": "jumlah",
        "onlyInt": true,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      }
    ],
    "id": "pbc_3333373214",
    "indexes": [],
    "listRule": "",
    "name": "count_asset_by_sarpras",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT COUNT(id) as jumlah, id FROM aset",
    "viewRule": null
  });

  return app.save(collection);
})
