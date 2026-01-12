const ClassGroup = require('./classGroup')

class ClassGroupManager {
  createClassGroup(grade, level) {
    return new ClassGroup(grade, level)
  }

  addStudentToClassGroup(student, classGroup) {
    student.joinClass(classGroup)
  }

  assignTeacherToClassGroup(teacher, classGroup) {
    teacher.joinClass(classGroup)
  }
}

module.exports = ClassGroupManager
