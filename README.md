<p align="center">
<a href="#" target="_blank"><img src="https://user-images.githubusercontent.com/59381835/181935700-202806b5-d796-434d-b4fd-51f005e2dd5f.png" width="140px" height="auto"/></a>
</p>

<h1 align="center">
  Zeurus
</h1>

<p align="center">
Zeurus, a cross-platform blazingly fast code/text editor with Syntax Highlighting
</p>

## Installation

Installing Zeurus is very straight forward.<br>
Currently, Mac Support is pending due to the lack of testers.

Head over to the **[releases](https://github.com/DashCruft/Zeurus/releases)** and grab the `.msi` if you are on windows, `tar.zst` & `.deb` for Linux

## Development

If you'd like to compile Zeurus from source, please read the following: <br>

**REQUIREMENTS**<br> 
- node `v17` or higher (`v18.5` is tested on my end and seems to be the most compatible)<br>
- All prerequisites in **[Here](https://tauri.app/v1/guides/getting-started/prerequisites/)**
- yarn because npm bad.

Once met requirements, do the following:
```
git clone https://github.com/DashCruft/Zeurus.git && cd Zeurus
yarn install
```
To run Zeurus afterwards, do `yarn tauri:serve` 

