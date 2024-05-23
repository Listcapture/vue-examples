<template>
  <div>
    <hr style="width: 65vw;">
    <h1>Hello {{ Wanbo.teacherName }}</h1>
    <table class="custom-table">
      <thead>
        <tr>
          <th>教师Id</th>
          <th>教师姓名</th>
          <th>教师职称</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody style="align-items: center;justify-self: center;">
        <tr>
          <td style="text-align: center;">1</td>
          <td style="text-align: center;">{{ userproxy.teacherName }}</td>
          <td style="text-align: center;">{{ userproxy.TeacherTitle }}</td>
          <td style="align-items: center;justify-content: center;align-self: center;"><button style="text-align: center;" @click="editMode = true">修改</button></td>
        </tr>
      </tbody>
    </table>

    <div v-if="editMode" class="edit-form">
      <h3>Modify Teacher Information</h3>
      <form @submit.prevent="submitChanges">
        <label for="newName">New Name:</label>
        <input type="text" id="newName" v-model="newName" placeholder="Enter new name">
        <label for="newTitle">New Title:</label>
        <input type="text" id="newTitle" v-model="newTitle" placeholder="Enter new title">
        <button type="submit">提交</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Wanbo } from './projectEntity';

const newName = ref('');
const newTitle = ref('');
const editMode = ref(false);
let userproxy=reactive(Wanbo)
const submitChanges = (event) => {
  // 运行定义的处理函数修改信息
  // 这里只是一个示例，您需要根据具体需求来实现
  if(newName.value.length<=0||newTitle.value.length<=0)
  {
    event.preventDefault();
  }
  Wanbo.updateTeacherInfo(newName.value,newTitle.value);

  
  // 关闭编辑模式
  editMode.value = false;
};

</script>

<style scoped>
.custom-table {
  width: 100%;
  border-collapse: collapse;
}

.custom-table th, .custom-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.custom-table th {
  background-color: #f2f2f2;
}

.edit-form {
  margin-top: 20px;
}

.edit-form label {
  display: block;
  margin-bottom: 5px;
}

.edit-form input {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}

.edit-form button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.edit-form button:hover {
  background-color: #0056b3;
}
</style>