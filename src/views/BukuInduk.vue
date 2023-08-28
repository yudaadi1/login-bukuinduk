<template>
  <div class="buku">
    <el-row>
      <el-col :span="isSidebarCollapsed ? 0 : 4">
        <div :class="['sidebar', 'bg-dark', 'text-white', { 'collapsed': isSidebarCollapsed }]">
          <el-menu v-if="!isSidebarCollapsed" :default-active="activeTab" class="sidebar-menu">
            <el-menu-item index="tab1">
              <font-awesome-icon :icon="['fas', 'home']" />
              <span>Buku Induk</span>
            </el-menu-item>
            <el-menu-item index="tab2">
              <font-awesome-icon :icon="['fas', 'info-circle']" />
              <span>Tab 2</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <div class="collapse-button mt-left" @click="toggleSidebar">
        <!-- ... -->
      </div>
      <el-col :span="isSidebarCollapsed ? 24 : 20">
        <div class="content p-3">
          <div class="navbar">
            <div class="brand">
              <div class="collapse-button" @click="toggleSidebar">
                <font-awesome-icon :icon="['fas', isSidebarCollapsed ? 'arrow-right' : 'arrow-left']" />
              </div>
              <span class="brand-icon">
                Buku Induk
              </span>
            </div>
          </div>
          <br />
          <div class="container-fluid pl-3 pr-3 container-content">
            <el-tabs v-model="activeTab">
              <el-tab-pane label="Peserta Didik" name="tab1">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Pelajar</h5>
                    <el-form class="form-inline" :model="formInline" label-position="top">
                      <el-row>
                        <el-col :span="5">
                          <el-form-item>
                            <el-input v-model="alamat" placeholder="Cari Nisn / Nis"></el-input>
                          </el-form-item>
                          <el-form-item>
                            <el-select v-model="alamat" placeholder="Pilih Status">
                              <el-option label="Aktif" value="Aktif"></el-option>
                              <el-option label="Non Aktif" value="Non Aktif"></el-option>
                              <!-- Tambahkan pilihan lainnya sesuai kebutuhan -->
                            </el-select>
                          </el-form-item>
                        </el-col>
                        <el-col :span="5">
                          <el-form-item>
                            <el-select v-model="nama" placeholder="Pilih Kelas">
                              <el-option label="XII-MIPA" value="XII-MIPA"></el-option>
                              <!-- Tambahkan pilihan lainnya sesuai kebutuhan -->
                            </el-select>
                          </el-form-item>
                          <el-form-item>
                            <el-select v-model="alamat" placeholder="Semua Jurusan">
                              <el-option label="Mipa" value="Mipa"></el-option>
                              <el-option label="Rekayasa Perangkat Lunak" value="Rekayasa Perangkat Lunak"></el-option>
                              <!-- Tambahkan pilihan lainnya sesuai kebutuhan -->
                            </el-select>
                          </el-form-item>
                        </el-col>
                        <el-col :span="2.8">
                          <el-form-item>
                            <el-button type="primary" class="large-button">Import Excel</el-button>
                          </el-form-item>
                          <el-form-item>
                            <el-button type="primary" class="large-button">Lihat Dokumen</el-button>
                          </el-form-item>
                        </el-col>
                        <el-col :span="2.8">
                          <el-form-item>
                            <el-button type="primary" class="large-button">Tambah</el-button>
                          </el-form-item>
                          <el-form-item>
                            <el-button type="primary" class="large-button">Data Arsip</el-button>
                          </el-form-item>
                        </el-col>
                      </el-row>
                    </el-form>
                    <br>
                    <el-table :data="tableData" style="width: 100%">
                      <el-table-column fixed prop="no" label="No" width="120" />
                      <el-table-column prop="nis" label="Nisn / Nis" width="120" />
                      <el-table-column prop="nama" label="Nama" width="120" />
                      <el-table-column prop="jurusan" label="Jurusan" width="120" />
                      <el-table-column prop="kelas" label="Kelas" width="120" />
                      <el-table-column prop="spp" label="Setting Spp" width="120" />
                      <el-table-column prop="status" label="Status" width="120">
                        <template #default="{ row }">
                          <el-switch :value="row.status === 'Aktif'" active-color="#67C23A" inactive-color="#E6A23C"
                            @change="handleStatusChange(row)" />
                        </template>
                      </el-table-column>
                      <el-table-column fixed="right" label="Aksi" width="180">
                        <template #default="{ row }">
                          <el-button link type="primary" size="small" @click="handleDetailClick(row)">
                            <font-awesome-icon :icon="['fas', 'info-circle']" />
                          </el-button>
                          <el-button link type="primary" size="small" @click="handleEditClick(row)">
                            <font-awesome-icon :icon="['fas', 'edit']" />
                          </el-button>
                          <el-button link type="danger" size="small" @click="handleDeleteClick(row)">
                            <font-awesome-icon :icon="['fas', 'trash-alt']" />
                          </el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="Guru Dan Tendik" name="tab2">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Guru & Staff</h5>
                    <el-form class="form-inline" :model="formInline" label-position="top">
                      <el-row>
                        <el-col :span="4">
                          <el-form-item>
                            <el-input v-model="alamat" placeholder="Cari Nip / Nama"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="4">
                          <el-form-item>
                            <el-select v-model="nama" placeholder="Semua Peranan">
                              <el-option label="guru" value="Guru"></el-option>
                              <el-option label="Admin" value="Admin"></el-option>
                              <el-option label="Kepala Sekolah" value="Kepalah Sekolah"></el-option>
                              <el-option label="koperasi" value="koperasi"></el-option>
                              <el-option label="BK" value="Bimbingan Konseling"></el-option>
                              <el-option label="Keuangan" value="Keuangan"></el-option>
                              <!-- Tambahkan pilihan lainnya sesuai kebutuhan -->
                            </el-select>
                          </el-form-item>
                        </el-col>
                        <el-col :span="4">
                          <el-form-item>
                            <el-select v-model="nama" placeholder="Semua Status">
                              <el-option label="Aktif" value="Aktif"></el-option>
                              <el-option label="Non Aktif" value="Non Aktif"></el-option>
                              <!-- Tambahkan pilihan lainnya sesuai kebutuhan -->
                            </el-select>
                          </el-form-item>
                        </el-col>
                        <el-col :span="3">
                          <el-form-item>
                            <el-button type="primary" class="large-button">
                              <font-awesome-icon :icon="['fas', 'file-excel']" />
                              Excel
                            </el-button>
                          </el-form-item>
                        </el-col>
                        <el-col :span="3">
                          <el-form-item>
                            <el-button type="primary" class="large-button">
                              <font-awesome-icon :icon="['fas', 'plus']" />
                              Tambah
                            </el-button>
                          </el-form-item>
                        </el-col>
                        <el-col :span="3">
                          <el-form-item>
                            <el-button type="primary" class="large-button">
                              <font-awesome-icon :icon="['fas', 'edit']" />
                              Edit
                            </el-button>
                          </el-form-item>
                        </el-col>
                      </el-row>
                    </el-form>
                    <el-table :data="guru" style="width: 100%">
                      <el-table-column fixed prop="no" label="No" width="120" />
                      <el-table-column prop="nip" label="NIP / NUPTK" width="120" />
                      <el-table-column prop="nama" label="Nama" width="120" />
                      <el-table-column prop="Peranan" label="Peranan" width="120" />
                      <el-table-column prop="status" label="Status" width="120">
                        <template #default="{ row }">
                          <el-switch :value="row.status === 'Aktif'" active-color="#67C23A" inactive-color="#E6A23C"
                            @change="handleStatusChange(row)" />
                        </template>
                      </el-table-column>
                      <el-table-column fixed="right" label="Aksi" width="180">
                        <template #default="{ row }">
                          <el-button link type="primary" size="small" @click="handleDetailClick(row)">
                            <font-awesome-icon :icon="['fas', 'info-circle']" />
                          </el-button>
                          <el-button link type="primary" size="small" @click="handleEditClick(row)">
                            <font-awesome-icon :icon="['fas', 'edit']" />
                          </el-button>
                          <el-button link type="danger" size="small" @click="handleDeleteClick(row)">
                            <font-awesome-icon :icon="['fas', 'trash-alt']" />
                          </el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="Validasi Data" name="Validasi data">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Validasi Data</h5>
                    <el-tabs type="border-card">
                        <el-tab-pane label="User">
                          <el-button plain size="large">Refresh</el-button>
                          <el-table :data="guru" style="width: 100%">
                      <el-table-column fixed prop="no" label="No" width="120" />
                      <el-table-column prop="keterangan" label="Keterangan" width="800" />
                      
                    </el-table>
                        </el-tab-pane>
                        <el-tab-pane label="Guru & Tendik">
                          <h5>Dalam Pengembangan</h5>
                        </el-tab-pane>
                        <el-tab-pane label="Kelas">
                          <h5>Dalam Pengembangan</h5>
                        </el-tab-pane>
                        <el-tab-pane label="Rapor">
                          <h5>Dalam Pengembangan</h5>
                        </el-tab-pane>
                      </el-tabs>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ElTabs, ElTabPane, ElMenu, ElMenuItem, ElRow, ElCol, ElSwitch } from "element-plus";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: "BukuInduk",
  components: {
    ElTabs,
    ElTabPane,
    ElMenu,
    ElMenuItem,
    ElRow,
    ElCol,
    ElSwitch, // Tambahkan komponen ElSwitch
    FontAwesomeIcon,
  },
  data() {
    return {
      tableData: [
        { no: 1, nis: "123456", nama: "John Doe", jurusan: "Mipa", kelas: "XII-MIPA", spp: "Rp 1.000.000", status: "Aktif" },
        { no: 2, nis: "789012", nama: "Jane Smith", jurusan: "Rekayasa Perangkat Lunak", kelas: "XII-RPL", spp: "Rp 900.000", status: "Non Aktif" },
        // Data lainnya
      ],
      guru: [
      {no: 1, nip: "123456", nama: "John Doe", peranan: "Guru", status: "Aktif",keterangan:"Siswa a.n Ali Kelas: XII-MIPA, Progres pengisian data induk masih 29%"}
      ],
      activeTab: "tab1",
      isSidebarCollapsed: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    },
    handleStatusChange(row) {
      row.status = row.status === 'Aktif' ? 'Non Aktif' : 'Aktif';
    },

    handleDetailClick(row) {
      // Logika untuk menangani tombol Detail
    },
    handleEditClick(row) {
      // Logika untuk menangani tombol Edit
    },
    handleDeleteClick(row) {
      // Logika untuk menangani tombol Hapus
    },

  },
};
</script>


