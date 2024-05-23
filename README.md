# `面向对象的实验室预约系统`

## 1. 需求分析+概要设计

1.实现一个登录页面，用于登录，登陆后跳转到过管理页面

2.管理页面，分为主页面，主要包括两大模块

Header: 可以选择退出登录，跳转到登录页面

作为教师，可以添加自己教的课程，然后将这些课程添加到CourseList

定义一些实体类，存放在projectEntity.ts

```ts
import { time } from "console";
import exp from "constants";

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
export class Lab {
    labId:number;
    labName:string;
    asignedCourseList:AsignedCourseList;
    constructor(labId:number,labName:string,asignedCourseList:AsignedCourseList)
    {
     this.labId=labId;
     this.labName=labName;
     this.asignedCourseList=asignedCourseList;
    }
 
    getAsignedCourseList():AsignedCourseList{
     return this.asignedCourseList;
    }
 }
 export class LabList{
     labs:Lab[];
     constructor(labs:Lab[])
     {
         this.labs=labs
     }
     getLabList():Lab[]{
         return this.labs;
     }
     addLab(labId:number,labName:string)
     {
         this.labs.push(new Lab(labId,labName,new AsignedCourseList([])));
         for(let i=0;i<this.labs.length;i++)
             {
                 this.labs[i].labId=i;
             }
     }
     remove(labId:number)
     {
         this.labs.splice(labId,1);
     }
 }
// 课程类 Class
export class Course {
    courseId: number;
    courseName: string;
    teacher: Teacher;
    totalTime:number;
    curTimeSum:number;
    constructor(courseId: number, courseName: string, teacher: Teacher,totalTime:number,curTimeSum:number) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.teacher = teacher;
        this.totalTime=totalTime;
        this.curTimeSum=curTimeSum;
    }

    // 修改课程信息
    updateCourseInfo(courseName: string): void {
        this.courseName = courseName;
    }
    updateCourseTime(curTimeSum:number):void {
        this.curTimeSum=curTimeSum;
    }
}

// 已经安排了的课程类
export class AsignedCourse extends Course {
    //一个课程可以分配的到底是什么，就是开始周，结束周
    StartWeek: number;
    EndWeek: number;
    StartTime: number; // 第几节课1-12
    EndTime: number; // 第几节课1-12
    timeSum:number;
    TeachingDay: number; // 数字，范围是 1 到 7
    constructor( c:Course,StartWeek: number, EndWeek: number, TeachingDay: number,startTime:number,endTime:number) {
        super(c.courseId,c.courseName,c.teacher,c.totalTime,c.curTimeSum);
        this.StartWeek = StartWeek;
        this.EndWeek = EndWeek;
        this.TeachingDay = TeachingDay;
        this.StartTime=startTime;
        this.EndTime=endTime;
        this.timeSum=(this.EndTime-this.StartTime)*(this.EndWeek-this.StartWeek);
    }

    // 修改已安排课程信息
    updateAsignedCourseInfo(StartWeek: number, EndWeek: number, TeachingDay: number, StartTime: number, EndTime: number): void {
        this.StartWeek = StartWeek;
        this.EndWeek = EndWeek;
        this.TeachingDay = TeachingDay;
        this.StartTime = StartTime;
        this.EndTime = EndTime;
    }
}

// 示例教师
export let Wanbo = new Teacher(1, '王波', '讲师');
const Course1 = new Course(1, 'Web系统框架', Wanbo,16,8);
const Course2 = new Course(2, 'Java程序设计', Wanbo,12,6);
const Course3 = new Course(3, 'Web前端开发', Wanbo,24,8);
const Course4 = new Course(4, '软件体系结构', Wanbo,24,12);

// 示例课程
const asignedCourse1 = new AsignedCourse(Course1, 1, 4, 1, 1, 2);
const asignedCourse2 = new AsignedCourse(Course2, 1, 3, 2, 1, 2);
const asignedCourse3 = new AsignedCourse(Course3, 1, 4, 3, 1, 2);
const asignedCourse4 = new AsignedCourse(Course4, 1, 4, 4, 1, 2);
const asignedCourse5 = new AsignedCourse(Course4, 1, 2, 5, 1, 2);
const StaticCourseList=[Course1,Course2,Course3,Course4]
const asignedCourseList: AsignedCourse[] = [asignedCourse1, asignedCourse2, asignedCourse3, asignedCourse4, asignedCourse5];

export class AsignedCourseList {
    asignedCourses: AsignedCourse[];
    constructor(asignedCourse: AsignedCourse[]) {
        this.asignedCourses = asignedCourse;
    }
    getAllAsignedCourse():AsignedCourse[]{
        return this.asignedCourses;
    }
}

const ACLO = new AsignedCourseList(asignedCourseList);
const Labx1=new Lab(1,'901',ACLO);
const Labx2=new Lab(2,'902',ACLO);
export let lablist:LabList=new LabList([Labx1,Labx2]);
// export let MyLabList:LabList=new LabList(lablist);
// 类“Lab”用于其声明前。ts(2449)
// projectEntity.ts(146, 14): 在此处声明了 "Lab"。
// constructor Lab(labId: number, labName: string, asignedCourseList: AsignedCourseList): Lab


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
        this.courses.splice(courseId,1);
        for(let i=0;i<this.courses.length;i++)
        {
            this.courses[i].courseId=i;
        }
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

// export class AsignedCourseList {
//      asignedCourses: AsignedCourse[];
//     constructor(asignedCourse:AsignedCourse[]) {
//         this.asignedCourses = asignedCourse;
//     }
//     // 添加已安排课程
//     addAsignedCourse(asignedCourse: AsignedCourse): void {
//         this.asignedCourses.push(asignedCourse);
//     }
//     // 获取所有已安排课程
//     getAllAsignedCourses(): AsignedCourse[] {
//         return this.asignedCourses;
//     }
// }


// 创建课程列表实例

export let CourseLIST =new CourseList(StaticCourseList);
```

