<template>
    <div class="wrapper">
      <!-- Sidebar -->
      <el-menu :default-active="activeMenuItem" class="sidebar">
        <el-menu-item index="dashboard">
          <i class="bi bi-house-door"></i>
          <span>Dashboard</span>
        </el-menu-item>
        <el-menu-item index="profile">
          <i class="bi bi-person"></i>
          <span>Profile</span>
        </el-menu-item>
        <el-menu-item index="settings">
          <i class="bi bi-gear"></i>
          <span>Settings</span>
        </el-menu-item>
      </el-menu>
  
      <!-- Content -->
      <div class="content">
      </div>
    </div>
  </template>
  
  <script>
  import { ElMenu, ElMenuItem } from "element-plus";
  
  export default {
    name: "SidebarLayout",
    components: {
      ElMenu,
      ElMenuItem,
    },
    data() {
      return {
        activeMenuItem: "dashboard",
      };
    },
  };
  </script>
  
  <style>
  /* Gaya untuk wrapper */
  .wrapper {
    display: flex;
  }
  
  /* Gaya untuk sidebar */
  .sidebar {
    width: 240px;
    background-color: #343a40;
    color: #ffffff;
  }
  
  .el-menu-item {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    font-size: 18px;
  }
  
  /* Gaya untuk konten */
  .content {
    flex: 1;
    padding: 20px;
  }
  </style>
  