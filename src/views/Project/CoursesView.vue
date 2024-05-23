<template>
    <div>
      <hr style="width: 65vw;">
      <h1>Hello {{ Wanbo.teacherName }}</h1>
      <!-- Add Course Form -->
      <div class="add-course-form">

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
      <hr>
      <table class="custom-table">
        <!-- Table Headers -->
        <thead>
          <tr>
            <th>课程Id</th>
            <th>课程名</th>
            <th>课时</th>
            <th>已分配课时</th>
            <th>操作</th> <!-- Added column for modify and delete option -->
          </tr>
        </thead>
  
        <!-- Table Body -->
        <tbody style="align-items: center;justify-self: center;">
          <tr v-for="(c,index) of  courselist.getAllCourses()" :key='index' :style="{backgroundColor: c.curTimeSum>=c.totalTime?'red':'lightgreen'}">
            <td style="text-align: center;"> {{ index+1}}  </td>
            <td style="text-align: center;"> {{ c.courseName }}  </td>
            <td style="text-align: center;"> {{ c.totalTime }}  </td>
            <td style="text-align: center;"> {{ c.curTimeSum}}  </td>
            <td>
                
              <button @click="deleteCourse(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    
    <!-- Modal -->
    <div class="modal" v-if="showModal">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-content">
        <div class="box">
          <h2>Edit Course</h2>
          <form @submit.prevent="saveChanges">
            <div class="field">
              <label class="label">Course Name</label>
              <div class="control">
                <input class="input" v-model="editedCourse.courseName" type="text" placeholder="Enter course name">
              </div>
            </div>

            <div class="field">
              <label class="label">Class Time</label>
              <div class="control">
                <input class="input" v-model="editedCourse.totalTime" type="text" placeholder="Enter class time">
              </div>
            </div>

            <button type="submit" class="button is-primary">Save Changes</button>
          </form>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
    </div>

  </template>
  
  <script setup lang="ts">
  import { reactive, ref } from 'vue';
  import { AsignedCourse, Course, CourseLIST, Lab, Teacher, Wanbo, lablist } from './projectEntity';
  
  let courselist = reactive(CourseLIST);
  let userproxy = reactive(Wanbo);
  const newCourse = reactive({ courseId: '', courseName: '', teacherName: '',totalTime:0,curTimeSum:0 });
  let  editMode = ref(false);
  const showModal = ref(false);
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
  // Import necessary modules

// Define reactive variables

let editedCourse = reactive(new Course(1,'ss',Wanbo,0,0));

// Method to open the modal and populate with current course data
const editCourse = (index) => {
  showModal.value = true;
  // Populate editedCourse with current course data
  editedCourse=courselist.getAllCourses()[index];
};

// Method to close the modal
const closeModal = () => {
  showModal.value = false;
};

// Method to save changes made in the modal
const saveChanges = () => {
  // Update the course data in the list
  CourseLIST.getAllCourses()[editedCourse.courseId-1]=editedCourse;
  // Close the modal
  closeModal();
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
 /* Add your modal styles here */
 .modal {
      /* Modal styles */
      display: block; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }
  .modal-content {
      background-color: #fefefe;
      margin: 15% auto; /* 15% from the top and centered */
      padding: 20px;
      border: 1px solid #888;
      width: 80%; /* Could be more or less, depending on screen size */
  }
  .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
  }

  </style>