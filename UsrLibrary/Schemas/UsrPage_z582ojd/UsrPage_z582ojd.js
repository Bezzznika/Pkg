define("UsrPage_z582ojd", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "PageTitle"
			},
			{
				"operation": "remove",
				"name": "ContinueInOtherPageButton"
			},
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"caption": "#ResourceString(CancelButton_caption)#",
					"color": "warn",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"color": "accent",
					"caption": "#ResourceString(SaveButton_caption)#"
				}
			},
			{
				"operation": "insert",
				"name": "ContinueInOtherPageButton",
				"values": {
					"type": "crt.Button",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-icon",
					"visible": false,
					"icon": "open-button-icon",
					"clicked": {
						"request": "crt.ContinueInOtherPageRequest"
					},
					"caption": "#ResourceString(ContinueInOtherPageButton_caption)#",
					"color": "default",
					"layoutConfig": {}
				},
				"parentName": "TitleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_cylqel9",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_cylqel9_caption)#)#",
					"labelType": "headline-1-small",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "MainHeader",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_xvfig7z",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_91588kz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_l7sn0rq",
					"labelPosition": "above",
					"control": "$StringAttribute_l7sn0rq"
				},
				"parentName": "GridContainer_xvfig7z",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_79t7q2k",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_vdpxwfb",
					"labelPosition": "above",
					"control": "$LookupAttribute_vdpxwfb",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_xvfig7z",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_amw56bq",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_amw56bq_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_79t7q2k",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_5r7b7qq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PhoneInput_76zpqgf",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.PhoneInput",
					"label": "$Resources.Strings.StringAttribute_34o3fuo",
					"labelPosition": "auto",
					"control": "$StringAttribute_34o3fuo",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_5r7b7qq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmailInput_fpzcdl8",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.StringAttribute_g89pl8e",
					"labelPosition": "above",
					"control": "$StringAttribute_g89pl8e",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_5r7b7qq",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_lt1ddg2",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
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
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_zco7188",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_eubjoib",
					"labelPosition": "above",
					"control": "$NumberAttribute_eubjoib",
					"visible": true,
					"placeholder": "#ResourceString(NumberInput_zco7188_placeholder)#",
					"tooltip": ""
				},
				"parentName": "GridContainer_lt1ddg2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_4sezf2l",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_ga8m1al",
					"labelPosition": "above",
					"control": "$NumberAttribute_ga8m1al",
					"visible": true,
					"placeholder": "#ResourceString(NumberInput_4sezf2l_placeholder)#",
					"tooltip": ""
				},
				"parentName": "GridContainer_lt1ddg2",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_k2i0x0f",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_4wmrxp6",
					"labelPosition": "above",
					"control": "$NumberAttribute_4wmrxp6",
					"visible": true,
					"placeholder": "#ResourceString(NumberInput_k2i0x0f_placeholder)#",
					"tooltip": ""
				},
				"parentName": "GridContainer_lt1ddg2",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_rgibnan",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_h1669vu",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DateTimeAttribute_bhej0y4",
					"labelPosition": "above",
					"control": "$DateTimeAttribute_bhej0y4",
					"visible": true,
					"placeholder": "#ResourceString(DateTimePicker_h1669vu_placeholder)#",
					"tooltip": ""
				},
				"parentName": "GridContainer_rgibnan",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_us4qm8h",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_r8ztsnh",
					"labelPosition": "above",
					"control": "$DateTimeAttribute_r8ztsnh",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_rgibnan",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_x2ei66y",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Input_128egw9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": true,
					"label": "$Resources.Strings.StringAttribute_5ohox7c",
					"labelPosition": "above",
					"control": "$StringAttribute_5ohox7c",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_x2ei66y",
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
					"StringAttribute_l7sn0rq": {
						"modelConfig": {
							"path": "UsrUserDS.UsrName"
						}
					},
					"LookupAttribute_vdpxwfb": {
						"modelConfig": {
							"path": "UsrUserDS.UsrMemberTypeId"
						}
					},
					"StringAttribute_34o3fuo": {
						"modelConfig": {
							"path": "UsrUserDS.UsrContactNumber"
						}
					},
					"StringAttribute_g89pl8e": {
						"modelConfig": {
							"path": "UsrUserDS.UsrEmail"
						}
					},
					"NumberAttribute_eubjoib": {
						"modelConfig": {
							"path": "UsrUserDS.UsrActiveOrders"
						}
					},
					"NumberAttribute_ga8m1al": {
						"modelConfig": {
							"path": "UsrUserDS.UsrCanceledOrders"
						}
					},
					"NumberAttribute_4wmrxp6": {
						"modelConfig": {
							"path": "UsrUserDS.UsrFines"
						}
					},
					"DateTimeAttribute_bhej0y4": {
						"modelConfig": {
							"path": "UsrUserDS.UsrBirthDate"
						}
					},
					"DateTimeAttribute_r8ztsnh": {
						"modelConfig": {
							"path": "UsrUserDS.CreatedOn"
						}
					},
					"StringAttribute_5ohox7c": {
						"modelConfig": {
							"path": "UsrUserDS.UsrAddress"
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