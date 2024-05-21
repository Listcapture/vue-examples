`教师排课系统`

1.实现一个登录页面，用于登录，登陆后跳转到过管理页面

2.管理页面，分为主页面，主要包括两大模块

Header: 可以选择退出登录，跳转到登录页面

作为教师，可以添加自己教的课程，然后将这些课程添加到CourseList

数据类型定义如下，存放在projectEntity.ts

```ts
// Teacher 类
interface T {
  teacherId: number;
  teacherName: string;
  TeacherTitle: string;
}

// 课程类 Class
interface Course {
  courseId: number;
  courseName: string;
  teacher: T;
}

// 已经分配了的课程类
interface AsignedCourse extends Course {
  StartWeek: number;
  EndWeek: number;
  TeachingDay: number[]; // 数字集合，范围是 1 到 7
  StartTime: number; // 第几节课1-12
  EndTime: number; // 第几节课1-12
  
}
```

作为教师，可以灵活安排课程开始-结束时间，需要一个维护一个课表Table，根据asignedCourseList动态渲染课表即可：

| 周一 | 周二 | 周三 | 周四 | 周五 | 周六 | 周日 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|      |      |      |      |      |      |      |
|      |      |      |      |      |      |      |
