using School.dataService;
using School.dataService.modals;
using School.studentServices.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace UserServices.Repository
{
   public class sqlStudentTableRepo : IstudentTableRepo
    {
        private readonly school_DBcontext _context;

        public sqlStudentTableRepo(school_DBcontext context)
        {
            _context = context;

        }
    public void createstudent(Students student)
        {
            if (student == null)
            {
                throw new ArgumentNullException(nameof(student));
            }

            _context.students.Add(student);

        }

        public void Deletestudent(Students student)
        {
            if (student == null)
            {
                throw new ArgumentNullException(nameof(student));
            }
            _context.students.Remove(student);
        }

        public IEnumerable<Students> getAllstudents()
        {
            return _context.students.ToList();
        }

        public Students getstudentsById(int id)
        {
            return _context.students.FirstOrDefault(p => p.id == id);
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void Updatestudent(Students student)
        {
           
        }
    }
}
