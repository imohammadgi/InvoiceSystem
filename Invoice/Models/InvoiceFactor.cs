using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Invoice.Models
{
    public class InvoiceFactor
    {
        public int Id { get; set; }
        public int SalerId { get; set; }
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


    }
}
