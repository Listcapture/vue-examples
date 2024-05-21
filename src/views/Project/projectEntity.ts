// Teacher 类
export class Teacher {
    teacherId: number;
    teacherName: string;
    TeacherTitle: string;

    constructor(teacherId: number, teacherName: string, TeacherTitle: string) {
        this.teacherId = teacherId;
        this.teacherName = teacherName;
        this.TeacherTitle = TeacherTitle;
    }
    getTeacherName():string{
        return this.teacherName;
    }
    // 修改教师信息
    updateTeacherInfo(teacherName: string, teacherTitle: string): void {
        this.teacherName = teacherName;
        this.TeacherTitle = teacherTitle;
    }
}

// 课程类 Class
export class Course {
    courseId: number;
    courseName: string;
    teacher: Teacher;
    totalTime:number;

    constructor(courseId: number, courseName: string, teacher: Teacher,totalTime:number ) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.teacher = teacher;
        this.totalTime=totalTime;
    }

    // 修改课程信息
    updateCourseInfo(courseName: string): void {
        this.courseName = courseName;
    }
}

// 已经安排了的课程类
export class AsignedCourse extends Course {
    //一个课程可以分配的到底是什么，就是开始周，结束周
    StartWeek: number;
    EndWeek: number;
    StartTime: number; // 第几节课1-12
    EndTime: number; // 第几节课1-12
    TeachingDay: number[]; // 数字集合，范围是 1 到 7
    constructor( c:Course,StartWeek: number, EndWeek: number, TeachingDay: number[],startTime:number,endTime:number) {
        super(c.courseId,c.courseName,c.teacher,c.totalTime);
        this.StartWeek = StartWeek;
        this.EndWeek = EndWeek;
        this.TeachingDay = TeachingDay;
        this.StartTime=startTime;
        this.EndTime=endTime;
    }

    // 修改已安排课程信息
    updateAsignedCourseInfo(newCourseName: string, StartWeek: number, EndWeek: number, TeachingDay: number[], StartTime: number, EndTime: number): void {
        this.StartWeek = StartWeek;
        this.EndWeek = EndWeek;
        this.TeachingDay = TeachingDay;
        this.StartTime = StartTime;
        this.EndTime = EndTime;
    }
}

// 示例教师
export let Wanbo = new Teacher(1, '王波', '讲师');

// 示例课程
const Lab1 = new Course(1, 'Web系统框架', Wanbo,16);
const Lab2 = new Course(2, 'Java程序设计', Wanbo,12);
const Lab3 = new Course(3, 'Web前端开发', Wanbo,24);
const Lab4 = new Course(4, '软件体系结构', Wanbo,16);

let  StaticCourseList: Course[] = [Lab1, Lab2, Lab3, Lab4];

export class Lab {


}
// 课程列表类
export class CourseList {
    courses: Course[];
    constructor(staticCourses: Course[]) {
        this.courses = staticCourses;
    }

    // 添加课程
    addCourse(course: Course): void {
        this.courses.push(course);
    }

    // 删除课程
    removeCourse(courseId: number): void {
        this.courses = this.courses.filter(course => course.courseId !== courseId);
    }

    // 修改课程信息
    updateCourseInfo(index: number, newCourseName: string): void {
        const course = this.courses[index];
        if (course) {
            course.updateCourseInfo(newCourseName);
        }
    }

    // 获取所有课程
    getAllCourses(): Course[] {
        return this.courses;
    }
}

// 已安排课程列表类
export class AsignedCourseList {
    private asignedCourses: AsignedCourse[];

    constructor() {
        this.asignedCourses = [];
    }

    // 添加已安排课程
    addAsignedCourse(asignedCourse: AsignedCourse): void {
        this.asignedCourses.push(asignedCourse);
    }

    // 删除已安排课程
    removeAsignedCourse(courseId: number): void {
        this.asignedCourses = this.asignedCourses.filter(course => course.courseId !== courseId);
    }

    // 修改已安排课程信息
    updateAsignedCourseInfo(courseId: number, newCourseName: string, StartWeek: number, EndWeek: number, TeachingDay: number[], StartTime: number, EndTime: number): void {
        const asignedCourse = this.asignedCourses.find(course => course.courseId === courseId);
        if (asignedCourse) {
            asignedCourse.updateAsignedCourseInfo(newCourseName, StartWeek, EndWeek, TeachingDay, StartTime, EndTime);
        }
    }

    // 获取所有已安排课程
    getAllAsignedCourses(): AsignedCourse[] {
        return this.asignedCourses;
    }
}

// 创建课程列表实例
export let labList = new CourseList(StaticCourseList);
export let CourseLIST =new CourseList(StaticCourseList);

// 创建已安排课程列表实例
