document.getElementById('downloadBtn').addEventListener('click', () => {
    const imageCount = document.getElementById('imageCount').value;
  
    // Validate the input
    if (imageCount && imageCount > 0) {
      // Send a message to the content script with the number of images
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'downloadImages', count: imageCount });
      });
    } else {
      alert('Please enter a valid number of images');
    }
  });
  