using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace School.dataService.dtos
{
    public class studentTableWriteDtos
    {
  
        [Required]
        public string userName { get; set; }
        [Required]
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
        public string fatherName { get; set; }
        public string course { get; set; }
        public string dateOfBirth { get; set; }
    }
}
