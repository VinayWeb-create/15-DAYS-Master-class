// ─────────────────────────────────────────────
// Configuration
// ─────────────────────────────────────────────
const API_BASE = '/api';

const curriculum = [
    {
        day: 1,
        title: 'HTML Basics',
        desc: 'Introduction to Web, Tags, and building your first page.',
        emoji: '🌐',
        duration: '2–3 hrs',
        difficulty: 'Beginner',
        whatYouLearn: [
            'What HTML is and how browsers render it',
            'Essential tags: headings (h1–h6), paragraphs, links, images, lists',
            'Page structure: DOCTYPE, html, head, body',
            'How to use attributes like href, src, alt, id, class',
        ],
        concepts: [
            { term: 'HTML', def: 'HyperText Markup Language — the skeleton of every webpage.' },
            { term: 'Tag', def: 'An instruction wrapped in angle brackets, e.g. <p> ... </p>.' },
            { term: 'Attribute', def: 'Extra info added inside a tag, like href="https://..." in an anchor.' },
            { term: 'Element', def: 'The full package: opening tag + content + closing tag.' },
        ],
        steps: [
            'Create a new file called index.html on your computer.',
            'Add the boilerplate: <!DOCTYPE html>, <html>, <head> with a <title>, and <body>.',
            'Inside <body>, write an <h1> with your name and a <p> introducing yourself.',
            'Add an <img> tag with a photo (or a placeholder from https://picsum.photos/300).',
            'Create an unordered list <ul> of 3 hobbies.',
            'Add a hyperlink <a href="..."> that opens your favourite website.',
            'Open the file in your browser and confirm everything displays correctly.',
        ],
        practiceTask: 'Build a single-page "About Me" webpage with: your name as the heading, a short bio paragraph, a profile image, a hobbies list, and links to 2 websites you visit often.',
        resources: [
            { label: 'MDN — HTML Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics' },
            { label: 'W3Schools HTML Tutorial', url: 'https://www.w3schools.com/html/' },
            { label: 'HTML Cheatsheet', url: 'https://htmlcheatsheet.com/' },
        ],
        submitNote: 'Share your "About Me" page via CodePen, GitHub Pages, or upload a screenshot.',
    },
    {
        day: 2,
        title: 'Advanced HTML',
        desc: 'Forms, Tables, and Semantic layouts.',
        emoji: '📋',
        duration: '2–3 hrs',
        difficulty: 'Beginner',
        whatYouLearn: [
            'Semantic elements: header, nav, main, section, article, footer',
            'Building accessible forms with input, textarea, select, button',
            'Structuring tabular data with table, thead, tbody, tr, td, th',
            'HTML5 input types: email, number, date, range, checkbox, radio',
        ],
        concepts: [
            { term: 'Semantic HTML', def: 'Using tags that describe meaning, not just appearance — helps SEO and accessibility.' },
            { term: 'Form', def: 'An interactive area that collects user input and sends it to a server.' },
            { term: 'Table', def: 'A grid structure to display rows and columns of related data.' },
            { term: 'Accessibility', def: 'Designing so all users, including those with disabilities, can use your page.' },
        ],
        steps: [
            'Refactor yesterday\'s page to use <header>, <main>, and <footer> instead of plain divs.',
            'Add a <nav> bar with 3 anchor links pointing to different sections using #id.',
            'Create a <section id="contact"> and build a contact form inside it.',
            'Form fields needed: name (text), email (email), message (textarea), a dropdown <select> for subject, and a Submit <button>.',
            'Build a simple <table> showing a weekly schedule (Monday–Friday with 2 activities each day).',
            'Add a <form> attribute required to at least 2 inputs.',
            'Validate your HTML at https://validator.w3.org.',
        ],
        practiceTask: 'Extend your "About Me" page with: a semantic nav bar, a contact form (name, email, message, subject dropdown), and a skills table listing 5 skills with your current level (Beginner/Intermediate/Advanced).',
        resources: [
            { label: 'MDN — HTML Forms', url: 'https://developer.mozilla.org/en-US/docs/Learn/Forms' },
            { label: 'MDN — HTML Tables', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables' },
            { label: 'HTML Validator', url: 'https://validator.w3.org/' },
        ],
        submitNote: 'Share your extended page. Focus on correct use of semantic tags — the instructor will check the HTML structure.',
    },
    {
        day: 3,
        title: 'Styling with CSS',
        desc: 'Colors, fonts, and making things look beautiful.',
        emoji: '🎨',
        duration: '3–4 hrs',
        difficulty: 'Beginner',
        whatYouLearn: [
            'How to link an external CSS file and use style tags',
            'Selectors: element, class (.), id (#), combinators, pseudo-classes (:hover)',
            'Box model: margin, border, padding, content — and how they stack',
            'Typography: font-family, font-size, font-weight, line-height, letter-spacing',
            'Colors: hex, rgb(), hsl(), and using CSS variables',
        ],
        concepts: [
            { term: 'Selector', def: 'Targets which HTML element(s) to style — e.g. p, .card, #hero.' },
            { term: 'Box Model', def: 'Every element is a box: content → padding → border → margin.' },
            { term: 'Specificity', def: 'The "weight" of a selector; more specific rules win conflicts.' },
            { term: 'CSS Variable', def: '--primary-color: #6366f1; — reusable values across your stylesheet.' },
        ],
        steps: [
            'Create styles.css and link it in the <head> of your HTML with <link rel="stylesheet">.',
            'Set a global font using * { font-family: \'YourFont\', sans-serif; } — pick a Google Font.',
            'Style your <header> with a background color, padding, and centered text.',
            'Give your <h1> a gradient text effect using background-clip: text.',
            'Style your <nav> links to have no underline, a hover color change, and some padding.',
            'Add a card-style look to your contact form (background, border-radius, box-shadow).',
            'Style your table with alternating row colors using tr:nth-child(even).',
            'Add a :hover effect to your submit button (color shift + slight scale transform).',
        ],
        practiceTask: 'Fully style your "About Me" page: choose a consistent color palette (3 colors), pick Google Fonts (heading + body), style all sections with padding/margins, and make the page look polished and professional.',
        resources: [
            { label: 'Google Fonts', url: 'https://fonts.google.com/' },
            { label: 'CSS Box Model — MDN', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model' },
            { label: 'CSS Tricks — Complete Guide', url: 'https://css-tricks.com/almanac/' },
            { label: 'Coolors — Color Palette Generator', url: 'https://coolors.co/' },
        ],
        submitNote: 'Share a live demo or screenshot showing your styled page. The instructor will look for consistent use of colors, fonts, and spacing.',
    },
    {
        day: 4,
        title: 'CSS Layouts',
        desc: 'Responsive design with Flexbox and Grid.',
        emoji: '📐',
        duration: '3–4 hrs',
        difficulty: 'Beginner–Intermediate',
        whatYouLearn: [
            'Flexbox: flex-direction, justify-content, align-items, flex-wrap, gap',
            'CSS Grid: grid-template-columns, grid-template-rows, grid-area, auto-fill',
            'Responsive design with media queries (@media)',
            'When to use Flexbox vs Grid',
            'Building a mobile-first layout',
        ],
        concepts: [
            { term: 'Flexbox', def: 'One-dimensional layout — great for rows or columns of items.' },
            { term: 'CSS Grid', def: 'Two-dimensional layout — ideal for page structure and card grids.' },
            { term: 'Media Query', def: '@media (max-width: 768px) { } — applies styles only at certain screen sizes.' },
            { term: 'Mobile-First', def: 'Write styles for small screens first, then add complexity for larger screens.' },
        ],
        steps: [
            'Create a new page (layout.html) — or redesign your existing page.',
            'Build a navbar using display: flex with the logo on the left and nav links on the right.',
            'Create a hero section: use Flexbox to center text and a button vertically and horizontally.',
            'Build a "cards" section using CSS Grid with 3 columns that collapses to 1 on mobile.',
            'Add a 2-column layout for a bio section (image left, text right) using Flexbox.',
            'Add media queries so the layout is fully responsive on screens below 768px.',
            'Test your layout by resizing the browser window and using Chrome DevTools device simulator.',
        ],
        practiceTask: 'Build a fully responsive landing page for any topic you like (a hobby, a product, a club). It must include: a sticky navbar, hero section, a 3-column feature cards grid (responsive), and a footer. Must look good on mobile AND desktop.',
        resources: [
            { label: 'Flexbox Froggy — Interactive Game', url: 'https://flexboxfroggy.com/' },
            { label: 'Grid Garden — Interactive Game', url: 'https://cssgridgarden.com/' },
            { label: 'CSS Tricks — Complete Guide to Flexbox', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
            { label: 'CSS Tricks — Complete Guide to Grid', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/' },
        ],
        submitNote: 'Submit your live demo link. The instructor will resize the window to check responsiveness — this is the key criterion for today.',
    },
    {
        day: 5,
        title: 'Intro to JavaScript',
        desc: 'Variables, logic, bringing pages to life.',
        emoji: '⚡',
        duration: '3–4 hrs',
        difficulty: 'Intermediate',
        whatYouLearn: [
            'Variables: var, let, const — and when to use each',
            'Data types: string, number, boolean, null, undefined, object',
            'Operators: arithmetic, comparison (===, !==), logical (&&, ||, !)',
            'Control flow: if/else, ternary operator, switch statements',
            'Functions: declaration, expression, arrow functions',
        ],
        concepts: [
            { term: 'Variable', def: 'A named container that stores a value — let name = "Ravi";' },
            { term: 'Function', def: 'A reusable block of code that performs a task when called.' },
            { term: 'Boolean', def: 'A true/false value — the foundation of all decision-making in code.' },
            { term: 'Console', def: 'The browser\'s built-in output window — use console.log() to debug.' },
        ],
        steps: [
            'Open your browser\'s DevTools Console (F12 → Console tab).',
            'Declare variables: let name = "YourName"; const age = 20; — print them with console.log.',
            'Write a function greet(name) that returns "Hello, [name]!" — call it and log the result.',
            'Write an if/else: if age is 18 or older, log "Adult", else log "Minor".',
            'Write a function isEven(n) that returns true if a number is even, false if odd.',
            'Use a for loop to print numbers 1–10. Then modify it to print only even numbers.',
            'Link a <script> tag to your HTML and add a button that calls alert("Hello!") when clicked.',
        ],
        practiceTask: 'Build a simple "Number Guessing Game" in the console: the program picks a random number 1–10, the user inputs a guess using prompt(), and the program tells them if they\'re too high, too low, or correct. Loop until they get it right.',
        resources: [
            { label: 'JavaScript.info — The Modern JS Tutorial', url: 'https://javascript.info/' },
            { label: 'MDN — JavaScript Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps' },
            { label: 'Eloquent JavaScript (free book)', url: 'https://eloquentjavascript.net/' },
        ],
        submitNote: 'Share your CodePen or GitHub with the guessing game. Paste your code in the notes field too so the instructor can review your logic.',
    },
    {
        day: 6,
        title: 'JS & The DOM',
        desc: 'Interacting with HTML using JavaScript.',
        emoji: '🖱️',
        duration: '3–4 hrs',
        difficulty: 'Intermediate',
        whatYouLearn: [
            'What the DOM (Document Object Model) is and how JS sees your HTML',
            'Selecting elements: getElementById, querySelector, querySelectorAll',
            'Reading and changing content: innerText, innerHTML, value',
            'Changing styles and classes: style.color, classList.add/remove/toggle',
            'Events: addEventListener for click, input, keydown, submit',
        ],
        concepts: [
            { term: 'DOM', def: 'A tree-like map of your HTML that JavaScript can read and modify in real time.' },
            { term: 'querySelector', def: 'Finds the first element matching a CSS selector — document.querySelector(".card").' },
            { term: 'Event Listener', def: 'Watches for a user action (click, type, etc.) and runs your code in response.' },
            { term: 'innerHTML', def: 'Gets or sets the HTML content inside an element — use carefully to avoid XSS.' },
        ],
        steps: [
            'Create a page with a heading, a paragraph, an input field, and a button.',
            'Use querySelector to select the button and add a click event listener.',
            'On click, read the value from the input and update the heading\'s innerText with it.',
            'Add a second button "Change Color" — on click, toggle a CSS class that changes the page\'s background.',
            'Create a counter app: two buttons (+ and −) and a display. Clicking + increments the number, − decrements it.',
            'Add a third button "Reset" that sets the counter back to 0.',
            'Prevent the counter from going below 0 — add an if statement.',
        ],
        practiceTask: 'Build an interactive "Character Counter" app: a <textarea> and a live count below it showing "X / 150 characters". When the user exceeds 150 chars, the counter turns red and a warning message appears. Add a clear button that resets everything.',
        resources: [
            { label: 'MDN — DOM Introduction', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction' },
            { label: 'JavaScript DOM Crash Course — Traversy Media', url: 'https://www.youtube.com/watch?v=0ik6X4DJKCc' },
            { label: 'Event Reference — MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/Events' },
        ],
        submitNote: 'Submit a link to your character counter app. The instructor will type in it to test the live count, color change, and clear button.',
    },
    {
        day: 7,
        title: 'Arrays & Loops',
        desc: 'Handling lists of data efficiently.',
        emoji: '🔄',
        duration: '3–4 hrs',
        difficulty: 'Intermediate',
        whatYouLearn: [
            'Creating and accessing arrays: let arr = [1, 2, 3]; arr[0];',
            'Array methods: push, pop, shift, unshift, splice, slice',
            'Iterating: for loop, for...of, forEach',
            'Transforming data: map, filter, reduce, find, some, every',
            'Rendering dynamic lists to the DOM using innerHTML',
        ],
        concepts: [
            { term: 'Array', def: 'An ordered list of values stored in a single variable.' },
            { term: 'map()', def: 'Creates a new array by applying a function to every element.' },
            { term: 'filter()', def: 'Creates a new array with only elements that pass a test.' },
            { term: 'reduce()', def: 'Boils an array down to a single value (sum, max, object, etc.).' },
        ],
        steps: [
            'Create an array of 5 student names. Loop through it and console.log each name.',
            'Use map() to create a new array where each name is uppercase.',
            'Use filter() to get only names that have more than 4 characters.',
            'Use reduce() to calculate the total length of all names combined.',
            'Create an array of objects: [{name: "Ali", score: 85}, ...] for 5 students.',
            'Render this as an HTML table by building a string with map() and setting innerHTML.',
            'Add a filter input: typing in it should instantly filter the rendered list.',
        ],
        practiceTask: 'Build a "Student Gradebook" app: an array of 5+ students with names and scores. Display them in a styled table. Add a search bar to filter by name. Add a button to sort by score (high to low). Show the class average below the table.',
        resources: [
            { label: 'MDN — Array Methods', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array' },
            { label: 'JavaScript Array Methods — javascript.info', url: 'https://javascript.info/array-methods' },
            { label: 'Array Methods Cheatsheet', url: 'https://www.freecodecamp.org/news/javascript-array-methods-cheatsheet/' },
        ],
        submitNote: 'Submit your Gradebook app. The instructor will test the search filter and sort button.',
    },
    {
        day: 8,
        title: 'Frameworks Overview',
        desc: 'Overview of React and modern frontend tools.',
        emoji: '⚛️',
        duration: '3–4 hrs',
        difficulty: 'Intermediate',
        whatYouLearn: [
            'Why frameworks exist — the problems they solve',
            'React fundamentals: components, JSX, props, state (useState)',
            'How to create a React app with Vite or CodePen',
            'The concept of virtual DOM and declarative UI',
            'Brief look at Vue.js and Angular — when each is used',
        ],
        concepts: [
            { term: 'Component', def: 'A reusable piece of UI with its own logic — like a LEGO brick for webpages.' },
            { term: 'JSX', def: 'JavaScript + HTML syntax used in React — <h1>Hello {name}</h1>.' },
            { term: 'State', def: 'Data that can change over time, causing the component to re-render.' },
            { term: 'Props', def: 'Data passed from a parent component to a child component — like function arguments.' },
        ],
        steps: [
            'Read: "Why React?" — understand the problem with manually updating the DOM.',
            'Open CodePen → Settings → Add React + ReactDOM as external scripts (or use codesandbox.io).',
            'Write your first component: function HelloWorld() { return <h1>Hello!</h1>; }',
            'Create a Counter component using useState that increments on button click.',
            'Create a Card component that accepts props: title, description, and color.',
            'Render 3 different cards by calling <Card title="..." description="..." color="..." /> 3 times.',
            'Write a short comparison (in your notes): React vs plain JS for the counter from Day 6.',
        ],
        practiceTask: 'Build a simple "Tip Calculator" React app: input fields for bill amount and tip percentage, a state-driven output showing the tip amount and total, and a "Reset" button. All logic in React state — no jQuery, no DOM manipulation.',
        resources: [
            { label: 'React Official Docs — Quick Start', url: 'https://react.dev/learn' },
            { label: 'React in 100 Seconds — Fireship', url: 'https://www.youtube.com/watch?v=Tn6-PIqc4UM' },
            { label: 'CodeSandbox — React Starter', url: 'https://codesandbox.io/s/new' },
        ],
        submitNote: 'Share your Tip Calculator on CodeSandbox or CodePen. The instructor will test that state updates correctly without page reload.',
    },
    {
        day: 9,
        title: 'Portfolio Project Pt.1',
        desc: 'Start building your personal portfolio.',
        emoji: '🏗️',
        duration: '4–5 hrs',
        difficulty: 'Intermediate',
        whatYouLearn: [
            'Planning a real project: wireframes, sections, content strategy',
            'Setting up a professional folder structure',
            'Building a hero section with a professional headline and CTA',
            'Creating a responsive navigation bar with smooth scroll',
            'Git basics: init, add, commit, push to GitHub',
        ],
        concepts: [
            { term: 'Wireframe', def: 'A rough sketch (on paper or Figma) showing the layout before coding.' },
            { term: 'CTA', def: 'Call-To-Action — a button or link that tells the user what to do next.' },
            { term: 'Smooth Scroll', def: 'scroll-behavior: smooth — makes clicking nav links animate instead of jump.' },
            { term: 'Git', def: 'A version-control tool that tracks every change to your code.' },
        ],
        steps: [
            'Sketch your portfolio layout on paper: decide on 5 sections (Hero, About, Skills, Projects, Contact).',
            'Create the project folder: portfolio/ with index.html, styles.css, script.js, and an /images folder.',
            'Build the HTML structure for all 5 sections with correct semantic tags.',
            'Style the Hero section: full-viewport-height background, centered name + tagline, and a "View My Work" button.',
            'Build a sticky navbar with links that scroll to each section.',
            'Add smooth scrolling in CSS and an active class that highlights the current section.',
            'Initialize a Git repo: git init → git add . → git commit -m "Initial portfolio structure".',
            'Push to GitHub and enable GitHub Pages to get a live URL.',
        ],
        practiceTask: 'By end of today, your portfolio must be live on GitHub Pages with: a working sticky nav, a hero section with your name and tagline, and placeholder sections for About, Skills, Projects, and Contact. Share the live GitHub Pages URL.',
        resources: [
            { label: 'GitHub Pages — How to Deploy', url: 'https://pages.github.com/' },
            { label: 'Git Beginner Guide', url: 'https://www.atlassian.com/git/tutorials/what-is-git' },
            { label: 'Portfolio Inspiration — Brittany Chiang', url: 'https://brittanychiang.com/' },
        ],
        submitNote: 'Share your GitHub Pages URL + the GitHub repository link. Both are required for full credit today.',
    },
    {
        day: 10,
        title: 'Portfolio Project Pt.2',
        desc: 'Finishing and polishing the portfolio.',
        emoji: '✨',
        duration: '4–5 hrs',
        difficulty: 'Intermediate',
        whatYouLearn: [
            'Building a Projects section with real or practice project cards',
            'Building an animated Skills section (progress bars or badges)',
            'Creating a working Contact form (Formspree or EmailJS)',
            'Adding CSS animations and entrance effects with scroll',
            'Final polish: favicon, meta tags, Open Graph tags, performance',
        ],
        concepts: [
            { term: 'Intersection Observer', def: 'A JS API that fires a callback when an element enters the viewport — great for scroll animations.' },
            { term: 'Open Graph', def: 'Meta tags that control how your page looks when shared on WhatsApp, LinkedIn, etc.' },
            { term: 'Formspree', def: 'A free service that handles form submissions and emails them to you — no backend needed.' },
            { term: 'Favicon', def: 'The small icon in the browser tab — add with <link rel="icon" href="favicon.ico">.' },
        ],
        steps: [
            'Build the Projects section: at least 3 project cards with name, description, tech tags, and a GitHub link.',
            'Build the Skills section: use a grid of badges or CSS progress bars for 6+ skills.',
            'Build the About section: profile photo, 3 sentences about yourself, and a "Download CV" button.',
            'Connect the Contact form to Formspree so it actually sends emails.',
            'Add an Intersection Observer to animate sections as they scroll into view (fade + slide up).',
            'Add a favicon (use https://favicon.io to generate one from your initials).',
            'Add Open Graph meta tags so sharing on LinkedIn shows a preview.',
            'Deploy the final version and test on mobile.',
        ],
        practiceTask: 'Your completed portfolio must have all 5 sections fully built and styled, a working contact form, scroll animations, and be live on GitHub Pages. This is a major milestone — share it proudly!',
        resources: [
            { label: 'Formspree — Free Form Backend', url: 'https://formspree.io/' },
            { label: 'Favicon Generator', url: 'https://favicon.io/' },
            { label: 'Open Graph Meta Tags Guide', url: 'https://ogp.me/' },
            { label: 'Intersection Observer API — MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API' },
        ],
        submitNote: 'Submit your final live GitHub Pages link AND the repo link. The instructor will test on both desktop and mobile. This counts as a major project milestone.',
    },
    {
        day: 11,
        title: 'Interactive App Pt.1',
        desc: 'Building a To-Do tracker logic.',
        emoji: '📝',
        duration: '3–4 hrs',
        difficulty: 'Intermediate',
        whatYouLearn: [
            'Planning an app: data model, user stories, feature list',
            'CRUD operations in JavaScript: Create, Read, Update, Delete',
            'Using localStorage to persist data across page refreshes',
            'Generating unique IDs with Date.now() or crypto.randomUUID()',
            'Dynamic rendering: rebuilding the DOM from an array of data',
        ],
        concepts: [
            { term: 'CRUD', def: 'Create, Read, Update, Delete — the four fundamental operations of any data-driven app.' },
            { term: 'localStorage', def: 'A browser API that stores data as key-value strings, surviving page refreshes.' },
            { term: 'JSON', def: 'JavaScript Object Notation — used to serialize objects for storage: JSON.stringify() and JSON.parse().' },
            { term: 'Unique ID', def: 'A value that identifies each item uniquely — needed to edit/delete specific items.' },
        ],
        steps: [
            'Design your data model: each task = { id, text, completed, createdAt }.',
            'Create a tasks array and a renderTasks() function that clears + rebuilds the task list.',
            'Add an input + "Add Task" button. On click: push a new task object, call renderTasks().',
            'Each rendered task should have: a checkbox, the task text, and a delete button.',
            'Clicking the checkbox should toggle task.completed and re-render.',
            'Clicking delete should remove the task from the array and re-render.',
            'Save the tasks array to localStorage on every change: localStorage.setItem("tasks", JSON.stringify(tasks)).',
            'On page load, read from localStorage: tasks = JSON.parse(localStorage.getItem("tasks")) || [];',
        ],
        practiceTask: 'Build the complete core To-Do app logic: add tasks, mark complete (with strikethrough), delete tasks, and persistent localStorage storage. Also show a task count: "3 tasks remaining". Share the working demo.',
        resources: [
            { label: 'localStorage — MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage' },
            { label: 'JSON.stringify & parse — javascript.info', url: 'https://javascript.info/json' },
            { label: 'To-Do App Tutorial — The Odin Project', url: 'https://www.theodinproject.com/lessons/node-path-javascript-todo-list' },
        ],
        submitNote: 'Share your app link. The instructor will add tasks, refresh the page, and check if data persists via localStorage.',
    },
    {
        day: 12,
        title: 'Interactive App Pt.2',
        desc: 'Styling and finalizing the To-Do app.',
        emoji: '💅',
        duration: '3–4 hrs',
        difficulty: 'Intermediate',
        whatYouLearn: [
            'Applying a design system: CSS variables, consistent spacing, color',
            'Adding filters: All / Active / Completed tabs',
            'Implementing drag-to-reorder with the HTML5 Drag & Drop API',
            'Adding priority levels with color-coded badges',
            'Smooth transitions for adding/removing tasks (CSS animations)',
        ],
        concepts: [
            { term: 'Design System', def: 'A set of rules (colors, fonts, spacing) applied consistently throughout an app.' },
            { term: 'Filter/View', def: 'Showing a subset of data based on a condition — all tasks vs. only active.' },
            { term: 'Drag & Drop API', def: 'Browser-native API using draggable, dragover, drop events to reorder elements.' },
            { term: 'CSS Transition', def: 'Animates changes smoothly: transition: opacity 0.3s ease;' },
        ],
        steps: [
            'Add a CSS design system: define --primary, --success, --danger, --bg, --surface, --text as variables.',
            'Polish the input area: full-width styled input with a prominent Add button.',
            'Add filter tabs: "All", "Active", "Completed". Store the active filter in a variable and re-render on change.',
            'Add a priority selector (Low/Medium/High) when adding a task. Show a colored dot next to each task.',
            'Add CSS transition: new tasks fade in, deleted tasks fade out before removal.',
            'Add "Clear Completed" button that removes all completed tasks at once.',
            'Add a due date input (type="date") and show overdue tasks in red.',
            'Make the whole app responsive and beautiful on mobile.',
        ],
        practiceTask: 'Your final To-Do app must include: styled design with CSS variables, 3 filter tabs, priority levels with color coding, smooth add/delete animations, a due date field, and "Clear Completed". Deploy it and share the live link.',
        resources: [
            { label: 'HTML Drag and Drop API — MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API' },
            { label: 'CSS Custom Properties — MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties' },
            { label: 'Sortable.js — Drag & Drop Library', url: 'https://sortablejs.github.io/Sortable/' },
        ],
        submitNote: 'This is your second major project. Share the final live URL + GitHub repo. The instructor will test all filters, the clear button, and mobile responsiveness.',
    },
    {
        day: 13,
        title: 'Python & AI Intro',
        desc: 'Basics of Python and Machine Learning concepts.',
        emoji: '🐍',
        duration: '3–4 hrs',
        difficulty: 'Intermediate',
        whatYouLearn: [
            'Python syntax: variables, strings, numbers, print(), input()',
            'Control flow: if/elif/else, for loops, while loops',
            'Functions: def, parameters, return, default values',
            'Lists and dictionaries — Python\'s core data structures',
            'What Machine Learning is and the 3 main types (supervised, unsupervised, reinforcement)',
        ],
        concepts: [
            { term: 'Python', def: 'A readable, beginner-friendly language that dominates data science and AI.' },
            { term: 'Indentation', def: 'Python uses whitespace (4 spaces) to define code blocks — no curly braces.' },
            { term: 'List', def: 'Like a JS array: fruits = ["apple", "mango", "banana"]' },
            { term: 'Dictionary', def: 'Like a JS object: person = {"name": "Ravi", "age": 22}' },
            { term: 'ML', def: 'Machine Learning — algorithms that learn patterns from data without being explicitly programmed.' },
        ],
        steps: [
            'Install Python at python.org — OR use Google Colab (free, no install needed).',
            'Open a new Colab notebook at colab.research.google.com.',
            'Write a "Hello, World!" program and run it.',
            'Create variables of different types and print them with f-strings: print(f"My name is {name}.").',
            'Write a function celsius_to_fahrenheit(c) that returns the converted value.',
            'Create a list of 5 cities and loop through them, printing "I want to visit [city]".',
            'Create a dictionary for a person with keys: name, age, city, hobby. Print each value.',
            'Write a short paragraph (in a text cell in Colab) explaining what ML is in your own words.',
        ],
        practiceTask: 'In Google Colab, build a "Personal Info Analyzer": ask the user for their name, age, and favorite number using input(). Then: tell them if their age is a teen/adult/senior, if their favorite number is even or odd, and print a summary. Share the Colab notebook link.',
        resources: [
            { label: 'Google Colab — Free Python Notebook', url: 'https://colab.research.google.com/' },
            { label: 'Python Official Tutorial', url: 'https://docs.python.org/3/tutorial/index.html' },
            { label: 'Python for Beginners — freeCodeCamp', url: 'https://www.freecodecamp.org/news/the-python-guide-for-beginners/' },
            { label: 'What is Machine Learning? — Google ML Crash Course', url: 'https://developers.google.com/machine-learning/crash-course/ml-intro' },
        ],
        submitNote: 'Share your Google Colab notebook link (make sure sharing is set to "Anyone with the link can view"). The instructor will run your code cells.',
    },
    {
        day: 14,
        title: 'Pandas & NumPy',
        desc: 'Data handling for ML models.',
        emoji: '📊',
        duration: '3–4 hrs',
        difficulty: 'Intermediate–Advanced',
        whatYouLearn: [
            'NumPy: arrays, array operations, math functions, random numbers',
            'Pandas: Series, DataFrame, reading CSV files, basic statistics',
            'Data cleaning: handling missing values (dropna, fillna)',
            'Data exploration: describe(), info(), value_counts(), head()',
            'Basic data visualization with Matplotlib',
        ],
        concepts: [
            { term: 'NumPy Array', def: 'A fast, memory-efficient grid of numbers — far faster than Python lists for math.' },
            { term: 'DataFrame', def: 'A Pandas table with labeled rows and columns — like an Excel sheet in Python.' },
            { term: 'NaN', def: 'Not a Number — represents missing data in Pandas.' },
            { term: 'Matplotlib', def: 'Python\'s core plotting library — creates line charts, bar charts, histograms, and more.' },
        ],
        steps: [
            'Open a new Google Colab notebook.',
            'Import libraries: import numpy as np, import pandas as pd, import matplotlib.pyplot as plt.',
            'NumPy: create an array of 10 numbers, calculate mean, std, max, min.',
            'NumPy: create a 3×3 matrix and multiply it by 2.',
            'Pandas: create a DataFrame for 5 students with columns: Name, Age, Score.',
            'Use df.describe() to see statistics and df.sort_values("Score") to sort.',
            'Download a free dataset from Kaggle (e.g., Titanic) and load it: pd.read_csv("titanic.csv").',
            'Explore: df.head(), df.info(), df.isnull().sum(). Drop or fill missing values.',
            'Plot a bar chart of the top 5 scoring students with Matplotlib.',
        ],
        practiceTask: 'Load the Titanic dataset (or any CSV from Kaggle). Perform a full exploration: check shape, dtypes, missing values; drop rows with nulls in key columns; calculate survival rate by gender using groupby(); and create 2 charts (bar + histogram). Share the Colab notebook.',
        resources: [
            { label: 'NumPy Quick Start — Official', url: 'https://numpy.org/doc/stable/user/quickstart.html' },
            { label: 'Pandas Getting Started — Official', url: 'https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html' },
            { label: 'Kaggle Datasets (free)', url: 'https://www.kaggle.com/datasets' },
            { label: 'Matplotlib Tutorials', url: 'https://matplotlib.org/stable/tutorials/index.html' },
        ],
        submitNote: 'Share your Colab notebook link with the full data exploration. The instructor will look for: correct use of groupby, handling of missing data, and at least 2 charts.',
    },
    {
        day: 15,
        title: 'First ML Model',
        desc: 'Building a predictive linear regression model.',
        emoji: '🤖',
        duration: '4–5 hrs',
        difficulty: 'Advanced',
        whatYouLearn: [
            'What Linear Regression is and how it finds patterns in data',
            'Splitting data into training and testing sets (train_test_split)',
            'Training a model with scikit-learn and evaluating it (MAE, R² score)',
            'Making predictions on new data',
            'Visualizing the regression line on a scatter plot',
        ],
        concepts: [
            { term: 'Linear Regression', def: 'A model that predicts a number by finding the best straight line through data points.' },
            { term: 'Training Data', def: 'The data the model learns from — typically 80% of your dataset.' },
            { term: 'Test Data', def: 'Unseen data used to evaluate how well the model generalised — typically 20%.' },
            { term: 'R² Score', def: 'Ranges 0–1. Closer to 1 means the model explains the data variation well.' },
            { term: 'MAE', def: 'Mean Absolute Error — the average prediction error in the same units as your target.' },
        ],
        steps: [
            'Open a new Google Colab notebook.',
            'Import: numpy, pandas, matplotlib, and from sklearn.linear_model import LinearRegression, from sklearn.model_selection import train_test_split, from sklearn.metrics import mean_absolute_error, r2_score.',
            'Create a simple dataset: hours studied vs. exam score (make up 20 rows or use a CSV).',
            'Split into X (hours) and y (score). Use train_test_split(X, y, test_size=0.2, random_state=42).',
            'Create and train: model = LinearRegression(); model.fit(X_train, y_train).',
            'Predict: y_pred = model.predict(X_test).',
            'Evaluate: print MAE and R² score.',
            'Plot: scatter plot of actual data + the regression line using plt.plot().',
            'Predict the score for a student who studied 7 hours: model.predict([[7]]).',
        ],
        practiceTask: 'Build a complete ML pipeline in Colab: load or create a dataset (study hours → exam score), clean it, split it, train a Linear Regression model, evaluate it with MAE + R², visualize the regression line, and make 3 new predictions. Write a conclusion: "What did the model learn?" Share the Colab notebook — this is your FINAL project for the masterclass! 🎉',
        resources: [
            { label: 'scikit-learn — Linear Regression Docs', url: 'https://scikit-learn.org/stable/modules/linear_model.html' },
            { label: 'ML Crash Course — Google', url: 'https://developers.google.com/machine-learning/crash-course' },
            { label: 'Kaggle Learn — Intro to ML', url: 'https://www.kaggle.com/learn/intro-to-machine-learning' },
            { label: 'scikit-learn Getting Started', url: 'https://scikit-learn.org/stable/getting_started.html' },
        ],
        submitNote: '🎓 CONGRATULATIONS on reaching Day 15! Submit your final Colab notebook link. The instructor will verify your model is trained, evaluated, and produces predictions. You\'ve just built your first AI model!',
    },
];

// ─────────────────────────────────────────────
// State
// ─────────────────────────────────────────────
let currentSelectedDay = null;
let studentData = null;
let selectedFile = null;

const daysContainer = document.getElementById('days-container');
const modal = document.getElementById('task-modal');
const closeBtn = document.querySelector('.close-btn');
const submitBtn = document.getElementById('submit-task-btn');
const progressFill = document.getElementById('overall-progress-fill');
const progressText = document.getElementById('overall-progress-text');

// ─────────────────────────────────────────────
// Student Identity — from sessionStorage
// ─────────────────────────────────────────────
async function initStudent() {
    const name = sessionStorage.getItem('studentName');
    const email = sessionStorage.getItem('studentEmail');

    if (!name || !email) {
        window.location.replace('student-login.html');
        return;
    }

    try {
        const res = await fetch(`${API_BASE}/progress/${encodeURIComponent(email)}`);
        studentData = await res.json();
        if (!res.ok) throw new Error(studentData.error);
        if (!sessionStorage.getItem('studentJoined') && studentData.createdAt) {
            sessionStorage.setItem('studentJoined', studentData.createdAt);
        }
        renderDays();
    } catch {
        console.warn('Server unreachable — using local fallback.');
        studentData = { progress: curriculum.map(c => ({ ...c, completed: false })) };
        renderDays();
    }
}

// ─────────────────────────────────────────────
// Render day cards
// ─────────────────────────────────────────────
function renderDays() {
    if (!daysContainer) return;
    daysContainer.innerHTML = '';
    let completedCount = 0;

    curriculum.forEach((item, index) => {
        const savedDay = studentData.progress.find(p => p.day === item.day);
        const completed = savedDay ? savedDay.completed : false;
        const submitted = savedDay ? savedDay.submitted : false;

        if (completed) completedCount++;

        let statusText = 'Pending';
        let statusClass = 'status-pending';

        if (completed) {
            statusText = 'Completed ✓';
            statusClass = 'status-completed';
        } else if (submitted) {
            statusText = '⏳ Under Review';
            statusClass = 'status-review';
        }

        const card = document.createElement('div');
        card.className = 'day-card';
        card.innerHTML = `
      <div class="day-header">
        <span class="day-pill">Day ${item.day}</span>
        <span class="status-badge ${statusClass}">
          ${statusText}
        </span>
      </div>
      <div style="font-size:2rem;margin-bottom:10px;">${item.emoji}</div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <div style="display:flex;gap:10px;margin-top:14px;flex-wrap:wrap;">
        <span style="font-size:0.72rem;font-weight:700;color:var(--text-muted);background:var(--bg-glass);border:1px solid var(--border-subtle);padding:4px 10px;border-radius:50px;">⏱ ${item.duration}</span>
        <span style="font-size:0.72rem;font-weight:700;color:var(--text-muted);background:var(--bg-glass);border:1px solid var(--border-subtle);padding:4px 10px;border-radius:50px;">📈 ${item.difficulty}</span>
      </div>
    `;
        card.addEventListener('click', () => openModal(index));
        daysContainer.appendChild(card);
    });

    updateProgress(completedCount);
}

function updateProgress(completedCount) {
    const pct = Math.round((completedCount / curriculum.length) * 100);
    progressFill.style.width = `${pct}%`;
    progressText.innerText = `${pct}%`;
    document.dispatchEvent(new Event('progressUpdated'));
}

// ─────────────────────────────────────────────
// Build Rich Modal Content
// ─────────────────────────────────────────────
function buildModalBody(item, completed, submitted) {
    const statusHtml = completed
        ? `<div style="background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.3);color:#6ee7b7;padding:14px 20px;border-radius:12px;font-weight:700;font-size:0.9rem;margin-bottom:24px;">✅ You completed this day! Reviewed by instructor.</div>`
        : submitted
        ? `<div style="background:rgba(14,165,233,0.12);border:1px solid rgba(14,165,233,0.3);color:#7dd3fc;padding:14px 20px;border-radius:12px;font-weight:700;font-size:0.9rem;margin-bottom:24px;">⏳ Your submission is under review. You can resubmit if needed.</div>`
        : '';

    const learnHtml = item.whatYouLearn.map(l =>
        `<li style="display:flex;align-items:flex-start;gap:10px;padding:8px 0;border-bottom:1px solid var(--border-subtle);"><span style="color:#818cf8;flex-shrink:0;margin-top:2px;">▸</span><span style="color:var(--text-main);font-size:0.9rem;">${l}</span></li>`
    ).join('');

    const conceptsHtml = item.concepts.map(c =>
        `<div style="background:var(--bg-glass);border:1px solid var(--border-subtle);border-radius:10px;padding:14px 16px;margin-bottom:10px;">
            <span style="font-family:'Outfit',sans-serif;font-weight:800;color:var(--indigo-light);font-size:0.85rem;">${c.term}</span>
            <p style="color:var(--text-muted);font-size:0.83rem;margin-top:4px;line-height:1.5;">${c.def}</p>
        </div>`
    ).join('');

    const stepsHtml = item.steps.map((s, i) =>
        `<div style="display:flex;gap:14px;align-items:flex-start;margin-bottom:14px;">
            <div style="min-width:28px;height:28px;background:var(--grad-brand);border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Outfit',sans-serif;font-weight:800;font-size:0.75rem;color:white;flex-shrink:0;">${i + 1}</div>
            <p style="color:var(--text-main);font-size:0.88rem;line-height:1.6;padding-top:3px;">${s}</p>
        </div>`
    ).join('');

    const resourcesHtml = item.resources.map(r =>
        `<a href="${r.url}" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--bg-glass);border:1px solid var(--border-subtle);border-radius:10px;text-decoration:none;transition:all 0.2s;margin-bottom:8px;" onmouseover="this.style.borderColor='var(--indigo)'" onmouseout="this.style.borderColor='var(--border-subtle)'">
            <span style="font-size:1.1rem;">🔗</span>
            <span style="color:var(--indigo-light);font-weight:600;font-size:0.85rem;">${r.label}</span>
            <span style="margin-left:auto;color:var(--text-faint);font-size:0.75rem;">↗</span>
        </a>`
    ).join('');

    return `
        <div style="color:white;">
            <!-- Header bar -->
            <div style="background:linear-gradient(135deg,rgba(99,102,241,0.2),rgba(139,92,246,0.15));border:1px solid rgba(99,102,241,0.2);border-radius:14px;padding:20px 24px;margin-bottom:28px;display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
                <div style="font-size:2.5rem;">${item.emoji}</div>
                <div style="flex:1">
                    <h2 style="font-family:'Outfit',sans-serif;font-size:1.5rem;font-weight:900;letter-spacing:-0.5px;color:white;margin-bottom:4px;">Day ${item.day}: ${item.title}</h2>
                    <p style="color:#94a3b8;font-size:0.88rem;">${item.desc}</p>
                </div>
                <div style="display:flex;flex-direction:column;gap:6px;text-align:right;">
                    <span style="font-size:0.72rem;font-weight:700;color:#94a3b8;background:rgba(255,255,255,0.06);border-radius:50px;padding:4px 12px;">⏱ ${item.duration}</span>
                    <span style="font-size:0.72rem;font-weight:700;color:#94a3b8;background:rgba(255,255,255,0.06);border-radius:50px;padding:4px 12px;">📈 ${item.difficulty}</span>
                </div>
            </div>

            ${statusHtml}

            <!-- Tabs -->
            <div id="task-tabs" style="display:flex;gap:6px;background:rgba(255,255,255,0.04);padding:5px;border-radius:12px;margin-bottom:24px;flex-wrap:wrap;">
                ${['Overview','Steps','Key Concepts','Resources','Submit'].map((t,i) =>
                    `<button onclick="switchTaskTab(${i})" id="ttab-${i}" style="flex:1;min-width:70px;padding:9px 12px;border:none;border-radius:8px;font-family:'Outfit',sans-serif;font-weight:700;font-size:0.78rem;cursor:pointer;transition:all 0.2s;${i===0?'background:rgba(99,102,241,0.25);color:#818cf8;':'background:transparent;color:#64748b;'}">${t}</button>`
                ).join('')}
            </div>

            <!-- Tab: Overview -->
            <div id="tcontent-0" class="task-tab-content">
                <div style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.18);border-radius:12px;padding:20px 24px;margin-bottom:20px;">
                    <h4 style="font-family:'Outfit',sans-serif;font-weight:800;color:#34d399;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:14px;">🎯 What You'll Learn</h4>
                    <ul style="list-style:none;padding:0;">${learnHtml}</ul>
                </div>
                <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.18);border-radius:12px;padding:20px 24px;">
                    <h4 style="font-family:'Outfit',sans-serif;font-weight:800;color:#818cf8;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:12px;">🏆 Today's Practice Task</h4>
                    <p style="color:#c7d2fe;font-size:0.9rem;line-height:1.7;">${item.practiceTask}</p>
                </div>
            </div>

            <!-- Tab: Steps -->
            <div id="tcontent-1" class="task-tab-content" style="display:none;">
                <h4 style="font-family:'Outfit',sans-serif;font-weight:800;color:var(--indigo-light);font-size:0.8rem;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:20px;">📋 Step-by-Step Instructions</h4>
                ${stepsHtml}
            </div>

            <!-- Tab: Key Concepts -->
            <div id="tcontent-2" class="task-tab-content" style="display:none;">
                <h4 style="font-family:'Outfit',sans-serif;font-weight:800;color:var(--indigo-light);font-size:0.8rem;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:16px;">💡 Key Concepts & Terms</h4>
                ${conceptsHtml}
            </div>

            <!-- Tab: Resources -->
            <div id="tcontent-3" class="task-tab-content" style="display:none;">
                <h4 style="font-family:'Outfit',sans-serif;font-weight:800;color:var(--indigo-light);font-size:0.8rem;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:16px;">📚 Recommended Resources</h4>
                ${resourcesHtml}
            </div>

            <!-- Tab: Submit -->
            <div id="tcontent-4" class="task-tab-content" style="display:none;">
                <div style="background:rgba(245,158,11,0.06);border:1px solid rgba(245,158,11,0.2);border-radius:12px;padding:16px 20px;margin-bottom:20px;">
                    <p style="color:#fcd34d;font-size:0.85rem;line-height:1.6;">📌 <strong>Submission Tip:</strong> ${item.submitNote}</p>
                </div>

                <div class="task-submission" style="background:rgba(255,255,255,0.03);padding:24px;border-radius:14px;border:1px solid var(--border-subtle);">
                    <h3 style="font-family:'Outfit',sans-serif;font-weight:800;margin-bottom:20px;font-size:1.1rem;color:white;">Submit Your Work</h3>

                    <div class="form-group">
                        <label>🔗 Task / Live Demo Link (CodePen, Vercel, Colab, etc.)</label>
                        <input type="url" id="task-link" placeholder="https://...">
                    </div>

                    <div class="form-group">
                        <label>🐙 GitHub Repository Link</label>
                        <input type="url" id="github-link" placeholder="https://github.com/your-username/repo">
                    </div>

                    <div class="form-group">
                        <label>📎 Upload Screenshot / PDF (max 10 MB)</label>
                        <div class="upload-zone" id="upload-zone">
                            <input type="file" id="file-input" accept="image/jpeg,image/png,image/gif,image/webp,application/pdf">
                            <div class="upload-icon">☁️</div>
                            <p><strong>Click to browse</strong> or drag & drop here</p>
                            <p>JPG, PNG, GIF, WEBP, PDF — up to 10 MB</p>
                        </div>
                        <div class="file-preview" id="file-preview">
                            <img id="preview-thumb" src="" alt="preview" style="display:none">
                            <div style="font-size:2rem;display:none" id="preview-pdf-icon">📄</div>
                            <div class="file-meta">
                                <strong id="preview-name">filename.jpg</strong>
                                <small id="preview-size">0 KB</small>
                            </div>
                            <button class="remove-file" onclick="clearFile()" title="Remove file">✕</button>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>📝 Notes / Questions / What did you learn?</label>
                        <textarea id="task-notes" rows="3" placeholder="What did you build? Any questions or blockers?"></textarea>
                    </div>

                    <button class="btn btn-primary" id="submit-task-btn">Submit Task 🚀</button>
                    <div id="submission-status" style="margin-top:16px;"></div>
                </div>
            </div>
        </div>
    `;
}

// ─────────────────────────────────────────────
// Tab Switching inside Modal
// ─────────────────────────────────────────────
function switchTaskTab(idx) {
    for (let i = 0; i < 5; i++) {
        const content = document.getElementById(`tcontent-${i}`);
        const btn = document.getElementById(`ttab-${i}`);
        if (content) content.style.display = i === idx ? 'block' : 'none';
        if (btn) {
            if (i === idx) {
                btn.style.background = 'rgba(99,102,241,0.25)';
                btn.style.color = '#818cf8';
            } else {
                btn.style.background = 'transparent';
                btn.style.color = '#64748b';
            }
        }
    }
    // Re-attach submit button listener
    if (idx === 4) attachSubmitListener();
}

// ─────────────────────────────────────────────
// Modal — Open / Close
// ─────────────────────────────────────────────
function openModal(index) {
    currentSelectedDay = index;
    const item = curriculum[index];
    const savedDay = studentData.progress.find(p => p.day === item.day);
    const completed = savedDay ? savedDay.completed : false;
    const submitted = savedDay ? savedDay.submitted : false;

    // Build rich modal body
    const modalBody = document.querySelector('#task-modal .modal-body');
    const modalTitle = document.getElementById('modal-title');
    if (modalTitle) modalTitle.style.display = 'none'; // hide old title
    if (modalBody) {
        modalBody.innerHTML = buildModalBody(item, completed, submitted);
        // Remove old submit button and status (they're now inside the tab)
        const oldSubmitBtn = document.getElementById('submit-task-btn');
        const oldStatus = document.getElementById('submission-status');
        // These are now inside the modal body from buildModalBody
    }

    // Re-wire file upload zone
    wireFileUpload();

    modal.classList.add('show');
}

function closeModal() {
    modal.classList.remove('show');
    clearFile();
    const modalTitle = document.getElementById('modal-title');
    if (modalTitle) modalTitle.style.display = '';
}

if (closeBtn) closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

// ─────────────────────────────────────────────
// File Upload — wire after modal builds
// ─────────────────────────────────────────────
function wireFileUpload() {
    const fileInput = document.getElementById('file-input');
    const uploadZone = document.getElementById('upload-zone');

    if (fileInput) {
        fileInput.addEventListener('change', () => {
            if (fileInput.files[0]) handleFileSelected(fileInput.files[0]);
        });
    }

    if (uploadZone) {
        uploadZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadZone.classList.add('dragover');
        });
        uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('dragover'));
        uploadZone.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadZone.classList.remove('dragover');
            const file = e.dataTransfer.files[0];
            if (file) handleFileSelected(file);
        });
    }
}

function handleFileSelected(file) {
    const maxSize = 10 * 1024 * 1024;
    const statusDiv = document.getElementById('submission-status');
    if (file.size > maxSize) {
        if (statusDiv) statusDiv.innerHTML = `<span style="color:#ef4444">⚠️ File too large. Maximum size is 10 MB.</span>`;
        return;
    }
    selectedFile = file;
    const sizeStr = file.size > 1024 * 1024
        ? `${(file.size / 1024 / 1024).toFixed(1)} MB`
        : `${(file.size / 1024).toFixed(0)} KB`;

    const nameEl = document.getElementById('preview-name');
    const sizeEl = document.getElementById('preview-size');
    if (nameEl) nameEl.innerText = file.name;
    if (sizeEl) sizeEl.innerText = sizeStr;

    const thumb = document.getElementById('preview-thumb');
    const pdfIcon = document.getElementById('preview-pdf-icon');

    if (file.type === 'application/pdf') {
        if (thumb) thumb.style.display = 'none';
        if (pdfIcon) pdfIcon.style.display = 'block';
    } else {
        if (pdfIcon) pdfIcon.style.display = 'none';
        const reader = new FileReader();
        reader.onload = (e) => {
            if (thumb) { thumb.src = e.target.result; thumb.style.display = 'block'; }
        };
        reader.readAsDataURL(file);
    }
    const preview = document.getElementById('file-preview');
    if (preview) preview.classList.add('visible');
}

function clearFile() {
    selectedFile = null;
    const fileInput = document.getElementById('file-input');
    if (fileInput) fileInput.value = '';
    const preview = document.getElementById('file-preview');
    if (preview) preview.classList.remove('visible');
    const thumb = document.getElementById('preview-thumb');
    if (thumb) { thumb.src = ''; thumb.style.display = 'none'; }
    const pdfIcon = document.getElementById('preview-pdf-icon');
    if (pdfIcon) pdfIcon.style.display = 'none';
}

// ─────────────────────────────────────────────
// Submit — attach dynamically
// ─────────────────────────────────────────────
function attachSubmitListener() {
    const btn = document.getElementById('submit-task-btn');
    if (!btn || btn._bound) return;
    btn._bound = true;
    btn.addEventListener('click', handleSubmit);
}

async function handleSubmit() {
    const taskLink = (document.getElementById('task-link') || {}).value?.trim() || '';
    const githubLink = (document.getElementById('github-link') || {}).value?.trim() || '';
    const notes = (document.getElementById('task-notes') || {}).value?.trim() || '';
    const item = curriculum[currentSelectedDay];
    const statusDiv = document.getElementById('submission-status');
    const btn = document.getElementById('submit-task-btn');

    if (!taskLink && !githubLink && !selectedFile) {
        if (statusDiv) statusDiv.innerHTML = `<span style="color:#f59e0b">⚠️ Please provide at least a task link, GitHub link, or upload a file.</span>`;
        return;
    }

    if (btn) { btn.disabled = true; btn.innerText = '⏳ Uploading & Submitting...'; }
    if (statusDiv) statusDiv.innerHTML = '';

    const formData = new FormData();
    formData.append('studentName', sessionStorage.getItem('studentName'));
    formData.append('studentEmail', sessionStorage.getItem('studentEmail'));
    formData.append('day', item.day);
    formData.append('title', item.title);
    formData.append('taskLink', taskLink);
    formData.append('githubLink', githubLink);
    formData.append('notes', notes);
    if (selectedFile) formData.append('attachment', selectedFile, selectedFile.name);

    try {
        const res = await fetch(`${API_BASE}/submit`, { method: 'POST', body: formData });
        const data = await res.json();

        if (res.ok && data.success) {
            const progressEntry = studentData.progress.find(p => p.day === item.day);
            if (progressEntry) progressEntry.submitted = true;

            if (statusDiv) statusDiv.innerHTML = `<span style="color:#10b981">✅ Task submitted for review! It will show as completed once the instructor reviews it. 🚀</span>`;
            clearFile();
            setTimeout(() => { closeModal(); renderDays(); }, 2000);
        } else {
            if (statusDiv) statusDiv.innerHTML = `<span style="color:#ef4444">❌ ${data.error || 'Submission failed.'}</span>`;
            if (btn) { btn.disabled = false; btn.innerText = 'Submit Task 🚀'; }
        }
    } catch {
        if (statusDiv) statusDiv.innerHTML = `<span style="color:#ef4444">❌ Cannot reach server. Is the backend running?</span>`;
        if (btn) { btn.disabled = false; btn.innerText = 'Submit Task 🚀'; }
    }
}

// ─────────────────────────────────────────────
// Boot
// ─────────────────────────────────────────────
initStudent();
