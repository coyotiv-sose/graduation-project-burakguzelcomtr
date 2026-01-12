class ClassGroup {
  students = []

  teacher = null

  constructor(grade, level) {
    this.grade = grade
    this.level = level
  }

  get details() {
    return `
        # Classroom ${this.grade}/${this.level}

        Teacher:
        ${this.teacher ? this.teacher.name + ' ' + this.teacher.surname : 'Not assigned'}

        ${this.students.length} students:
        ${this.students.map(student => student.name + ' ' + student.surname).join(', ')}
        `
  }
  listStudentsByTeacher(teacher) {
    if (!this.teacher) {
      return 'No teacher assigned to this class group.'
    }
    
    if (this.teacher !== teacher) {
      throw new Error('Only the assigned teacher can view the students.')
    }
    return this.students.map(student => student.name + ' ' + student.surname).join(', ')
  }
  set details(_) {
    throw new Error('You cannot edit classroom details directly.')
  }
}

module.exports = ClassGroup
