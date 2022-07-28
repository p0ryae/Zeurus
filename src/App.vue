<template>
  <div class="titlebar" id="titlebar">
    <div class="main" id="file">
      File
    </div>

    <div class="SubCategory" id="fileSubCategory">
      <div class="sub" id="newFile">New File</div>
      <div class="sub" id="openFile">Open File</div>
      <div class="sub" id="saveFile">Save</div>
      <div class="sub" id="saveFileAs">Save As</div>
    </div>

    <div class="main" id="edit">
      Edit
    </div>

    <div class="main" id="view">
      View
    </div>

    <div class="main" id="about">
      Info
    </div>
  </div>

  <div class="viewerDiv">
    <textarea class="viewer" id="viewer" />

  </div>

</template>

<script>
import listeners from './components/listeners.vue'
export default {
  name: 'App',
  listeners,
}
</script>

 <style>
 @import './css/default.css';
 </style>
