const Student = require('./student')
const Teacher = require('./teacher')
const ClassGroupManager = require('./classGroupManager')
const LessonManager = require('./lessonManager')
const QuizManager = require('./quizManager')
const Question = require('./question')

const lessonManager = new LessonManager()
const quizManager = new QuizManager()
const classGroupManager = new ClassGroupManager()
const classGroup3A = classGroupManager.createClassGroup(3, 'A')
const classGroup4B = classGroupManager.createClassGroup(4, 'B')
const Burak = new Student('Burak', 'Guzel', 3, 'A')
const WhoAmI = new Student('WhoAmI', 'Unknown', 3, 'A')
const MrX = new Teacher('Mr', 'X', 3, 'A', classGroup3A)
const MrsY = new Teacher('Mrs', 'Y', 4, 'B')
const StudentZ = new Student('Student', 'Z', 4, 'B')

classGroupManager.addStudentToClassGroup(Burak, classGroup3A)
classGroupManager.addStudentToClassGroup(WhoAmI, classGroup3A)
classGroupManager.assignTeacherToClassGroup(MrX, classGroup3A)
classGroupManager.addStudentToClassGroup(StudentZ, classGroup4B)
classGroupManager.assignTeacherToClassGroup(MrsY, classGroup4B)

const mathLessonFor3rdGrade = lessonManager.createLesson(1, 'Math Lesson', 3)
const phisicsLessonFor3rdGrade = lessonManager.createLesson(2, 'Physics Lesson', 3)
const scienceLessonFor4thGrade = lessonManager.createLesson(2, 'Science Lesson', 4)

const algebraTopic = lessonManager.createTopic(1, 'Algebra', 'Introduction to Algebra')
const biologyTopic = lessonManager.createTopic(2, 'Algebra 2', 'Advanced Algebra Concepts')

const mathQuiz = lessonManager.createQuiz(1, 'Math Quiz')

lessonManager.addTopic(mathLessonFor3rdGrade, algebraTopic)
lessonManager.addTopic(mathLessonFor3rdGrade, biologyTopic, 1)
lessonManager.addQuiz(mathLessonFor3rdGrade, mathQuiz)
const questionMath1 = new Question({
  text: 'What is 2 + 2?',
  options: ['3', '4', '5', '6'],
  type: 'single-choice',
  correctAnswer: '4',
})

const questionMath2 = new Question({
  text: 'Select all prime numbers.',
  options: ['2', '3', '4', '5'],
  type: 'multiple-choice',
  correctAnswer: ['2', '3', '5'],
})

quizManager.addQuestionToQuiz(mathQuiz, questionMath1)
quizManager.addQuestionToQuiz(mathQuiz, questionMath2)

// get Lessons for 3rd grade
console.log(
  '3rd Grade Lessons:',
  lessonManager.getLessonsByGrade(3).map(lesson => lesson.title)
)
console.log('Math Lesson Details:', mathLessonFor3rdGrade)

console.log(classGroup3A.details)
console.log(classGroup4B.details)
console.log('Students of Mr. X:', classGroup3A.listStudentsByTeacher(MrX))
