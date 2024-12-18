// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    question: "Which of the following is not a typical component found inside a computer system unit?",
    answer: "Printer",
    options: [
      "Printer",
      "Hard drive",
      "CPU",
      "Motherboard"
    ]
  },
  {
    question: "In Windows, what is the primary use of the ‘Recycle Bin’?",
    answer: "To temporarily store deleted files",
    options: [
      "To store uninstalled programs",
      "To collect system error reports",
      "To temporarily store deleted files",
      "To back up files automatically"
    ]
  },
  {
    question: "Which shortcut key combination is used to switch between open applications in Windows?",
    answer: "ALT + TAB",
    options: [
      "SHIFT + TAB",
      "ALT + TAB",
      "CTRL + TAB",
      "ALT + F4"
    ]
  },
  {
    question: "How can you quickly minimize all open windows in Windows?",
    answer: "Press WIN + D",
    options: [
      "Press ALT + F4",
      "Click the Start button twice",
      "Press WIN + D",
      "Press CTRL + W"
    ]
  },
  {
    question: "In Windows, what would you use to change the name of a file?",
    answer: "Right-click and choose ‘Rename’",
    options: [
      "Delete key",
      "Right-click and choose ‘Copy’",
      "Right-click and choose ‘Rename’",
      "CTRL + C"
    ]
  },
  {
    question: "Where would you click on the Windows desktop to create a new folder?",
    answer: "Right-click on the desktop and select ‘New’ > ‘Folder’",
    options: [
      "Press the Enter key",
      "Access the file’s properties",
      "Right-click on the desktop and select ‘New’ > ‘Folder’",
      "Relocate the file to a different folder"
    ]
  },
  {
    question: "What is the primary function of the ‘CTRL + C’ and ‘CTRL + V’ keyboard shortcuts in Windows?",
    answer: "Copy and Paste",
    options: [
      "Cut and Delete",
      "Close and Open",
      "Select All and Deselect",
      "Copy and Paste"
    ]
  },
  {
    question: "Which device do you use to navigate the pointer on the screen?",
    answer: "Mouse",
    options: [
      "Mouse",
      "Monitor",
      "Keyboard",
      "Printer"
    ]
  },
  {
    question: "What does ‘drag and drop’ refer to in the context of Windows?",
    answer: "To move items by dragging them with the mouse",
    options: [
      "To delete files quickly",
      "To sort files in a folder",
      "To move items by dragging them with the mouse",
      "To draw on a touch screen"
    ]
  },
  {
    question: "What is the main purpose of the ‘ESC’ key on a keyboard?",
    answer: "To cancel the current task or command",
    options: [
      "To save the current document",
      "To search for files",
      "To refresh the web page",
      "To cancel the current task or command"
    ]
  },
  {
    question: "Which of the following is a correct way to close an application in Windows?",
    answer: "Clicking the ‘X’ button in the top-right corner of the app window",
    options: [
      "Typing ‘exit’ in the application",
      "Pressing the End key",
      "Saving a document",
      "Clicking the ‘X’ button in the top-right corner of the app window"
    ]
  },
  {
    question: "In Microsoft Teams, how can students customize their team space?",
    answer: "By adding tabs and integrating apps",
    options: [
      "By altering the source code",
      "By adding tabs and integrating apps",
      "By changing the color theme of the app",
      "By emailing suggestions to Microsoft"
    ]
  },
  {
    question: "To participate in a class webinar hosted on Teams, students need to have a Teams account.",
    answer: "True",
    options: [
      "False",
      "True"
    ]
  },
  {
    question: "In preparation for finals, a student wants to review past lectures. Where can they typically find recorded class sessions in Teams?",
    answer: "In the meeting chat or the class team’s file tab",
    options: [
      "In the meeting chat or the class team’s file tab",
      "In their email inbox",
      "In the Teams activity feed",
      "In the General channel posts"
    ]
  },
  {
    question: "What happens to the recordings of standard meetings in Teams?",
    answer: "They are posted in the meeting chat and stored in the organizer’s OneDrive",
    options: [
      "They are posted in the meeting chat and stored in the organizer’s OneDrive",
      "They are deleted immediately after the meeting",
      "They are emailed to all participants",
      "They are stored on the local device"
    ]
  },
  {
    question: "Virtual Classrooms in Teams allow for both synchronous and asynchronous remote learning.",
    answer: "True",
    options: [
      "False",
      "True"
    ]
  },
  {
    question: "During a virtual lecture on Teams, a student wants to share a presentation with the class. Which option should they choose?",
    answer: "Share Screen",
    options: [
      "Start Recording",
      "Meet Now",
      "Share Screen",
      "Raise Hand"
    ]
  },
  {
    question: "You can create a channel within a team in Microsoft Teams to focus on a specific subject or project.",
    answer: "True",
    options: [
      "False",
      "True"
    ]
  },
  {
    question: "A class project requires students to work in small groups and then present their findings. Which Teams feature allows them to break into smaller groups during a larger meeting?",
    answer: "Breakout Rooms",
    options: [
      "Breakout Rooms",
      "Shared Channels",
      "Chat",
      "Private Channels"
    ]
  },
  {
    question: "What is a key functionality of MS Outlook?",
    answer: "Email management",
    options: [
      "Creating 3D models",
      "Programming",
      "Email management",
      "Online gaming"
    ]
  },
  {
    question: "What is important when composing an email in Outlook?",
    answer: "Writing an effective subject line",
    options: [
      "Writing an effective subject line",
      "Using complex vocabulary",
      "Making the email as long as possible",
      "Including as many recipients as possible"
    ]
  },
  {
    question: "What can Class Team Tiles in Microsoft Teams be used for by students?",
    answer: "To access specific classes and related materials",
    options: [
      "To track personal fitness activities",
      "To access specific classes and related materials",
      "To play integrated games",
      "To monitor the stock market"
    ]
  },
  {
    question: "What should students continue doing to become proficient in using Outlook?",
    answer: "Exploring and practicing its features",
    options: [
      "Changing account settings daily",
      "Avoiding the use of Outlook for communication",
      "Exploring and practicing its features",
      "Memorizing keyboard shortcuts"
    ]
  },
  {
    question: "In Microsoft Teams, what does a lock icon indicate when seen next to a channel name?",
    answer: "The channel is private",
    options: [
      "The channel is experiencing technical issues",
      "The channel is private",
      "The channel is archived",
      "The channel is for administrators only"
    ]
  },
  {
    question: "Where can you typically find the Quick Access Toolbar in Microsoft Teams?",
    answer: "At the top of the Teams window, near the search bar",
    options: [
      "On the ‘Teams’ tab",
      "At the bottom of the Teams window",
      "Within the ‘Help’ section",
      "At the top of the Teams window, near the search bar"
    ]
  },
  {
    question: "In terms of email etiquette, what should be understood when using Outlook?",
    answer: "Understanding CC, BCC, and reply-all functions",
    options: [
      "Emails should be informal",
      "Understanding CC, BCC, and reply-all functions",
      "Always use colorful text",
      "Use of emoticons is mandatory"
    ]
  },
  {
    question: "Students can use the ‘Together Mode’ feature in Teams to create a more immersive and interactive environment for their group study sessions.",
    answer: "True",
    options: [
      "True",
      "False"
    ]
  },
  {
    question: "What does the Format Painter tool do in MS Word?",
    answer: "It copies formatting from one part of the document to another",
    options: [
      "It adjusts the page margins",
      "It corrects grammatical mistakes",
      "It copies formatting from one part of the document to another",
      "It changes the font style"
    ]
  },
  {
    question: "Jacob needs to save his document with a different file name. After clicking ‘Save As’, what should he do next?",
    answer: "Type in a new file name, choose a file location, and then click ‘Save’",
    options: [
      "Click on the document title at the top to rename it",
      "Type in a new file name, choose a file location, and then click ‘Save’",
      "Select the file type and then click ‘Save’",
      "Choose a file location and then click ‘Save’"
    ]
  },
  {
    question: "Maria needs to list the sources for her research paper and she wants to add bullet points. Where will she find the option to add bullet points in MS Word?",
    answer: "On the ‘Home’ tab",
    options: [
      "On the ‘Home’ tab",
      "On the ‘References’ tab",
      "On the ‘Design’ tab",
      "On the ‘Insert’ tab"
    ]
  },
  {
    question: "What is the purpose of Word’s ‘Find and Replace’ feature?",
    answer: "To locate and modify specific text",
    options: [
      "To change the page orientation",
      "To check spelling",
      "To locate and modify specific text",
      "To insert hyperlinks"
    ]
  },
  {
    question: "Alex wants to emphasize a quote in his document by making it italic) Which shortcut key should he use after selecting the text?",
    answer: "Ctrl + I",
    options: [
      "Ctrl + U",
      "Ctrl + B",
      "Ctrl + E",
      "Ctrl + I"
    ]
  },
  {
    question: "Emily has finished typing her assignment and wants to align her paragraph to the center of the page. She can find this option under which tab in MS Word?",
    answer: "Home",
    options: [
      "File",
      "Home",
      "Review",
      "View"
    ]
  },
  {
    question: "John noticed that he misspelled the word “environment” throughout his document as “enviornment”. Which feature should he use to correct all instances at once?",
    answer: "Find and Replace",
    options: [
      "Grammar Check",
      "Thesaurus",
      "Find and Replace",
      "Spell Check"
    ]
  },
  {
    question: "Lisa wants to change the look of the headings in her document to make them more appealing. She can do this by changing the:",
    answer: "Font style",
    options: [
      "Document theme",
      "Margin size",
      "Font style",
      "Page orientation"
    ]
  },
  {
    question: "During his report writing, Kevin realizes he needs to change the line spacing to double for better readability. Which of the following steps should he follow?",
    answer: "Go to the ‘Home’ tab, click on the ‘Line and Paragraph Spacing’ button, and choose ‘2.0’",
    options: [
      "Go to the ‘Layout’ tab and select ‘Columns’",
      "Right-click on the text and choose ‘Font’ to change the spacing",
      "Go to the ‘Home’ tab, click on the ‘Line and Paragraph Spacing’ button, and choose ‘2.0’",
      "Go to the ‘Design’ tab and choose ‘Paragraph Spacing’"
    ]
  },
  {
    question: "Sarah wants to add a comment on a fellow student’s draft in MS Word to suggest a change. How can she insert a comment?",
    answer: "Select the text and click ‘New Comment’ under the ‘Review’ tab",
    options: [
      "Use the ‘Track Changes’ feature under the ‘Review’ tab",
      "Go to the ‘File’ tab and choose ‘Info’, then ‘Comment’",
      "Click on the ‘Insert’ tab and select ‘Comment’",
      "Select the text and click ‘New Comment’ under the ‘Review’ tab"
    ]
  },
  {
    question: "How do you access Word’s ‘Backstage View’?",
    answer: "Through the File tab",
    options: [
      "By pressing the ESC key",
      "By using the Quick Access Toolbar",
      "Through the File tab",
      "By right-clicking the document"
    ]
  },
  {
    question: "What is the function of the Ribbon in MS Word?",
    answer: "To access editing and formatting tools",
    options: [
      "To check the word count",
      "To access editing and formatting tools",
      "To insert page numbers",
      "To change the document view"
    ]
  },
  {
    question: "When Layla opens her essay, she notices that some paragraphs are aligned to the right, which she wants to change to the left. What should she do?",
    answer: "Select the paragraphs, then click the ‘Align Left’ button in the ‘Home’ tab",
    options: [
      "Select the paragraphs, then click the ‘Align Left’ button in the ‘Home’ tab",
      "Drag the text to the left with her mouse",
      "Right-click the paragraph and select ‘Alignment Options’",
      "Go to the ‘Layout’ tab and select ‘Align Text Left’"
    ]
  },
  {
    question: "Tom is typing his first essay in MS Word and wants to make the title stand out. He decides to make the font of the title bold. Which of the following should he do?",
    answer: "Click on the ‘Bold’ button in the Font group",
    options: [
      "Click on the ‘Underline’ button in the Font group",
      "Click on the ‘Bold’ button in the Font group",
      "Click on the ‘Italic’ button in the Font group",
      "Click on the ‘Highlight’ button in the Font group"
    ]
  },
  {
    question: "You need to format a column in your budget sheet to show values as currency. How do you do this in Excel?",
    answer: "Select the cells and click ‘$’ on the ‘Home’ tab",
    options: [
      "Use the AVERAGE function",
      "Sort the column in ascending order",
      "Select the cells and click ‘$’ on the ‘Home’ tab",
      "Double-click the column header"
    ]
  },
  {
    question: "During a group project, you need to organize participant names alphabetically. What Excel feature should you use?",
    answer: "Sort & Filter",
    options: [
      "Conditional Formatting",
      "Sort & Filter",
      "Merge & Center",
      "AutoSum"
    ]
  },
  {
    question: "You’ve entered incorrect data for an assignment due date in Excel. What combination of keys allows you to redo your action after undoing it?",
    answer: "Ctrl + Y",
    options: [
      "Ctrl + C, Ctrl + V",
      "Ctrl + Y",
      "Ctrl + Z, Ctrl + X",
      "Alt keys"
    ]
  },
  {
    question: "You’re tracking weekly expenses for a school project. How do you total the expenses for the week in Excel?",
    answer: "Create a basic math formula for addition",
    options: [
      "Manually add each expense",
      "Create a basic math formula for addition",
      "Use the AVERAGE function",
      "Sort the expenses in ascending order"
    ]
  },
  {
    question: "If you want to define a range of cells to calculate the total score in a class test, what should you do in Excel?",
    answer: "Define and use a cell range in a formula",
    options: [
      "Use the Sort & Filter feature",
      "Apply Conditional Formatting",
      "Define and use a cell range in a formula",
      "Adjust the column width"
    ]
  },
  {
    question: "During a group study session, you need to quickly copy and paste a list of topics from one worksheet to another in Excel. What’s the fastest way?",
    answer: "Use Ctrl + C to copy and Ctrl + V to paste",
    options: [
      "Re-type the topics in the new worksheet",
      "Use Ctrl + C to copy and Ctrl + V to paste",
      "Drag and drop the topics",
      "Use the Sort & Filter feature"
    ]
  },
  {
    question: "You’re organizing a fundraiser and need to combine data from different cells into one. What command should you use?",
    answer: "Merge & Center",
    options: [
      "AutoSum",
      "Merge & Center",
      "Conditional Formatting",
      "Sort & Filter"
    ]
  },
  {
    question: "After completing your semester project in Excel, how do you ensure your work is saved?",
    answer: "Use the ‘Save’ or ‘Save As’ commands from the File menu",
    options: [
      "Use the ‘Save’ or ‘Save As’ commands from the File menu",
      "Just close Excel; it saves automatically",
      "Email it to yourself",
      "Print it out"
    ]
  },
  {
    question: "You are preparing a budget report and need the total sales figure. Which Excel function is most appropriate?",
    answer: "SUM",
    options: [
      "AVERAGE",
      "MAX",
      "SUM",
      "MIN"
    ]
  },
  {
    question: "You want to analyze your monthly spending. Which function would help you find the average spending per month?",
    answer: "AVERAGE",
    options: [
      "SUM",
      "AVERAGE",
      "MAX",
      "MIN"
    ]
  },
  {
    question: "You’re creating a study plan and need to navigate between cells quickly. Which keyboard shortcuts are most efficient?",
    answer: "Arrow keys, Enter, and Tab",
    options: [
      "Arrow keys, Enter, and Tab",
      "Ctrl + C, Ctrl + V",
      "Ctrl + Z, Ctrl + Y",
      "Alt keys"
    ]
  },
  {
    question: "You’re entering sales data for each day of the week and want to calculate the total. What is the most efficient way in Excel?",
    answer: "Use the SUM function across the columns",
    options: [
      "Add the numbers manually",
      "Use the SUM function across the columns",
      "Apply the AVERAGE function",
      "Use the Merge & Center feature"
    ]
  },
  {
    question: "How do you copy a formula from one cell to another in an Excel worksheet?",
    answer: "Use Ctrl + C to copy and Ctrl + V to paste",
    options: [
      "Drag the cell to the new location",
      "Use Ctrl + C to copy and Ctrl + V to paste",
      "Write the formula again in the new cell",
      "Use the AutoSum feature"
    ]
  },
  {
    question: "What is the action of duplicating a file for safekeeping by using the 'Copy' command in Windows?",
    answer: "Copying (File)",
    options: [
      "Renaming (File)",
      "Deleting (File)",
      "Copying (File)",
      "Data Management"
    ]
  },
  {
    question: "What is the process of changing the name of a file by right-clicking it and selecting 'Rename'?",
    answer: "Renaming (File)",
    options: [
      "Deleting (File)",
      "Renaming (File)",
      "Folders",
      "Tile Organization"
    ]
  },
  {
    question: "Which action involves removing a file by right-clicking it and selecting 'Delete'?",
    answer: "Deleting (File)",
    options: [
      "Copying (File)",
      "Renaming (File)",
      "Deleting (File)",
      "USB Ports"
    ]
  },
  {
    question: "What are directories used to organize files, often created within File Explorer?",
    answer: "Folders",
    options: [
      "Folders",
      "Tile Organization",
      "Disk Drive Configurations",
      "Special Keys"
    ]
  },
  {
    question: "What is the act of rearranging tiles on the Start screen by clicking and dragging them into a new arrangement?",
    answer: "Tile Organization",
    options: [
      "Tile Organization",
      "Data Management",
      "Plagiarism",
      "Cornell notes"
    ]
  },
  {
    question: "What are keys such as F1-F12, which provide quick access to help and other functions?",
    answer: "Function and Control Keys",
    options: [
      "Special Keys",
      "Function and Control Keys",
      "USB Ports",
      "Mnemonic triggers"
    ]
  },
  {
    question: "Which keys perform specific functions, such as Caps Lock for toggling uppercase letters?",
    answer: "Special Keys",
    options: [
      "Special Keys",
      "Function and Control Keys",
      "Pattern notes",
      "Plagiarism"
    ]
  },
  {
    question: "What term refers to different arrangements of disk drives, such as floppy drives and CD-ROM drives, within a computer system?",
    answer: "Disk Drive Configurations",
    options: [
      "Data Management",
      "Disk Drive Configurations",
      "Folders",
      "Concept map"
    ]
  },
  {
    question: "What are universal connectors found on computers used to connect a wide range of peripherals?",
    answer: "USB Ports",
    options: [
      "Special Keys",
      "USB Ports",
      "Disk Drive Configurations",
      "Plagiarism"
    ]
  },
  {
    question: "What term describes practices involving handling data stored on hard disks or networks, emphasizing quick access?",
    answer: "Data Management",
    options: [
      "Data Management",
      "USB Ports",
      "Mnemonic triggers",
      "Cornell notes"
    ]
  },
  {
    question: "What is considered a major academic offense that can result in failing a module or even annulment of a degree?",
    answer: "Plagiarism",
    options: [
      "Plagiarism",
      "Cornell notes",
      "Pattern notes",
      "Concept map"
    ]
  },
  {
    question: "Which notes are the most common form of note-making adopted by students and university staff?",
    answer: "Linear notes",
    options: [
      "Cornell notes",
      "Pattern notes",
      "Mnemonic triggers",
      "Linear notes"
    ]
  },
  {
    question: "Which type of notes require analytical and critical engagement by promoting active interaction with ideas?",
    answer: "Cornell notes",
    options: [
      "Linear notes",
      "Cornell notes",
      "Pattern notes",
      "Concept map"
    ]
  },
  {
    question: "What is a graphical, hierarchical representation of key concepts?",
    answer: "Concept map",
    options: [
      "Pattern notes",
      "Concept map",
      "Mnemonic triggers",
      "Plagiarism"
    ]
  },
  {
    question: "Which type of notes refer to any non-linear format and are highly recommended by students?",
    answer: "Pattern notes",
    options: [
      "Cornell notes",
      "Pattern notes",
      "Concept map",
      "Mnemonic triggers"
    ]
  },
  {
    question: "What term describes colors, pictures, diagrams, and unusual elements added to notes to enhance learning?",
    answer: "Mnemonic triggers",
    options: [
      "Linear notes",
      "Pattern notes",
      "Mnemonic triggers",
      "Cornell notes"
    ]
  },
  {
    question: "Which cycle helps commit information to long-term memory by building and reinforcing memories?",
    answer: "Memory Cycle",
    options: [
      "Plagiarism",
      "Memory Cycle",
      "Cornell notes",
      "Pattern notes"
    ]
  },
  {
    question: "What is a powerful spreadsheet tool used for data organization, calculation, and analysis in various academic and professional settings?",
    answer: "Excel",
    options: [
      "Word",
      "Excel",
      "PowerPoint",
      "Access"
    ]
  },
  {
    question: "What component of the Excel workspace includes core tabs like Home, Insert, and Page Layout, providing access to commonly used commands and features?",
    answer: "Ribbon",
    options: [
      "Ribbon",
      "Quick Access Toolbar",
      "Formula Bar",
      "Status Bar"
    ]
  },
  {
    question: "What is a file in Excel containing one or more worksheets, used to store and organize data, calculations, and analyses?",
    answer: "Workbook",
    options: [
      "Worksheet",
      "Workbook",
      "Table",
      "Chart"
    ]
  },
  {
    question: "What are individual boxes in an Excel worksheet where data is entered and displayed; fundamental units for storing and manipulating data?",
    answer: "Cells",
    options: [
      "Columns",
      "Rows",
      "Cells",
      "Tabs"
    ]
  },
  {
    question: "What is the command in Excel's Ribbon used for automatically calculating the sum of a selected range of cells?",
    answer: "AutoSum",
    options: [
      "Sort",
      "Filter",
      "AutoSum",
      "Pivot Table"
    ]
  },
  {
    question: "What are key combinations like 'Ctrl + Z' for Undo, 'Ctrl + C' for Copy, and 'Ctrl + V' for Paste, used to speed up navigation and data editing in Excel?",
    answer: "Keyboard Shortcuts",
    options: [
      "Formula Functions",
      "Keyboard Shortcuts",
      "Quick Access Toolbar",
      "Cell Formatting"
    ]
  },
  {
    question: "What are features in Excel used for organizing and analyzing data, allowing users to sort data alphabetically or numerically and filter out specific information based on criteria?",
    answer: "Sort & Filter",
    options: [
      "AutoSum",
      "Data Validation",
      "Sort & Filter",
      "Conditional Formatting"
    ]
  },
  {
    question: "What is a single page within an Excel workbook where data is entered and managed, forming part of the overall data set in a workbook?",
    answer: "Worksheet",
    options: [
      "Worksheet",
      "Workbook",
      "Cell",
      "Chart"
    ]
  },
  {
    question: "What feature in Excel lets you emphasize data by changing its appearance in a cell (or range of cells) automatically?",
    answer: "Conditional Formatting",
    options: [
      "Data Validation",
      "Sort & Filter",
      "Conditional Formatting",
      "Formula Auditing"
    ]
  },
  {
    question: "What functions in Excel are used to organize data in ascending (low to high) or descending (high to low) order, enhancing data analysis and readability?",
    answer: "Sort Ascending/Descending",
    options: [
      "Conditional Formatting",
      "Sort Ascending/Descending",
      "Filter",
      "AutoSum"
    ]
  },
  {
    question: "What types of entries in Excel include text, numbers, dates, and logical entries (such as T/F)?",
    answer: "Values",
    options: [
      "Values",
      "Labels",
      "Formulas",
      "Comments"
    ]
  },
  {
    question: "What keyboard key sequence returns the cell pointer to cell A1?",
    answer: "CTRL and HOME",
    options: [
      "CTRL and END",
      "CTRL and HOME",
      "ALT and HOME",
      "SHIFT and END"
    ]
  },
  {
    question: "What type of cell is devoid of any value in it?",
    answer: "Empty Cell",
    options: [
      "Blank Cell",
      "Empty Cell",
      "Value Cell",
      "Formula Cell"
    ]
  },
  {
    question: "What type of cell appears with no value but may still have a value stored in it?",
    answer: "Blank Cell",
    options: [
      "Blank Cell",
      "Empty Cell",
      "Value Cell",
      "Formula Cell"
    ]
  },
  {
    question: "What type of cell value allows you to perform a mathematical function?",
    answer: "Formulas",
    options: [
      "Formulas",
      "Values",
      "Labels",
      "Logical Entries"
    ]
  },
  {
    question: "Which characters typically begin a formula in a cell?",
    answer: "=, -, +",
    options: [
      "=, -, +",
      "/, *, %",
      "<, >, =",
      "+, -, *"
    ]
  },
  {
    question: "What option in Excel allows you to preview your document on the screen if you so choose?",
    answer: "Print Preview",
    options: [
      "Page Layout",
      "Print Preview",
      "Save As",
      "Format Painter"
    ]
  },
  {
    question: "What is a series of pages in PowerPoint, which can effectively communicate your ideas to your audience?",
    answer: "Slides",
    options: [
      "Slides",
      "Deck",
      "Outline",
      "Notes"
    ]
  },
  {
    question: "Which view in PowerPoint splits the window into three sections—a slide/outline pane at the left, the presentation at the right, and a section for notes at the bottom?",
    answer: "Normal",
    options: [
      "Slide Sorter",
      "Normal",
      "Reading",
      "Presenter"
    ]
  },
  {
    question: "Which keyboard key sequence causes PowerPoint to change the mouse pointer into a 'pen' for temporarily drawing on the slide during a presentation?",
    answer: "CTRL and P",
    options: [
      "CTRL and P",
      "CTRL and D",
      "CTRL and M",
      "CTRL and T"
    ]
  },
  {
    question: "When printing PowerPoint slides, which option from the drop-down list lets you select full-page slides, handouts, notes pages, or your outline?",
    answer: "Layout",
    options: [
      "Format",
      "Design",
      "Layout",
      "Options"
    ]
  },
  {
    question: "Which feature in PowerPoint lets you choose the overall style or 'look' of your presentation?",
    answer: "Design Theme",
    options: [
      "Slide Master",
      "Design Theme",
      "Transitions",
      "Animations"
    ]
  },
  {
    question: "What is the special visual effect in PowerPoint that moves from one slide to the next?",
    answer: "Transitions",
    options: [
      "Animations",
      "Morph Transition",
      "Transitions",
      "Slide Effects"
    ]
  },
  {
    question: "Which feature in PowerPoint animates objects by creating the appearance of movement on a slide?",
    answer: "Morph Transition",
    options: [
      "Morph Transition",
      "Slide Transition",
      "Design Theme",
      "Animation Pane"
    ]
  },
  {
    question: "Explain the benefits of using ‘Slide Master’ for uniformity across a presentation.",
    answer: "It allows for consistent design elements across all slides.",
    options: [
      "It provides a backup of the presentation",
      "It times the slides for automatic progression",
      "It allows for consistent design elements across all slides",
      "It adds special effects to the presentation’s animations"
      ]
  },
  {
    question: "How does PowerPoint’s ‘Design Ideas’ function aid in enhancing slide aesthetics?",
    answer: "It offers automated design suggestions to improve visual appeal.",
    options: [
      "It provides historical context to the content.",
      "It offers automated design suggestions to improve visual appeal.",
      "It corrects grammatical errors in the text.",
      "It automatically translates slides into different languages."
      ]
  },
  {
    question: "What are the steps to insert and format a shape in PowerPoint?",
    answer: "Select a shape from the ‘Insert’ tab, draw it, and then use formatting options to customize.",
    options: [
      "Select a shape from the ‘Insert’ tab, draw it, and then use formatting options to customize.",
      "Write a VBA script to generate shapes.",
      "Use an external image editor and import shapes.",
      "Shapes can only be inserted by copying from another presentation."
      ]
  },
  {
    question: "Describe how ‘Transition Effects’ can impact the flow of a PowerPoint presentation.",
    answer: "They make presentations more dynamic and engaging.",
    options: [
      "They make presentations more dynamic and engaging.",
      "They significantly reduce the presentation’s loading time.",
      "They convert slides into printable formats.",
      "They serve as a detailed scripting language for complex animations."
      ]
  },
  {
    question: "Which of the following statements accurately describes ChatGPT?",
    answer: "ChatGPT is trained on diverse internet text, can assist with answering questions and generating text, but may not always provide accurate or contextually correct information due to potential biases in the training data.",
    options: [
      "ChatGPT is trained on diverse internet text, can assist with answering questions and generating text, but may not always provide accurate or contextually correct information due to potential biases in the training data.",
      "ChatGPT generates responses based on a fixed set of pre-written answers.",
      "ChatGPT can understand and generate responses in any language, even those it was not trained on.",
      "ChatGPT can independently create new knowledge and facts."
      ]
  },
  {
    question: "What does ethical use of AI, like ChatGPT, in academia entail?",
    answer: "Using AI as a tool for learning and assistance, while acknowledging its contribution in any work submitted for academic credit.",
    options: [
      "Using AI as a tool for learning and assistance, while acknowledging its contribution in any work submitted for academic credit.",
      "Using AI to generate entire assignments and submitting them as one’s own work.",
      "Using AI-generated content without citation because it’s generated by a machine and not a human.",
      "Using AI to paraphrase someone else’s work and presenting it as original content."
      ]
  },
  {
    question: "What is the most appropriate approach to using AI, like ChatGPT, in learning and research?",
    answer: "Using AI as a tool, while also critically evaluating its outputs and verifying the information it provides, just as one would with any other source.",
    options: [
      "Using AI as a tool, while also critically evaluating its outputs and verifying the information it provides, just as one would with any other source.",
      "Relying solely on AI for all learning and research needs, without questioning its outputs.",
      "Accepting all information provided by AI as absolute truth.",
      "Using AI to replace human thinking and decision-making in learning and research."
      ]
  },    
];


