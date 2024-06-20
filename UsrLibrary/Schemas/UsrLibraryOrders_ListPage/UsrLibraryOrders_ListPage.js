define("UsrLibraryOrders_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"size": "large"
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
							"id": "76926e30-2250-7a37-e03e-579ac038421b",
							"code": "PDS_UsrClient",
							"path": "UsrClient",
							"caption": "#ResourceString(PDS_UsrClient)#",
							"dataValueType": 10,
							"referenceSchemaName": "UsrUser",
							"width": 158.00001525878906
						},
						{
							"id": "228a3a55-28bb-2a9d-1fa8-d7db6803effe",
							"code": "PDS_UsrClientUsrName",
							"path": "UsrClient.UsrName",
							"caption": "#ResourceString(PDS_UsrClientUsrName)#",
							"dataValueType": 27,
							"width": 176.00001525878906
						},
						{
							"id": "3c24240f-bf13-a932-f9f0-d629816a5927",
							"code": "PDS_UsrClientUsrContactNumber",
							"path": "UsrClient.UsrContactNumber",
							"caption": "#ResourceString(PDS_UsrClientUsrContactNumber)#",
							"dataValueType": 42,
							"width": 193.98959350585938
						},
						{
							"id": "e5696876-40b8-303d-7ff8-4c21fe4509fb",
							"code": "PDS_UsrCopyID",
							"path": "UsrCopyID",
							"caption": "#ResourceString(PDS_UsrCopyID)#",
							"dataValueType": 10,
							"referenceSchemaName": "UsrBook",
							"width": 114
						},
						{
							"id": "f7397ebe-c1b0-026c-b0f2-21a9550d14d8",
							"code": "PDS_UsrCopyIDUsrBookTitle",
							"path": "UsrCopyID.UsrBookTitle",
							"caption": "#ResourceString(PDS_UsrCopyIDUsrBookTitle)#",
							"dataValueType": 28
						},
						{
							"id": "ed39142e-6047-cec6-1c2f-fb9d17b5481a",
							"code": "PDS_UsrCopyIDUsrBookAuthor",
							"path": "UsrCopyID.UsrBookAuthor",
							"caption": "#ResourceString(PDS_UsrCopyIDUsrBookAuthor)#",
							"dataValueType": 10,
							"referenceSchemaName": "UsrAuthor"
						},
						{
							"id": "a12a2e38-f35e-270a-a581-a1f78319e435",
							"code": "PDS_UsrCopyIDUsrBookAvailableCopies",
							"path": "UsrCopyID.UsrBookAvailableCopies",
							"caption": "#ResourceString(PDS_UsrCopyIDUsrBookAvailableCopies)#",
							"dataValueType": 4
						},
						{
							"id": "d6449b2d-9d20-7836-c764-3b558e4b307f",
							"code": "PDS_UsrCopyIDUsrBookLocation",
							"path": "UsrCopyID.UsrBookLocation",
							"caption": "#ResourceString(PDS_UsrCopyIDUsrBookLocation)#",
							"dataValueType": 28
						}
					],
					"layoutConfig": {
						"basis": "100%",
						"width": 300
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": true
						}
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
					"selectionState",
					"_selectionOptions"
				]
			},
			{
				"operation": "insert",
				"name": "Button_d29yb6v",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_d29yb6v_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "webhooks-integration-button-icon",
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrProcess_18c8fcb",
							"processRunType": "RegardlessOfThePage"
						}
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
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
													"viewAttributeName": "Items",
													"filterColumn": "Tag_Virtual_Column"
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
					"rootSchemaName": "UsrLibraryOrders",
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
											"value": "UsrLibraryOrders"
										}
									}
								}
							}
						}
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
									"columnName": "UsrCopyIDUsrBookAuthor"
								}
							]
						},
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "FolderTree_active_folder_filter"
							},
							{
								"name": "Items_PredefinedFilter",
								"loadOnChange": true
							},
							{
								"name": "LookupQuickFilterByTag_Items",
								"loadOnChange": true
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
					"PDS_UsrClient": {
						"modelConfig": {
							"path": "PDS.UsrClient"
						}
					},
					"PDS_UsrClientUsrName": {
						"modelConfig": {
							"path": "PDS.UsrClientUsrName"
						}
					},
					"PDS_UsrClientUsrContactNumber": {
						"modelConfig": {
							"path": "PDS.UsrClientUsrContactNumber"
						}
					},
					"PDS_UsrCopyID": {
						"modelConfig": {
							"path": "PDS.UsrCopyID"
						}
					},
					"PDS_UsrCopyIDUsrBookTitle": {
						"modelConfig": {
							"path": "PDS.UsrCopyIDUsrBookTitle"
						}
					},
					"PDS_UsrCopyIDUsrBookAuthor": {
						"modelConfig": {
							"path": "PDS.UsrCopyIDUsrBookAuthor"
						}
					},
					"PDS_UsrCopyIDUsrBookAvailableCopies": {
						"modelConfig": {
							"path": "PDS.UsrCopyIDUsrBookAvailableCopies"
						}
					},
					"PDS_UsrCopyIDUsrBookLocation": {
						"modelConfig": {
							"path": "PDS.UsrCopyIDUsrBookLocation"
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
								"entitySchemaName": "UsrLibraryOrders",
								"attributes": {
									"UsrClient": {
										"path": "UsrClient"
									},
									"UsrClientUsrName": {
										"type": "ForwardReference",
										"path": "UsrClient.UsrName"
									},
									"UsrClientUsrContactNumber": {
										"type": "ForwardReference",
										"path": "UsrClient.UsrContactNumber"
									},
									"UsrCopyID": {
										"path": "UsrCopyID"
									},
									"UsrCopyIDUsrBookTitle": {
										"type": "ForwardReference",
										"path": "UsrCopyID.UsrBookTitle"
									},
									"UsrCopyIDUsrBookAuthor": {
										"type": "ForwardReference",
										"path": "UsrCopyID.UsrBookAuthor"
									},
									"UsrCopyIDUsrBookAvailableCopies": {
										"type": "ForwardReference",
										"path": "UsrCopyID.UsrBookAvailableCopies"
									},
									"UsrCopyIDUsrBookLocation": {
										"type": "ForwardReference",
										"path": "UsrCopyID.UsrBookLocation"
									}
								}
							},
							"scope": "viewElement"
						},
						"UsrLibraryOrdersDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrLibraryOrders"
							}
						}
					},
					"primaryDataSourceName": "UsrLibraryOrdersDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});