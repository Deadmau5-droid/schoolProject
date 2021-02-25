using AutoMapper;
using School.dataService.dtos;
using School.dataService.modals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace School.dataService.Profiles
{
    class schoolProfiles:Profile
    {
        public schoolProfiles()
        {   //logintable
            CreateMap<loginTable, loginTableReadDtos>();
            CreateMap<loginTableWriteDtos, loginTable>();
            CreateMap<loginTable,loginTableWriteDtos>();
            //students
            CreateMap<Students,studentTableReadDtos>();
            CreateMap<studentTableWriteDtos, Students>();
            CreateMap<Students, studentTableReadDtos>();
        }
    }
}
