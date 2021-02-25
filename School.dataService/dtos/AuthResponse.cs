using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace School.Dataservices.Dtos
{
  public  class AuthResponse
    {
        public string response { get; set; }
        public int uid { get; set; }
        public int sid { get; set; }


        public AuthResponse()
        {
            this.response = "Restricted";

        }
    }
}
