<script>
const fs = window.__TAURI__.fs;
const dialog = window.__TAURI__.dialog;

window.addEventListener("load", async function () {
  let savedFileLocation;

  document.addEventListener('keydown', async function (a) {
    if (a.ctrlKey && a.key.toLowerCase() === 's') {
      a.preventDefault();
      if (!savedFileLocation) {
        const filePath = await dialog.save({
          multiple: false,
        });

        await fs.writeTextFile(filePath, document.getElementById("viewer").value)
      } else {
        await fs.writeTextFile(savedFileLocation, document.getElementById("viewer").value)
        alert("Saved File!")
      }
    }
  });

  document.getElementById("file").addEventListener('click', async function () {
    let x = document.getElementById("fileSubCategory");
    let Display = window.getComputedStyle(x, null).getPropertyValue("display");
    if (Display === "none") {
      x.style.cssText = ";display:block !important;";
    } else {
      x.style.cssText = ";display:none !important;";
    }
  })

  document.getElementById("newFile").addEventListener('click', async function () {
    savedFileLocation = "";
    document.getElementById("viewer").value = ``;
    document.getElementById("fileSubCategory").style.cssText = ";display:none !important;";
  })

  document.getElementById("openFile").addEventListener('click', async function () {
    const selected = await dialog.open({
      multiple: false,
    });

    if (!selected) return;
    savedFileLocation = selected;
    try {
      let readFile = await fs.readTextFile(selected);
      document.getElementById("viewer").value = `${readFile}`;
      document.getElementById("fileSubCategory").style.cssText = ";display:none !important;";
    } catch (err) {
      alert(err);
    }
  })

  document.getElementById("saveFile").addEventListener('click', async function () {
    if (!savedFileLocation) {
      const filePath = await dialog.save({
        multiple: false,
      });

      await fs.writeTextFile(filePath, document.getElementById("viewer").value)
      document.getElementById("fileSubCategory").style.cssText = ";display:none !important;";
    } else {
      await fs.writeTextFile(savedFileLocation, document.getElementById("viewer").value)
      document.getElementById("fileSubCategory").style.cssText = ";display:none !important;";
      alert("Saved File!")
    }
  })

  document.getElementById("saveFileAs").addEventListener('click', async function () {
    const filePath = await dialog.save({
      multiple: false,
    });

    await fs.writeTextFile(filePath, document.getElementById("viewer").value)
    document.getElementById("fileSubCategory").style.cssText = ";display:none !important;";
  })

  document.getElementById("edit").addEventListener('click', async function () {
    console.log("test")
  })
});
</script>