教师实体类，操作教师对象

课程实体类，用于操作课程

实验室实体类，用于操作实验室

已分配课程类，继承自课程类，同时作为实验室类的一个属性，一个实验室拥有一个已分配课程类，**根据需求分析，一个课程应该被分配在连续的几周的固定星期几的第几节到第几节**

1. 已分配课程类变化不大，冲突检测可以采用预先分配（假设已经分配成功，检测冲突），冲突避免
2. 如何显示空闲课表，只能定义一个数组 <实验室，周次，星期几，第几节>
3. 空间分析 ：
   实验室个数为n,周次为18，一周7天，一天8节课
4. 预分配后的冲突检测，获得了一个{（周次，星期几，第几节）}的集合，那么每次新加入的(Weeki==Weekj,WeekDayi==WeekDayj,ClassA ∩ ClassB≠空集))和之前实验室里的集合里的每一个元素进行冲突检测即可
5. 课程课时限制问题：
   在课程分配时就进行限制，同时当多次进行分配时，如何进行合并？需要多加入一个关键字timeSum，用来表示当前课程已经被分配了多少课时

作为教师可以观察实验室空闲情况，需要一个维护一个课表Table，根据Lab.asignedCourseList,获取占用的时间数组，然后动态渲染课表即可：

实验室复选框（选中后获取对应的实验室对象Lab，并获取AsignedCourseList，根据 `每个表项<week,weekDay,class>三元组`渲染下面的Table表项的属性，同时让其展示一些课程信息）

| 周一 | 周二 | 周三 | 周四 | 周五 | 周六 | 周日 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|      |      |      |      |      |      |      |
|      |      |      |      |      |      |      |

## 2.详细设计

教师分配课程后会发生什么：

1. 受限用户选定了一个Course和一个实验室Lab
   Lab有哪些属性呢：

   ```ts
   export class Lab {
      labId:number;
      labName:number;
      asignedCourseList:AsignedCourseList;
      getAsignedCourseList():AsignedCourseList{
       return this.asignedCourseList;
      }
   }
   ```
2. 由于AsignedCourse继承自Course，所以可以根据用户选择的信息，构成一个AsignedCourse实体类，让后把它挂载到lab的list中
