# Firefox Bookmark Organizer

A Firefox browser extension that automatically backs up your bookmarks and reorganizes them based on their content analysis.

## Features

- Backup existing bookmarks in JSON format
- Automatic content analysis of each bookmark
- Categorize bookmarks based on content analysis
- Compare and report differences between original and new organization
- Detailed reporting of all operations

## Installation

1. Open `about:debugging` in your Firefox browser
2. Click on "This Firefox" tab
3. Click "Load Temporary Add-on"
4. Select the `manifest.json` file from the project

## Usage

1. After installation, the extension will appear in the Firefox toolbar
2. Click on the extension icon
3. Click "Backup and Organize Bookmarks" button
4. When the process completes:
   - Original bookmarks are saved to `bookmarks-backup-[date].json`
   - New organization report is saved to `bookmarks-report-[date].json`

## Technical Details

### Project Structure

```
firebookmark/
├── manifest.json        # Extension manifest file
├── popup.html          # Extension UI
├── popup.js           # UI interactions
└── background.js      # Core processing logic
```

### Technologies Used

- Firefox WebExtensions API
- JavaScript (ES6+)
- HTML/CSS

### Category System

Default categories:
- Technology
- News
- Entertainment
- Other

## Development

### Requirements

- Firefox Browser
- Basic web development knowledge

### Local Development

1. Clone the project:
```bash
git clone https://github.com/[username]/firebookmark.git
cd firebookmark
```

2. Test in Firefox Developer Mode:
   - Open `about:debugging`
   - Go to "This Firefox" > "Load Temporary Add-on"
   - Select the `manifest.json` file

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## Contact

[Your contact information]

## Acknowledgments

Thanks to everyone who has contributed to this project! 