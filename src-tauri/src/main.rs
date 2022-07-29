#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::Manager;

fn main() {
  if cfg!(windows) {
      tauri::Builder::default()
          .invoke_handler(tauri::generate_handler![get_input])
          .setup(|app| {
              let window = app.get_window(&"main").unwrap();
              window_shadows::set_shadow(&window, true).expect("Unsupported platform!");
              Ok(())
          })
          .run(tauri::generate_context!())
          .expect("error while running lazap");
  } else if cfg!(unix) {
      tauri::Builder::default()
          .invoke_handler(tauri::generate_handler![get_input])
          .run(tauri::generate_context!())
          .expect("error while running lazap");
  } else if cfg!(target_os = "macos") {
      tauri::Builder::default()
          .invoke_handler(tauri::generate_handler![get_input])
          .run(tauri::generate_context!())
          .expect("error while running lazap");
  }
}

use std::env;
#[tauri::command]
fn get_input() -> Vec<String> {
  let args = env::args().collect();
  args
}