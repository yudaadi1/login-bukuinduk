<template>
  <div class="home">
    <div class="col-md-10 left-side">
      <img class="login-image" :src="require('@/assets/login.png')" alt="Login Image">
      <h2>Solusi Tepat Kemudahan Sistem dan Manajemen Sekolah</h2>
      <p>Layanan integrasi PPDB, PSB, pembelajaran daring, rekap absensi, sistem manajemen dan kebutuhan transaksi pembayaran non tunai di sekolah</p>
    </div>
    <div class="col-md-2 right-side">
      <div class="card smaller-card">
        <div class="card-body d-flex flex-column align-items-start justify-content-center">
          <h5 class="card-title mb-3 mt-n3">Login</h5>
          <form @submit.prevent="attemptLogin" class="w-100">
            <!-- School selection -->
            <select v-model="selectedSchool" class="form-control smaller-input" required>
              <option value="" disabled>Pilih Sekolah</option>
              <option v-for="school in schools" :key="school">{{ school }}</option>
            </select>
            <!-- Nis/Nik input -->
            <div class="mb-3">
              <input v-model="nis" type="text" class="form-control smaller-input" id="nis" placeholder="NIS / NIK" required>
            </div>
            <!-- Password input -->
            <div class="mb-3">
              <input v-model="password" type="password" class="form-control smaller-input" id="password" placeholder="Masukkan Password" required>
            </div>
            <!-- Login button -->
            <button type="submit" class="btn btn-primary btn-sm">
              Login
            </button>
            <!-- Error message -->
            <p v-if="!isFormValid" class="error-text">Harap lengkapi semua kolom</p>
            <!-- Forgot password link -->
            <a href="#" class="text-password">Lupa Password ?</a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      nis: '',
      password: ''
    };
  },
  computed: {
    ...mapState(['schools', 'loggedIn']),
    selectedSchool: {
      get() {
        return this.$store.state.selectedSchool;
      },
      set(value) {
        this.$store.commit('setSelectedSchool', value);
      }
    },
    isFormValid() {
      return this.selectedSchool && this.nis && this.password;
    }
  },
  methods: {
    ...mapActions(['login']),
    async attemptLogin() {
      if (this.isFormValid) {
        this.$store.commit('setNis', this.nis);
        this.$store.commit('setPassword', this.password);

        await this.login();

        if (this.loggedIn) {
         
          this.$router.push('/bukuinduk');
        }
      } else {
     
        console.log("Please complete all fields.");
      }
    }
  }
};
</script>


<style scoped>
.home {
  display: flex;
  height: 100vh;
}
.loading-indicator {
  color: #007bff;
  margin-top: 5px;
}

.left-side {
  flex: 1.4;
  background-color: #007bff;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
}
.card-title {
  
  align-self: flex-start;
  margin-left: 20px;
  margin-top: -15px;
}
.left-side h2,
.left-side p {
  text-align: center;
}
.text-password{
  justify-content: center;
  align-items: center;
}
.right-side {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color:whitesmoke;

}

.card {
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 0 10px 6px rgba(0, 0, 0, 0.1);
}


.smaller-card {
  max-width: 350px;
  margin: 0 auto;
  height: 350px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.smaller-input {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  font-size: 12px;
  margin-bottom: 10px;
  margin-top: 10px; /* Add margin-top to push inputs down */
}
.card-body {
  padding: 20px;
}

.btn-primary {
  width: 100%;
  padding: 10px;
}

@media (max-width: 767px) {
  .home {
    flex-direction: column;
  }
  .left-side {
    display: none;
  }
  .right-side {
    padding-top: 40px;
  }
}
</style>
