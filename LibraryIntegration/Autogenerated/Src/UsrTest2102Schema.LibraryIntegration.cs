namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrTest2102Schema

	/// <exclude/>
	public class UsrTest2102Schema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrTest2102Schema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrTest2102Schema(UsrTest2102Schema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("3c7a4d11-f423-4a72-8a18-a96ecb460ad6");
			Name = "UsrTest2102";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("b1c8e1dc-1213-48c2-b949-a7aafc1726cb");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,145,49,79,195,48,16,133,247,252,10,211,41,149,80,202,76,0,169,68,21,12,192,208,86,98,65,66,198,61,53,17,174,29,124,103,218,168,202,127,199,142,155,180,9,101,193,75,236,243,187,239,189,139,39,19,212,27,160,188,80,107,22,89,244,159,69,133,4,155,100,153,27,224,43,87,72,150,28,63,49,237,221,246,79,201,11,80,242,72,84,166,81,84,218,15,89,8,38,36,71,100,190,54,135,47,11,72,179,29,8,75,218,68,251,136,185,85,154,226,155,19,48,239,161,149,172,26,105,38,11,80,196,222,243,110,239,128,141,58,64,207,224,226,113,35,8,80,191,78,154,217,45,83,176,61,33,199,227,180,209,213,61,42,199,74,9,230,135,188,65,50,110,170,59,22,232,240,0,116,176,155,122,77,28,174,153,53,114,232,74,166,234,246,199,170,95,33,51,150,90,33,60,3,34,95,251,161,195,217,5,228,91,94,244,38,78,156,105,112,243,54,105,143,213,246,37,51,133,214,192,194,10,225,136,11,226,100,49,211,43,136,7,250,67,222,182,237,94,175,170,206,178,99,101,90,145,247,157,187,151,152,58,152,111,9,1,6,52,39,68,45,33,121,53,5,193,83,161,32,30,189,169,217,78,64,73,133,86,44,227,118,157,211,197,232,87,102,178,70,245,50,28,5,117,183,19,156,68,206,226,222,11,183,100,24,255,241,111,255,151,232,76,87,251,48,215,251,171,154,141,46,25,36,135,202,249,97,148,149,114,56,68,29,213,63,216,60,185,14,76,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("3c7a4d11-f423-4a72-8a18-a96ecb460ad6"));
		}

		#endregion

	}

	#endregion

}

