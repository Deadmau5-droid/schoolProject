using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using School.studentServices.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserServices.Repository;
using School.dataService.dtos;
using School.dataService.modals;
using School.Dataservices.Dtos;
using School.UserServices.Repository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace schoolProject.Controllers
{
    [Route("api")]
    [ApiController]
    public class SchoolController : ControllerBase
    {
        private readonly IloginTableRepo _logintable;
        private readonly IstudentTableRepo _studentTable;
        private readonly IMapper _mapper;

        public SchoolController(IloginTableRepo logintable, IstudentTableRepo studentTable, IMapper mapper)
        {
            _logintable = logintable;
            _studentTable = studentTable;
            _mapper = mapper;

        }

        [Route("school/login")]
        // GET: api/<SchoolController>
        [HttpGet]
        public ActionResult<IEnumerable<loginTableReadDtos>> GetAllAdmin()
        {
            var user = _logintable.getAllUsers();
            return Ok(_mapper.Map<IEnumerable<loginTableReadDtos>>(user));
        }
        // GET api/<SchoolController>/5
        [HttpGet("school/login/{id}")]
        public ActionResult<loginTableReadDtos> GetAdminById(int id)
        {
            var user = _logintable.getUsersById(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(_mapper.Map<loginTableReadDtos>(user));
        }
        [HttpGet("school/user/{userName}")]
        public ActionResult<loginTableReadDtos> GetAdminByName(string  userName)
        {
            var user = _logintable.getUserByName(userName);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(_mapper.Map<loginTableReadDtos>(user));
        }


        [HttpPost("school/login")]
        public ActionResult<loginTableReadDtos> CreateAdmin(loginTableWriteDtos user)
        {
            var usermodel = _mapper.Map<loginTable>(user);

            if (_logintable.getAllUsers().ToList().Any(usr=>usr.Username==usermodel.Username)        ) 
            {
                return Conflict("Duplicate User");
            }
            _logintable.createUser(usermodel);
            
            _logintable.SaveChanges();
            return Ok(_mapper.Map<loginTableReadDtos>(usermodel));
        }

        // PUT api/<SchoolController>/5
        [HttpPut("school/login/{id}")]
        public ActionResult UpdateAdmin(int id, loginTableWriteDtos userCreatDtos)
        {
            var userModelfromRepo = _logintable.getUsersById(id);
            if (userModelfromRepo == null)
            {
                return NotFound();
            }

            _mapper.Map(userCreatDtos, userModelfromRepo);
            _logintable.UpdateUser(userModelfromRepo);
            _logintable.SaveChanges();
            return NoContent();

        }

        // DELETE api/<SchoolController>/5
        [HttpDelete("school/login/{id}")]
        public ActionResult DeleteAdmin(int id)
        {
            var userModelfromRepo = _logintable.getUsersById(id);
            if (userModelfromRepo == null)
            {
                return NotFound();
            }
            _logintable.DeleteUser(userModelfromRepo);
            _logintable.SaveChanges();
            return NoContent();
        }


        [HttpPost("school/auth")]
        public ActionResult<AuthResponse> Auth(AuthRead user)
        {

            var userlist = _logintable.getAllUsers();
            var authResp = new AuthResponse();
            foreach (var i in userlist.ToList())
            {
                if (i.Username == user.Username)
                {
                    if (i.Password == user.Password)
                    {
                        authResp.response = "Cleared";
                        authResp.uid = i.id;
                        if (i.isAdmin == false)
                        {
                            authResp.sid = _studentTable.getAllstudents().ToList().Single(p => p.userName == user.Username).id;
                        }
                        else
                        {
                            authResp.sid = 0;
                        }
                    }
                }

            }

            return Ok(authResp);
        }






        [Route("school/student")]
        // GET: api/<SchoolController>
        [HttpGet]
        public ActionResult<IEnumerable<studentTableReadDtos>> GetAllStudents()
        {
            var student = _studentTable.getAllstudents();
            return Ok(_mapper.Map<IEnumerable<studentTableReadDtos>>(student));
        }
        // GET api/<SchoolController>/5
        [HttpGet("school/student/{id}")]
        public ActionResult<studentTableReadDtos> GetStudentById(int id)
        {
            var student = _studentTable.getstudentsById(id);
            if (student == null)
            {
                return NotFound();
            }
            return Ok(_mapper.Map<studentTableReadDtos>(student));
        }

        [HttpPost("school/student")]
        public ActionResult<studentTableReadDtos> CreateStudent(studentTableWriteDtos student)
        {
            var studentmodel = _mapper.Map<Students>(student);

            if (_studentTable.getAllstudents().ToList().Any(usr => usr.firstName == studentmodel.firstName))
            {
                return Conflict("Duplicate User");
            }
            _studentTable.createstudent(studentmodel);

            _studentTable.SaveChanges();
            return Ok(_mapper.Map<studentTableReadDtos>(studentmodel));
        }

        // PUT api/<SchoolController>/5
        [HttpPut("school/student/{id}")]
        public ActionResult UpdateStudent(int id, studentTableWriteDtos student)
        {
            var studentModelfromRepo = _studentTable.getstudentsById(id);
            if (studentModelfromRepo == null)
            {
                return NotFound();
            }

            _mapper.Map(student, studentModelfromRepo);
            _studentTable.Updatestudent(studentModelfromRepo);
            _studentTable.SaveChanges();
            return NoContent();

        }

        // DELETE api/<SchoolController>/5
        [HttpDelete("school/student/{id}")]
        public ActionResult DeleteStudent(int id)
        {
            var studentModelfromRepo = _studentTable.getstudentsById(id);
            if (studentModelfromRepo == null)
            {
                return NotFound();
            }
            _studentTable.Deletestudent(studentModelfromRepo);
            _studentTable   .SaveChanges();
            return NoContent();
        }
    }
}
