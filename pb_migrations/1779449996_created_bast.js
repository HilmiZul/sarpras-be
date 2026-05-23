/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": "@request.auth.role = 'sarpras'",
    "deleteRule": "@request.auth.role = 'sarpras'",
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
        "help": "",
        "hidden": false,
        "id": "select3357413904",
        "maxSelect": 0,
        "name": "kategori",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "pa",
          "pbp",
          "so"
        ]
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text2314987522",
        "max": 0,
        "min": 0,
        "name": "no_ba",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text2767983603",
        "max": 0,
        "min": 0,
        "name": "no_sppb",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "help": "",
        "hidden": false,
        "id": "date1738849267",
        "max": "",
        "min": "",
        "name": "tgl_sppb",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
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
    "id": "pbc_2366224675",
    "indexes": [
      "CREATE INDEX `idx_4hkc3yw7pa` ON `bast` (`aset`)",
      "CREATE INDEX `idx_cqb6o4e416` ON `bast` (`tgl_sppb`)"
    ],
    "listRule": "@request.auth.id != ''",
    "name": "bast",
    "system": false,
    "type": "base",
    "updateRule": "@request.auth.role = 'sarpras'",
    "viewRule": "@request.auth.id != ''"
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2366224675");

  return app.delete(collection);
})
