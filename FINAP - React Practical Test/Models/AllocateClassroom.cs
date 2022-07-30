namespace FINAP___React_Practical_Test
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("AllocateClassroom")]
    public partial class AllocateClassroom
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int AllocateClassroomID { get; set; }

        public int TeacherID { get; set; }

        public int ClassroomID { get; set; }
    }
}
