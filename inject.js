function injectCode(src) {
  const script = document.createElement("script");
  script.src = src;
  document.body.appendChild(script);
}

injectCode(chrome.runtime.getURL("main.js"));
