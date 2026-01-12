const Student = require('./student')
const Teacher = require('./teacher')
const ClassGroupManager = require('./classGroupManager')

const classGroupManager = new ClassGroupManager()
const classGroup3A = classGroupManager.createClassGroup(3, 'A')
const classGroup4B = classGroupManager.createClassGroup(4, 'B')

const Burak = new Student('Burak', 'Guzel', 3, 'A')
const WhoAmI = new Student('WhoAmI', 'Unknown', 3, 'A')
const MrX = new Teacher('Mr', 'X', 3, 'A')
const MrsY = new Teacher('Mrs', 'Y', 4, 'B')
const StudentZ = new Student('Student', 'Z', 4, 'B')

classGroupManager.addStudentToClassGroup(Burak, classGroup3A)
classGroupManager.addStudentToClassGroup(WhoAmI, classGroup3A)
classGroupManager.assignTeacherToClassGroup(MrX, classGroup3A)
classGroupManager.addStudentToClassGroup(StudentZ, classGroup4B)
classGroupManager.assignTeacherToClassGroup(MrsY, classGroup4B)

console.log(classGroup3A.details)
console.log(classGroup4B.details)
