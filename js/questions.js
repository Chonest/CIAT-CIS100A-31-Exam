// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
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
    numb: 2,
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
    numb: 3,
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
    numb: 4,
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
    numb: 5,
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
    numb: 6,
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
    numb: 7,
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
    numb: 8,
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
    numb: 9,
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
    numb: 10,
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
    numb: 11,
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
    numb: 12,
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
    numb: 13,
    question: "To participate in a class webinar hosted on Teams, students need to have a Teams account.",
    answer: "True",
    options: [
      "False",
      "True"
    ]
  },
  {
    numb: 14,
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
    numb: 15,
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
    numb: 16,
    question: "Virtual Classrooms in Teams allow for both synchronous and asynchronous remote learning.",
    answer: "True",
    options: [
      "False",
      "True"
    ]
  },
  {
    numb: 17,
    question: "During a virtual lecture on Teams, a student wants to share a presentation with the class. Which option should they choose?",
    answer: "Share Screen",
    options: [
      "‘Start Recording’",
      "‘Meet Now’",
      "‘Share Screen’",
      "‘Raise Hand’"
    ]
  },
  {
    numb: 18,
    question: "You can create a channel within a team in Microsoft Teams to focus on a specific subject or project.",
    answer: "True",
    options: [
      "False",
      "True"
    ]
  },
  {
    numb: 19,
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
    numb: 20,
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
    numb: 21,
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
    numb: 22,
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
    numb: 23,
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
    numb: 24,
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
    numb: 25,
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
    numb: 26,
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
    numb: 27,
    question: "Students can use the ‘Together Mode’ feature in Teams to create a more immersive and interactive environment for their group study sessions.",
    answer: "True",
    options: [
      "True",
      "False"
    ]
  },
  {
    numb: 28,
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
    numb: 29,
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
    numb: 30,
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
    numb: 31,
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
    numb: 32,
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
    numb: 33,
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
    numb: 34,
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
    numb: 35,
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
    numb: 36,
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
    numb: 37,
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
    numb: 38,
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
    numb: 39,
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
    numb: 40,
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
    numb: 41,
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
    numb: 42,
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
    numb: 43,
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
    numb: 44,
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
    numb: 45,
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
    numb: 46,
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
    numb: 47,
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
    numb: 48,
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
    numb: 49,
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
    numb: 50,
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
    numb: 51,
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
    numb: 52,
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
    numb: 53,
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
    numb: 54,
    question: "How do you copy a formula from one cell to another in an Excel worksheet?",
    answer: "Use Ctrl + C to copy and Ctrl + V to paste",
    options: [
      "Drag the cell to the new location",
      "Use Ctrl + C to copy and Ctrl + V to paste",
      "Write the formula again in the new cell",
      "Use the AutoSum feature"
    ]
  }
];
