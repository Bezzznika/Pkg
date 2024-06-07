define("UsrRealityFreedomUI_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"caption": "#ResourceString(SaveButton_caption)#",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"caption": "#ResourceString(CancelButton_caption)#",
					"color": "default",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "CloseButton",
				"values": {
					"caption": "#ResourceString(CloseButton_caption)#",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none"
				}
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealityFreedomUI"
				}
			},
			{
				"operation": "merge",
				"name": "FeedTabContainerHeaderLabel",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(FeedTabContainerHeaderLabel_caption)#)#",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "29dcb832-0b31-4334-8c54-f43d4778862d",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_tuvhf1s",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_tuvhf1s_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_rvdn6ng",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_rvdn6ng_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCaclAvgPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "RealityIdParameter"
						}
					},
					"icon": "calculator-button-icon"
				},
				"parentName": "Button_tuvhf1s",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunWebServiceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RunWebServiceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceButtonRequest"
					},
					"icon": "disk-warn-button-icon"
				},
				"parentName": "Button_tuvhf1s",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MenuItem_swy8w70",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_swy8w70_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrGetGoldRatesMAINProcess",
							"processRunType": "RegardlessOfThePage"
						}
					},
					"icon": "tag-icon"
				},
				"parentName": "Button_tuvhf1s",
				"propertyName": "menuItems",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "crt.MyButtonRequest"
					},
					"clickMode": "default",
					"icon": "database-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false,
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_smqjxyk",
					"labelPosition": "auto",
					"control": "$NumberAttribute_smqjxyk",
					"visible": true,
					"placeholder": "#ResourceString(UsrPriceUSD_placeholder)#",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_rf2jt7m",
					"labelPosition": "auto",
					"control": "$NumberAttribute_rf2jt7m",
					"visible": true,
					"placeholder": "#ResourceString(UsrArea_placeholder)#",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrCommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(UsrCommissionPercent_label)#",
					"control": "$UsrOfferTypeUsrCommissionPercent",
					"readonly": true,
					"placeholder": "#ResourceString(UsrCommissionPercent_placeholder)#",
					"labelPosition": "auto",
					"tooltip": "#ResourceString(UsrCommissionPercent_tooltip)#",
					"visible": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrCommissionUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_tyhk05m",
					"labelPosition": "auto",
					"control": "$NumberAttribute_tyhk05m",
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_ymfvzsg",
					"labelPosition": "auto",
					"control": "$LookupAttribute_ymfvzsg",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_gc4lcod",
					"labelPosition": "auto",
					"control": "$LookupAttribute_gc4lcod",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_1q3vbtb",
					"labelPosition": "auto",
					"control": "$StringAttribute_1q3vbtb",
					"multiline": false,
					"visible": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrManager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_vgfmbop",
					"labelPosition": "auto",
					"control": "$LookupAttribute_vgfmbop",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_i79k055",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_i79k055_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrManager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_n84rmik",
					"labelPosition": "auto",
					"control": "$LookupAttribute_n84rmik",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_6nt8w3c",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_6nt8w3c_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Country",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_bpv41zz",
					"labelPosition": "auto",
					"control": "$LookupAttribute_bpv41zz",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_lsd4mzi",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_lsd4mzi_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_kzq3jwe",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_lsd4mzi",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_gllk29w",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_kzq3jwe",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_d1rttbu",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_d1rttbu_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealityVisitFreedomUI",
							"defaultValues": [
								{
									"attributeName": "UsrParentReality",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_gllk29w",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_yeph5sh",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_yeph5sh_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_fn3urdpDS"
						}
					}
				},
				"parentName": "FlexContainer_gllk29w",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_tthdq1o",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_tthdq1o_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_gllk29w",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_uokwk6t",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_uokwk6t_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_fn3urdp"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_tthdq1o",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_e86xn71",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_e86xn71_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealityVisitFreedomUI"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_tthdq1o",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_whmrfo7",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_whmrfo7_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_fn3urdp"
					]
				},
				"parentName": "FlexContainer_gllk29w",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_to4luli",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_lsd4mzi",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealityVisitGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_fn3urdp",
					"activeRow": "$GridDetail_fn3urdp_ActiveRow",
					"selectionState": "$GridDetail_fn3urdp_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_fn3urdp_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_fn3urdpDS_Id",
					"columns": [
						{
							"id": "cb84e385-e4a0-771a-5a13-c662969ed989",
							"code": "GridDetail_fn3urdpDS_UsrVisitDateTime",
							"path": "UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_fn3urdpDS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "d4fa1ad6-a7e3-802e-ee88-3ebea3e776d8",
							"code": "GridDetail_fn3urdpDS_UsrPotentialCustomer",
							"path": "UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_fn3urdpDS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "c92ceaff-615b-7bfb-b606-c706ab48e21c",
							"code": "GridDetail_fn3urdpDS_UsrComment",
							"path": "UsrComment",
							"caption": "#ResourceString(GridDetail_fn3urdpDS_UsrComment)#",
							"dataValueType": 28
						},
						{
							"id": "04b5dbf9-5fc6-594f-bee6-c216b21fe82c",
							"code": "GridDetail_fn3urdpDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(GridDetail_fn3urdpDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"bulkActions": []
				},
				"parentName": "GridContainer_to4luli",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_fn3urdp_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_fn3urdp",
							"filters": "$GridDetail_fn3urdp | crt.ToCollectionFilters : 'GridDetail_fn3urdp' : $GridDetail_fn3urdp_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_fn3urdp_SelectionState"
						}
					}
				},
				"parentName": "RealityVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_fn3urdp_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_fn3urdpDS",
							"filters": "$GridDetail_fn3urdp | crt.ToCollectionFilters : 'GridDetail_fn3urdp' : $GridDetail_fn3urdp_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_fn3urdp_SelectionState"
						}
					}
				},
				"parentName": "RealityVisitGridDetail",
				"propertyName": "bulkActions",
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
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"NumberAttribute_smqjxyk": {
						"modelConfig": {
							"path": "PDS.UsrPriceUSD"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"NumberAttribute_rf2jt7m": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidatorr": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 10,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"LookupAttribute_ymfvzsg": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"LookupAttribute_gc4lcod": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"StringAttribute_1q3vbtb": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"LookupAttribute_vgfmbop": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"LookupAttribute_n84rmik": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"LookupAttribute_bpv41zz": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"NumberAttribute_tyhk05m": {
						"modelConfig": {
							"path": "PDS.UsrCommissionUSD"
						}
					},
					"UsrOfferTypeUsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent"
						}
					},
					"GridDetail_fn3urdp": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_fn3urdpDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrPotentialCustomer"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_fn3urdpDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_fn3urdpDS.UsrVisitDateTime"
									}
								},
								"GridDetail_fn3urdpDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_fn3urdpDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_fn3urdpDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_fn3urdpDS.UsrComment"
									}
								},
								"GridDetail_fn3urdpDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_fn3urdpDS.CreatedOn"
									}
								},
								"GridDetail_fn3urdpDS_Id": {
									"modelConfig": {
										"path": "GridDetail_fn3urdpDS.Id"
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
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_fn3urdpDS": [
							{
								"attributePath": "UsrParentReality",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealityFreedomUI",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_fn3urdpDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealityVisitFreedomUI",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.RunWebServiceButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					this.console.log("Run web service button works...");

					var typeObject = await request.$context.LookupAttribute_ymfvzsg;
					var typeId = "";
					if (typeObject) {
						typeId = typeObject.value;
					}
					// get id from type lookup type object

					var offerTypeObject = await request.$context.LookupAttribute_gc4lcod;
					var offerTypeId = "";
					if (offerTypeObject) {
						offerTypeId = offerTypeObject.value;
					}
					// get id from type lookup offer type object

					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();

					/* Specify the URL to retrieve the current rate. Use the coindesk.com external service. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "RealityService";
					const methodName = "GetTotalAmountByTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
					
					//const endpoint = "http://localhost/D5_8.0.8.4758/0/rest/RealtyService/GetTotalAmountByTypeId";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						realtyTypeId: typeId,
						realtyOfferTypeId: offerTypeId,
						entityName: "UsrRealityFreedomUI"
					};
					const response = await httpClientService.post(endpoint, params);
					
					Terrasoft.showInformation("Total price of all items = " + response.body.GetTotalAmountByTypeIdResult);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				handler: async (request, next) => {
					if(request.attributeName === 'NumberAttribute_smqjxyk' || request.attributeName === 'UsrOfferTypeUsrCommissionPercent'){
						var price = await request.$context.NumberAttribute_smqjxyk;
						var percent = await request.$context.UsrOfferTypeUsrCommissionPercent;
						var commission = price*percent/100;
						request.$context.NumberAttribute_tyhk05m=commission;
					}
					return next?.handle(request);
				}
			},{
				request: "crt.MyButtonRequest",
				handler: async (request, next) =>{
					this.console.log("Button works...");
					var price = await request.$context.NumberAttribute_smqjxyk;
					this.console.log("Price = "+ price);
					Terrasoft.showInformation("Price = "+ price);
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});