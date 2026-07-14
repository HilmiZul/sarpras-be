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
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_4057257552",
        "help": "",
        "hidden": false,
        "id": "_clone_mVMY",
        "maxSelect": 0,
        "minSelect": 0,
        "name": "unit_kerja",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      }
    ],
    "id": "pbc_1764100148",
    "indexes": [],
    "listRule": "",
    "name": "sum_assets_nilai_perolehan_unit",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT SUM(nilai_perolehan) as jumlah_perolehan, id, unit_kerja FROM aset\nGROUP BY unit_kerja",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1764100148");

  return app.delete(collection);
})
