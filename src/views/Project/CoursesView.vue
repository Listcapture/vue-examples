<template>
    <div>
      <hr style="width: 65vw;">
      <h1>Hello {{ Wanbo.teacherName }}</h1>
      <!-- Add Course Form -->
      <div class="add-course-form">
        <span style="color:pink;">先输入内容，然后点击add Course 添加课程/点击Modify修改对应课程</span> 
        <hr>
        <h3>Add Course</h3>
        <form @submit.prevent="addCourse">
          <label for="courseName">Course Name:</label>
          <input type="text" id="courseName" v-model="newCourse.courseName" placeholder="Enter course name">
          <label for="teacherName">Teacher Name:</label>
          <input type="text" id="teacherName" v-model="newCourse.teacherName" placeholder="Enter teacher name">
          <label for="teacherName">Class Time:</label>
          <input type="text" id="teacherName" v-model="newCourse.totalTime" placeholder="Enter teacher name">
          <button type="submit">Add Course</button>
        </form>
      </div>
  
      <table class="custom-table">
        <!-- Table Headers -->
        <thead>
          <tr>
            <th>课程Id</th>
            <th>课程名</th>
            <th>任课教师</th>
            <th>操作</th> <!-- Added column for modify and delete option -->
          </tr>
        </thead>
  
        <!-- Table Body -->
        <tbody style="align-items: center;justify-self: center;">
          <tr v-for="(c,index) of  courselist.getAllCourses()" :key='index'>
            <td> {{ c.courseId }}  </td>
            <td> {{ c.courseName }}  </td>
            <td> {{ c.teacher.teacherName }}  </td>
            <td>
              <!-- Modify Button -->
              <button @click="editCourse(index)">Modify</button>
              <!-- Delete Button -->
            </td>
            <td>
                
              <button @click="deleteCourse(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive, ref } from 'vue';
  import { Course, CourseLIST, CourseList, Teacher, Wanbo } from './projectEntity';
  
  let courselist = CourseLIST;
  let userproxy = reactive(Wanbo);
  const newCourse = reactive({ courseId: '', courseName: '', teacherName: '',totalTime:0 });
  const editMode = ref(false);
  
  // Add Course Method
  const addCourse = () => {
    editMode.value = true;
    // Add new course to the course list
    // courselist.push({ ...newCourse });
    // Clear input fields
    let tCourse=new Course(courselist.getAllCourses().length,newCourse.courseName,Wanbo,newCourse.totalTime);
    courselist.addCourse(tCourse);
    newCourse.courseId = '';
    newCourse.courseName = '';
    newCourse.teacherName = '';
  
  };
  
  // Edit Course Method
  const editCourse = (index) => {
    // Set edit mode to true to display edit form
    editMode.value = true;
    courselist.updateCourseInfo(index,newCourse.courseName);
    // Pre-fill input fields with current course information
    // newCourse.courseId = courselist[index].courseId;
    newCourse.courseName = '';
    newCourse.teacherName = '';
  };
  
  // Delete Course Method
  const deleteCourse = (index) => {
    // Remove course from the course list based on index
    courselist.getAllCourses().splice(index, 1);
  };
  </script>
  
  <style scoped>
  /* Styles for add course form */
  .add-course-form {
    margin-top: 20px;
  }
  
  .add-course-form label {
    display: block;
    margin-bottom: 5px;
  }
  
  .add-course-form input {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
  }
  
  .add-course-form button {
    padding: 8px 2px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .add-course-form button:hover {
    background-color: #0056b3;
  }
  </style>