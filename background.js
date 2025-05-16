async function exportBookmarks() {
  const bookmarks = await browser.bookmarks.getTree();
  return JSON.stringify(bookmarks, null, 2);
}

async function analyzeBookmarkContent(url) {
  try {
    const response = await fetch(url);
    const text = await response.text();
    // Basit içerik analizi
    const keywords = extractKeywords(text.toLowerCase());
    return keywords;
  } catch (error) {
    console.error(`Error analyzing ${url}:`, error);
    return [];
  }
}

function extractKeywords(text) {
  // Basit keyword çıkarma işlemi
  const commonWords = new Set(['ve', 'veya', 'ile', 'için', 'bu', 'şu', 'o']);
  const words = text.split(/\W+/)
    .filter(word => word.length > 3 && !commonWords.has(word));
  return [...new Set(words)];
}

async function reorganizeBookmarks(bookmarks) {
  const categories = {};
  
  // Tüm bookmarkları analiz et
  for (const bookmark of bookmarks) {
    if (bookmark.url) {
      const keywords = await analyzeBookmarkContent(bookmark.url);
      // En çok geçen kelimelere göre kategori belirleme
      const category = determineCategory(keywords);
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(bookmark);
    }
  }
  
  return categories;
}

function determineCategory(keywords) {
  // Basit kategori belirleme mantığı
  const categoryKeywords = {
    'Teknoloji': ['programming', 'software', 'tech', 'coding'],
    'Haber': ['news', 'haber', 'gündem'],
    'Eğlence': ['video', 'music', 'game'],
    'Diğer': []
  };
  
  // En uygun kategoriyi bul
  for (const [category, catKeywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(k => catKeywords.includes(k))) {
      return category;
    }
  }
  return 'Diğer';
}

async function generateReport(originalBookmarks, newCategories) {
  const report = {
    originalCount: countBookmarks(originalBookmarks),
    newCategoryCount: Object.keys(newCategories).length,
    categorySummary: {}
  };
  
  for (const [category, bookmarks] of Object.entries(newCategories)) {
    report.categorySummary[category] = bookmarks.length;
  }
  
  return JSON.stringify(report, null, 2);
}

function countBookmarks(bookmarks) {
  let count = 0;
  for (const bookmark of bookmarks) {
    if (bookmark.url) count++;
    if (bookmark.children) {
      count += countBookmarks(bookmark.children);
    }
  }
  return count;
}

browser.runtime.onMessage.addListener(async (message) => {
  if (message.action === "startProcess") {
    try {
      // 1. Bookmarkları export et
      const originalBookmarks = await exportBookmarks();
      
      // 2. Dosyayı kaydet
      const backupBlob = new Blob([originalBookmarks], {type: 'application/json'});
      const backupUrl = URL.createObjectURL(backupBlob);
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      await browser.downloads.download({
        url: backupUrl,
        filename: `bookmarks-backup-${timestamp}.json`
      });
      
      // 3. Bookmarkları analiz et ve yeniden düzenle
      const reorganizedBookmarks = await reorganizeBookmarks(JSON.parse(originalBookmarks));
      
      // 4. Rapor oluştur
      const report = await generateReport(JSON.parse(originalBookmarks), reorganizedBookmarks);
      
      // 5. Raporu kaydet
      const reportBlob = new Blob([report], {type: 'application/json'});
      const reportUrl = URL.createObjectURL(reportBlob);
      await browser.downloads.download({
        url: reportUrl,
        filename: `bookmarks-report-${timestamp}.json`
      });
      
      return {success: true};
    } catch (error) {
      console.error('Process failed:', error);
      return {success: false, error: error.message};
    }
  }
}); 