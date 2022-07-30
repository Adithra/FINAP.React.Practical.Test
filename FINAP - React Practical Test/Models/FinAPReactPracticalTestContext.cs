using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FINAP___React_Practical_Test.Models
{
    public class FinAPReactPracticalTestContext : DbContext
    {
        public FinAPReactPracticalTestContext(DbContextOptions<FinAPReactPracticalTestContext> options) : base(options)
        {

        }

        public virtual DbSet<AllocateClassroom> AllocateClassrooms { get; set; }
        public virtual DbSet<AllocateSubject> AllocateSubjects { get; set; }
        public virtual DbSet<Classroom> Classrooms { get; set; }
        public virtual DbSet<Student> Students { get; set; }
        public virtual DbSet<Subject> Subjects { get; set; }
        public virtual DbSet<Teacher> Teachers { get; set; }
    }
}
