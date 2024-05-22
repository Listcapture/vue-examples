<template>
    <div>
      <div class="head">
        <hr>
        <div style="display: inline-flex; color: aqua;">
          <select name="lab" id="lab" @change="getIndexOfLabSelect" v-model="cvalue">
            <option class="clab" v-for="(c, index) in lablistProxy.getLabList()" :key="index" :value="c.labId">
              &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;丹青{{ c.labName }}&nbsp;&nbsp;&nbsp;&nbsp;
            </option>
          </select>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div style="display: inline-flex;">
          <button style="display: inline-flex;background-color: cadetblue;padding: 2px;border-radius: 5px;" @click="openModal">
            添加机房
          </button>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
  
      <div v-if="showModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <span class="close" @click="showModal = false">&times;</span>
           <p>添加机房</p>
           <input type="text" placeholder="实验室名称" v-model="curLab.labName">
           <button @click="AddLab">添加机房</button>
        </div>
      </div>
      <table class="custom-table">
        <!-- Table Headers -->
        <thead>
          <tr>
            <th>课程Id</th>
            <th>课程名</th>
            <th>课时</th>
            <th>已预约信息</th>

          </tr>
        </thead>
  
        <!-- Table Body -->
        <tbody style="align-items: center;justify-self: center;">
          <tr v-for="(c,index) of refLab" :key='index'>
            <td style="text-align: center;"> {{ index+1}}  </td>
            <td style="text-align: center;"> {{ c.courseName}}  </td>
            <td style="text-align: center;"> {{ c.totalTime }}  </td>
            <td style="text-align: center;"> &nbsp;&nbsp;已预约课时:{{ c.curTimeSum }}，{{c.StartWeek}}-{{ c.EndWeek }}周，{{ c.StartTime }}-{{ c.EndTime }}节，{{ c.teacher.teacherName }},{{ c.teacher.TeacherTitle}}&nbsp;&nbsp; </td>
          </tr>
        </tbody>
      </table>
      // Space Table
      <hr>
      
      <Table>
         <thead>
            <tr>
                <th>周一</th>
                <th>周二</th>
                <th>周三</th>
                <th>周四</th>
                <th>周五</th>
                <th>周六</th>
                <th>周日</th>
            </tr>
         </thead>

      </Table>


    </div>
  </template>
  
<script setup lang="ts">
  import { reactive, ref, watchEffect, watch } from 'vue';
  import { AsignedCourseList, Lab, lablist } from './projectEntity';
  import $ from 'jquery';
  
  const showModal = ref(false);
  let curLabIndex = ref(0);
  let curCourseIndex=ref(0);
  
  function openModal() {
    showModal.value = true;
  }
  
  watchEffect(() => {
    console.log('cvalue changed:', curLabIndex.value);
  });
  
  let lablistProxy = reactive(lablist);
  let curLab = new Lab(lablistProxy.getLabList.length + 1, '', new AsignedCourseList([]));
  
  let ObjLab = reactive(lablist.getLabList()[curLabIndex.value]).getAsignedCourseList().getAllAsignedCourse();
  let refLab = ref(ObjLab);
  
  let AddLab = function() {
    lablistProxy.addLab(curLab.labId, curLab.labName);
    showModal.value = false;
  }
  
  let getIndexOfLabSelect = function() {
    // Update cvalue with the selected labId
    curLabIndex.value = $('#lab').val();
  }

  watch(curLabIndex, (newValue) => {
    // Update refLab when curLabIndex changes
    let lab = lablist.getLabList()[newValue];
    refLab.value = lab.getAsignedCourseList().getAllAsignedCourse();
  });
</script>
  
  <style scoped>
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