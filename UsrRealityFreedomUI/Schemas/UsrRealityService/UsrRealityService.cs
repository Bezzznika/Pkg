 namespace Terrasoft.Configuration
{
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common; 
    using System;
    using System.Web.SessionState;
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class RealityService : BaseService, IReadOnlySessionState
    {
        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]

        public decimal GetTotalAmountByTypeId(string realityTypeId, string realityOfferTypeId,
            string entityName)
        {
            if (string.IsNullOrEmpty(realityTypeId) || string.IsNullOrEmpty(realityOfferTypeId)
                || string.IsNullOrEmpty(entityName))
            {
                return -1;
            }
            Select select = new Select(UserConnection)
                .Column(Func.Sum("UsrPriceUSD"))
                .From(entityName)
                .Where("UsrType").IsEqual(Column.Parameter(new Guid(realityTypeId)))
                .And("UsrOfferType").IsEqual(Column.Parameter(new Guid(realityOfferTypeId)))
                as Select;
            decimal result = select.ExecuteScalar<decimal>();
            return result;
        }
        [OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]

        public string GetExample()
        {
            return "OK!";
        }

    }
}