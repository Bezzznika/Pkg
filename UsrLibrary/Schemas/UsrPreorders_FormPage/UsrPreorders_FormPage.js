define("UsrPreorders_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "ComboBox_pdqnw63",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_9eifdo4",
					"labelPosition": "auto",
					"control": "$LookupAttribute_9eifdo4",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_9sdsjrl",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_9sdsjrl_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_pdqnw63",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_0f7q4z0",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_penl96y",
					"labelPosition": "auto",
					"control": "$LookupAttribute_penl96y",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_42v4tjb",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_42v4tjb_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_0f7q4z0",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_4x0qktq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_6y5tzrz",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_6y5tzrz"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_k3e5u5t",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_a99s40t",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_a99s40t"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"LookupAttribute_9eifdo4": {
						"modelConfig": {
							"path": "UsrLibraryPreordersDS.UsrBookID"
						}
					},
					"LookupAttribute_penl96y": {
						"modelConfig": {
							"path": "UsrLibraryPreordersDS.UsrClient"
						}
					},
					"DateTimeAttribute_6y5tzrz": {
						"modelConfig": {
							"path": "UsrLibraryPreordersDS.CreatedOn"
						}
					},
					"DateTimeAttribute_a99s40t": {
						"modelConfig": {
							"path": "UsrLibraryPreordersDS.UsrLibraryDueDate"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "UsrLibraryPreordersDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"UsrLibraryPreordersDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "UsrLibraryPreorders"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});