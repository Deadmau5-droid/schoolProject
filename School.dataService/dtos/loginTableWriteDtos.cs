using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace School.dataService.dtos
{
    public class loginTableWriteDtos
    {
     
        [Required]
        public string Username { set; get; }
        [Required]
        public string Password { set; get; }
        [Required]
        public Boolean isAdmin { set; get; }
    }
}
