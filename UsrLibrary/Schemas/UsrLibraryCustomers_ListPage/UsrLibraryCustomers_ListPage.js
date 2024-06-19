define("UsrLibraryCustomers_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"clicked": {
						"request": "crt.OpenPageRequest",
						"params": {
							"schemaName": "UsrPage_z582ojd"
						}
					},
					"caption": "#ResourceString(AddButton_caption)#",
					"size": "large",
					"visible": true,
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "SectionContentWrapper",
				"values": {
					"direction": "row",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "06d8613e-4b92-74e3-7b4d-378009c5ac53",
							"code": "PDS_UsrName",
							"path": "UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 27,
							"width": 207.00001525878906
						},
						{
							"id": "8bdb1921-56b5-360c-0547-6bfdf4de49ad",
							"code": "PDS_UsrMemberTypeId",
							"path": "UsrMemberTypeId",
							"caption": "#ResourceString(PDS_UsrMemberTypeId)#",
							"dataValueType": 10,
							"referenceSchemaName": "UsrMemberType"
						},
						{
							"id": "0847d2df-c5dc-2068-72ee-4714e53d75a3",
							"code": "PDS_UsrAddress",
							"caption": "#ResourceString(PDS_UsrAddress)#",
							"dataValueType": 28,
							"width": 125.99305725097656
						},
						{
							"id": "90b17ea3-2b10-632e-d17b-307974380c3c",
							"code": "PDS_UsrFines",
							"path": "UsrFines",
							"caption": "#ResourceString(PDS_UsrFines)#",
							"dataValueType": 32
						},
						{
							"id": "346b8a5a-c00e-9195-b776-e46c401d045d",
							"code": "PDS_UsrEmail",
							"path": "UsrEmail",
							"caption": "#ResourceString(PDS_UsrEmail)#",
							"dataValueType": 45,
							"width": 131.00001525878906
						},
						{
							"id": "703845de-b4a3-31b0-2218-5b0f7a5f7647",
							"code": "PDS_UsrContactNumber",
							"path": "UsrContactNumber",
							"caption": "#ResourceString(PDS_UsrContactNumber)#",
							"dataValueType": 42,
							"width": 167.00001525878906
						},
						{
							"id": "920e722c-6627-7b61-182a-0348ee3eb589",
							"code": "PDS_UsrCanceledOrders",
							"path": "UsrCanceledOrders",
							"caption": "#ResourceString(PDS_UsrCanceledOrders)#",
							"dataValueType": 4
						},
						{
							"id": "fbc87adc-451b-0199-e1ec-3eba0fab38f7",
							"code": "PDS_UsrAddress",
							"path": "UsrAddress",
							"caption": "#ResourceString(PDS_UsrAddress)#",
							"dataValueType": 28
						},
						{
							"id": "8791f43d-3c7e-f3b6-c94f-179a6c8dfa05",
							"code": "PDS_UsrActiveOrders",
							"path": "UsrActiveOrders",
							"caption": "#ResourceString(PDS_UsrActiveOrders)#",
							"dataValueType": 4
						},
						{
							"id": "f6490fb0-40c2-1521-316e-ad32c210ce85",
							"code": "PDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "bce66552-3559-1a43-2534-733f5b06e203",
							"code": "PDS_UsrBirthDate",
							"path": "UsrBirthDate",
							"caption": "#ResourceString(PDS_UsrBirthDate)#",
							"dataValueType": 8
						}
					],
					"layoutConfig": {
						"basis": "100%",
						"width": 300
					},
					"primaryColumnName": "PDS_Id",
					"sorting": "$ItemsSorting | crt.ToDataTableSortingConfig: 'Items'",
					"visible": true,
					"fitContent": true
				}
			},
			{
				"operation": "remove",
				"name": "DataTable",
				"properties": [
					"placeholder",
					"selectionState",
					"_selectionOptions"
				]
			},
			{
				"operation": "insert",
				"name": "MainFilterContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "medium",
						"rowGap": "none"
					},
					"items": [],
					"color": "primary",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"fitContent": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeftFilterContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "nowrap",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "large"
					},
					"justifyContent": "start",
					"gap": "medium",
					"alignItems": "center"
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FolderTreeActions",
				"values": {
					"type": "crt.FolderTreeActions",
					"caption": "#ResourceString(FolderTreeActions_caption)#",
					"folderTree": "FolderTree"
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LookupQuickFilterByTag",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(LookupQuickFilterByTag_config_caption)#",
						"hint": "#ResourceString(LookupQuickFilterByTag_config_hint)#",
						"icon": "tag-icon",
						"iconPosition": "left-icon",
						"entitySchemaName": "Tag_Virtual_Schema"
					},
					"filterType": "lookup",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "LookupQuickFilterByTag_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "LookupQuickFilterByTag_Value"
					}
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RightFilterContainer",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "medium",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "end",
					"gap": "medium",
					"alignItems": "center"
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_placeholder)#",
					"targetAttributes": [
						"Items"
					]
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RefreshButtonCaption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "PDS"
						}
					},
					"iconPosition": "only-icon",
					"icon": "reload-button-icon",
					"clickMode": "default"
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FolderTree",
				"values": {
					"type": "crt.FolderTree",
					"caption": "#ResourceString(FolderTree_caption)#",
					"sourceSchemaName": "FolderTree",
					"rootSchemaName": "UsrLibraryCustomers",
					"layoutConfig": {
						"width": 328.125
					},
					"classes": [
						"section-folder-tree"
					],
					"_filterOptions": {
						"expose": [
							{
								"attribute": "FolderTree_active_folder_filter",
								"converters": [
									{
										"converter": "crt.FolderTreeActiveFilterAttributeConverter",
										"args": []
									}
								]
							}
						],
						"from": [
							"FolderTree_items",
							"FolderTree_favoriteItems",
							"FolderTree_active_folder_id"
						]
					}
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"ItemsSorting": {},
					"FolderTree_visible": {
						"value": false
					},
					"FolderTree_items": {
						"isCollection": true,
						"viewModelConfig": {
							"attributes": {
								"Id": {
									"modelConfig": {
										"path": "FolderTree_items_DS.Id"
									}
								},
								"Name": {
									"modelConfig": {
										"path": "FolderTree_items_DS.Name"
									}
								},
								"ParentId": {
									"modelConfig": {
										"path": "FolderTree_items_DS.Parent.Id"
									}
								},
								"FilterData": {
									"modelConfig": {
										"path": "FolderTree_items_DS.FilterData"
									}
								}
							}
						},
						"modelConfig": {
							"path": "FolderTree_items_DS",
							"filterAttributes": [
								{
									"name": "FolderTree_items_DS_filter",
									"loadOnChange": true
								}
							]
						},
						"embeddedModel": {
							"config": {
								"type": "crt.EntityDataSource",
								"config": {
									"entitySchemaName": "FolderTree"
								}
							},
							"name": "FolderTree_items_DS"
						}
					},
					"FolderTree_active_folder_id": {},
					"FolderTree_active_folder_name": {},
					"FolderTree_active_folder_filter": {
						"value": {}
					},
					"FolderTree_items_DS_filter": {
						"value": {
							"isEnabled": true,
							"trimDateTimeParameterToDate": false,
							"filterType": 6,
							"logicalOperation": 0,
							"items": {
								"3714ebf4-41a3-9a82-8e8b-039d9ac03ce1": {
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"filterType": 1,
									"comparisonType": 3,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "EntitySchemaName"
									},
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 1,
											"value": "UsrLibraryCustomers"
										}
									}
								}
							}
						}
					},
					"StringAttribute_br21zgs": {
						"modelConfig": {
							"path": "UsrUserDS.UsrName"
						}
					},
					"Items_PredefinedFilter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items"
				],
				"values": {
					"modelConfig": {
						"path": "PDS",
						"pagingConfig": {
							"rowCount": 30
						},
						"sortingConfig": {
							"attributeName": "ItemsSorting",
							"default": [
								{
									"direction": "asc",
									"columnName": "UsrName"
								}
							]
						},
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "FolderTree_active_folder_filter"
							},
							{
								"name": "LookupQuickFilterByTag_Items",
								"loadOnChange": true
							},
							{
								"loadOnChange": true,
								"name": "Items_PredefinedFilter"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrMemberTypeId": {
						"modelConfig": {
							"path": "PDS.UsrMemberTypeId"
						}
					},
					"PDS_UsrAddress": {
						"modelConfig": {
							"path": "PDS.UsrAddress"
						}
					},
					"PDS_UsrFines": {
						"modelConfig": {
							"path": "PDS.UsrFines"
						}
					},
					"PDS_UsrEmail": {
						"modelConfig": {
							"path": "PDS.UsrEmail"
						}
					},
					"PDS_UsrContactNumber": {
						"modelConfig": {
							"path": "PDS.UsrContactNumber"
						}
					},
					"PDS_UsrCanceledOrders": {
						"modelConfig": {
							"path": "PDS.UsrCanceledOrders"
						}
					},
					"PDS_UsrActiveOrders": {
						"modelConfig": {
							"path": "PDS.UsrActiveOrders"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"PDS_UsrBirthDate": {
						"modelConfig": {
							"path": "PDS.UsrBirthDate"
						}
					},
					"PDS_Id": {
						"modelConfig": {
							"path": "PDS.Id"
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
					"dataSources": {
						"PDS": {
							"type": "crt.EntityDataSource",
							"hiddenInPageDesigner": true,
							"config": {
								"entitySchemaName": "UsrUser",
								"attributes": {
									"UsrName": {
										"path": "UsrName"
									},
									"UsrMemberTypeId": {
										"path": "UsrMemberTypeId"
									},
									"UsrAddress": {
										"path": "UsrAddress"
									},
									"UsrFines": {
										"path": "UsrFines"
									},
									"UsrEmail": {
										"path": "UsrEmail"
									},
									"UsrContactNumber": {
										"path": "UsrContactNumber"
									},
									"UsrCanceledOrders": {
										"path": "UsrCanceledOrders"
									},
									"UsrActiveOrders": {
										"path": "UsrActiveOrders"
									},
									"CreatedOn": {
										"path": "CreatedOn"
									},
									"UsrBirthDate": {
										"path": "UsrBirthDate"
									}
								}
							},
							"scope": "viewElement"
						},
						"UsrUserDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrUser"
							}
						}
					},
					"primaryDataSourceName": "UsrUserDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});