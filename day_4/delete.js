import { readFile,writeFile} from "./readAndwrite.js";
const FILE = ".students.json";
const deleteStudent = async (id) => {
    const students = await readFile(FILE);
    if (students.length === 0) return;

    const student = students.find((student) => student.id === id);
    if (student) return;
}