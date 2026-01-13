const Lesson = require('./lesson')
const Quiz = require('./quiz')
const Topic = require('./topic')

class LessonManager {
  constructor() {
    this.lessons = []
  }

  createLesson(id, title, grade) {
    const lesson = new Lesson(id, title, grade)
    this.lessons.push(lesson)
    return lesson
  }

  createTopic(id, title, content) {
    return new Topic(id, title, content)
  }

  createQuiz(id, title, questions = []) {
    return new Quiz(id, title, questions)
  }

  addTopic(lesson, topic, order = null) {
    lesson.items.push({
      order: order ?? lesson.items.length + 1,
      content: topic,
    })
  }

  addQuiz(lesson, quiz, order = null) {
    lesson.items.push({
      order: order ?? lesson.items.length + 1,
      content: quiz,
    })
  }

  getLessonsByGrade(grade) {
    return this.lessons.filter(lesson => lesson.getLessonByGrade(grade))
  }
}

module.exports = LessonManager
