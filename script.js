// ─────────────────────────────────────────────
// Campus to Corporate — 15-Day Masterclass
// From Classroom to Career | by Vinay Avala
// ─────────────────────────────────────────────
const API_BASE = '/api';

// ─────────────────────────────────────────────
// CURRICULUM — Updated with Teaching Guide
// ─────────────────────────────────────────────
const curriculum = [
  {
    day: 1,
    title: 'HTML Basics',
    desc: 'Build your very first webpage from scratch — tags, structure, and your digital debut.',
    emoji: '🌐',
    duration: '2–3 hrs',
    difficulty: 'Beginner',
    careerRoles: ['Frontend Developer', 'Web Designer', 'Full Stack Developer', 'UI Developer'],
    salaryInsight: 'Freshers with HTML/CSS skills earn ₹3–6 LPA in their first job.',
    analogy: '🧠 Think of a website like a HUMAN BODY. HTML is the skeleton — it gives structure. CSS is the clothes and skin — it makes things look good. JavaScript is the brain and muscles — it makes things move and respond. Today, we focus on the skeleton!',
    whatYouLearn: [
      'What HTML is and how browsers render it',
      'Essential tags: headings (h1–h6), paragraphs, links, images, lists',
      'Page structure: DOCTYPE, html, head, body',
      'How to use attributes like href, src, alt, id, class',
    ],
    concepts: [
      { term: 'HTML', def: 'HyperText Markup Language — the skeleton of every webpage. Every site you visit is built with HTML.' },
      { term: 'Tag', def: 'An instruction wrapped in angle brackets, e.g. <p>...</p>. Tags come in pairs — opening and closing, like a box.' },
      { term: 'Attribute', def: 'Extra info added inside a tag, like href="https://..." in an anchor tag.' },
      { term: 'Element', def: 'The full package: opening tag + content + closing tag.' },
    ],
    steps: [
      'Open VS Code (or Notepad) and create a file called index.html.',
      'Add the boilerplate: &lt;!DOCTYPE html&gt;, &lt;html&gt;, &lt;head&gt; with a &lt;title&gt;, and &lt;body&gt;.',
      'Inside &lt;body&gt;, write an &lt;h1&gt; with your name and a &lt;p&gt; introducing yourself.',
      'Add an &lt;img&gt; tag with a photo (or a placeholder from https://picsum.photos/300).',
      'Create an unordered list &lt;ul&gt; of 3 hobbies using &lt;li&gt; tags.',
      'Add a hyperlink &lt;a href="..."&gt; that opens your favourite website.',
      'Save the file and open it in your browser by double-clicking — you just built your first webpage! 🎉',
    ],
    practiceTask: 'Build a single-page "About Me" webpage with: your name as the heading, a short bio paragraph, a profile image, a hobbies list, and links to 2 websites you visit often.',
    resources: [
      { label: 'MDN — HTML Basics (Official Docs)', url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics' },
      { label: 'W3Schools HTML Tutorial', url: 'https://www.w3schools.com/html/' },
      { label: 'HTML Cheatsheet', url: 'https://htmlcheatsheet.com/' },
    ],
    submitWhat: [
      '📸 Screenshot of your About Me page open in browser',
      '🔗 OR a CodePen link (codepen.io → New Pen → paste your HTML)',
      '📝 In the Notes box: tell us your name heading text and one thing you found confusing',
    ],
    submitNote: 'Share your "About Me" page via CodePen or a screenshot. Paste your HTML in the Notes field so the instructor can review your tag structure.',
  },
  {
    day: 2,
    title: 'Advanced HTML',
    desc: 'Forms, Tables, and Semantic layouts — make your pages actually useful.',
    emoji: '📋',
    duration: '2–3 hrs',
    difficulty: 'Beginner',
    careerRoles: ['Frontend Developer', 'UI/UX Developer', 'Web Designer'],
    salaryInsight: 'Developers who understand forms deeply are extremely valuable. SEO specialists are paid just to fix HTML structure!',
    analogy: '📰 Think of a website like a NEWSPAPER. Semantic HTML means using the RIGHT labels — just like a newspaper has a headline, article, sidebar, and footer. If you use a heading for everything, it\'s like writing a whole newspaper in one giant font with no sections.',
    whatYouLearn: [
      'Semantic elements: header, nav, main, section, article, footer',
      'Building accessible forms with input, textarea, select, button',
      'Structuring tabular data with table, thead, tbody, tr, td, th',
      'HTML5 input types: email, number, date, checkbox, radio',
    ],
    concepts: [
      { term: 'Semantic HTML', def: 'Using tags that describe meaning, not just appearance — helps SEO and accessibility. Google ranks semantic pages higher!' },
      { term: 'Form', def: 'An interactive area that collects user input. Login pages, registration forms, checkout — all HTML forms.' },
      { term: 'Table', def: 'A grid structure to display rows and columns of related data — like Excel inside HTML.' },
      { term: 'Accessibility', def: 'Designing so all users, including those with disabilities, can use your page.' },
    ],
    steps: [
      'Refactor yesterday\'s page to use &lt;header&gt;, &lt;main&gt;, and &lt;footer&gt; instead of plain divs.',
      'Add a &lt;nav&gt; bar with 3 anchor links pointing to different sections using #id.',
      'Create a &lt;section id="contact"&gt; and build a contact form inside it.',
      'Form fields: name (text), email (email), message (textarea), a dropdown &lt;select&gt; for subject, and a Submit &lt;button&gt;.',
      'Build a simple &lt;table&gt; showing a weekly schedule or a skills table (Skill | Level).',
      'Add required attribute to at least 2 inputs to test browser validation.',
      'Validate your HTML at validator.w3.org — aim for zero errors!',
    ],
    practiceTask: 'Extend your "About Me" page with: a semantic nav bar, a contact form (name, email, message, subject dropdown), and a skills table listing 5 skills with your current level (Beginner/Intermediate/Advanced).',
    resources: [
      { label: 'MDN — HTML Forms', url: 'https://developer.mozilla.org/en-US/docs/Learn/Forms' },
      { label: 'MDN — HTML Tables', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables' },
      { label: 'HTML Validator', url: 'https://validator.w3.org/' },
    ],
    submitWhat: [
      '📸 Screenshot of your page showing the form AND the table visible',
      '🔗 OR a CodePen link with your full HTML',
      '📝 In Notes: paste the error count from validator.w3.org (screenshot optional)',
    ],
    submitNote: 'Share your extended page. The instructor will check: correct semantic tags, form with all required fields, and a working table.',
  },
  {
    day: 3,
    title: 'Styling with CSS',
    desc: 'Colors, fonts, box model — transform your boring skeleton into a beautiful webpage.',
    emoji: '🎨',
    duration: '3–4 hrs',
    difficulty: 'Beginner',
    careerRoles: ['UI Developer', 'Frontend Developer', 'Web Designer', 'Product Designer'],
    salaryInsight: 'A beautifully designed checkout page converts 30% more customers than an ugly one. That\'s pure CSS value! UI/UX designers earn ₹4–10 LPA.',
    analogy: '📱 Imagine buying a new phone. The hardware is the HTML — it works, but it\'s all grey and plain. CSS is like putting a custom case on it, changing the wallpaper, adjusting the font size. CSS tells the browser: "Make this heading blue, give this box rounded corners."',
    whatYouLearn: [
      'How to link an external CSS file and use style tags',
      'Selectors: element, class (.), id (#), pseudo-classes (:hover)',
      'Box model: margin, border, padding, content — margin = personal space!',
      'Typography: font-family, font-size, font-weight, line-height',
      'Colors: hex, rgb(), hsl(), and using CSS variables (--primary-color)',
    ],
    concepts: [
      { term: 'Selector', def: 'Targets which HTML element(s) to style — e.g. p, .card, #hero.' },
      { term: 'Box Model', def: 'Every element is a box: content → padding → border → margin. Padding is INSIDE, margin is OUTSIDE.' },
      { term: 'Specificity', def: 'The "weight" of a selector; more specific rules win conflicts. ID > Class > Element.' },
      { term: 'CSS Variable', def: '--primary-color: #6366f1; — reusable values across your stylesheet. Change once, updates everywhere.' },
    ],
    steps: [
      'Create styles.css and link it in the &lt;head&gt; with &lt;link rel="stylesheet" href="styles.css"&gt;.',
      'Import a Google Font (Poppins or Roboto) using a &lt;link&gt; tag from fonts.google.com.',
      'Set a background color on body: background-color: #f0f4ff; and set font-family.',
      'Style your &lt;header&gt; with a background color, padding, and centered text.',
      'Add a card style to your form: background: white; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); padding: 24px;',
      'Style your button: background: #6366f1; color: white; padding: 10px 20px; border: none; border-radius: 8px; cursor: pointer;',
      'Add a :hover effect to your button: button:hover { background: #4f46e5; }',
      'Style your table with alternating row colors using tr:nth-child(even) { background: #f8fafc; }',
    ],
    practiceTask: 'Fully style your "About Me" page: choose a consistent color palette (3 colors max), use Google Fonts (one heading font + one body font), style all sections with proper padding/margins, and make the page look polished and professional.',
    resources: [
      { label: 'Google Fonts — Pick your font', url: 'https://fonts.google.com/' },
      { label: 'CSS Box Model — MDN', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model' },
      { label: 'Coolors — Color Palette Generator', url: 'https://coolors.co/' },
      { label: 'CSS Tricks Almanac', url: 'https://css-tricks.com/almanac/' },
    ],
    submitWhat: [
      '📸 Screenshot of your STYLED page (before vs after is a bonus!)',
      '🔗 OR a CodePen with both your HTML and CSS tabs filled',
      '📝 In Notes: mention the Google Font you used and your 3 main colors (hex codes)',
    ],
    submitNote: 'Share a live demo or screenshot showing your styled page. The instructor will look for consistent use of colors, fonts, and spacing — and a working hover effect.',
  },
  {
    day: 4,
    title: 'CSS Layouts',
    desc: 'Flexbox, Grid & Responsive Design — make things go exactly where you want them.',
    emoji: '📐',
    duration: '3–4 hrs',
    difficulty: 'Beginner–Intermediate',
    careerRoles: ['Frontend Developer', 'UI Developer', 'Web Designer'],
    salaryInsight: 'Responsive design is a MUST-HAVE skill. Every company tests it in interviews. Frontend devs with strong layout skills earn ₹4–8 LPA as freshers.',
    analogy: '🏠 Think of Flexbox like arranging furniture in a room — you decide if items go in a row or column, and how they space out. CSS Grid is like designing the blueprint of the whole house — you define the rooms (areas) first, then put furniture in them.',
    whatYouLearn: [
      'Flexbox: flex-direction, justify-content, align-items, flex-wrap, gap',
      'CSS Grid: grid-template-columns, auto-fill, minmax()',
      'Responsive design with media queries (@media)',
      'When to use Flexbox (1D: rows OR columns) vs Grid (2D: rows AND columns)',
      'Mobile-first design approach',
    ],
    concepts: [
      { term: 'Flexbox', def: 'One-dimensional layout system — great for rows or columns of items. Use for navbars, button groups, centering.' },
      { term: 'CSS Grid', def: 'Two-dimensional layout — ideal for full page structure and card grids.' },
      { term: 'Media Query', def: '@media (max-width: 768px) { } — applies styles only at certain screen sizes.' },
      { term: 'Mobile-First', def: 'Write styles for small screens first, then add complexity for larger screens. Better performance!' },
    ],
    steps: [
      'Build a navbar using display: flex; justify-content: space-between; — logo on left, links on right.',
      'Create a hero section: use flexbox to center text and a button both vertically and horizontally.',
      'Build a 3-column cards section using CSS Grid: grid-template-columns: repeat(3, 1fr); gap: 24px;',
      'Add a 2-column bio layout (image left, text right) using Flexbox.',
      'Add media queries: @media (max-width: 768px) { grid-template-columns: 1fr; } to make cards stack on mobile.',
      'Test using Chrome DevTools (F12 → Toggle Device Toolbar icon) — check phone and tablet views.',
    ],
    practiceTask: 'Build a fully responsive landing page for any topic (a hobby, a product, a service). Must include: a sticky navbar, hero section, 3-column feature cards grid (collapses to 1 column on mobile), and a footer. Must look good on BOTH mobile AND desktop.',
    resources: [
      { label: 'Flexbox Froggy — Learn Flexbox by Playing', url: 'https://flexboxfroggy.com/' },
      { label: 'Grid Garden — Learn CSS Grid by Playing', url: 'https://cssgridgarden.com/' },
      { label: 'CSS Tricks — Complete Guide to Flexbox', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
      { label: 'CSS Tricks — Complete Guide to Grid', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/' },
    ],
    submitWhat: [
      '🔗 Live demo link (CodePen, GitHub Pages, or Vercel) — REQUIRED for this day',
      '📸 TWO screenshots: one on desktop view, one on mobile view (use DevTools)',
      '📝 In Notes: write which layout used Flexbox and which used CSS Grid in your project',
    ],
    submitNote: 'Submit your live demo link. The instructor will resize the window to check responsiveness — this is the KEY criterion for today. Mobile view must be tested!',
  },
  {
    day: 5,
    title: 'JavaScript Basics',
    desc: 'Variables, logic, functions — bring your webpages to life with programming.',
    emoji: '⚡',
    duration: '3–4 hrs',
    difficulty: 'Intermediate',
    careerRoles: ['Frontend Developer', 'Full Stack Developer', 'JavaScript Developer'],
    salaryInsight: 'JavaScript is the #1 most-used programming language in the world. JS developers earn ₹4–12 LPA. Every web company needs JavaScript skills.',
    analogy: '🧠 HTML and CSS are like a house with beautiful walls and furniture. JavaScript is the ELECTRICITY — it makes the lights turn on when you flip a switch, locks the door, rings the doorbell. Without JS, websites are just pretty pictures. With JS, they become APPS.',
    whatYouLearn: [
      'Variables: var, let, const — and when to use each (always prefer const or let)',
      'Data types: string, number, boolean, null, undefined, object',
      'Operators: arithmetic, comparison (===, !==), logical (&&, ||, !)',
      'Control flow: if/else, ternary operator',
      'Functions: declaration, expression, and arrow functions (=>)',
    ],
    concepts: [
      { term: 'Variable', def: 'A named container that stores a value — let name = "Ravi"; Use const if the value won\'t change, let if it will.' },
      { term: 'Function', def: 'A reusable block of code that performs a task when called. Write once, use anywhere.' },
      { term: 'Boolean', def: 'A true/false value — the foundation of all decision-making in code. Is the user logged in? true/false.' },
      { term: 'Console', def: 'The browser\'s output window — use console.log() to debug. Press F12 → Console tab to open it.' },
    ],
    steps: [
      'Open browser DevTools Console (F12 → Console tab) — this is your playground.',
      'Declare: let name = "YourName"; const age = 20; — print with console.log(name, age).',
      'Write a function greet(name) { return "Hello, " + name + "!"; } — call it and log the result.',
      'Write an if/else: if (age >= 18) { console.log("Adult"); } else { console.log("Minor"); }',
      'Write a function isEven(n) { return n % 2 === 0; } — test it with isEven(4) and isEven(7).',
      'Use a for loop to print numbers 1–10: for (let i = 1; i <= 10; i++) { console.log(i); }',
      'Link a &lt;script&gt; tag to your HTML and make a button call alert("Hello!") when clicked.',
    ],
    practiceTask: 'Build a "Number Guessing Game": the program picks a random number 1–10 (Math.floor(Math.random() * 10) + 1), the user inputs a guess using prompt(), and the program uses if/else to say "Too High!", "Too Low!", or "Correct! 🎉". Loop until they get it right.',
    resources: [
      { label: 'JavaScript.info — The Best Free JS Tutorial', url: 'https://javascript.info/' },
      { label: 'MDN — JavaScript Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps' },
      { label: 'Eloquent JavaScript (Free Book)', url: 'https://eloquentjavascript.net/' },
    ],
    submitWhat: [
      '🔗 CodePen link with your Number Guessing Game',
      '📝 In Notes: paste your complete game code AND tell us your highest guess count before getting it right',
      '📸 Optional: screenshot of the game working in the browser',
    ],
    submitNote: 'Share your CodePen with the guessing game. Paste your code in the Notes field too so the instructor can review your if/else logic and loop structure.',
  },
  {
    day: 6,
    title: 'JS & The DOM',
    desc: 'Make HTML elements respond to clicks, typing, and user actions in real-time.',
    emoji: '🖱️',
    duration: '3–4 hrs',
    difficulty: 'Intermediate',
    careerRoles: ['Frontend Developer', 'UI Developer', 'JavaScript Developer'],
    salaryInsight: 'DOM manipulation is tested in EVERY frontend interview. Companies literally give you a task: "Make this button do X when clicked." Master this today!',
    analogy: '🎮 The DOM is like a video game map. JavaScript is the player controlling everything on the map. querySelector finds an item on the map. addEventListener waits for you to press a button. innerHTML changes what\'s on the map in real time. You\'re now the player!',
    whatYouLearn: [
      'What the DOM (Document Object Model) is — a tree-map of your HTML',
      'Selecting elements: getElementById, querySelector, querySelectorAll',
      'Reading and changing content: innerText, innerHTML, value',
      'Changing styles and classes: classList.add(), classList.remove(), classList.toggle()',
      'Events: addEventListener for click, input, keydown',
    ],
    concepts: [
      { term: 'DOM', def: 'A tree-like map of your HTML that JavaScript can read and modify in real time. Change the DOM → the page updates instantly.' },
      { term: 'querySelector', def: 'Finds the first element matching a CSS selector — document.querySelector(".card") or document.querySelector("#submit-btn").' },
      { term: 'Event Listener', def: 'Watches for a user action and runs your code in response. element.addEventListener("click", function() { ... })' },
      { term: 'classList', def: 'Controls CSS classes on an element. .add("active") adds a class, .remove("active") removes it, .toggle("dark") switches.' },
    ],
    steps: [
      'Create a page with: a heading, a paragraph, an input field, and a button.',
      'Use querySelector to select the button. Add a click event listener to it.',
      'On click: read the input value and update the heading\'s innerText with it.',
      'Add a "Change Color" button — on click, toggle a class that changes the background.',
      'Build a counter app: two buttons (+ and −) and a display showing the count.',
      '+ button: count++; display.innerText = count; — − button: count--; display.innerText = count;',
      'Add an if check: prevent the counter going below 0. Add a Reset button.',
    ],
    practiceTask: 'Build an interactive "Character Counter" app: a &lt;textarea&gt; and a live count below it showing "X / 150 characters". When user exceeds 150 chars, counter turns RED and a warning message appears. Add a Clear button that resets everything.',
    resources: [
      { label: 'MDN — DOM Introduction', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction' },
      { label: 'JavaScript DOM Crash Course — Traversy Media (YouTube)', url: 'https://www.youtube.com/watch?v=0ik6X4DJKCc' },
      { label: 'Event Reference — MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/Events' },
    ],
    submitWhat: [
      '🔗 Live link to your Character Counter app (CodePen preferred)',
      '📸 Screenshot showing the RED warning state when over 150 characters',
      '📝 In Notes: explain how your character count updates — which event listener did you use?',
    ],
    submitNote: 'Submit your Character Counter app link. The instructor will type in it to test: live count updates, red color at 150+, and clear button reset.',
  },
  {
    day: 7,
    title: 'Arrays & Loops',
    desc: 'Handle lists of data efficiently with JavaScript\'s most powerful array methods.',
    emoji: '🔄',
    duration: '3–4 hrs',
    difficulty: 'Intermediate',
    careerRoles: ['Frontend Developer', 'Full Stack Developer', 'JavaScript Developer'],
    salaryInsight: 'Array methods (map, filter, reduce) are the TOP interview questions at companies like Flipkart, Swiggy, Razorpay. Practice these until they feel natural.',
    analogy: '📦 An array is like a shelf of boxes. forEach opens each box and does something. map creates a NEW shelf with transformed items. filter keeps only the boxes that match your condition. reduce takes ALL boxes and combines them into ONE thing (like a sum).',
    whatYouLearn: [
      'Creating and accessing arrays: let arr = [1, 2, 3]; arr[0] → 1',
      'Array methods: push, pop, shift, unshift, splice, slice',
      'Iterating: for loop, for...of, forEach',
      'Transforming data: map(), filter(), reduce(), find(), sort()',
      'Rendering dynamic lists to the DOM using innerHTML and map()',
    ],
    concepts: [
      { term: 'Array', def: 'An ordered list of values in a single variable. let fruits = ["apple", "mango", "banana"];' },
      { term: 'map()', def: 'Creates a new array by applying a function to every element. [1,2,3].map(n => n*2) → [2,4,6]' },
      { term: 'filter()', def: 'Creates a new array with only elements that pass a test. [1,2,3,4].filter(n => n > 2) → [3,4]' },
      { term: 'reduce()', def: 'Boils an array down to a single value. [1,2,3,4].reduce((sum, n) => sum + n, 0) → 10' },
    ],
    steps: [
      'Create an array of 5 student names. Loop with forEach and console.log each.',
      'Use map() to create a new array where each name is uppercase.',
      'Use filter() to get only names that have more than 4 characters.',
      'Use reduce() to calculate the total length of all names combined.',
      'Create an array of objects: [{name: "Ali", score: 85}, ...] for 5 students.',
      'Render this as an HTML table: tbody.innerHTML = students.map(s => `<tr><td>${s.name}</td><td>${s.score}</td></tr>`).join("")',
      'Add a search input: filter the array as the user types, re-render the table.',
    ],
    practiceTask: 'Build a "Student Gradebook" app: array of 5+ students with names and scores. Display in a styled table. Add a search bar to filter by name. Add a "Sort by Score" button (high to low). Show the class average below the table.',
    resources: [
      { label: 'MDN — Array Methods Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array' },
      { label: 'JavaScript Array Methods — javascript.info', url: 'https://javascript.info/array-methods' },
      { label: 'Array Methods Cheatsheet — freeCodeCamp', url: 'https://www.freecodecamp.org/news/javascript-array-methods-cheatsheet/' },
    ],
    submitWhat: [
      '🔗 Live link to your Student Gradebook app',
      '📸 Screenshot showing the search filter working AND sorted results',
      '📝 In Notes: write the code for your sort function using .sort() — show us your logic!',
    ],
    submitNote: 'Submit your Gradebook app. The instructor will test: search filter, sort button, and average calculation.',
  },
  {
    day: 8,
    title: 'React Basics',
    desc: 'The world\'s most popular UI framework — components, state, and modern frontend development.',
    emoji: '⚛️',
    duration: '3–4 hrs',
    difficulty: 'Intermediate',
    careerRoles: ['React Developer', 'Frontend Developer', 'Full Stack Developer'],
    salaryInsight: 'React skills alone can get you ₹5–15 LPA. It\'s used by Facebook, Instagram, Airbnb, Netflix, and thousands of Indian startups. This is the #1 most hired frontend skill.',
    analogy: '🧱 React is like LEGO bricks for websites. Instead of writing one giant HTML file, you build small reusable "components" — like a Button component, a Card component, a Navbar component. Each has its own logic. Snap them together and you have an app.',
    whatYouLearn: [
      'Why React exists — the problems it solves over plain JavaScript',
      'Components: building reusable UI pieces',
      'JSX: JavaScript + HTML syntax (<h1>Hello {name}</h1>)',
      'State with useState: data that changes and re-renders the UI automatically',
      'Props: passing data from parent to child components',
    ],
    concepts: [
      { term: 'Component', def: 'A reusable piece of UI with its own logic — like a LEGO brick. function Button() { return <button>Click me</button>; }' },
      { term: 'JSX', def: 'JavaScript + HTML syntax used in React — <h1>Hello {name}</h1>. The curly braces {} let you embed JS expressions.' },
      { term: 'State (useState)', def: 'Data that can change over time, causing the component to re-render automatically. const [count, setCount] = useState(0);' },
      { term: 'Props', def: 'Data passed FROM a parent component TO a child — like function arguments. <Card title="Day 1" color="blue" />' },
    ],
    steps: [
      'Go to codesandbox.io/s/new and select the React template — no installation needed.',
      'Write your first component: function HelloWorld() { return <h1>Hello Campus to Corporate! 🚀</h1>; }',
      'Create a Counter component using useState — clicking a button increments the count.',
      'Create a Card component that accepts props: title, description, and emoji.',
      'Render 3 different cards by passing different props to <Card title="..." description="..." emoji="..." />',
      'Compare: how many lines did the React counter take vs your Day 6 plain JS counter? Discuss the difference.',
    ],
    practiceTask: 'Build a "Tip Calculator" React app: inputs for bill amount and tip percentage, a live output showing the tip amount and total (updates as you type using state), and a Reset button. All logic via React useState — no DOM manipulation.',
    resources: [
      { label: 'React Official Docs — Quick Start', url: 'https://react.dev/learn' },
      { label: 'React in 100 Seconds — Fireship (YouTube)', url: 'https://www.youtube.com/watch?v=Tn6-PIqc4UM' },
      { label: 'CodeSandbox — React Starter', url: 'https://codesandbox.io/s/new' },
    ],
    submitWhat: [
      '🔗 CodeSandbox link to your Tip Calculator (click Share → Copy Link)',
      '📸 Screenshot showing tip and total updating as you change the inputs',
      '📝 In Notes: write your useState variable names and explain what each one stores',
    ],
    submitNote: 'Share your Tip Calculator on CodeSandbox. The instructor will change the bill amount and tip % to confirm state updates correctly without page reload.',
  },
  {
    day: 9,
    title: 'Portfolio Project — Part 1',
    desc: 'Plan and build the foundation of your professional portfolio website.',
    emoji: '🏗️',
    duration: '4–5 hrs',
    difficulty: 'Intermediate',
    careerRoles: ['Frontend Developer', 'Full Stack Developer', 'Any Tech Role'],
    salaryInsight: 'A strong portfolio is MORE POWERFUL than a degree for landing your first tech job. Recruiters spend 30 seconds deciding — your portfolio is your silent salesperson.',
    analogy: '🏛️ Building a portfolio is like constructing a building. Today you lay the FOUNDATION — structure, planning, and getting it live online. Tomorrow you add the interior design. Don\'t skip the foundation — a beautiful interior on a weak structure collapses!',
    whatYouLearn: [
      'Planning a real project: wireframes, sections, content strategy',
      'Setting up a professional folder structure',
      'Building a hero section with headline and Call-To-Action (CTA)',
      'Creating a responsive navigation bar with smooth scroll',
      'Git basics: init, add, commit, push to GitHub + deploy with GitHub Pages',
    ],
    concepts: [
      { term: 'Wireframe', def: 'A rough sketch (on paper or Figma) showing the layout before coding. Plan first, code second.' },
      { term: 'CTA', def: 'Call-To-Action — a button or link that tells the user what to do next. "View My Work", "Hire Me", "Contact Me".' },
      { term: 'Smooth Scroll', def: 'scroll-behavior: smooth — clicking nav links animates the scroll instead of jumping abruptly.' },
      { term: 'GitHub Pages', def: 'A free hosting service by GitHub. Push your code and get a live URL: username.github.io/portfolio' },
    ],
    steps: [
      'Sketch your portfolio on paper: decide on 5 sections (Hero, About, Skills, Projects, Contact).',
      'Create the folder: portfolio/ with index.html, styles.css, script.js, and /images folder.',
      'Build the HTML structure for all 5 sections with correct semantic tags.',
      'Style the Hero section: full viewport height, centered name + tagline, "View My Work" button.',
      'Build a sticky navbar with links that scroll smoothly to each section.',
      'Initialize Git: git init → git add . → git commit -m "Initial portfolio setup"',
      'Push to GitHub and enable GitHub Pages: Settings → Pages → Deploy from main branch.',
    ],
    practiceTask: 'By end of today: your portfolio MUST be live on GitHub Pages with a working sticky nav, hero section with your name and tagline, and placeholder sections for About, Skills, Projects, and Contact. Share the live GitHub Pages URL.',
    resources: [
      { label: 'GitHub Pages — How to Deploy', url: 'https://pages.github.com/' },
      { label: 'Git Beginner Guide — Atlassian', url: 'https://www.atlassian.com/git/tutorials/what-is-git' },
      { label: 'Portfolio Inspiration — Brittany Chiang', url: 'https://brittanychiang.com/' },
    ],
    submitWhat: [
      '🔗 Your live GitHub Pages URL (MUST be live — not localhost)',
      '🐙 Your GitHub repository link',
      '📝 In Notes: paste your 5 section IDs and the tagline text you wrote for your hero section',
    ],
    submitNote: 'BOTH the live GitHub Pages URL AND the GitHub repo link are required. The instructor will visit your live site to verify it loads correctly.',
  },
  {
    day: 10,
    title: 'Portfolio Project — Part 2',
    desc: 'Add projects, skills, animations, and launch your complete professional portfolio.',
    emoji: '✨',
    duration: '4–5 hrs',
    difficulty: 'Intermediate',
    careerRoles: ['Any Tech Role — this is your career weapon'],
    salaryInsight: 'This portfolio can directly get you hired. Post it on LinkedIn with "I built this in 10 days" and watch the connections come in. Recruiters DM candidates with great portfolios.',
    analogy: '🏡 Yesterday you built the walls and roof. Today you add the furniture, lighting, and make it a HOME people want to visit. The difference between a portfolio that gets ignored and one that gets you hired is often: does it look FINISHED and PROFESSIONAL?',
    whatYouLearn: [
      'Building a Projects section with real or practice project cards',
      'Creating an animated Skills section (progress bars or skill badges)',
      'Setting up a working Contact form (Formspree — no backend needed)',
      'Adding CSS scroll animations with Intersection Observer API',
      'Final polish: favicon, meta tags, mobile optimization',
    ],
    concepts: [
      { term: 'Intersection Observer', def: 'A JS API that fires when an element enters the viewport. Used to trigger animations as you scroll down.' },
      { term: 'Formspree', def: 'A free service that handles form submissions and emails them to you — zero backend code needed. Perfect for portfolios.' },
      { term: 'Open Graph', def: 'Meta tags that control how your page looks when shared on WhatsApp, LinkedIn, Twitter. Looks professional!' },
      { term: 'Favicon', def: 'The small icon in the browser tab. Generate one at favicon.io with your initials.' },
    ],
    steps: [
      'Projects section: at least 3 project cards — name, description, tech tags (HTML/CSS/JS), and a live link.',
      'Skills section: use a CSS grid of badges OR animated progress bars for 6+ skills.',
      'About section: your photo, 3 sentences about yourself, and a "Download CV" button (link to PDF).',
      'Connect Contact form to Formspree: action="https://formspree.io/f/your-id" — test it with a real email.',
      'Add scroll animations with Intersection Observer: elements fade+slide in as they enter the viewport.',
      'Add a favicon at favicon.io — generate from your initials.',
      'Deploy the final version to GitHub Pages and test on your phone.',
    ],
    practiceTask: 'Your COMPLETE portfolio must have: all 5 sections fully built, 3+ project cards with live links, working contact form, scroll animations, mobile-responsive, and live on GitHub Pages. This is your biggest milestone yet!',
    resources: [
      { label: 'Formspree — Free Contact Form Backend', url: 'https://formspree.io/' },
      { label: 'Favicon Generator', url: 'https://favicon.io/' },
      { label: 'Intersection Observer API — MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API' },
      { label: 'Open Graph Meta Tags Guide', url: 'https://ogp.me/' },
    ],
    submitWhat: [
      '🔗 Final live GitHub Pages URL (updated with all 5 complete sections)',
      '🐙 GitHub repository link',
      '📸 Screenshot of your portfolio on MOBILE (use DevTools or your actual phone)',
      '📝 In Notes: your Formspree endpoint and confirmation that it sent a test email to you',
    ],
    submitNote: 'MAJOR MILESTONE — submit both links. The instructor will test on desktop AND mobile. The contact form must send a real email. This goes on your resume!',
  },
  {
    day: 11,
    title: 'To-Do App — Part 1',
    desc: 'Build CRUD (Create, Read, Update, Delete) logic with localStorage persistence.',
    emoji: '📝',
    duration: '3–4 hrs',
    difficulty: 'Intermediate',
    careerRoles: ['Frontend Developer', 'Full Stack Developer', 'App Developer'],
    salaryInsight: 'Every real application is CRUD at its core — whether it\'s Swiggy orders, Gmail, or your bank account. Understanding CRUD makes you ready for any app development job.',
    analogy: '📔 Think of localStorage like a notepad that never forgets. Even if you close the tab, the notepad still has your notes. Your app reads from the notepad when it starts, writes to it when changes happen. That\'s persistence — and it\'s what separates real apps from demos.',
    whatYouLearn: [
      'Planning an app: data model, user stories, feature list',
      'CRUD operations in JavaScript: Create, Read, Update, Delete',
      'Using localStorage to persist data across page refreshes',
      'Generating unique IDs with Date.now()',
      'Dynamic rendering: rebuilding the DOM from an array of objects',
    ],
    concepts: [
      { term: 'CRUD', def: 'Create, Read, Update, Delete — the four fundamental operations of any data-driven app. Instagram: Create post, Read feed, Update caption, Delete post.' },
      { term: 'localStorage', def: 'Browser storage that survives page refreshes. localStorage.setItem("key", value) to save. localStorage.getItem("key") to read.' },
      { term: 'JSON.stringify / parse', def: 'Convert objects to strings for storage: JSON.stringify({name: "Ravi"}) → \'{"name":"Ravi"}\'. Parse back: JSON.parse(stored).' },
      { term: 'Unique ID', def: 'A value that uniquely identifies each task — used to edit/delete specific items. id: Date.now() gives a unique timestamp.' },
    ],
    steps: [
      'Design your data model: each task = { id: Date.now(), text: "", completed: false, createdAt: new Date() }',
      'Create a tasks array and a renderTasks() function that clears and rebuilds the task list.',
      'Add an input + "Add Task" button. On click: push a new task object, call renderTasks().',
      'Each task shows: a checkbox, task text, and a delete (🗑️) button.',
      'Checkbox click: find task by id, toggle task.completed, re-render. Add strikethrough CSS for completed.',
      'Delete click: tasks = tasks.filter(t => t.id !== id) — then re-render.',
      'After every change: localStorage.setItem("tasks", JSON.stringify(tasks));',
      'On page load: tasks = JSON.parse(localStorage.getItem("tasks")) || []; then call renderTasks().',
    ],
    practiceTask: 'Build the complete core To-Do app: add tasks, mark complete (strikethrough), delete tasks, and localStorage persistence. Also show a task count: "X tasks remaining". Refresh the page and confirm tasks are still there!',
    resources: [
      { label: 'localStorage — MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage' },
      { label: 'JSON — javascript.info', url: 'https://javascript.info/json' },
      { label: 'To-Do App Tutorial — The Odin Project', url: 'https://www.theodinproject.com/lessons/node-path-javascript-todo-list' },
    ],
    submitWhat: [
      '🔗 Live link to your To-Do app (CodePen or GitHub Pages)',
      '📸 Screenshot showing tasks added + at least one marked as COMPLETE (strikethrough)',
      '📝 In Notes: write your renderTasks() function — show us how you rebuild the list from the array',
    ],
    submitNote: 'Share your To-Do app. The instructor will: add tasks, mark some complete, then REFRESH the page — if tasks persist via localStorage, you pass! 🎯',
  },
  {
    day: 12,
    title: 'To-Do App — Part 2',
    desc: 'Add filters, priority levels, animations, and polish — ship a complete product.',
    emoji: '💅',
    duration: '3–4 hrs',
    difficulty: 'Intermediate',
    careerRoles: ['Frontend Developer', 'Product Developer', 'UI Engineer'],
    salaryInsight: 'Knowing how to take a project from "it works" to "it\'s beautiful and production-ready" is what separates ₹4 LPA developers from ₹12 LPA developers. Polish matters.',
    analogy: '🚗 Yesterday you built a car that drives. Today you add the dashboard, air conditioning, Bluetooth, and paint job. Both versions get you from A to B — but only one makes people say "wow". The difference is always in the DETAILS.',
    whatYouLearn: [
      'CSS design system: variables, consistent spacing, color palette',
      'Implementing filter tabs: All / Active / Completed',
      'Adding priority levels with color-coded badges',
      'Smooth CSS transitions for adding/removing tasks',
      'Due dates, overdue indicators, and "Clear Completed" feature',
    ],
    concepts: [
      { term: 'Design System', def: 'A set of rules (colors, fonts, spacing) applied consistently. --primary: #6366f1; --success: #10b981; --danger: #ef4444;' },
      { term: 'Filter/View', def: 'Show a subset of data based on a condition. All tasks vs only active (not completed) vs only completed.' },
      { term: 'CSS Transition', def: 'Animates property changes smoothly. transition: opacity 0.3s ease; makes elements fade in/out instead of snapping.' },
      { term: '"Clear Completed"', def: 'tasks = tasks.filter(t => !t.completed) — removes all completed tasks in one action.' },
    ],
    steps: [
      'Add CSS variables: --primary, --success, --danger, --bg, --surface, --text.',
      'Add filter tabs (All / Active / Completed) — store active filter in a variable, re-render on tab click.',
      'Add a priority selector (Low / Medium / High) when adding a task. Show a colored dot next to each task.',
      'Add CSS transition: new tasks fade in (opacity: 0 → 1), deleted tasks fade out before removal.',
      '"Clear Completed" button: tasks = tasks.filter(t => !t.completed); re-render + save to localStorage.',
      'Add due date input (type="date") — highlight overdue tasks in red.',
      'Make the whole app look polished and work on mobile.',
    ],
    practiceTask: 'Your FINAL To-Do app must include: styled design with CSS variables, 3 filter tabs, priority levels with color coding, smooth add/delete animations, due date field with overdue indicators, and "Clear Completed". Deploy it and share the live link.',
    resources: [
      { label: 'CSS Custom Properties — MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties' },
      { label: 'Sortable.js — Drag & Drop (Bonus)', url: 'https://sortablejs.github.io/Sortable/' },
      { label: 'CSS Transitions — MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions' },
    ],
    submitWhat: [
      '🔗 Final live URL + GitHub repository link (BOTH required)',
      '📸 Screenshot showing: filter tabs + a priority badge + at least one completed task',
      '📝 In Notes: describe one thing you improved from Part 1 and one feature you\'re proud of',
    ],
    submitNote: 'This is your SECOND major project. The instructor will test all 3 filter tabs, clear completed, priority badges, and mobile responsiveness.',
  },
  {
    day: 13,
    title: 'Python & AI Intro',
    desc: 'Learn Python basics and understand what Machine Learning actually is.',
    emoji: '🐍',
    duration: '3–4 hrs',
    difficulty: 'Intermediate',
    careerRoles: ['Python Developer', 'Data Scientist', 'ML Engineer', 'AI Developer'],
    salaryInsight: 'Python + AI is the most future-proof skill combination right now. AI/ML engineers in India earn ₹8–25 LPA. Data Scientists at Google and Amazon earn even more.',
    analogy: '🌐 You\'ve been speaking "website language" (HTML, CSS, JS). Python is a completely different language — but don\'t worry! The CONCEPTS are the same: variables, conditions, loops, functions. It\'s like switching from Telugu to Hindi — different words, same ideas.',
    whatYouLearn: [
      'Python syntax: variables, strings, numbers, print(), input()',
      'Control flow: if/elif/else, for loops, while loops',
      'Functions: def, parameters, return, default values',
      'Lists and dictionaries — Python\'s core data structures',
      'What Machine Learning is: supervised vs unsupervised vs reinforcement learning',
    ],
    concepts: [
      { term: 'Python', def: 'A readable, beginner-friendly language that dominates data science and AI. print("Hello World") — no semicolons, no curly braces!' },
      { term: 'Indentation', def: 'Python uses whitespace (4 spaces or 1 Tab) to define code blocks — no curly braces { }. Indentation IS the code structure.' },
      { term: 'List', def: 'Like a JS array: fruits = ["apple", "mango", "banana"]. Access with fruits[0] → "apple".' },
      { term: 'Dictionary', def: 'Like a JS object: person = {"name": "Ravi", "age": 22}. Access with person["name"] → "Ravi".' },
      { term: 'ML', def: 'Machine Learning — algorithms that learn patterns from data without being explicitly programmed. Netflix recommendations = ML.' },
    ],
    steps: [
      'Go to colab.research.google.com — sign in with Google and click "New Notebook". Free, no install!',
      'In Cell 1: print("Hello, Campus to Corporate! 🚀") — press Shift+Enter to run.',
      'Create variables: name = "YourName"; age = 20 — print with f-strings: print(f"My name is {name}, I am {age} years old.")',
      'Write a function celsius_to_fahrenheit(c): return (c * 9/5) + 32 — test it.',
      'Create a list of 5 cities — loop with for city in cities: print(f"I want to visit {city}")',
      'Create a dictionary for yourself with keys: name, age, city, hobby. Print each value.',
      'In a Text cell (+ Text): write a paragraph explaining what ML is in your own words.',
    ],
    practiceTask: 'In Google Colab: build a "Personal Info Analyzer" — ask for name, age, and favorite number using input(). Then: tell them if age is teen(13–19)/adult(20–59)/senior(60+), if favorite number is even or odd, and print a full summary. Share the Colab notebook link.',
    resources: [
      { label: 'Google Colab — Free Python Notebook', url: 'https://colab.research.google.com/' },
      { label: 'Python Official Tutorial', url: 'https://docs.python.org/3/tutorial/index.html' },
      { label: 'Python for Beginners — freeCodeCamp', url: 'https://www.freecodecamp.org/news/the-python-guide-for-beginners/' },
      { label: 'What is ML? — Google ML Crash Course', url: 'https://developers.google.com/machine-learning/crash-course/ml-intro' },
    ],
    submitWhat: [
      '🔗 Google Colab notebook link — go to Share → Change to "Anyone with the link" → Copy link',
      '📸 Screenshot of your code output running successfully in Colab',
      '📝 In Notes: paste your ML explanation paragraph (from your Text cell)',
    ],
    submitNote: 'Share your Google Colab notebook link with "Anyone with the link can view" sharing enabled. The instructor will run your code cells to verify they work.',
  },
  {
    day: 14,
    title: 'Pandas & NumPy',
    desc: 'Analyze real datasets like a Data Scientist using Python\'s most powerful libraries.',
    emoji: '📊',
    duration: '3–4 hrs',
    difficulty: 'Intermediate–Advanced',
    careerRoles: ['Data Scientist', 'Data Analyst', 'ML Engineer', 'Business Analyst'],
    salaryInsight: 'Data Analysts with Pandas/NumPy skills earn ₹5–12 LPA. Data Scientists earn ₹10–30 LPA. These skills are needed in EVERY industry — healthcare, finance, e-commerce, government.',
    analogy: '⚡ NumPy is a calculator on STEROIDS — it does math on thousands of numbers simultaneously. Pandas is Excel with a programming superpower — filter, sort, and analyze millions of rows in seconds. Imagine 100,000 customer orders: Excel takes an hour, Pandas takes 5 lines of code in 5 seconds.',
    whatYouLearn: [
      'NumPy: arrays, array operations, math functions (mean, std, max, min)',
      'Pandas: Series, DataFrame, reading CSV files, basic statistics',
      'Data cleaning: handling missing values (dropna, fillna)',
      'Data exploration: describe(), info(), value_counts(), head()',
      'Basic data visualization with Matplotlib (bar chart, histogram)',
    ],
    concepts: [
      { term: 'NumPy Array', def: 'A fast, memory-efficient grid of numbers. import numpy as np; arr = np.array([1,2,3,4,5])' },
      { term: 'DataFrame', def: 'A Pandas table with labeled rows and columns — like an Excel sheet in Python. df = pd.read_csv("file.csv")' },
      { term: 'NaN', def: 'Not a Number — represents missing data. df.isnull().sum() counts NaN per column. df.dropna() removes rows with NaN.' },
      { term: 'groupby()', def: 'Groups data by a column value. df.groupby("Gender")["Salary"].mean() → average salary by gender.' },
    ],
    steps: [
      'Open new Google Colab notebook. Run: import numpy as np; import pandas as pd; import matplotlib.pyplot as plt',
      'NumPy: arr = np.array([10,20,30,40,50]) — print arr.mean(), arr.std(), arr.max(), arr.min()',
      'Pandas: create a DataFrame for 5 students: df = pd.DataFrame({"Name": [...], "Score": [...]})',
      'df.describe() → see statistics. df.sort_values("Score", ascending=False) → sort by score.',
      'Load Titanic dataset: df = pd.read_csv("https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv")',
      'Explore: df.head(), df.info(), df.isnull().sum() — check which columns have missing data.',
      'Analysis: df.groupby("Sex")["Survived"].mean() — survival rate by gender. Print and interpret.',
      'Plot: df["Age"].hist(bins=20, color="#6366f1") → plt.title("Age Distribution") → plt.show()',
    ],
    practiceTask: 'Load the Titanic dataset. Do a FULL exploration: check shape, dtypes, missing values; calculate survival rate by gender using groupby(); create 2 charts (bar chart for survival by gender + histogram for age). Write 3 insights from your analysis.',
    resources: [
      { label: 'NumPy Quickstart — Official', url: 'https://numpy.org/doc/stable/user/quickstart.html' },
      { label: 'Pandas Getting Started — Official', url: 'https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html' },
      { label: 'Kaggle Datasets — Free Data', url: 'https://www.kaggle.com/datasets' },
      { label: 'Matplotlib Tutorials', url: 'https://matplotlib.org/stable/tutorials/index.html' },
    ],
    submitWhat: [
      '🔗 Google Colab notebook link (Anyone with link can view)',
      '📸 Screenshot of your 2 charts (bar chart + histogram) visible in Colab',
      '📝 In Notes: paste your 3 data insights (e.g., "74% of female passengers survived vs 19% of males")',
    ],
    submitNote: 'Share your Colab notebook. The instructor will verify: groupby() analysis, handling of missing data, and at least 2 charts with proper titles.',
  },
  {
    day: 15,
    title: 'Your First AI Model',
    desc: 'Build a complete Machine Learning pipeline — train, test, evaluate, and predict with Linear Regression.',
    emoji: '🤖',
    duration: '4–5 hrs',
    difficulty: 'Advanced',
    careerRoles: ['ML Engineer', 'AI Developer', 'Data Scientist', 'Research Engineer'],
    salaryInsight: 'You now have Web Development AND Machine Learning skills. This combination is EXTREMELY rare and valuable. AI Engineers are among the highest paid in tech worldwide. This is your launchpad!',
    analogy: '📈 Linear Regression finds the BEST FIT LINE through your data points. Plot study hours vs exam scores. Draw a line through the middle. That line IS your model — use it to predict scores for new students! Training = teaching the model. Testing = giving it a quiz it\'s never seen.',
    whatYouLearn: [
      'What Linear Regression is and how it finds patterns in data',
      'Splitting data: 80% training, 20% testing (train_test_split)',
      'Training a model with scikit-learn (model.fit())',
      'Making predictions on new data (model.predict())',
      'Evaluating: MAE (Mean Absolute Error) and R² Score',
      'Visualizing: scatter plot + regression line with Matplotlib',
    ],
    concepts: [
      { term: 'Linear Regression', def: 'A model that predicts a number by finding the best straight line through data points. predict exam score from study hours.' },
      { term: 'Training Data', def: 'Data the model LEARNS from — typically 80% of your dataset. model.fit(X_train, y_train)' },
      { term: 'Test Data', def: 'Unseen data used to evaluate the model — typically 20%. model.predict(X_test)' },
      { term: 'R² Score', def: 'Ranges 0–1. Closer to 1 = model explains the data well. 0.85+ is considered good for a first model.' },
      { term: 'MAE', def: 'Mean Absolute Error — average prediction error in the same units as your target (e.g., exam score points off).' },
    ],
    steps: [
      'Open Google Colab. Import: numpy, pandas, matplotlib, and from sklearn.linear_model import LinearRegression, from sklearn.model_selection import train_test_split, from sklearn.metrics import mean_absolute_error, r2_score',
      'Create dataset: X = hours studied, y = exam scores. Use 15–20 rows of realistic data.',
      'Split: X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)',
      'Train: model = LinearRegression(); model.fit(X_train, y_train)',
      'Predict: y_pred = model.predict(X_test)',
      'Evaluate: print("MAE:", mean_absolute_error(y_test, y_pred)); print("R²:", r2_score(y_test, y_pred))',
      'Plot: scatter(X, y) for actual data + plot(X, model.predict(X)) for the regression line.',
      'Predict new: print(model.predict([[7]])) — what score for 7 hours of study? And try [[3]] and [[10]].',
    ],
    practiceTask: '🎓 FINAL PROJECT: Build a complete ML pipeline in Colab — load/create a dataset (study hours → exam score), clean it, split it, train a Linear Regression model, evaluate with MAE + R², visualize the regression line, make 3 new predictions, and write a CONCLUSION: "What did the model learn? Is it accurate?" This is your FIRST AI model — share it with pride!',
    resources: [
      { label: 'scikit-learn — Linear Regression Docs', url: 'https://scikit-learn.org/stable/modules/linear_model.html' },
      { label: 'ML Crash Course — Google', url: 'https://developers.google.com/machine-learning/crash-course' },
      { label: 'Kaggle Learn — Intro to Machine Learning', url: 'https://www.kaggle.com/learn/intro-to-machine-learning' },
    ],
    submitWhat: [
      '🔗 Google Colab notebook link (Anyone with link can view) — REQUIRED',
      '📸 Screenshot showing your regression line plot AND your R² + MAE scores printed',
      '📝 In Notes: paste your 3 predictions (for 3, 7, and 10 hours) AND your conclusion paragraph',
    ],
    submitNote: '🎓 CONGRATULATIONS on reaching Day 15! The instructor will verify: model is trained, R² score is printed, regression line is plotted, and 3 predictions are made. You\'ve just built your FIRST AI model! 🤖',
  },
  {
    day: 16,
    isProject: true,
    title: 'Capstone: Task Dashboard',
    desc: 'FINAL WEB PROJECT: Build a real-time command center for productivity.',
    emoji: '🚀',
    duration: '5–6 hrs',
    difficulty: 'Capstone',
    careerRoles: ['Frontend Engineer', 'Full Stack Developer'],
    salaryInsight: 'A production-ready dashboard is the ultimate portfolio piece.',
    analogy: 'This is where you combine everything you learned about HTML, CSS, and JS into one professional application.',
    whatYouLearn: [
      'Advanced DOM state management',
      'Real-time data visualization with charts',
      'Complex UI layouts with CSS Grid',
      'Local storage persistence for data'
    ],
    concepts: [
      { term: 'State Management', def: 'Managing application data as it changes over time across multiple components.' },
      { term: 'Data Visualization', def: 'Representing raw data numbers as visual charts or progress bars for humans.' }
    ],
    steps: [
      'Create a dashboard that tracks your 15-day course progress manually.',
      'Show a large progress ring or bar using SVG or CSS.',
      'List all 15 days with status bubbles (Done/Pending).',
      'Add a "Daily Habit" tracker section where users can check off habits.',
      'Persist all data to localStorage so it stays there on refresh.',
      'Deploy the dashboard to GitHub Pages and make it look premium.'
    ],
    practiceTask: 'Build the "Masterclass Progress Command Center". It must show your name, a live progress % tracker, and a list of all course tasks with completion toggles.',
    resources: [
      { label: 'Chart.js — Simple Charting library', url: 'https://www.chartjs.org/' },
      { label: 'Responsive Dashboard UI Inspiration', url: 'https://dribbble.com/search/dashboard' }
    ],
    submitWhat: [
      '🔗 Live URL of your deployed Dashboard (GitHub Pages/Vercel)',
      '🐙 GitHub Repository Link',
      '📸 Screenshot of the dashboard in Dark Mode'
    ],
    submitNote: 'This is Project 1 of 2. You must complete this to become eligible for certification.'
  },
  {
    day: 17,
    isProject: true,
    title: 'Capstone: Price Predictor',
    desc: 'FINAL AI PROJECT: Deploy an intelligent sales or housing price prediction engine.',
    emoji: '📈',
    duration: '5–6 hrs',
    difficulty: 'Capstone',
    careerRoles: ['Data Scientist', 'AI Engineer'],
    salaryInsight: 'Predictive analytics is used by Zillow, Amazon, and stock traders every second.',
    analogy: 'Imagine becoming the brain of a company, telling them how much they will earn before the day starts.',
    whatYouLearn: [
      'Real-world dataset preprocessing',
      'Feature engineering and selection',
      'Model validation and hyperparameter tuning',
      'Exporting insights for business decisions'
    ],
    concepts: [
      { term: 'Feature Engineering', def: 'Selecting and modifying data columns to help the AI learn better.' },
      { term: 'Model Deployment', def: 'Moving a model from a research notebook to a place where it can make real predictions.' }
    ],
    steps: [
      'Select a dataset: either Housing Prices or Stock Trends.',
      'Clean the data using Pandas (handle missing values, normalize scales).',
      'Train a Multi-variable Linear Regression model using Scikit-Learn.',
      'Evaluate your model accuracy — aim for an R² score above 0.85.',
      'Create 3 "What-if" scenarios: Predict for high, medium, and low inputs.',
      'Write a 200-word summary of your findings and the model\'s business value.'
    ],
    practiceTask: 'Complete the "Intelligent Price Prediction Engine". Your Colab must include full data cleaning, model training, accuracy evaluation, and a data-driven conclusion.',
    resources: [
      { label: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/' },
      { label: 'Common AI Datasets on Kaggle', url: 'https://www.kaggle.com/datasets' }
    ],
    submitWhat: [
      '🔗 FINAL Google Colab Link (Anyone with access can view)',
      '📊 3 different Chart exports showing the model results',
      '📝 Full prediction report in the Notes field'
    ],
    submitNote: 'This is Project 2 of 2. After this submission is reviewed, your Certification will be UNLOCKED! 🎓'
  }
];

// ─────────────────────────────────────────────
// State
// ─────────────────────────────────────────────
let currentSelectedDay = null;
var studentData = null;
let selectedFile = null;

const daysContainer = document.getElementById('days-container');
const modal = document.getElementById('task-modal');
const closeBtn = document.querySelector('.close-btn');
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
    studentData = { progress: curriculum.map(c => ({ day: c.day, completed: false, submitted: false })) };
    renderDays();
  }
}

// ─────────────────────────────────────────────
// Render Day Cards
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

    let statusText = 'Not Started';
    let statusClass = 'status-pending';
    if (completed) { statusText = 'Completed ✓'; statusClass = 'status-completed'; }
    else if (submitted) { statusText = '⏳ Under Review'; statusClass = 'status-review'; }

    const card = document.createElement('div');
    card.className = `day-card ${item.isProject ? 'project-card-highlight' : ''}`;
    if (completed) card.classList.add('card-completed');
    else if (submitted) card.classList.add('card-submitted');

    card.innerHTML = `
      <div class="day-header">
        <span class="day-pill">${item.isProject ? 'PROJECT' : 'Day ' + item.day}</span>
        <span class="status-badge ${statusClass}">${statusText}</span>
      </div>
      <div class="card-emoji">${item.emoji}</div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <div class="card-meta">
        <span class="meta-chip">⏱ ${item.duration}</span>
        <span class="meta-chip">📈 ${item.difficulty}</span>
      </div>
      ${completed ? '<div class="card-done-bar"></div>' : ''}
    `;
    card.addEventListener('click', () => openModal(index));
    daysContainer.appendChild(card);
  });

  updateProgress(completedCount);
}

function updateProgress(completedCount) {
  const pct = Math.round((completedCount / curriculum.length) * 100);
  if (progressFill) progressFill.style.width = `${pct}%`;
  if (progressText) progressText.innerText = `${pct}%`;

  // Certification Unlocking Logic
  if (completedCount === curriculum.length) {
    document.dispatchEvent(new CustomEvent('milestoneReached', { detail: { type: 'certification', unlocked: true } }));
  }

  document.dispatchEvent(new Event('progressUpdated'));
}

// ─────────────────────────────────────────────
// Build Rich Modal Content
// ─────────────────────────────────────────────
function buildModalBody(item, completed, submitted) {
  const statusHtml = completed
    ? `<div class="modal-status-bar status-bar-completed">✅ You completed this day! Great work — the instructor has reviewed your submission.</div>`
    : submitted
      ? `<div class="modal-status-bar status-bar-review">⏳ Your submission is under review. You can resubmit if needed below.</div>`
      : '';

  const learnHtml = item.whatYouLearn.map(l =>
    `<li class="learn-item"><span class="learn-arrow">▸</span><span>${l}</span></li>`
  ).join('');

  const conceptsHtml = item.concepts.map(c =>
    `<div class="concept-card">
      <span class="concept-term">${c.term}</span>
      <p class="concept-def">${c.def}</p>
    </div>`
  ).join('');

  const stepsHtml = item.steps.map((s, i) =>
    `<div class="step-item">
      <div class="step-num">${i + 1}</div>
      <p class="step-text">${s}</p>
    </div>`
  ).join('');

  const resourcesHtml = item.resources.map(r =>
    `<a href="${r.url}" target="_blank" rel="noopener" class="resource-link">
      <span class="resource-icon">🔗</span>
      <span class="resource-label">${r.label}</span>
      <span class="resource-arrow">↗</span>
    </a>`
  ).join('');

  const rolesHtml = item.careerRoles.map(r => `<span class="role-badge">${r}</span>`).join('');

  // What to submit section (clear checklist)
  const submitChecklistHtml = (item.submitWhat || []).map(s =>
    `<div class="submit-check-item">
      <span class="check-icon">☐</span>
      <span>${s}</span>
    </div>`
  ).join('');

  return `
    <div class="modal-inner">
      <!-- Modal Header -->
      <div class="modal-hero-header">
        <div class="modal-emoji-big">${item.emoji}</div>
        <div class="modal-hero-text">
          <div class="modal-day-label">Day ${item.day} · ${item.difficulty}</div>
          <h2 class="modal-title">${item.title}</h2>
          <p class="modal-subtitle">${item.desc}</p>
        </div>
        <div class="modal-meta-chips">
          <span class="meta-chip-lg">⏱ ${item.duration}</span>
        </div>
      </div>

      ${statusHtml}

      <!-- Analogy Box -->
      ${item.analogy ? `<div class="analogy-box"><span class="analogy-icon">💡</span><p>${item.analogy}</p></div>` : ''}

      <!-- Tabs -->
      <div class="modal-tabs" id="modal-tabs">
        ${['📚 Learn', '🪜 Steps', '💡 Concepts', '🔗 Resources', '🧠 Quiz', '💼 Career', '📤 Submit'].map((t, i) =>
    `<button class="modal-tab ${i === 0 ? 'active' : ''}" onclick="switchTaskTab(${i})" id="mtab-${i}">${t}</button>`
  ).join('')}
      </div>

      <!-- Tab 0: Learn -->
      <div id="tc-0" class="tab-content">
        <div class="learn-section">
          <h4 class="section-label green">🎯 What You'll Learn Today</h4>
          <ul class="learn-list">${learnHtml}</ul>
        </div>
        <div class="task-highlight-box">
          <h4 class="section-label indigo">🏆 Today's Practice Task</h4>
          <p>${item.practiceTask}</p>
        </div>
      </div>

      <!-- Tab 1: Steps -->
      <div id="tc-1" class="tab-content" style="display:none">
        <h4 class="section-label indigo" style="margin-bottom:20px">📋 Step-by-Step Instructions</h4>
        <div class="steps-list">${stepsHtml}</div>
      </div>

      <!-- Tab 2: Concepts -->
      <div id="tc-2" class="tab-content" style="display:none">
        <h4 class="section-label indigo" style="margin-bottom:16px">💡 Key Terms & Concepts</h4>
        <div class="concepts-grid">${conceptsHtml}</div>
      </div>

      <!-- Tab 3: Resources -->
      <div id="tc-3" class="tab-content" style="display:none">
        <h4 class="section-label indigo" style="margin-bottom:16px">📚 Recommended Resources</h4>
        <div class="resources-list">${resourcesHtml}</div>
      </div>

      <div id="tc-4" class="tab-content" style="display:none">
        <h4 class="section-label indigo" style="margin-bottom:16px">🧠 Knowledge Check (Daily Quiz)</h4>
        <div id="quiz-container-inner">
           ${renderQuizHTML(item)}
        </div>
      </div>

      <!-- Tab 5: Career -->
      <div id="tc-5" class="tab-content" style="display:none">
        <h4 class="section-label indigo" style="margin-bottom:16px">💼 Career Relevance</h4>
        <div class="career-box">
          <div class="career-roles-section">
            <p class="career-roles-label">Roles that use this skill:</p>
            <div class="roles-wrap">${rolesHtml}</div>
          </div>
          <div class="salary-insight-box">
            <span class="salary-icon">💰</span>
            <p>${item.salaryInsight}</p>
          </div>
        </div>
      </div>

      <!-- Tab 6: Submit -->
      <div id="tc-6" class="tab-content" style="display:none">
        <!-- WHAT TO SUBMIT — Checklist -->
        <div class="submit-checklist-section">
          <h4 class="section-label amber">📋 What You Need to Submit</h4>
          <p class="submit-tip-text">Complete ALL items below before submitting. The instructor checks each one.</p>
          <div class="submit-checklist">${submitChecklistHtml}</div>
        </div>

        <div class="submit-note-box">
          <span>📌</span>
          <p>${item.submitNote}</p>
        </div>

        <div class="submission-form-wrap">
          <h3 class="form-section-title">Submit Your Work</h3>

          <div class="form-group">
            <label>🔗 Task / Live Demo Link <span class="field-hint">(CodePen, Vercel, GitHub Pages, Google Colab...)</span></label>
            <input type="url" id="task-link" placeholder="https://codepen.io/your-pen or https://colab.research.google.com/...">
          </div>

          <div class="form-group">
            <label>🐙 GitHub Repository Link <span class="field-hint">(optional for Python days)</span></label>
            <input type="url" id="github-link" placeholder="https://github.com/your-username/your-project">
          </div>

          <div class="form-group">
            <label>📎 Upload Screenshot / PDF <span class="field-hint">(max 10 MB — JPG, PNG, PDF)</span></label>
            <div class="upload-zone" id="upload-zone">
              <input type="file" id="file-input" accept="image/jpeg,image/png,image/gif,image/webp,application/pdf">
              <div class="upload-zone-content">
                <div class="upload-icon-big">☁️</div>
                <p><strong>Click to browse</strong> or drag & drop here</p>
                <p class="upload-sub">JPG · PNG · GIF · WEBP · PDF — up to 10 MB</p>
              </div>
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
            <label>📝 Notes / What did you build? Any questions? <span class="field-hint">(be specific — paste code snippets if needed)</span></label>
            <textarea id="task-notes" rows="4" placeholder="E.g., 'I built a to-do app with localStorage. My renderTasks() function is: ...'&#10;Questions? Write them here too!"></textarea>
          </div>

          <button class="submit-main-btn" id="submit-task-btn">
            <span>Submit for Review 🚀</span>
          </button>
          <div id="submission-status" style="margin-top:16px;"></div>
        </div>
      </div>
    </div>
  `;
}

// ─────────────────────────────────────────────
// Tab Switching
// ─────────────────────────────────────────────
function switchTaskTab(idx) {
  for (let i = 0; i < 7; i++) {
    const content = document.getElementById(`tc-${i}`);
    const btn = document.getElementById(`mtab-${i}`);
    if (content) content.style.display = i === idx ? 'block' : 'none';
    if (btn) btn.classList.toggle('active', i === idx);
  }
  if (idx === 6) attachSubmitListener();
}

/** 
 * 🧠 THE MASTERCLASS QUIZ DATABASE (170 Unique Questions)
 */
const QUIZZES_DATA = {
  1: [
    { q: "HTML is the ________ of your website.", a: ["Skin", "Brain", "Skeleton", "Outfit"], c: 2 },
    { q: "What does &lt;h1&gt; stand for in developer speak?", a: ["Heading 1 (The Boss)", "Happy 1st Day", "Huge 1", "Hint 1"], c: 0 },
    { q: "If your &lt;img&gt; tag has no 'src', what does it show?", a: ["A kitten", "Nothing (Silence)", "A broken heart icon", "The site's logo"], c: 1 },
    { q: "Why was the &lt;a&gt; tag always helpful?", a: ["It's always linking people together", "It's small", "It likes blue text", "It's an anchor"], c: 0 },
    { q: "What happens if you forget to close a &lt;p&gt; tag?", a: ["The browser cries", "Your PC explodes", "The browser usually fixes your mess", "Text becomes invisible"], c: 2 },
    { q: "Which tag is used for a list with bullet points?", a: ["&lt;ol&gt;", "&lt;ul&gt;", "&lt;li&gt;", "&lt;bullet&gt;"], c: 1 },
    { q: "The &lt;title&gt; tag shows up where?", a: ["The center of the page", "The browser tab", "The footer", "In my dreams"], c: 1 },
    { q: "Is HTML a programming language?", a: ["Yes, my bank said so", "No, it's a markup language", "Only on Sundays", "It's a secret"], c: 1 },
    { q: "What does 'DOCTYPE' do?", a: ["Calls a doctor", "Tells the browser 'Hey, I'm HTML5!'", "Deletes old code", "Nothing"], c: 1 },
    { q: "Which tag is used to wrap EVERYTHING on the page?", a: ["&lt;body&gt;", "&lt;head&gt;", "&lt;html&gt;", "&lt;all&gt;"], c: 2 }
  ],
  2: [
    { q: "What is 'Semantic HTML'?", a: ["Using tags with meaning", "Fancy words for code", "A new search engine", "CSS for geniuses"], c: 0 },
    { q: "The &lt;nav&gt; tag is best for:", a: ["A map", "The menu bar", "Navigation to Mars", "Footers"], c: 1 },
    { q: "Which input type is best for passwords?", a: ["text", "secret", "password", "hidden"], c: 2 },
    { q: "If you want a multi-line text input, use:", a: ["&lt;input type='big'&gt;", "&lt;textarea&gt;", "&lt;text&gt;", "&lt;box&gt;"], c: 1 },
    { q: "Table &lt;tr&gt; stands for:", a: ["Table Run", "Table Row", "Text Right", "Total Rows"], c: 1 },
    { q: "Standard HTML5 placeholder attribute does what?", a: ["Saves your spot", "Shows hint text", "Locks the input", "Animates the box"], c: 1 },
    { q: "What does 'required' inside an input do?", a: ["Makes it mandatory", "Changes color", "Asks for money", "None of above"], c: 0 },
    { q: "Which tag is best for a sidebar?", a: ["&lt;section&gt;", "&lt;article&gt;", "&lt;aside&gt;", "&lt;side&gt;"], c: 2 },
    { q: "A 'radio' button allows how many selections from a group?", a: ["Zero", "Exactly One", "All of them", "Only two"], c: 1 },
    { q: "The &lt;form&gt; tag's 'action' specifies:", a: ["Where to send data", "The speed of the site", "The button style", "Site credits"], c: 0 }
  ],
  3: [
    { q: "CSS is the ________ of your website.", a: ["Skeleton", "Outfit / Style", "Soul", "Address"], c: 1 },
    { q: "How do you select a class in CSS?", a: ["#myClass", ".myClass", "@myClass", "$myClass"], c: 1 },
    { q: "Selector '#hero' targets what?", a: ["A class named hero", "All h1 tags", "An ID named hero", "Every Batman fan"], c: 2 },
    { q: "Which property changes font color?", a: ["text-style", "font-color", "color", "paint"], c: 2 },
    { q: "What is 'Padding'?", a: ["Space outside the border", "A soft pillow", "Space inside the border", "The border thickness"], c: 2 },
    { q: "Property 'display: none' does what?", a: ["Hides the element", "Makes it small", "Turns it black", "Changes font"], c: 0 },
    { q: "How to make text BOLD?", a: ["font-weight: bold", "text-bold: true", "heavy: yes", "style: bold"], c: 0 },
    { q: "Which color code is 'Pure Black'?", a: ["#FFFFFF", "#000000", "#FF0000", "#123456"], c: 1 },
    { q: "Hovering over an element is styled using:", a: [":mouseon", ":active", ":hover", "@hover"], c: 2 },
    { q: "What does 'Cascading' mean in CSS?", a: ["Waterfalls", "Rules flow top to bottom", "It breaks easily", "Alphabetical order"], c: 1 }
  ],
  4: [
    { q: "What is the 'Holy Grail' of CSS layouts?", a: ["Floats", "Flexbox", "Tables", "Absolute positioning"], c: 1 },
    { q: "Property 'flex-direction: column' stacks items:", a: ["Side-by-side", "Vertically (one above other)", "In a circle", "It doesn't"], c: 1 },
    { q: "To center items horizontally in Flexbox, use:", a: ["align-items", "justify-content", "center-all", "margin: auto"], c: 1 },
    { q: "CSS Grid is primarily for:", a: ["Single rows", "2D Layouts (Rows & Columns)", "Text only", "Images"], c: 1 },
    { q: "What does 'gap: 20px' do in a layout?", a: ["Wait 20s", "Space between items", "Extra margin", "Font size"], c: 1 },
    { q: "Media Queries are used for:", a: ["Playing videos", "Responsive design", "Querying Databases", "Chatting"], c: 1 },
    { q: "Mobile-First means you write CSS for ________ first.", a: ["iPhone 15 Pro", "Large Desktops", "Small screens", "Tablets"], c: 2 },
    { q: "Property 'position: fixed' stays put even when:", a: ["You scroll", "You click", "The site crashes", "Internet is slow"], c: 0 },
    { q: "What is 'z-index'?", a: ["The speed of Z", "The layering (stacking) order", "Zoom level", "Font style"], c: 1 },
    { q: "How to make a Flex container?", a: ["display: flex", "mode: flex", "flex-it: true", "layout: flex"], c: 0 }
  ],
  5: [
    { q: "JavaScript is the ________ of your website.", a: ["Skeleton", "Clothes", "Brain / Muscles", "Postman"], c: 2 },
    { q: "Variable 'const' means the value:", a: ["Changes often", "Stays constant (mostly)", "Is local only", "Is a number"], c: 1 },
    { q: "How to write to the browser console?", a: ["print()", "echo()", "console.log()", "alert()"], c: 2 },
    { q: "What does '10' + 5 result in in JavaScript?", a: ["15", "105", "NaN", "Error"], c: 1 },
    { q: "Funny: What's the only way to get a JS dev's attention?", a: ["Call them", "Trigger a syntax error", "Offer free pizza", "Use semicolons"], c: 1 },
    { q: "Which symbol is for 'strict equality'?", a: ["=", "==", "===", "!="], c: 2 },
    { q: "A 'function' is like a ________ in your kitchen?", a: ["Spoon", "Recipe", "Plate", "Fridge"], c: 1 },
    { q: "What does 'NaN' stand for?", a: ["Not a Number", "New and Nice", "Nearly a Number", "Nonsense"], c: 0 },
    { q: "How do you start a block of code?", a: ["[ ]", "( )", "{ }", "< >"], c: 2 },
    { q: "True or False: JavaScript and Java are the same.", a: ["True (Duh!)", "False (Car vs Carpet)", "Maybe?", "Only in China"], c: 1 }
  ],
  6: [
    { q: "What is the 'DOM'?", a: ["Digital Object Mode", "Document Object Model", "Deep Object Memory", "Daily Object Map"], c: 1 },
    { q: "How to select an element with ID 'btn'?", a: ["querySelector('.btn')", "getElementById('btn')", "selectID('btn')", "find('btn')"], c: 1 },
    { q: "To change text inside an element, use:", a: ["value", "innerText", "htmlContent", "paint()"], c: 1 },
    { q: "What does 'addEventListener' wait for?", a: ["A job offer", "User interaction (click, type, etc.)", "The site to load", "Christmas"], c: 1 },
    { q: "Real-time: User clicked. Which event fires first?", a: ["mouseup", "mousedown", "click", "dblclick"], c: 1 },
    { q: "How to hide an element via JS?", a: ["style.hide = true", "style.display = 'none'", "remove()", "visibility = 'off'"], c: 1 },
    { q: "To add a CSS class via JS, use:", a: ["addClass('myClass')", "classList.add('myClass')", "className = 'myClass'", "Both B & C"], c: 3 },
    { q: "The 'window' object represents:", a: ["The browser window", "A literal window", "My PC", "The project"], c: 0 },
    { q: "What happens if you run JS before HTML loads?", a: ["It waits", "It errors (cannot find element)", "It works anyway", "It crashes the OS"], c: 1 },
    { q: "Which tool helps you debug the DOM?", a: ["VS Code only", "Browser DevTools (F12)", "Postman", "Calculator"], c: 1 }
  ],
  7: [
    { q: "How to create an Array?", a: ["(1, 2, 3)", "{1, 2, 3}", "[1, 2, 3]", "<1, 2, 3>"], c: 2 },
    { q: "What is the index of the FIRST item in an array?", a: ["1", "0", "-1", "Depends"], c: 1 },
    { q: "A 'for' loop is best for:", a: ["Repeating a task", "Naming variables", "Calculating age", "Checking emails"], c: 0 },
    { q: "How to add an item to the END of an array?", a: ["array.add()", "array.push()", "array.append()", "array.late()"], c: 1 },
    { q: "What does 'array.length' tell you?", a: ["Weight of array", "Number of items", "Size of first item", "Nothing"], c: 1 },
    { q: "Funny: A developer walks into a bar and orders 'undefined' drinks...", a: ["The bartender gives zero", "The bartender gives an error", "The bar crashes", "He gets 1 drink"], c: 1 },
    { q: "Which loop runs at least ONCE?", a: ["for", "while", "do...while", "forEach"], c: 2 },
    { q: "How to remove the LAST item?", a: ["array.pop()", "array.delete()", "array.remove()", "array.sub()"], c: 0 },
    { q: "What is a 'Matrix' in programming?", a: ["A movie", "Array of Arrays", "A red pill", "A faster loop"], c: 1 },
    { q: "Why use 'forEach'?", a: ["It's faster", "Iterates through each element easily", "It's newer", "To make code pink"], c: 1 }
  ],
  8: [
    { q: "What is React?", a: ["A movie", "A JS Library for UI", "A new browser", "A replacement for HTML"], c: 1 },
    { q: "What is a 'Component'?", a: ["A piece of hardware", "A reusable UI unit", "A CSS file", "A script"], c: 1 },
    { q: "Funny: React devs spend 90% of time doing what?", a: ["Writing code", "Debugging State management", "Coffee breaks", "Sleeping"], c: 1 },
    { q: "What is 'NPM'?", a: ["Nice People Meet", "Node Package Manager", "Network Protocol Main", "None"], c: 1 },
    { q: "React uses which language extension?", a: ["RSS", "JSX", "XML", "JSON"], c: 1 },
    { q: "Vue.js claims to be:", a: ["Evolutionary", "Progressive", "The best ever", "Fastest"], c: 1 },
    { q: "Frameworks solve what main problem?", a: ["Typing speed", "Complex UI state synchronization", "Electricity bills", "Bad internet"], c: 1 },
    { q: "To start a React app, you usually run:", a: ["npm build", "npm start", "npx create-react-app", "go react"], c: 2 },
    { q: "What is 'Vite'?", a: ["A vitamin", "A fast build tool", "A CSS framework", "A social network"], c: 1 },
    { q: "Modern JS frameworks rely on:", a: ["Tables", "Virtual DOM / Signalled Reactive updates", "Flash", "Magic"], c: 1 }
  ],
  9: [
    { q: "Phase 1 of a project is:", a: ["Coding", "Planning / Wireframing", "Hosting", "Buying a domain"], c: 1 },
    { q: "A 'Wireframe' is like ________ for a house.", a: ["The paint", "The blueprint", "The furniture", "The key"], c: 1 },
    { q: "Funny: Why do wireframes always look like 1990s sites?", a: ["Because they're simple", "Because CSS is expensive", "They focus on structure, not beauty", "Nostalgia"], c: 2 },
    { q: "Portfolio should showcase:", a: ["Your dog", "Your best work", "Your first ever 1+1 code", "Everything you ever typed"], c: 1 },
    { q: "Project Day 9 focus is:", a: ["Hosting", "Landing Page Structure", "Machine Learning", "Deployment"], c: 1 },
    { q: "Which tool is best for design?", a: ["MS Paint", "Figma", "Excel", "Calculator"], c: 1 },
    { q: "What is 'White Space'?", a: ["Empty parts of UI", "A mistake", "Wasted pixels", "Paper"], c: 0 },
    { q: "Brand consistency means using the same:", a: ["Fonts/Colors", "PC", "Language", "Coffee"], c: 0 },
    { q: "The 'Hero Section' is:", a: ["A bio of Superman", "The top section of a website", "The contact form", "The footer"], c: 1 },
    { q: "Is 'Lorum Ipsum' a valid project description?", a: ["Yes, it's Greek", "No, it's placeholder text", "Maybe", "Only for designers"], c: 1 }
  ],
  10: [
    { q: "Hosting means:", a: ["Organizing a party", "Putting files on a live server", "Sharing your PC", "None"], c: 1 },
    { q: "GitHub Pages is good for:", a: ["Large databases", "Static Portfolios", "Android Apps", "Mining crypto"], c: 1 },
    { q: "To go live on GitHub, you must name your main file:", a: ["home.html", "index.html", "main.js", "start.php"], c: 1 },
    { q: "What is 'Favicon'?", a: ["My favorite icon", "The tiny icon in browser tab", "A niche JS library", "A coin"], c: 1 },
    { q: "Funny: 'It works on my local machine' is...", a: ["The dev's anthem", "A valid excuse for salary", "A myth", "A solution"], c: 0 },
    { q: "Vercel and Netlify are:", a: ["Social media", "Cloud hosting providers", "Browsers", "CSS frameworks"], c: 1 },
    { q: "What is 'Git'?", a: ["Version Control", "A nice person", "A hosted server", "A JS framework"], c: 0 },
    { q: "A 'Commit' is like ________ in a game.", a: ["Losing a life", "Saving your progress", "The final boss", "A high score"], c: 1 },
    { q: "Responsive Portfolio must look good on:", a: ["Projectors", "All device sizes", "Nokia 3310 only", "Samsung TVs"], c: 1 },
    { q: "What is the 'Footer' for?", a: ["Shoes", "Copyright/Contact Info", "Hidden code", "Ads"], c: 1 }
  ],
  11: [
    { q: "An Interactive App needs:", a: ["Static images", "Dynamic State (JS)", "Long articles", "A login only"], c: 1 },
    { q: "What is 'localStorage'?", a: ["A local shop", "Saving data in user's browser", "A hard drive", "Cloud storage"], c: 1 },
    { q: "To convert Object to String for storage, use:", a: ["toString()", "JSON.stringify()", "parse()", "saveIt()"], c: 1 },
    { q: "Interactive apps focus on:", a: ["Reading", "User Experience (UX)", "Typing speed", "Animation"], c: 1 },
    { q: "Funny: A 'Todo App' is the ________ of web dev projects.", a: ["Ferrari", "The 'Hello World' (First step)", "Final boss", "Useless tool"], c: 1 },
    { q: "Which event fires when user types?", a: ["click", "input", "touchstart", "scroll"], c: 1 },
    { q: "What is a 'State' in an app?", a: ["A country", "The current data/values on screen", "The CSS style", "None"], c: 1 },
    { q: "Real-time: Filter list as you type. Which tool?", a: [".filter()", ".sort()", ".map()", ".push()"], c: 0 },
    { q: "Why use 'preventRefresh' (preventDefault)?", a: ["To stop page reloading on form submit", "To freeze the site", "To stop ads", "None"], c: 0 },
    { q: "Interactive UI thrives on:", a: ["Silence", "Visual feedback (loaders, tooltips)", "Manuals", "Long forms"], c: 1 }
  ],
  12: [
    { q: "Final polishing involves:", a: ["Deleting code", "Bug hunting & Styling tweaks", "Adding 100 features", "Hosting only"], c: 1 },
    { q: "What is 'Edge Case Testing'?", a: ["Testing on the edge of a table", "Testing weird user inputs", "Testing only Chrome", "None"], c: 1 },
    { q: "Animation makes an app feel:", a: ["Slow", "Alive & Responsive", "Confusing", "Expensive"], c: 1 },
    { q: "Funny: 'Bug' is another word for:", a: ["Unplanned feature", "Virus", "Insect", "Developer pet"], c: 0 },
    { q: "A 'Toast Notification' is:", a: ["A healthy snack", "A small pop-up alert", "A hardware error", "None"], c: 1 },
    { q: "Which attribute prevents text selection?", a: ["user-select: none", "no-touch: true", "lock: text", "none"], c: 0 },
    { q: "SVG stands for:", a: ["Super Video Game", "Scalable Vector Graphics", "Simple Visual Grid", "None"], c: 1 },
    { q: "A 'Modal' is a:", a: ["Fashion model", "Pop-up window blocking interaction", "Database type", "CSS selector"], c: 1 },
    { q: "Icons better than text? Why?", a: ["They take less space", "Visual intuition", "Universal language", "All are correct"], c: 3 },
    { q: "Dark Mode is:", a: ["For hackers", "Healthy for eyes & popular", "A site error", "None"], c: 1 }
  ],
  13: [
    { q: "Python is known for being:", a: ["Screaming snake", "Easy to read & Write", "Fastest ever", "Hardest"], c: 1 },
    { q: "AI stands for:", a: ["Actual Intelligence", "Artificial Intelligence", "Amazing Idea", "None"], c: 1 },
    { q: "How to print in Python?", a: ["console.log()", "print()", "show()", "cout <<"], c: 1 },
    { q: "Funny: Python devs hate which symbol?", a: ["{ }", ";", "( )", "All of above"], c: 1 },
    { q: "Python variables don't need:", a: ["Names", "Value", "Declaration type (let/var)", "Space"], c: 2 },
    { q: "Python indentation is:", a: ["Optional", "Strictly Required", "Only for style", "Illegal"], c: 1 },
    { q: "What is a 'Library' in Python?", a: ["A place for books", "Reusable code modules", "A data type", "None"], c: 1 },
    { q: "AI 'Training' means:", a: ["Giving it a gym membership", "Feeding data into a model", "Writing code", "None"], c: 1 },
    { q: "Machine Learning is a subset of:", a: ["Web dev", "AI", "Math", "Blockchain"], c: 1 },
    { q: "Best language for Data Science?", a: ["C++", "Python", "JavaScript", "HTML"], c: 1 }
  ],
  14: [
    { q: "Pandas is best for:", a: ["Zoology", "Data manipulation (Tables)", "3D Games", "Web Servers"], c: 1 },
    { q: "NumPy focuses on:", a: ["Numbers & Arrays", "Naming people", "Networking", "Printing"], c: 0 },
    { q: "A Pandas 'DataFrame' is like:", a: ["A picture frame", "An Excel Table", "A PDF", "A list"], c: 1 },
    { q: "Funny: Pandas error 'Index 2 out of range' means:", a: ["You counted wrong", "The panda ran away", "The PC is hot", "None"], c: 0 },
    { q: "What code imports pandas?", a: ["get pandas", "import pandas as pd", "use pandas", "open pandas"], c: 1 },
    { q: "CSV stands for:", a: ["Color Super Vision", "Comma Separated Values", "Computer System Video", "None"], c: 1 },
    { q: "Why use NumPy over JS Arrays?", a: ["It's blue", "Faster math/vector operations", "Easier names", "None"], c: 1 },
    { q: "Removing 'NULL' values in data is called:", a: ["Cleaning", "Emptying", "Deleting", "Fixing"], c: 0 },
    { q: "To see first 5 rows in Pandas, use:", a: ["head()", "tail()", "start()", "show()"], c: 0 },
    { q: "Python is used by NASA. Why?", a: ["It's cool", "Reliable scientific libraries", "They love snakes", "None"], c: 1 }
  ],
  15: [
    { q: "What is 'Regression'?", a: ["Going back in time", "Predicting numerical values", "A math error", "None"], c: 1 },
    { q: "A 'Model' in ML is basically a:", a: ["3D object", "Mathematical pattern", "Famous person", "None"], c: 1 },
    { q: "Supervised Learning means:", a: ["Models with a boss", "Learning from labeled data", "Learning from nothing", "None"], c: 1 },
    { q: "Classification predicts ________.", a: ["Prices", "Categories (Cat vs Dog)", "Speed", "Weather"], c: 1 },
    { q: "Funny: A model with 100% accuracy usually is...", a: ["A genius", "Overfitted (Cheating)", "Perfect", "Broken"], c: 1 },
    { q: "What is 'Scikit-Learn'?", a: ["A school", "Popular ML Library", "A coding game", "None"], c: 1 },
    { q: "Training set vs Testing set. Why?", a: ["To save time", "To see if model actually learned", "To make it harder", "None"], c: 1 },
    { q: "Which is an AI platform?", a: ["OpenAI (ChatGPT)", "Netlify", "Figma", "Spotify"], c: 0 },
    { q: "Input to ML is called:", a: ["Target", "Features", "Result", "Notes"], c: 1 },
    { q: "Prediction is based on:", a: ["Luck", "Logic/Patterns in data", "The dev's mood", "None"], c: 1 }
  ],
  16: [
    { q: "A Dashboard's main goal is:", a: ["To be colorful", "Quick visual data insights", "To host files", "None"], c: 1 },
    { q: "The 'Overview' section shows:", a: ["Details", "High-level stats (Total, Average)", "Credits", "None"], c: 1 },
    { q: "Charts are better than tables because:", a: ["They use less RAM", "Visual trends are easier to see", "They look cool", "None"], c: 1 },
    { q: "Funny: A dashboard with 0 data is:", a: ["Minimalist art", "A bug", "A clean slate", "All of above"], c: 0 },
    { q: "Key metric in a task dashboard?", a: ["User email", "Completed / Total count", "Site speed", "Browser type"], c: 1 },
    { q: "Interactive filters allow:", a: ["Filtering water", "Dynamic data drilling", "Changing colors", "None"], c: 1 },
    { q: "Dashboard UI should be:", a: ["Cluttered", "Clean and intuitive", "Hyper-animated", "Dark only"], c: 1 },
    { q: "Where does real-time data come from?", a: ["Hardcoded files", "API / Database", "Dev's brain", "Calculator"], c: 1 },
    { q: "Sidebar in dashboard helps with:", a: ["Style", "Navigation between modules", "Ads", "None"], c: 1 },
    { q: "Is mobile responsiveness vital for dashboards?", a: ["No, only PC", "Yes, managers check data on-go", "Maybe", "None"], c: 1 }
  ],
  17: [
    { q: "Price Predictor uses which ML type?", a: ["Regression", "Logic", "Art", "None"], c: 0 },
    { q: "Price of a house depends on:", a: ["Wall color", "Location, Area, Bedrooms (Features)", "Agent's name", "None"], c: 1 },
    { q: "Real-time task: Model predicts ₹1 trillion for a bike. Why?", a: ["Inflation", "Outlier/Bad data", "It's a gold bike", "None"], c: 1 },
    { q: "Funny: Why do price predictors hate market crashes?", a: ["They lose money", "Historical data becomes useless", "They get sad", "None"], c: 1 },
    { q: "Output of this project is:", a: ["A picture", "A predicted number", "A website code", "None"], c: 1 },
    { q: "Flask or FastAPI helps to:", a: ["Style the site", "Bridge Python ML to Web", "Write JS", "None"], c: 1 },
    { q: "Important step before prediction?", a: ["Scaling / Normalizing data", "Sleeping", "Buying a domain", "None"], c: 0 },
    { q: "User input validation is needed for:", a: ["Style", "Preventing 'Zero' or 'Text' where numbers belong", "Ads", "None"], c: 1 },
    { q: "Complexity of ML models vs Accuracy:", a: ["More complex = Always better", "Diminishing returns / Overfitting risk", "Simple is bad", "None"], c: 1 },
    { q: "The 'Masterclass' ends with:", a: ["A goodbye", "A Certificate & Industry skills", "A test", "Nothing"], c: 1 }
  ]
};

/**
 * Render Quiz HTML
 */
function renderQuizHTML(item) {
  const questions = QUIZZES_DATA[item.day] || QUIZZES_DATA[1];

  let html = `<div class="quiz-box">`;
  questions.forEach((q, qIdx) => {
    html += `
            <div class="quiz-q-wrap" id="q-wrap-${qIdx}">
                <p class="quiz-q-text">${qIdx + 1}. ${q.q}</p>
                <div class="quiz-options">
                    ${q.a.map((opt, oIdx) => `
                        <label class="quiz-opt-label">
                            <input type="radio" name="q-${qIdx}" value="${oIdx}" class="quiz-radio">
                            <span>${opt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
  });

  html += `
        <button class="btn btn-primary" onclick="checkQuiz(${item.day})" id="quiz-submit-btn" style="margin-top:20px;">Check My Score 🧠</button>
        <div id="quiz-results" class="quiz-results-card" style="display:none"></div>
    </div>`;

  return html;
}

/**
 * Check Quiz Score
 */
function checkQuiz(day) {
  const questions = QUIZZES_DATA[day] || QUIZZES_DATA[1];
  const correctAnswers = questions.map(q => q.c);
  let score = 0;
  let total = correctAnswers.length;

  correctAnswers.forEach((correctIdx, qIdx) => {
    const selected = document.querySelector(`input[name="q-${qIdx}"]:checked`);
    const wrap = document.getElementById(`q-wrap-${qIdx}`);

    if (selected) {
      const val = parseInt(selected.value);
      if (val === correctIdx) {
        score++;
        wrap.classList.add('quiz-correct');
      } else {
        wrap.classList.add('quiz-wrong');
      }
    } else {
      wrap.classList.add('quiz-missed');
    }
  });

  const results = document.getElementById('quiz-results');
  results.style.display = 'block';
  results.innerHTML = `
        <div class="score-display">
            <span class="score-num">${score} / ${total}</span>
            <p class="score-msg">${score === total ? "🔥 PERFECTION! You're a master!" : score >= total / 2 ? "👏 Good job! Keep practicing." : "💪 Room for improvement. Review the topics!"}</p>
        </div>
        <button class="btn" style="margin-top:15px; background: rgba(255,255,255,0.05); color: white;" onclick="resetQuiz()">Try Again 🔄</button>
    `;

  document.getElementById('quiz-submit-btn').style.display = 'none';
  results.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function resetQuiz() {
  const radios = document.querySelectorAll('.quiz-radio');
  radios.forEach(r => r.checked = false);

  const wraps = document.querySelectorAll('.quiz-q-wrap');
  wraps.forEach(w => {
    w.classList.remove('quiz-correct', 'quiz-wrong', 'quiz-missed');
  });

  document.getElementById('quiz-results').style.display = 'none';
  document.getElementById('quiz-submit-btn').style.display = 'block';
}

// ─────────────────────────────────────────────
// Modal Open / Close
// ─────────────────────────────────────────────
function openModal(index) {
  currentSelectedDay = index;
  const item = curriculum[index];
  const savedDay = studentData.progress.find(p => p.day === item.day);
  const completed = savedDay ? savedDay.completed : false;
  const submitted = savedDay ? savedDay.submitted : false;

  const modalBody = document.querySelector('#task-modal .modal-body');
  if (modalBody) modalBody.innerHTML = buildModalBody(item, completed, submitted);

  wireFileUpload();
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('show');
  document.body.style.overflow = '';
  clearFile();
}

if (closeBtn) closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ─────────────────────────────────────────────
// File Upload
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
    uploadZone.addEventListener('dragover', (e) => { e.preventDefault(); uploadZone.classList.add('dragover'); });
    uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('dragover'));
    uploadZone.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadZone.classList.remove('dragover');
      if (e.dataTransfer.files[0]) handleFileSelected(e.dataTransfer.files[0]);
    });
  }
}

