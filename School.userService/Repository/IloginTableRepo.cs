using School.dataService.modals;
using System;
using System.Collections.Generic;
using System.Text;


namespace School.UserServices.Repository
{
     public interface IloginTableRepo
    {
        bool SaveChanges();
        IEnumerable<loginTable> getAllUsers();
        loginTable getUsersById(int id);
        void createUser(loginTable user);
        void UpdateUser(loginTable user);
        void DeleteUser(loginTable user);
        loginTable getUserByName(string userName);
    }
}
