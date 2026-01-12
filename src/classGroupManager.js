const ClassGroup = require('./classGroup')

class ClassGroupManager {
  createClassGroup(grade, level) {
    return new ClassGroup(grade, level)
  }

  addStudentToClassGroup(student, classGroup) {
    if (classGroup.grade !== student.grade && classGroup.level !== student.level) {
      throw new Error('No matching classroom found')
    }
    classGroup.students.push(student)
  }

  assignTeacherToClassGroup(teacher, classGroup) {
    if (classGroup.grade !== teacher.grade && classGroup.level !== teacher.level) {
      throw new Error('No matching classroom found')
    }
    classGroup.teacher = teacher
  }
}

module.exports = ClassGroupManager
