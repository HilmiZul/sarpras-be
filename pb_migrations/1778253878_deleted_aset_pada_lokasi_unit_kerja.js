/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2141344878");

  return app.delete(collection);
}, (app) => {
  const collection = new Collection({
    "createRule": "@request.auth.role = 'unit'",
    "deleteRule": "@request.auth.role = 'unit'",
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "help": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
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
        "collectionId": "pbc_3183783002",
        "help": "",
        "hidden": false,
        "id": "relation3146494900",
        "maxSelect": 0,
        "minSelect": 0,
        "name": "aset",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_40572575522",
        "help": "",
        "hidden": false,
        "id": "relation4202637860",
        "maxSelect": 0,
        "minSelect": 0,
        "name": "lokasi_aset_unit_kerja",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_2141344878",
    "indexes": [
      "CREATE INDEX `idx_ugc7izfe9o` ON `aset_pada_lokasi_unit_kerja` (`aset`)",
      "CREATE INDEX `idx_oc3mkr1mt8` ON `aset_pada_lokasi_unit_kerja` (`lokasi_aset_unit_kerja`)"
    ],
    "listRule": "@request.auth.id != ''",
    "name": "aset_pada_lokasi_unit_kerja",
    "system": false,
    "type": "base",
    "updateRule": "@request.auth.role = 'unit'",
    "viewRule": "@request.auth.id != ''"
  });

  return app.save(collection);
})
