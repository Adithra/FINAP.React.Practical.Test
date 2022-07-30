namespace FINAP___React_Practical_Test
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Student")]
    public partial class Student
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int StudentID { get; set; }

        [Required]
        [StringLength(50)]
        public string FirstName { get; set; }

        [Required]
        [StringLength(50)]
        public string LastName { get; set; }

        [Required]
        [StringLength(50)]
        public string ContactPerson { get; set; }

        [Required]
        [StringLength(25)]
        public string ContactNo { get; set; }

        [Required]
        [StringLength(50)]
        public string EmailAddress { get; set; }

        public DateTime DateOfBirth { get; set; }

        public int Age { get; set; }

        public int ClassroomID { get; set; }
    }
}