function handleFileSelected(file) {
  const maxSize = 10 * 1024 * 1024;
  const statusDiv = document.getElementById('submission-status');
  if (file.size > maxSize) {
    if (statusDiv) statusDiv.innerHTML = `<span style="color:#ef4444">⚠️ File too large. Max size is 10 MB.</span>`;
    return;
  }
  selectedFile = file;
  const sizeStr = file.size > 1024 * 1024 ? `${(file.size / 1024 / 1024).toFixed(1)} MB` : `${(file.size / 1024).toFixed(0)} KB`;
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
    reader.onload = (e) => { if (thumb) { thumb.src = e.target.result; thumb.style.display = 'block'; } };
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
// Submit
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

  if (!taskLink && !githubLink && !selectedFile && !notes) {
    if (statusDiv) statusDiv.innerHTML = `<span style="color:#f59e0b">⚠️ Please provide at least a link, file upload, or notes before submitting.</span>`;
    return;
  }

  if (btn) { btn.disabled = true; btn.innerHTML = '<span>⏳ Submitting...</span>'; }
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
      if (statusDiv) statusDiv.innerHTML = `<div class="submit-success-msg">✅ Submitted successfully! The instructor will review and mark it complete. Keep going! 💪</div>`;
      clearFile();
      setTimeout(() => { closeModal(); renderDays(); }, 2200);
    } else {
      if (statusDiv) statusDiv.innerHTML = `<span style="color:#ef4444">❌ ${data.error || 'Submission failed. Please try again.'}</span>`;
      if (btn) { btn.disabled = false; btn.innerHTML = '<span>Submit for Review 🚀</span>'; }
    }
  } catch {
    if (statusDiv) statusDiv.innerHTML = `<span style="color:#ef4444">❌ Cannot reach server. Is the backend running?</span>`;
    if (btn) { btn.disabled = false; btn.innerHTML = '<span>Submit for Review 🚀</span>'; }
  }
}

