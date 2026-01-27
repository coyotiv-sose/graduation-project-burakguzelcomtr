const Student = require('./student')
const Teacher = require('./teacher')
const ClassGroupManager = require('./classGroupManager')
const LessonManager = require('./lessonManager')
const QuizManager = require('./quizManager')
const Question = require('./question')

const lessonManager = new LessonManager()
const quizManager = new QuizManager()
const classGroupManager = new ClassGroupManager()

// Seed: Class groups
const classGroup3A = classGroupManager.createClassGroup(3, 'A')
const classGroup4B = classGroupManager.createClassGroup(4, 'B')

// Seed: Teachers
const teachers = {
  mrX: new Teacher('Mr', 'X', 3, 'A'),
  mrsY: new Teacher('Mrs', 'Y', 4, 'B'),
}

// Seed: Students
const students = {
  burak: new Student('Burak', 'Guzel', 3, 'A'),
  whoAmI: new Student('WhoAmI', 'Unknown', 3, 'A'),
  studentZ: new Student('Student', 'Z', 4, 'B'),
}

classGroupManager.addStudentToClassGroup(students.burak, classGroup3A)
classGroupManager.addStudentToClassGroup(students.whoAmI, classGroup3A)
classGroupManager.assignTeacherToClassGroup(teachers.mrX, classGroup3A)

classGroupManager.addStudentToClassGroup(students.studentZ, classGroup4B)
classGroupManager.assignTeacherToClassGroup(teachers.mrsY, classGroup4B)

// Seed: Single Lesson
const lesson = lessonManager.createLesson(1, 'Math Lesson', 3)

// Seed: Topics
const topics = {
  algebra: lessonManager.createTopic(1, 'Algebra', 'Introduction to Algebra'),
  algebra2: lessonManager.createTopic(2, 'Algebra 2', 'Advanced Algebra Concepts'),
  motion: lessonManager.createTopic(3, 'Motion', 'Speed, distance and time basics'),
  forces: lessonManager.createTopic(4, 'Forces', 'Newton\'s laws overview'),
  cells: lessonManager.createTopic(5, 'Cells', 'Introduction to cells'),
  ecosystems: lessonManager.createTopic(6, 'Ecosystems', 'Food chains and habitats'),
  ancient: lessonManager.createTopic(7, 'Ancient Civilizations', 'Early societies overview'),
  maps: lessonManager.createTopic(8, 'Maps & Timeline', 'Reading maps and timelines'),
}

lessonManager.addTopic(lesson, topics.algebra)
lessonManager.addTopic(lesson, topics.algebra2, 2)
lessonManager.addTopic(lesson, topics.motion, 3)
lessonManager.addTopic(lesson, topics.forces, 4)
lessonManager.addTopic(lesson, topics.cells, 5)
lessonManager.addTopic(lesson, topics.ecosystems, 6)
lessonManager.addTopic(lesson, topics.ancient, 7)
lessonManager.addTopic(lesson, topics.maps, 8)

// Seed: Quiz + Questions
const quizzes = {
  mathQuiz: lessonManager.createQuiz(1, 'Math Quiz'),
  physicsQuiz: lessonManager.createQuiz(2, 'Physics Quiz'),
  scienceQuiz: lessonManager.createQuiz(3, 'Science Quiz'),
  historyQuiz: lessonManager.createQuiz(4, 'History Quiz'),
}

lessonManager.addQuiz(lesson, quizzes.mathQuiz)
lessonManager.addQuiz(lesson, quizzes.physicsQuiz)
lessonManager.addQuiz(lesson, quizzes.scienceQuiz)
lessonManager.addQuiz(lesson, quizzes.historyQuiz)

const mathQuestions = [
  new Question({
    text: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    type: 'single-choice',
    correctAnswer: '4',
  }),
  new Question({
    text: 'Select all prime numbers.',
    options: ['2', '3', '4', '5'],
    type: 'multiple-choice',
    correctAnswer: ['2', '3', '5'],
  }),
]

const physicsQuestions = [
  new Question({
    text: 'What is the unit of speed?',
    options: ['m/s', 'kg', 'N', 'm'],
    type: 'single-choice',
    correctAnswer: 'm/s',
  }),
  new Question({
    text: 'Select forces from the list.',
    options: ['Gravity', 'Friction', 'Mass', 'Energy'],
    type: 'multiple-choice',
    correctAnswer: ['Gravity', 'Friction'],
  }),
]

const scienceQuestions = [
  new Question({
    text: 'Which is the basic unit of life?',
    options: ['Atom', 'Cell', 'Organ', 'Tissue'],
    type: 'single-choice',
    correctAnswer: 'Cell',
  }),
]

const historyQuestions = [
  new Question({
    text: 'Which is NOT a tool to study history?',
    options: ['Maps', 'Timelines', 'Telescopes', 'Artifacts'],
    type: 'single-choice',
    correctAnswer: 'Telescopes',
  }),
]

mathQuestions.forEach(question => quizManager.addQuestionToQuiz(quizzes.mathQuiz, question))
physicsQuestions.forEach(question => quizManager.addQuestionToQuiz(quizzes.physicsQuiz, question))
scienceQuestions.forEach(question => quizManager.addQuestionToQuiz(quizzes.scienceQuiz, question))
historyQuestions.forEach(question => quizManager.addQuestionToQuiz(quizzes.historyQuiz, question))

 

// Demo output
console.log(
  '3rd Grade Lessons:',
  lessonManager.getLessonsByGrade(3).map(item => item.title)
)
console.log('Lesson Details:', lesson) 
console.log(classGroup3A.details)
console.log(classGroup4B.details)
console.log('Students of Mr. X:', classGroup3A.listStudentsByTeacher(teachers.mrX))
