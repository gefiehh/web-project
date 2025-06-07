<template>
  <div class="portfolio">
    <div class="portfolio-title">Ваши дипломы:</div>
    <div class="diplomas">
      <div v-for="diploma in diplomas" :key="diploma._id" class="diploma">
        <img
          v-if="isImage(diploma.filename)"
          :src="`http://localhost:3000/uploads/${diploma.filename}`"
          alt="Диплом"
          style="max-width: 90px; max-height: 110px;"
        />
        <a
          v-else
          :href="`http://localhost:3000/uploads/${diploma.filename}`"
          target="_blank"
        >
          {{ diploma.originalname }}
        </a>
        <button class="btn delete" @click="deleteDiploma(diploma._id)">Удалить</button>
      </div>
    </div>
    <div class="actions">
      <div class="btn" @click="triggerUpload">Загрузить</div>
      <input
        type="file"
        ref="fileInput"
        style="display: none;"
        @change="uploadFiles"
        accept="image/*,application/pdf"
      />
    </div>
    <div class="portfolio-img">
      <img src="../assets/image3.jpg" alt="Портфолио" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      diplomas: [],
      diplomaLimit: 8
    };
  },
  mounted() {
    this.fetchDiplomas();
  },
  methods: {
    isImage(filename) {
      return /\.(jpg|jpeg|png|gif)$/i.test(filename);
    },
    async fetchDiplomas() {
      try {
        const response = await fetch('http://localhost:3000/api/diplomas');
        const data = await response.json();
        this.diplomas = data;
      } catch (err) {
        console.error('Ошибка при загрузке дипломов:', err);
      }
    },
    triggerUpload() {
      this.$refs.fileInput.click();
    },
    async uploadFiles(event) {
      const files = event.target.files;
      if (!files.length || this.diplomas.length >= this.diplomaLimit) return;

      const formData = new FormData();
      for (let file of files) {
        formData.append('files', file);
      }

      try {
        const response = await fetch('http://localhost:3000/api/upload', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          await this.fetchDiplomas(); // обновляем список
        } else {
          console.error('Ошибка при загрузке файла:', await response.text());
        }
      } catch (err) {
        console.error('Сетевая ошибка при загрузке файла:', err);
      }

      event.target.value = '';
    },
    async deleteDiploma(id) {
      try {
        const response = await fetch(`http://localhost:3000/api/delete/${id}`, {
          method: 'DELETE'
        });

        if (response.ok) {
          this.diplomas = this.diplomas.filter(d => d._id !== id);
        } else {
          console.error('Ошибка при удалении:', await response.text());
        }
      } catch (err) {
        console.error('Сетевая ошибка при удалении:', err);
      }
    }
  }
};
</script>

<style scoped>
.diploma {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}
.btn.delete {
  background-color: #ff4d4d;
  color: white;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
}
</style>
