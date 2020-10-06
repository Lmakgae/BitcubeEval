import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Course } from '../model/course.model';
import { Degree } from '../model/degree.model';
import { Lecturer } from '../model/lecturer.model';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private signedLecturer: Lecturer = null;
  private signedLecturerUpdated = new Subject<Lecturer>();
  private studentsData: Student[] = [
    new Student('1', 'Name1 Name1', 'Surname1', 'name1surname1@gmail.com', 1020463200000, 'BEngCE'),
    new Student('2', 'Name2 Name2', 'Surname2', 'name2surname2@gmail.com', 920930400000, 'BScCS'),
    new Student('3', 'Name3 Name3', 'Surname3', 'name3surname3@gmail.com', 875484000000, 'BScCS'),
    new Student('4', 'Name4 Name4', 'Surname4', 'name4surname4@gmail.com', 994024800000, 'BEngCE'),
    new Student('5', 'Name5 Name5', 'Surname5', 'name5surname5@gmail.com', 762040800000, 'BScCS'),
  ];
  private studentsUpdated = new Subject<Student[]>();
  private lecturersData: Lecturer[] = [
    new Lecturer('1', 'Lehlogonolo Israel', 'Makgae', 'Hlogimakgae@gmail.com', 852328800000, ['BEngCE']),
    new Lecturer('2', 'Jane', 'Doe', 'janedoe@gmail.com', -284608800000, ['BScCS'])
  ];
  private degreesData: Degree[] = [
    new Degree('BEngCE', 'BEng Computer Engineering',  4, '1'),
    new Degree('BScCS', 'BSc Computer Science',  3, '2')
  ];
  private coursesData: Course[] = [
    new Course('BEngCE1', 'Program Design: Introduction', 6, 'BEngCE'),
    new Course('BEngCE2', 'Calculus', 6, 'BEngCE'),
    new Course('BEngCE3', 'Algebra', 6, 'BEngCE'),
    new Course('BEngCE4', 'Physics', 6, 'BEngCE'),
    new Course('BEngCE5', 'Electronics', 6, 'BEngCE'),
    new Course('BEngCE6', 'Imperative Programming', 6, 'BEngCE'),
    new Course('BEngCE7', 'Operating Systems', 6, 'BEngCE'),
    new Course('BEngCE8', 'Mechanics', 6, 'BEngCE'),
    new Course('BEngCE9', 'Electrical Engineering', 6, 'BEngCE'),
    new Course('BEngCE10', 'Differential Equations', 6, 'BEngCE'),
    new Course('BEngCE11', 'Engineering Statistics', 6, 'BEngCE'),
    new Course('BEngCE12', 'Data Structures and Algorithms', 6, 'BEngCE'),
    new Course('BEngCE13', 'Linear Systems', 6, 'BEngCE'),
    new Course('BEngCE14', 'Digital Systems', 6, 'BEngCE'),
    new Course('BEngCE15', 'Intelligent Systems', 6, 'BEngCE'),
    new Course('BEngCE16', 'Control Systems', 6, 'BEngCE'),
    new Course('BEngCE17', 'Microprocessors', 6, 'BEngCE'),
    new Course('BEngCE18', 'Analogue Electronics', 6, 'BEngCE'),
    new Course('BEngCE19', 'Software Engineering', 6, 'BEngCE'),
    new Course('BEngCE20', 'Electromagnetic Compatibility', 6, 'BEngCE'),
    new Course('BEngCE21', 'Computer Engineering: Architecture and Systems', 6, 'BEngCE'),
    new Course('BEngCE22', 'Project', 12, 'BEngCE'),
    new Course('BEngCE23', 'e-Business and Network Security', 6, 'BEngCE'),
    new Course('BEngCE24', 'DSP Programming and Application', 6, 'BEngCE'),
    new Course('BScCS1', 'Program Design: Introduction', 6, 'BScCS'),
    new Course('BScCS2', 'Calculus', 6, 'BScCS'),
    new Course('BScCS3', 'Algebra', 6, 'BScCS'),
    new Course('BScCS4', 'Statistics', 6, 'BScCS'),
    new Course('BScCS5', 'Imperative Programming', 6, 'BScCS'),
    new Course('BScCS6', 'Operating Systems', 6, 'BScCS'),
    new Course('BScCS7', 'Concurrent Systems', 6, 'BScCS'),
    new Course('BScCS8', 'Software Modelling', 6, 'BScCS'),
    new Course('BScCS9', 'Data Structures and Algorithms', 6, 'BScCS'),
    new Course('BScCS10', 'Introduction to Database Systems', 6, 'BScCS'),
    new Course('BScCS11', 'Computer Organisation and Architecture', 6, 'BScCS'),
    new Course('BScCS12', 'Discrete Structures', 6, 'BScCS'),
    new Course('BScCS13', 'Software Engineering', 6, 'BScCS'),
    new Course('BScCS14', 'Computer Security and Ethics', 6, 'BScCS'),
    new Course('BScCS15', 'Computer Networks', 6, 'BScCS'),
    new Course('BScCS16', 'Compiler Construction', 6, 'BScCS'),
    new Course('BScCS17', 'Database Systems', 6, 'BScCS'),
    new Course('BScCS18', 'Artificial Inelligence', 6, 'BScCS'),
  ];

  constructor() { }

  signIn(lecturer: Lecturer): void {
    this.signedLecturer = lecturer;
    this.signedLecturerUpdated.next(lecturer);
  }

  signOut(): void {
    this.signedLecturer = null;
    this.signedLecturerUpdated.next(null);
  }

  getSignedInLecturer(): Lecturer {
    return this.signedLecturer;
  }

  getSignedLecturerUpdateListener(): Observable<Lecturer> {
    return this.signedLecturerUpdated.asObservable();
  }

  getAllStudents(): Student[] {
    return this.studentsData;
  }

  getAllLecturers(): Lecturer[] {
    return this.lecturersData;
  }

  getLecturerNameSurname(id: string): string {
    for (const iterator of this.lecturersData) {
      if (iterator.getId() === id) {
        return iterator.getFirstName() + ' ' + iterator.getSurname();
      }
    }
    return '';
  }

  getAllDegrees(): Degree[] {
    return this.degreesData;
  }

  getDegreeName(id: string): string {
    for (const iterator of this.degreesData) {
      if (iterator.getId() === id) {
        return iterator.getName();
      }
    }
    return '';
  }

  getAllCourses(): Course[] {
    return this.coursesData;
  }

  getStudentsForLecturer(degreeIDs: string[]): void {
    const students: Student[] = [];
    this.studentsData.forEach(student => {
      for (const iterator of degreeIDs) {
        if (student.getDegreeID() === iterator) {
          students.push(student);
          return;
        }
      }
    });
    this.studentsUpdated.next([...students]);
  }

  getStudentUpdateListener(): Observable<Student[]> {
    return this.studentsUpdated.asObservable();
  }

  getDegreesForLecturer(lecturerID: string): Degree[] {
    const degrees: Degree[] = [];
    this.degreesData.forEach(degree => {
      if (degree.getLecturerID() === lecturerID) {
        degrees.push(degree);
      }
    });
    return degrees;
  }

  getCoursesForDegrees(degreeIds: string[]): Course[] {
    const courses: Course[] = [];
    this.coursesData.forEach(course => {
      for (const iterator of degreeIds) {
        if (course.getDegreeID() === iterator) {
          courses.push(course);
        }
      }
    });
    return courses;
  }

  getCoursesForDegree(degreeId: string): Course[] {
    const courses: Course[] = [];
    this.coursesData.forEach(course => {
      if (course.getDegreeID() === degreeId) {
        courses.push(course);
      }
    });
    return courses;
  }

  getNewStudentID(): string {
    return (this.studentsData.length + 1).toString();
  }

  addNewStudent(student: Student): void {
    this.studentsData.push(student);
  }

  deleteStudent(studentID: string): void {
    for (let index = 0; index < this.studentsData.length; index++) {
      if (this.studentsData[index].getId() === studentID) {
        this.studentsData.splice(index, 1);
        return;
      }
    }
    this.studentsUpdated.next([...this.studentsData]);
  }

}
