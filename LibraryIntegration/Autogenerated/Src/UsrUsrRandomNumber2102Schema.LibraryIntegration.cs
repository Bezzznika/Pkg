namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrUsrRandomNumber2102Schema

	/// <exclude/>
	public class UsrUsrRandomNumber2102Schema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrUsrRandomNumber2102Schema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrUsrRandomNumber2102Schema(UsrUsrRandomNumber2102Schema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("e7d05a54-f9a0-4a74-a46f-47d875cf6ceb");
			Name = "UsrUsrRandomNumber2102";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("b1c8e1dc-1213-48c2-b949-a7aafc1726cb");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,117,142,193,10,194,48,12,134,239,131,190,67,142,29,136,232,174,226,217,155,7,69,175,18,103,144,194,154,73,218,234,134,248,238,110,93,117,10,26,10,37,244,251,191,191,193,25,62,195,182,117,158,236,66,101,42,99,180,228,46,88,18,236,156,108,144,79,181,93,7,123,36,41,230,179,66,101,119,149,65,55,151,112,172,76,9,101,133,206,193,39,181,34,38,65,95,203,192,37,60,70,196,92,209,19,8,225,169,230,170,77,49,56,72,188,99,249,155,29,244,63,197,58,31,185,15,125,63,73,5,75,96,186,165,180,206,23,35,244,248,81,98,216,67,146,147,238,23,107,120,143,85,160,73,124,178,216,196,237,127,171,144,15,194,175,242,233,154,26,175,71,199,59,255,253,141,116,117,231,9,30,122,224,65,130,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("e7d05a54-f9a0-4a74-a46f-47d875cf6ceb"));
		}

		#endregion

	}

	#endregion

}

