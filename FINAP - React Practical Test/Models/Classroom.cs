namespace FINAP___React_Practical_Test
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Classroom")]
    public partial class Classroom
    {
        [Key]
        public int ClassroomID { get; set; }

        [Required]
        [StringLength(50)]
        public string ClassroomName { get; set; }
    }
}
