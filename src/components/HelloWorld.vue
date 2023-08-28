<template>
    <el-row >
    <el-col :xs="24" :sm="12" class="warna"><div class="grid-content" />
      <div class="column-content">
        <div class="grid-content hidden-sm-only">
        <el-image class="login-image" :src="require('@/assets/login.png')" fit="contain"></el-image>
      </div>
      </div>
    </el-col>
    <el-col :xs="24" :sm="12"><div class="grid-content ep-bg-purple-light" />
    <div class="login-container">
    <el-card class="login-card">
      <div slot="header" class="login-card-header">
        Login !
      </div>
      <div class="login-card-content">
        <el-form ref="loginForm" :model="loginData">
          <el-form-item prop="Sekolah">
            <el-input v-model="loginData.Sekolah" placeholder="Cari Nama Sekolah" size="large"><font-awesome-icon icon="laugh-wink" /></el-input>
          </el-form-item>
          <el-form-item prop="Nip">
            <el-input v-model="loginData.Nis" placeholder="NIS / NIK" :prefix-icon="userIcon" size="large"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginData.password" type="password" placeholder="Masukkan Password" :prefix-icon="lockIcon" size="large"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="center-button" @click="submitForm" size="large">Login</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
    </el-col>
  </el-row>
</template>

<script>
// Import Vue and other necessary dependencies
import { ElImage, ElCard, ElForm, ElFormItem, ElInput, ElButton } from "element-plus";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    ElImage,
    ElCard,
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
  },
  data() {
    return {
      loginData: {
        Sekolah: '',
        Nis: '',
        password: ''
      },
     
    };
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // Proses login di sini
          console.log('Logged in', this.loginData);
        } else {
          console.log('Form validation failed');
        }
      });
    }
  }
};
</script>
<style scoped>
.column-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.login-image {
  width: 100vh;
 
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.warna{
  background-color:#7091F5;
  
}
.login-card {
  height: 60%;
  width: 400px;
}

.login-card-header {
  text-align: center;
  font-size: 18px;
  padding: 10px;
}

.login-card-content {
  padding: 40px;
}

.center-button {
  display: block;
  margin: 0 auto;
  width: 270px;
}

.hidden-sm-only {
  display: block;
}

@media screen and (max-width: 480px) {
  .hidden-sm-only {
    display: none;
  }
}
</style>