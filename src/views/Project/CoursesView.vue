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
          <input type="text" id="courseName" v-model="newCourse.courseName" placeholder="输入课程名">

          <label for="teacherName">Class Time:</label>
          <input type="text" id="teacherName" v-model="newCourse.totalTime" placeholder="输入课时">
          <button type="submit">Add Course</button>
        </form>
      </div>
  
      <table class="custom-table">
        <!-- Table Headers -->
        <thead>
          <tr>
            <th>课程Id</th>
            <th>课程名</th>
            <th>课时</th>
            <th>操作</th> <!-- Added column for modify and delete option -->
          </tr>
        </thead>
  
        <!-- Table Body -->
        <tbody style="align-items: center;justify-self: center;">
          <tr v-for="(c,index) of  courselist.getAllCourses()" :key='index'>
            <td style="text-align: center;"> {{ index+1}}  </td>
            <td style="text-align: center;"> {{ c.courseName }}  </td>
            <td style="text-align: center;"> {{ c.totalTime }}  </td>
            <td>
              <!-- Modify Button -->
              <button style="text-align: center;"  @click="editCourse(index)">Modify</button>
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
  import { Course, CourseLIST, Teacher, Wanbo } from './projectEntity';
  
  let courselist = reactive(CourseLIST);
  let userproxy = reactive(Wanbo);
  const newCourse = reactive({ courseId: '', courseName: '', teacherName: '',totalTime:0,curTimeSum:0 });
  const editMode = ref(false);
  
  // Add Course Method
  const addCourse = () => {
    editMode.value = true;
    // Add new course to the course list
    // courselist.push({ ...newCourse });
    // Clear input fields
    let tCourse=new Course(courselist.getAllCourses().length+1,newCourse.courseName,Wanbo,newCourse.totalTime,0);
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
    CourseLIST.updateCourseInfo(index,newCourse.courseName);
    // Pre-fill input fields with current course information
    // newCourse.courseId = courselist[index].courseId;
    newCourse.courseName = '';
    newCourse.teacherName = '';
  };
  
  // Delete Course Method
  const deleteCourse = (index) => {
    // Remove course from the course list based on index
    courselist.getAllCourses().splice(index,1);
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
  .custom-table {
  width: 100%;
  border-collapse: collapse;
}

.custom-table th, .custom-table td {
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
}

.custom-table th {
  background-color: #f2f2f2;
}

.custom-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

.custom-table tbody tr:hover {
  background-color: #ddd;
}
  </style>