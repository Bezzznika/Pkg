namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;
	using UsrRandomNumber2102;

	#region Class: UsrProcess_18c8fcbMethodsWrapper

	/// <exclude/>
	public class UsrProcess_18c8fcbMethodsWrapper : ProcessModel
	{

		public UsrProcess_18c8fcbMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask2Execute", ScriptTask2Execute);
		}

		#region Methods: Private

		private bool ScriptTask2Execute(ProcessExecutingContext context) {
			var randomNumberGenerator = new RandomNumberGenerator();
			int n = randomNumberGenerator.Generate(0, 100); // Assuming Generate(min, max) generates a random number between min and max
			return true;
		}

		#endregion

	}

	#endregion

}

