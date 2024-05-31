namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealityEventsSchema

	/// <exclude/>
	public class UsrRealityEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealityEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealityEventsSchema(UsrRealityEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("c6e6f240-880e-4d72-98db-1720b2d7501f");
			Name = "UsrRealityEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("5cb4528b-0526-4564-a3e5-c2360758797c");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,193,110,219,48,12,189,251,43,8,99,7,27,8,132,246,218,108,5,154,44,29,2,20,221,208,56,189,20,61,40,50,227,106,176,36,67,146,211,101,67,254,125,148,229,108,118,210,98,227,201,166,30,31,223,123,160,230,10,93,195,5,66,129,214,114,103,182,158,205,141,222,202,170,181,220,75,163,147,95,9,80,181,78,234,10,86,123,231,81,77,7,157,225,148,82,70,191,247,102,145,45,180,151,94,162,251,15,8,91,236,80,251,30,249,212,117,247,93,235,78,146,0,141,54,91,137,23,84,252,158,212,195,39,72,215,206,62,32,175,9,117,107,17,75,163,214,203,52,127,238,166,155,118,83,75,1,162,230,206,65,15,122,131,16,174,96,198,29,190,241,210,177,196,16,6,124,102,71,202,101,137,176,51,178,132,175,122,169,29,90,79,150,50,179,249,142,194,131,67,93,162,157,64,100,156,225,150,252,117,188,55,182,114,128,249,31,194,191,212,161,54,36,130,13,233,142,60,152,79,71,192,200,11,54,58,162,16,178,216,201,227,192,24,92,162,144,138,215,208,88,41,66,96,253,20,251,130,190,216,55,88,206,77,221,42,253,200,235,22,63,246,216,235,44,164,250,45,12,172,87,159,211,147,237,114,11,89,36,187,134,203,139,99,229,35,204,216,88,40,100,75,55,231,90,96,141,37,169,240,182,197,105,114,134,114,222,134,211,160,187,116,188,194,2,85,83,115,31,84,107,124,133,59,35,72,250,79,190,169,113,213,225,178,163,151,53,37,70,151,171,41,124,58,91,246,128,206,180,86,16,202,88,162,153,192,217,158,80,131,203,137,39,151,78,32,61,219,225,88,23,205,210,21,198,204,100,21,255,210,156,21,166,215,144,255,211,6,201,143,13,118,107,172,226,62,59,177,71,107,47,217,197,236,195,105,208,161,252,139,53,175,157,251,197,15,129,77,176,119,28,63,65,31,146,241,215,33,57,252,6,92,137,156,193,225,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("a2e75e0e-9bc5-ca40-3dd8-3f85ec666222"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("5cb4528b-0526-4564-a3e5-c2360758797c"),
				CreatedInSchemaUId = new Guid("c6e6f240-880e-4d72-98db-1720b2d7501f"),
				ModifiedInSchemaUId = new Guid("c6e6f240-880e-4d72-98db-1720b2d7501f")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("c6e6f240-880e-4d72-98db-1720b2d7501f"));
		}

		#endregion

	}

	#endregion

}

