const Student = require('./student')
const Teacher = require('./teacher')
const ClassRoom = require('./classroom')

const classRoom3A = new ClassRoom(3, 'A')
const classRoom4B = new ClassRoom(4, 'B')

const Burak = new Student('Burak', 'Guzel', 3, 'A')
const WhoAmI = new Student('WhoAmI', 'Unknown', 3, 'A')
const MrX = new Teacher('Mr', 'X', 3, 'A')
const MrsY = new Teacher('Mrs', 'Y', 4, 'B')
const StudentZ = new Student('Student', 'Z', 4, 'B')

Burak.joinClassroom(classRoom3A)
WhoAmI.joinClassroom(classRoom3A)
MrX.joinClassroom(classRoom3A)
StudentZ.joinClassroom(classRoom4B)
MrsY.joinClassroom(classRoom4B)

console.log(classRoom3A.details)
console.log(classRoom4B.details)
