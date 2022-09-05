using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Invoice.Models
{
    public class InvoiceFactor
    {
        public int Id { get; set; }
        public int Row { get; set; }
        public int ProductCode { get; set; }
        public string ProductName { get; set; }
        public string ProductCount { get; set; }
        public string ProductFee { get; set; }
        public string ProductDiscount { get; set; }
        public string ProductTax { get; set; }
        public string ProductTotal { get; set; }
        public string ProductTotalAfterDC { get; set; }
        public string ProductTotalAfterTax { get; set; }
        public string ProductTotalDiscount { get; set; }
        public string ProductTotalTax { get; set; }
        public string ProductAllTotal { get; set; }
        public string ProductAllTotalAfterDC { get; set; }
        public string ProductAllTotalAfterTax { get; set; }

        public string SalerName { get; set; }
        public int SalerEconomicNumber { get; set; }
        public int SalerRegisterNumber { get; set; }
        public string SalerState { get; set; }
        public string SalerCity { get; set; }
        public int SalerPostalCode { get; set; }
        public int SalerPhone { get; set; }
        public string SalerAddress { get; set; }
        public int SalerNationCode { get; set; }
        public int SalerFax { get; set; }
        public string CustomerName { get; set; }
        public int CustomerEconomicNumber { get; set; }
        public int CustomerRegisterNumber { get; set; }
        public string CustomerState { get; set; }
        public string CustomerCity { get; set; }
        public int CustomerPostalCode { get; set; }
        public int CustomerPhone { get; set; }
        public string CustomerAddress { get; set; }
        public int CustomerNationCode { get; set; }
        public int CustomerFax { get; set; }


    }
}
