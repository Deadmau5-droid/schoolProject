using School.dataService.modals;
using System;
using System.Collections.Generic;
using System.Text;

namespace School.studentServices.Repository
{
   public interface IstudentTableRepo
    {
        bool SaveChanges();
        IEnumerable<Students> getAllstudents();
        Students getstudentsById(int id);
        void createstudent(Students student);
        void Updatestudent(Students student);
        void Deletestudent(Students student);
    }
}
