<template>
    <div class="container my-5">
    <div class="row justify-content-end">
      <div class="col-md-11">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb px-0 mb-0 py-2 fs-7 justify-content-start">
              <li class="breadcrumb-item">
                <RouterLink class="text-muted" :to="`/`">首頁</RouterLink>
              </li>
              <li class="breadcrumb-item">
                <RouterLink class="text-muted" :to="`/merchandise`">產品列表</RouterLink>
              </li>
              <li class="breadcrumb-item active" aria-current="page">{{  }}</li>
            </ol>
        </nav>
      </div>
    </div>
  </div>
</template>
