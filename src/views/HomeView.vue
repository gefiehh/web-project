<template>
  <div class="main">
    <div class="main-text">
      <h1>Создайте портфолио онлайн бесплатно со СтудПортфолио</h1>
      <p>
        Расскажите о себе, своих достижениях, соберите все свои дипломы в одном месте, создав уникальное портфолио для привлечения работодателей, подтверждения ваших компетенций и заслуг.
      </p>
      <RouterLink to="/portfolio">
        <button class="btn">Создать портфолио</button>
      </RouterLink>
    </div>
    <div class="main-img">
      <img src="../assets/image1.jpg" alt="Help" />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  components: {
    Header
  }
};
</script>