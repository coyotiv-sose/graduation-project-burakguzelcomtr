class Classroom {
  students = []

  teacher = null

  constructor(grade, level) {
    this.grade = grade
    this.level = level
  }

  matches(person) {
    return person.grade === this.grade && person.level === this.level
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

  set details(_) {
    throw new Error('You cannot edit classroom details directly.')
  }
}

module.exports = Classroom
