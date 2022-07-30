namespace FINAP___React_Practical_Test
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Subject")]
    public partial class Subject
    {
        [Key]
        public int SubjectID { get; set; }

        [Required]
        [StringLength(25)]
        public string SubjectName { get; set; }
    }
}
