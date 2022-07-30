namespace FINAP___React_Practical_Test
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("AllocateSubject")]
    public partial class AllocateSubject
    {
        [StringLength(10)]
        public string AllocateSubjectID { get; set; }

        public int TeacherID { get; set; }

        public int SubjectID { get; set; }
    }
}
