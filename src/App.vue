<template>
  <div data-tauri-drag-region class="titlebar" id="titlebar">
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

    <div class="SubCategory" id="editSubCategory">
      <div class="sub">Redo</div>
      <div class="sub">Undo</div>
    </div>

    <div class="main" id="view">
      View
    </div>

    <div class="SubCategory" id="viewSubCategory">
      <div class="sub" id="zoomIn">Zoom In</div>
      <div class="sub" id="zoomOut">Zoom Out</div>
    </div>

    <div class="main" id="Info">
      Info
    </div>

    <div class="titlebar-icons">
      <div @click="minimize_window" class="titlebar-min mx-1"></div>
      <div @click="maximize_window" class="titlebar-max mx-1"></div>
      <div @click="quit_window" class="titlebar-exit mx-1"></div>
    </div>
  </div>

  <div class="overlayDrop" id="overlayDrop"></div>
  <textarea class="viewer" id="viewer" placeholder="Start typing or Open a file..." />

</template>

<script>
import listeners from './components/listeners.vue'
export default {
  name: 'App',
  listeners,
  methods: {
    minimize_window() {
      window.__TAURI__.window.appWindow.minimize()
    },
    maximize_window() {
      window.__TAURI__.window.appWindow.toggleMaximize()
    },
    quit_window() {
      window.__TAURI__.window.appWindow.close()
    },
  }
}
</script>

 <style>
 @import './css/default.css';
 </style>
