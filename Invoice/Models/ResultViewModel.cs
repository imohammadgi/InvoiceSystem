using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Invoice.Models
{
    public class ResultViewModel
    {
        public string[] ProductCode { get; set; }
        public string[] ProductName { get; set; }
        public string[] ProductCount { get; set; }
        public string[] ProductFee { get; set; }
        public string[] ProductDiscount { get; set; }
        public string[] ProductTax { get; set; }
        public string[] ProductTotal { get; set; }
        public string[] ProductTotalAfterDC { get; set; }
        public string[] ProductTotalAfterTax { get; set; }
        public string[] ProductResult { get; set; }


    }
}
