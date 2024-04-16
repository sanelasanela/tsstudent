type Grade = number | string | undefined;
interface Student {
    firstName: string;
    lastName: string;
    age: number;
  //  grades: number[];
    grades: Grade[];
}


function printAllStudents(students: Student[]): void {
    students.forEach(student => {
        console.log(`${student.firstName} ${student.lastName} (${student.age})`);
        console.log("=".repeat(30));
        console.log("Grades: " + student.grades.map(grade => grade === undefined ? "*" : (typeof grade === "string" ? grade : grade.toString())).join(","));
        console.log("");
    });
}
/*
function outputStudentWithGrades(student: Student): void {

    console.log(`${student.firstName} ${student.lastName} (${student.age})`);
    console.log("=".repeat(30));
   // console.log("Grades: " + student.grades.join(", "));

    console.log("Grades: " + student.grades.map(grade => typeof grade === "string" ? grade : grade.toString()).join(","));
}
*/



/*
const student: Student = {
    firstName: "Franz",
    lastName: "Müller",
    age: 22,
    grades: [1, 2, 2, 3, 4, 2, 1]
};

 */

const students: Student[] = [
    {
        firstName: "Anton",
        lastName: "Meier",
        age: 16,
        grades: [1, 4, 3, 1, "A", undefined, 1, 2]
    },
    {
        firstName: "Berta",
        lastName: "Müller",
        age: 17,
        grades: ["A", undefined, 1]
    },
    {
        firstName: "Cäsar",
        lastName: "Schmidt",
        age: 17,
        grades: ["A", 1, undefined, 3, 2, 4, 5]
    }
];

// outputStudentWithGrades(student);
printAllStudents(students);