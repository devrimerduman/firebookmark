document.getElementById('backupBtn').addEventListener('click', async () => {
  const statusDiv = document.getElementById('status');
  statusDiv.textContent = 'Process started...';
  
  try {
    const result = await browser.runtime.sendMessage({action: "startProcess"});
    if (result.success) {
      statusDiv.textContent = 'Process completed successfully!';
    } else {
      statusDiv.textContent = 'Error occurred: ' + result.error;
    }
  } catch (error) {
    statusDiv.textContent = 'Error occurred: ' + error.message;
  }
}); 