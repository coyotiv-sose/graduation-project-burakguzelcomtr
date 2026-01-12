class Teacher {
  constructor(name, surname, grade, level) {
    this.name = name
    this.surname = surname
    this.grade = grade
    this.level = level
    this.classGroup = this.classGroup || null
  }
}

module.exports = Teacher
