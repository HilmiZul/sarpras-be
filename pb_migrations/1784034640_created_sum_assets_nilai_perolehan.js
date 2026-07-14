/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "help": "",
        "hidden": false,
        "id": "json2162953738",
        "maxSize": 1,
        "name": "jumlah_perolehan",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
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
    "id": "pbc_1322222987",
    "indexes": [],
    "listRule": "",
    "name": "sum_assets_nilai_perolehan",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT SUM(nilai_perolehan) as jumlah_perolehan, id FROM aset",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1322222987");

  return app.delete(collection);
})
