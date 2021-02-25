using School.dataService;
using School.dataService.modals;
using School.UserServices.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace UserServices.Repository
{
    public class sqlLoginTableRepo : IloginTableRepo
    {
        private readonly school_DBcontext _context;

        public sqlLoginTableRepo(school_DBcontext context)
        {
            _context = context;

        }
        public void createUser(loginTable user)
        {
           if(user==null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            _context.loginTable.Add(user);
        }

        public void DeleteUser(loginTable user)
        {
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            _context.loginTable.Remove(user);

        }

        public IEnumerable<loginTable> getAllUsers()
        {
            return _context.loginTable.ToList();
        }

        public loginTable getUsersById(int id)
        {
            return _context.loginTable.FirstOrDefault(p=>p.id==id);

        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void UpdateUser(loginTable user)
        {
            
        }

        public  loginTable getUserByName(string userName)
        {
            return _context.loginTable.Single(p => p.Username == userName);
        }

    }
}
