import { Wanbo,Course,AsignedCourse,Teacher, labList } from "./projectEntity";
import { CourseLIST,asignedLabList } from "./projectEntity";
// 管理课程的函数集合
export const labCourseManager = {
    // 添加课程
    addCourse: (course: Course) => {
        labList.addCourse
    },
    // 删除课程
    removeCourse: (courseId: number) => {
        labList.removeCourse(courseId)
    },
    // 修改课程信息
    updateCourse: (courseId: number, newCourseName: string) => {
        labList.updateCourseInfo(courseId,newCourseName)
    },
 
};


// 管理已安排课程的函数集合
export const assignedCourseManager = {
    // 添加已安排的课程
    addAssignedCourse: (course: AsignedCourse) => {
        asignedLabList.addAsignedCourse(course);
    },
    // 删除已安排的课程
    removeAssignedCourse: (courseId: number) => {
        asignedLabList.removeAsignedCourse(courseId);
    },
    // 修改已安排的课程信息
    updateAssignedCourse: (courseId: number, newCourseName: string, 
                           StartWeek: number, EndWeek: number, 
                           TeachingDay: number[], StartTime: number, 
                           EndTime: number) => {
        asignedLabList.updateAsignedCourseInfo(courseId,newCourseName,StartWeek,EndWeek,TeachingDay,StartTime,EndTime);
    },

};
export const  teacherManager={
     updateTeacher:(teacherName:string,teacherTitle:string)=>{
         Wanbo.updateTeacherInfo(teacherName,teacherTitle);
     }
}