<template>
  <div class="container px-6">
    <div class="mt-9">
      <h4 class="mb-9">課程方案</h4>
      <button type="button" class="btn fs-4 plus">
        <i class="bi bi-plus-circle"></i>
      </button>
    </div>
    <div class="admin-table">
      <table class="table mt-4 table-bordered">
        <thead>
          <tr class="tr">
            <th width="5">
              方案
            </th>
            <th width="5">堂數</th>
            <th width="5">
              1堂
            </th>
            <th width="5">
              價格
            </th>
            <th width="5">
              標語
            </th>
            <th width="60">
              內容
            </th>
            <th width="5">推薦指數</th>
            <th width="5">圖片</th>
            <th width="5">
              編輯
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="tr">
            <td>{{  }}</td>
            <td>{{  }}</td>
            <td>{{ }}</td>
            <td>{{  }}</td>
            <td>{{ }}</td>
            <td>{{ }}</td>
            <td>
              <div class="d-flex justify-content-center pt-1">
                <i
                class="bi bi-star-fill"></i>
              </div>
            </td>
            <td>
              <img alt="img">
            </td>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-outline-primary btn-sm"
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                >
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-9">
      <h4 class="mb-9">師資</h4>
      <button type="button" class="btn fs-4 plus">
        <i class="bi bi-plus-circle"></i>
      </button>
    </div>
    <div class="admin-table">
      <table class="table mt-4 table-bordered">
        <thead>
          <tr class="tr">
            <th width="70">
              教練名單
            </th>
            <th width="10">地區</th>
            <th width="10">照片</th>
            <th width="10">
              編輯
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="tr">
            <td>{{  }}</td>
            <td>{{  }}</td>
            <td><img  alt="teacherImg"></td>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-outline-primary btn-sm"
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                >
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <nav class="py-5 d-flex flex-column
      align-items-center" aria-label="...">
        <ul class="pagination pagination-sm">
          <li class="page-item active" aria-current="page">
            <a href="#" class="d-flex align-items-center">1
              <i class="bi bi-caret-right-fill ms-3"></i></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
