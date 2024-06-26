namespace Terrasoft.Configuration
{
    using System;
    using Terrasoft.Common;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;
    [EntityEventListener(SchemaName = "UsrRealityFreedomUI")]
    public class RealityEntityEventListener : BaseEntityEventListener
    {
        public override void OnInserting(object sender, EntityBeforeEventArgs e)
        {
            base.OnInserting(sender, e);
            Entity reality = (Entity)sender;
            decimal price = reality.GetTypedColumnValue<decimal>("UsrPriceUSD");
            if (price > 1000000000)
            {
                e.IsCanceled = true;

                string messageTemplate = new LocalizableString(reality.UserConnection.ResourceStorage, 
                    "UsrRealityEvents", "LocalizableStrings.ValueIsTooBig.Value").ToString();

                string message = string.Format(messageTemplate, "1.0B$");
                throw new Exception(message);
            }
        }
    }
}