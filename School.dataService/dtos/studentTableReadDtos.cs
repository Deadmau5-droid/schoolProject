        using System;
using System.Collections.Generic;
using System.Text;

namespace School.dataService.dtos
{
    public class studentTableReadDtos
    {
     
        public int id { get; set; }
        public string userName { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
        public string fatherName { get; set; }
        public string course { get; set; }
        public string dateOfBirth { get; set; }
    }
}
