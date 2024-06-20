define("UsrLibrary_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "TitleContainer",
				"values": {
					"justifyContent": "space-between",
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"gap": "medium",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrLibraryOrders"
						}
					},
					"caption": "#ResourceString(AddButton_caption)#",
					"size": "large",
					"visible": true,
					"clickMode": "default",
					"menuItems": []
				}
			},
			{
				"operation": "merge",
				"name": "DataImportButton",
				"values": {
					"caption": "#ResourceString(DataImportButton_caption)#"
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
				"operation": "remove",
				"name": "DataTable"
			},
			{
				"operation": "insert",
				"name": "Button_u00s0z9",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_u00s0z9_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "right-icon",
					"layoutConfig": {},
					"visible": true,
					"icon": "person-button-icon",
					"clicked": {
						"request": "crt.OpenPageRequest",
						"params": {
							"schemaName": "UsrPage_xnwauke"
						}
					},
					"clickMode": "default"
				},
				"parentName": "TitleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Button_h7pue0k",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_h7pue0k_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "download-button-icon",
					"clicked": {},
					"clickMode": "default"
				},
				"parentName": "TitleContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "MenuItem_n8azhge",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_n8azhge_caption)#",
					"visible": true,
					"icon": "car-icon"
				},
				"parentName": "AddButton",
				"propertyName": "menuItems",
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
					"fitContent": true,
					"visible": true
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
						"expose": [],
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
					"targetAttributes": []
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
					"rootSchemaName": "UsrLibrary",
					"layoutConfig": {
						"width": 218.12503051757812
					},
					"classes": [
						"section-folder-tree"
					],
					"_filterOptions": {
						"expose": [],
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
			},
			{
				"operation": "insert",
				"name": "DataGrid_ljqujxs",
				"values": {
					"type": "crt.DataGrid",
					"columns": [
						{
							"id": "9c998394-a847-d91f-9087-500aa7afface",
							"code": "DataGrid_ljqujxsDS_UsrBookTitle",
							"path": "UsrBookTitle",
							"caption": "#ResourceString(DataGrid_ljqujxsDS_UsrBookTitle)#",
							"dataValueType": 28,
							"width": 114
						},
						{
							"id": "fe61f06f-2a4f-3de5-58a1-5a5bf33477d0",
							"code": "DataGrid_ljqujxsDS_UsrBookQuantity",
							"path": "UsrBookQuantity",
							"caption": "#ResourceString(DataGrid_ljqujxsDS_UsrBookQuantity)#",
							"dataValueType": 4,
							"width": 114
						},
						{
							"id": "e7d0a865-0a3a-8cfa-2204-478e3db90be6",
							"code": "DataGrid_ljqujxsDS_UsrBookPublicationDate",
							"path": "UsrBookPublicationDate",
							"caption": "#ResourceString(DataGrid_ljqujxsDS_UsrBookPublicationDate)#",
							"dataValueType": 8,
							"width": 114
						},
						{
							"id": "ef880ec3-6182-ee91-dbae-1da2bba8fb2a",
							"code": "DataGrid_ljqujxsDS_UsrBookLocation",
							"path": "UsrBookLocation",
							"caption": "#ResourceString(DataGrid_ljqujxsDS_UsrBookLocation)#",
							"dataValueType": 28,
							"width": 114.00001525878906
						},
						{
							"id": "9c469461-f92c-1627-e46b-347413172c58",
							"code": "DataGrid_ljqujxsDS_UsrBookGenre",
							"path": "UsrBookGenre",
							"caption": "#ResourceString(DataGrid_ljqujxsDS_UsrBookGenre)#",
							"dataValueType": 10,
							"referenceSchemaName": "UsrGenre",
							"width": 132.00001525878906
						},
						{
							"id": "5f5bcc20-ce1f-9460-59a9-135a9c575894",
							"code": "DataGrid_ljqujxsDS_UsrBookFormat",
							"path": "UsrBookFormat",
							"caption": "#ResourceString(DataGrid_ljqujxsDS_UsrBookFormat)#",
							"dataValueType": 10,
							"referenceSchemaName": "UsrFormat",
							"width": 143.00001525878906
						},
						{
							"id": "e88c119e-cfca-1a03-ae4f-ccc2789f3a03",
							"code": "DataGrid_ljqujxsDS_UsrBookAvailableCopies",
							"path": "UsrBookAvailableCopies",
							"caption": "#ResourceString(DataGrid_ljqujxsDS_UsrBookAvailableCopies)#",
							"dataValueType": 4,
							"width": 114
						},
						{
							"id": "979b8ea3-2805-856b-a8f6-be9295f76c42",
							"code": "DataGrid_ljqujxsDS_UsrBookAuthor",
							"path": "UsrBookAuthor",
							"caption": "#ResourceString(DataGrid_ljqujxsDS_UsrBookAuthor)#",
							"dataValueType": 10,
							"referenceSchemaName": "UsrAuthor",
							"width": 164.00001525878906
						},
						{
							"id": "76bfb86e-20dd-c25b-ced9-633666b6f20a",
							"code": "DataGrid_ljqujxsDS_Name",
							"path": "Name",
							"caption": "#ResourceString(DataGrid_ljqujxsDS_Name)#",
							"dataValueType": 28
						}
					],
					"items": "$DataGrid_ljqujxs",
					"layoutConfig": {
						"basis": "100%",
						"width": 300
					},
					"classes": [
						"section-data-grid"
					],
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"primaryColumnName": "DataGrid_ljqujxsDS_Id",
					"visible": true,
					"fitContent": true
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 1
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
											"value": "UsrLibrary"
										}
									}
								}
							}
						}
					},
					"Items_PredefinedFilter": {
						"value": null
					},
					"DataGrid_ljqujxs": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_ljqujxsDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrBookAuthor"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_ljqujxsDS_UsrBookTitle": {
									"modelConfig": {
										"path": "DataGrid_ljqujxsDS.UsrBookTitle"
									}
								},
								"DataGrid_ljqujxsDS_UsrBookQuantity": {
									"modelConfig": {
										"path": "DataGrid_ljqujxsDS.UsrBookQuantity"
									}
								},
								"DataGrid_ljqujxsDS_UsrBookPublicationDate": {
									"modelConfig": {
										"path": "DataGrid_ljqujxsDS.UsrBookPublicationDate"
									}
								},
								"DataGrid_ljqujxsDS_UsrBookLocation": {
									"modelConfig": {
										"path": "DataGrid_ljqujxsDS.UsrBookLocation"
									}
								},
								"DataGrid_ljqujxsDS_UsrBookGenre": {
									"modelConfig": {
										"path": "DataGrid_ljqujxsDS.UsrBookGenre"
									}
								},
								"DataGrid_ljqujxsDS_UsrBookFormat": {
									"modelConfig": {
										"path": "DataGrid_ljqujxsDS.UsrBookFormat"
									}
								},
								"DataGrid_ljqujxsDS_UsrBookAvailableCopies": {
									"modelConfig": {
										"path": "DataGrid_ljqujxsDS.UsrBookAvailableCopies"
									}
								},
								"DataGrid_ljqujxsDS_UsrBookAuthor": {
									"modelConfig": {
										"path": "DataGrid_ljqujxsDS.UsrBookAuthor"
									}
								},
								"DataGrid_ljqujxsDS_Name": {
									"modelConfig": {
										"path": "DataGrid_ljqujxsDS.Name"
									}
								},
								"DataGrid_ljqujxsDS_Id": {
									"modelConfig": {
										"path": "DataGrid_ljqujxsDS.Id"
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
									"columnName": "UsrBookGenre"
								}
							]
						},
						"filterAttributes": []
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
					"PDS_UsrBookTitle": {
						"modelConfig": {
							"path": "PDS.UsrBookTitle"
						}
					},
					"PDS_UsrBookLocation": {
						"modelConfig": {
							"path": "PDS.UsrBookLocation"
						}
					},
					"PDS_UsrBookFormat": {
						"modelConfig": {
							"path": "PDS.UsrBookFormat"
						}
					},
					"PDS_UsrBookAvailableCopies": {
						"modelConfig": {
							"path": "PDS.UsrBookAvailableCopies"
						}
					},
					"PDS_UsrBookPublicationDate": {
						"modelConfig": {
							"path": "PDS.UsrBookPublicationDate"
						}
					},
					"PDS_UsrBookGenre": {
						"modelConfig": {
							"path": "PDS.UsrBookGenre"
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
								"entitySchemaName": "UsrBook",
								"attributes": {
									"UsrBookTitle": {
										"path": "UsrBookTitle"
									},
									"UsrBookLocation": {
										"path": "UsrBookLocation"
									},
									"UsrBookFormat": {
										"path": "UsrBookFormat"
									},
									"UsrBookAvailableCopies": {
										"path": "UsrBookAvailableCopies"
									},
									"UsrBookPublicationDate": {
										"path": "UsrBookPublicationDate"
									},
									"UsrBookGenre": {
										"path": "UsrBookGenre"
									}
								}
							},
							"scope": "viewElement"
						},
						"DataGrid_ljqujxsDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "UsrBook",
								"attributes": {
									"UsrBookTitle": {
										"path": "UsrBookTitle"
									},
									"UsrBookQuantity": {
										"path": "UsrBookQuantity"
									},
									"UsrBookPublicationDate": {
										"path": "UsrBookPublicationDate"
									},
									"UsrBookLocation": {
										"path": "UsrBookLocation"
									},
									"UsrBookGenre": {
										"path": "UsrBookGenre"
									},
									"UsrBookFormat": {
										"path": "UsrBookFormat"
									},
									"UsrBookAvailableCopies": {
										"path": "UsrBookAvailableCopies"
									},
									"UsrBookAuthor": {
										"path": "UsrBookAuthor"
									},
									"Name": {
										"path": "Name"
									}
								}
							}
						},
						"UsrBookDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrBook"
							}
						}
					},
					"primaryDataSourceName": "UsrBookDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});