const openTwitterPopup = () => {
    const overlay = document.querySelector('.popup-overlay');
    if (overlay) {overlay.remove();} else {
      const overlay = document.createElement('div');
      overlay.className = 'popup-overlay';
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      overlay.style.zIndex = '9999';
      const iframe = document.createElement('iframe');
      iframe.srcdoc = '<a class="twitter-timeline" data-lang="en" data-theme="light" href="https://twitter.com/depinunleashed"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
      iframe.style.height = '100%';
      iframe.style.width = '85%';
      iframe.style.border = 'none';
      overlay.appendChild(iframe);
      const closeBtn = document.createElement('img');
      closeBtn.src = 'close.png';
      closeBtn.style.position = 'absolute';
      closeBtn.style.top = '10px';
      closeBtn.style.right = '10px';
      closeBtn.style.height = '40px';
      closeBtn.style.width = '40px';
      closeBtn.addEventListener('click', () => {overlay.remove();});
      overlay.appendChild(closeBtn);
      document.body.appendChild(overlay);
    }
  };

export default openTwitterPopup;