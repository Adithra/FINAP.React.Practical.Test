namespace FINAP___React_Practical_Test
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Teacher")]
    public partial class Teacher
    {
        [Key]
        public int TeacherID { get; set; }

        [Required]
        [StringLength(50)]
        public string FirstName { get; set; }

        [Required]
        [StringLength(50)]
        public string LastName { get; set; }

        [Required]
        [StringLength(25)]
        public string ContactNo { get; set; }

        [Required]
        [StringLength(50)]
        public string EmailAddress { get; set; }
    }
}
