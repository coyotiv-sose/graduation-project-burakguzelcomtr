class Lesson {
  constructor(id, title, grade, items = []) {
    this.id = id
    this.title = title
    this.grade = grade
    this.items = items
  }

  getLessonByGrade(grade) {
    if (this.grade === grade) {
      return this
    }
    return null
  }
}

module.exports = Lesson
