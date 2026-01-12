class Student {
  constructor(name, surname, grade, level) {
    this.name = name
    this.surname = surname
    this.grade = grade
    this.level = level
    this.classGroup = null
  }

  joinClass(classGroup) {
    if (classGroup.grade !== this.grade && classGroup.level !== this.level) {
      throw new Error('No matching classroom found')
    }
    classGroup.students.push(this)
    this.classGroup = classGroup
  }
}

module.exports = Student
