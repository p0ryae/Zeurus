#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![get_input])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

use std::env;
#[tauri::command]
fn get_input() -> Vec<String> {
  let args = env::args().collect();
  args
}