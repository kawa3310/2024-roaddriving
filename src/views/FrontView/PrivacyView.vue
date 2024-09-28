<template>
  <NavbarComponents/>
  <div class="empty-content"></div>
  <section class="container mt-3 mb-lg-9">
    <div aria-label="breadcrumb">
      <ol class="breadcrumb px-0 mb-0 py-2 fs-7 justify-content-start">
        <li class="breadcrumb-item">
          <RouterLink class="text-muted" :to="`/`">首頁</RouterLink>
        </li>
        <li class="breadcrumb-item">
          <RouterLink class="d-flex align-items-center" to="/privacy">隱私權政策</RouterLink>
        </li>
      </ol>
    </div>
    <div class="privacy-content">
      <div class="d-grid gap-5 w-75">
        <div>
          <p>為了讓您能夠安心使用本網站的各項服務與資訊</p>
          <p>以保障您的權益請您詳閱下列內容：</p>
        </div>
        <div>
          <h5>個人資料的蒐集、處理及利用方式</h5>
          <p>當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料。
          </p>
          <p>非經您書面同意，本網站不會將個人資料用於其他用途。</p>
        </div>
        <div>
          <h5>Cookie之使用</h5>
          <p>為了提供您最佳的服務，
            本網站會在您的電腦中放置並取用我們的Cookie，
            若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導至網站某些功能無法正常執行。
          </p>
        </div>
        <p>本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。</p>
        <h5 class="text-end">南南道路駕訓</h5>
      </div>
    </div>
  </section>
  <FooterComponents />
</template>

<script>
import NavbarComponents from '@/components/NavbarComponents.vue';
import FooterComponents from '@/components/FooterComponents.vue';

export default {
  components: {
    NavbarComponents,
    FooterComponents,
  },
};
</script>

<style scoped lang="scss">
  .privacy-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    font-size: 20px;
    h5{
      line-height: 3;
    }
  }
</style>
