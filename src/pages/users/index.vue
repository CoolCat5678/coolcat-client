<template>
  <v-container>

    <h2 class="text-2xl font-bold mb-4">👤 使用者測試頁</h2>
    <v-card>
      <v-card-title>
        新增使用者
      </v-card-title>

      <div class="mb-6">

        <v-form @submit.prevent="handleCreateUser">
          <div class="space-y-4">
            <v-text-field
              v-model="newUser.username"
              class="w-full p-2 border border-gray-300 rounded-md"
              placeholder="使用者名稱"
              type="text"
            />
            <v-text-field
              v-model="newUser.email"
              class="w-full p-2 border border-gray-300 rounded-md"
              placeholder="使用者 Email"
              type="email"
            />
            <v-text-field
              v-model="newUser.role"
              class="w-full p-2 border border-gray-300 rounded-md"
              placeholder="使用者角色（選填）"
              type="text"
            />
            <v-btn
              class="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              type="submit"
            >
              創建使用者
            </v-btn>
          </div>
        </v-form>
      </div>
    </v-card>
    <!-- 顯示使用者列表 -->
    <div class="mb-6">
      <h3 class="text-xl mb-2">使用者列表</h3>
      <button
        class="mb-4 p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        @click="loadUsers"
      >
        加載使用者列表
      </button>
      <ul>
        <li
          v-for="user in users"
          :key="user.id"
          class="flex justify-between items-center mb-4 p-4 border border-gray-300 rounded-md"
        >
          <div>
            <p class="font-semibold">{{ user.username }}</p>
            <p class="text-sm text-gray-500">{{ user.email }}</p>
          </div>
          <div>
            <button
              class="px-3 py-1 text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
              @click="handleUpdateUser(user.id)"
            >
              更新
            </button>
            <button
              class="px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600 ml-2"
              @click="handleDeleteUser(user.id)"
            >
              刪除
            </button>
          </div>
        </li>
      </ul>
    </div>
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
