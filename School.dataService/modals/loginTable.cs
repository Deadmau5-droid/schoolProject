using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace School.dataService.modals
{
    public class loginTable
    {   [Key]
        public int id { get; set; }
        [Required]
        public string Username { set; get; }
        [Required]
        public string Password { set;get; }
        [Required]
        public Boolean isAdmin { set; get; }

    }
}
