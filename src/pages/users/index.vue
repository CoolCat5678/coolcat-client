<template>
  <v-container>
    <h2 class="text-h5 font-weight-bold mb-4">👤 使用者測試頁</h2>

    <!-- 新增使用者表單 -->
    <v-card class="mb-6">
      <v-card-title>新增使用者</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleCreateUser">
          <v-row dense>
            <v-col cols="12">
              <v-text-field
                v-model="newUser.username"
                label="使用者名稱"
                type="text"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="newUser.email"
                label="使用者 Email"
                type="email"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="newUser.role"
                label="使用者角色（選填）"
                type="text"
              />
            </v-col>
            <v-col cols="12">
              <v-btn
                block
                color="primary"
                type="submit"
              >
                創建使用者
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>

    <!-- 使用者列表 -->
    <h3 class="text-h6 mb-2">使用者列表</h3>
    <v-btn
      class="mb-4"
      color="success"
      @click="loadUsers"
    >
      加載使用者列表
    </v-btn>

    <v-row dense>
      <v-col
        v-for="user in users"
        :key="user.id"
        cols="12"
        md="4"
        sm="6"
      >
        <v-card>
          <v-card-title class="text-h6">
            {{ user.username }}
          </v-card-title>
          <v-card-subtitle>{{ user.email }}</v-card-subtitle>
          <v-card-actions>
            <v-btn
              color="warning"
              @click="handleUpdateUser(user.id)"
            >
              更新
            </v-btn>
            <v-btn
              color="error"
              @click="handleDeleteUser(user.id)"
            >
              刪除
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang='ts'>
  import { defineComponent, ref } from 'vue';
  import {
    apiUserCreate,
    apiUserDelete,
    apiUserList,
    apiUserUpdate,
  } from '@/api/user';
  import type { UserEntity } from '@/types';
  import type { CreateUserDto, UpdateUserDto } from '@/types';

  export default defineComponent({
    setup () {
      const users = ref<UserEntity[]>([]);
      const newUser = ref<CreateUserDto>({
        username: '',
        email: '',
        role: '',
      });

      const handleCreateUser = async () => {
        try {
          const user = await apiUserCreate(newUser.value);
          users.value.push(user);
          newUser.value = { username: '', email: '', role: '' };
          alert('使用者已創建！');
        } catch (error) {
          console.error('創建使用者錯誤:', error);
          alert('創建使用者失敗！');
        }
      };

      const loadUsers = async () => {
        try {
          const userList = await apiUserList();
          users.value = userList;
        } catch (error) {
          console.error('加載使用者列表錯誤:', error);
          alert('加載使用者列表失敗！');
        }
      };


      const handleUpdateUser = async (userId: number) => {
        const updatedData: UpdateUserDto = { username: 'updatedUser' };
        try {
          const updatedUser = await apiUserUpdate(userId, updatedData);
          const index = users.value.findIndex(user => user.id === userId);
          if (index !== -1) {
            users.value[index] = updatedUser;
          }
          alert('使用者更新成功！');
        } catch (error) {
          console.error('更新使用者錯誤:', error);
          alert('更新使用者失敗！');
        }
      };

      const handleDeleteUser = async (userId: number) => {
        try {
          await apiUserDelete(userId);
          users.value = users.value.filter(user => user.id !== userId);
          alert('使用者刪除成功！');
        } catch (error) {
          console.error('刪除使用者錯誤:', error);
          alert('刪除使用者失敗！');
        }
      };

      loadUsers();

      return {
        users,
        newUser,
        handleCreateUser,
        loadUsers,
        handleUpdateUser,
        handleDeleteUser,
      };
    },
  });
</script>
