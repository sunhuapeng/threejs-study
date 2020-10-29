function onProgress(xhr) {
  if (xhr.lengthComputable) {
    var percentComplete = (xhr.loaded / xhr.total) * 100;
    const bl = Math.round(percentComplete, 2);
    if (bar) {
      let text = `${bl}%`;
      bar.style.width = text;
      bar.innerHTML = `<p class="text">${text}</p>`;
      if (bl >= 100) {
        setTimeout(() => {
          bar.parentNode.style.display = "none";
        }, 600);
      }
    }
  }
}