// ─────────────────────────────────────────────
// Boot

// ─────────────────────────────────────────────
// Boot
// ─────────────────────────────────────────────
initStudent();

/* 🎓 Certification Download Handler */
function downloadCertificate() {
  const element = document.getElementById('printable-certificate');
  const name = sessionStorage.getItem('studentName') || 'Student';
  const btn = event.currentTarget;
  const originalHtml = btn.innerHTML;

  if (!element) {
    alert("Certificate element not found. Please complete all tasks to unlock it.");
    return;
  }

  // Show loading state
  btn.disabled = true;
  btn.innerHTML = '<span>⏳ Generating PDF...</span>';

  const opt = {
    margin: 0,
    filename: `${name.replace(/\s+/g, '_')}_Masterclass_Certificate.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 3,
      useCORS: true,
      letterRendering: true,
      scrollY: 0,
      scrollX: 0
    },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape', compress: true },
    pagebreak: { mode: 'avoid-all' }
  };

  html2pdf().set(opt).from(element).save().then(() => {
    btn.disabled = false;
    btn.innerHTML = originalHtml;
  }).catch(err => {
    console.error("PDF generation failed:", err);
    btn.disabled = false;
    btn.innerHTML = originalHtml;
    alert("Download failed. Please try saving from the browser print menu (Ctrl + P).");
  });
}
