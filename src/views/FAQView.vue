<template>
  <div class="content">
    <div class="faq">
      <div class="section">
        <div class="section-title">О загрузке файлов</div>
        <div class="q">Какие файлы можно загружать?</div>
        <div class="a">JPG, PNG и PDF.</div>
        <div class="q">Есть ли ограничения по размеру файла?</div>
        <div class="a">До 10 МБ.</div>
        <div class="q">Можно ли загружать сразу несколько файлов?</div>
        <div class="a">Да.</div>
        <div class="q">Могу ли я удалить файл?</div>
        <div class="a">Да.</div>
      </div>
      <div class="section">
        <div class="section-title">О содержании портфолио</div>
        <div class="q">Какие документы можно размещать?</div>
        <div class="a">Дипломы, сертификаты, грамоты и т.п.</div>
        <div class="q">Будет ли видно дату загрузки?</div>
        <div class="a">Нет.</div>
      </div>
      <div class="section">
        <div class="section-title">О видимости</div>
        <div class="q">Кто видит мои файлы?</div>
        <div class="a">Только вы.</div>
      </div>
      <div class="section">
        <div class="section-title">?? Технические моменты</div>
        <div class="q">Файл не загружается?</div>
        <div class="a">Проверьте формат и размер.</div>
        <div class="q">Сайт работает медленно?</div>
        <div class="a">Проверьте соединение или подождите.</div>
      </div>
    </div>
    <div class="img">
      <img src="../assets/image2.jpg" alt="Student" />
    </div>
  </div>
</template>

<script>
import ModalLogin from '../components/ModalLogin.vue';
export default {
  components: { ModalLogin }
};
</script>
