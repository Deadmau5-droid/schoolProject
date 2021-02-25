using School.dataService.modals;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace School.dataService
{
   public class school_DBcontext:DbContext
    {
        public school_DBcontext(DbContextOptions<school_DBcontext> opt) : base(opt)
        {

        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
        public DbSet<loginTable> loginTable { get; set; }
        public DbSet<Students> students { get; set; }
    }
}
