document.getElementById('backupBtn').addEventListener('click', async () => {
  const statusDiv = document.getElementById('status');
  statusDiv.textContent = 'İşlem başlatıldı...';
  
  try {
    const result = await browser.runtime.sendMessage({action: "startProcess"});
    if (result.success) {
      statusDiv.textContent = 'İşlem başarıyla tamamlandı!';
    } else {
      statusDiv.textContent = 'Hata oluştu: ' + result.error;
    }
  } catch (error) {
    statusDiv.textContent = 'Hata oluştu: ' + error.message;
  }
}); 