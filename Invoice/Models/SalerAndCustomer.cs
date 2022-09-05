using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Invoice.Models
{
    public class SalerAndCustomer
    {
        public int Id { get; set; }
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
