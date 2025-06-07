<template>
  <div class="header">
    <div class="logo">СтудПортфолио</div>
    <div class="nav">
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/faq">Частые вопросы</RouterLink>
      <RouterLink to="/portfolio">Ваше портфолио</RouterLink>
    </div>
    <div class="login" @click="$emit('open-login')">Вход</div>
  </div>
</template>