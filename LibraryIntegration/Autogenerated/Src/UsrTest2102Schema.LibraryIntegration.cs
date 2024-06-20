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
			UId = new Guid("0eb46b85-81f6-4def-9ed6-52a1ac532786");
			Name = "UsrTest2102";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d348eb8c-e1b3-4bc3-857b-aceee67ef672");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,117,81,79,75,195,48,20,191,23,250,29,226,78,29,72,240,236,84,152,101,232,65,61,108,130,23,65,98,246,88,139,49,169,121,47,206,50,250,221,77,150,110,107,187,45,151,228,189,188,223,191,196,97,169,87,108,81,35,193,55,127,45,44,136,165,111,240,87,129,95,56,73,19,215,185,30,148,252,5,136,63,18,85,190,159,38,149,251,84,165,100,82,9,68,22,186,115,248,113,128,52,251,3,233,200,216,52,217,164,9,243,171,178,229,175,32,96,65,201,104,85,111,135,115,85,130,38,246,81,236,207,91,210,237,124,36,62,65,153,141,227,68,75,28,86,135,128,221,50,13,235,14,123,54,158,196,193,102,64,45,176,214,146,133,196,55,72,214,7,188,99,81,2,30,128,90,205,105,152,201,226,53,115,86,29,75,147,173,15,69,167,31,86,52,143,149,209,8,207,128,40,86,33,127,172,189,79,177,22,101,47,60,247,194,81,49,72,77,250,100,59,32,159,105,116,22,22,78,74,79,185,32,65,14,115,179,132,108,8,104,93,239,112,247,102,89,239,69,247,100,185,209,20,148,231,254,91,166,158,45,64,162,133,99,125,114,86,247,232,58,19,205,225,40,5,201,130,101,189,159,147,80,81,105,52,131,241,217,199,242,78,208,40,224,111,182,36,120,42,53,100,163,119,125,64,230,194,173,10,186,24,13,109,157,128,237,158,250,122,115,213,176,209,37,3,222,118,206,68,210,78,169,227,40,126,107,254,1,193,57,232,248,38,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("0eb46b85-81f6-4def-9ed6-52a1ac532786"));
		}

		#endregion

	}

	#endregion

}

