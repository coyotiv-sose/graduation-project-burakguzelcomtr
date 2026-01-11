class Teacher {
  constructor(name, surname, grade, level) {
    this.name = name
    this.surname = surname
    this.grade = grade
    this.level = level
    this.classroom = null
  }

  joinClassroom(classroom) {
    if (classroom.grade !== this.grade && classroom.level !== this.level) {
      throw new Error('No matching classroom found')
    }
    classroom.teacher = this
    this.classroom = classroom
  }
}

module.exports = Teacher
