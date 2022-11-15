#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::env;
use tauri::Manager;

#[cfg(target_os = "windows")]
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_input, show_main_window])
        .setup(|app| {
            let window = app.get_window(&"main").unwrap();
            window_shadows::set_shadow(&window, true).expect("Unsupported platform!");
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running zeurus");
}

#[cfg(target_os = "macos")]
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_input, show_main_window])
        .run(tauri::generate_context!())
        .expect("error while running zeurus");
}

#[cfg(target_os = "linux")]
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_input, show_main_window])
        .run(tauri::generate_context!())
        .expect("error while running zeurus");
}


#[tauri::command]
fn get_input() -> Vec<String> {
    let args = env::args().collect();
    args
}
#[tauri::command]
async fn show_main_window(window: tauri::Window) {
    window.get_window("main").unwrap().show().unwrap();
}