<style>
  /* Gaya khusus untuk kartu */
  .card {
    margin: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

  .card-title {
    font-size: 1.25rem;
    margin-bottom: 10px;
  }

  .card-text {
    color: #666;
  }

  /* Gaya untuk sidebar */
  .sidebar {
    transition: width 0.3s;
  }

  .collapsed .sidebar {
    width: 60px;
  }

  .sidebar-menu {
    padding-top: 20px;
  }

  .el-menu-item {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    font-size: 18px;
  }

  /* Gaya untuk collapse button */
  .collapse-button {
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: width 0.3s;
    position: absolute;
    top: 20px;
    right: 0;
    z-index: 1;
  }

  .collapsed .collapse-button {
    width: 20px;
  }

  /* Gaya ikon collapse button */
  .fa {
    font-size: 1.5rem;
  }

  /* Layouting */
  .buku {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .wrapper {
    display: flex;
    height: 100%;
  }

  .el-row {
    flex: 1;
    height: 100%;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #f8f9fa;
    border-bottom: 1px solid #ccc;
  }

  .brand {
    display: flex;
    align-items: center;
  }

  .brand-icon {
    font-size: 1.5rem;
    margin-right: 10px;
  }

  .el-tabs {
    margin-top: 20px;
    /* Tambahkan margin-top sesuai kebutuhan Anda */
    margin-left: 10px;
    /* Tambahkan margin-left sesuai kebutuhan Anda */
  }

  .el-row .el-form-item {
    margin-right: 10px;

  }

  .large-button {
    font-size: 30px;
    /* Ubah nilai font-size sesuai kebutuhan Anda */
    padding: 10px 20px;
    width: 180px;
    /* Sesuaikan padding sesuai preferensi Anda */
  }
</style>