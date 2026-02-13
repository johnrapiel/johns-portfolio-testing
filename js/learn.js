/* =============================================================
   Frontend Fundamentals — Learn, Test, Practice
   A bite-sized learning tool for product designers.
   ============================================================= */

// ---- Lesson Data ----
const lessons = [
  // LESSON 1
  {
    title: 'HTML Basics — The Skeleton of a Web Page',
    body: `
      <p>Every web page starts with <strong>HTML</strong> (HyperText Markup Language). Think of it as the <strong>skeleton</strong> of a page — it defines what content exists and how it's structured, but not how it looks.</p>
      <p>HTML uses <strong>elements</strong> (also called "tags") wrapped in angle brackets. Most elements have an opening tag and a closing tag:</p>
      <div class="callout">
        <code>&lt;h1&gt;Hello World&lt;/h1&gt;</code> — this creates a top-level heading.
      </div>
      <p>Common elements you'll see everywhere:</p>
      <ul>
        <li><strong>&lt;h1&gt; to &lt;h6&gt;</strong> — Headings (h1 is the largest)</li>
        <li><strong>&lt;p&gt;</strong> — A paragraph of text</li>
        <li><strong>&lt;a href="…"&gt;</strong> — A link to another page</li>
        <li><strong>&lt;img src="…"&gt;</strong> — An image</li>
        <li><strong>&lt;div&gt;</strong> — A generic container (like a box)</li>
        <li><strong>&lt;ul&gt; / &lt;li&gt;</strong> — An unordered (bulleted) list</li>
      </ul>
      <p>Elements can be <strong>nested</strong> inside each other to create structure — for example, list items (<code>&lt;li&gt;</code>) live inside a list (<code>&lt;ul&gt;</code>).</p>
    `,
    code:
`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This is my first web page.</p>
    <ul>
      <li>HTML gives structure</li>
      <li>CSS adds style</li>
      <li>JS adds behavior</li>
    </ul>
  </body>
</html>`,
    quiz: {
      question: 'Which HTML element would you use to create a clickable link to another page?',
      options: [
        '<button>',
        '<a>',
        '<link>',
        '<p>'
      ],
      answer: 1,
      explanation: 'The <a> (anchor) element creates hyperlinks. You set the destination with the href attribute: <a href="https://example.com">Click me</a>. The <link> element is used in the <head> to load CSS files — it does not create clickable links on the page.'
    },
    practice: {
      title: 'Build a Mini Profile Card',
      instructions: 'Create an HTML snippet with: a heading with your name, a paragraph with a short bio, and an unordered list of 3 skills. Edit the code below and click "Run" to see the result.',
      starter:
`<h2>Your Name</h2>
<p>A short bio about yourself goes here.</p>
<ul>
  <li>Skill one</li>
  <li>Skill two</li>
  <li>Skill three</li>
</ul>`
    }
  },

  // LESSON 2
  {
    title: 'CSS Basics — Adding Style to the Skeleton',
    body: `
      <p><strong>CSS</strong> (Cascading Style Sheets) controls how HTML elements <strong>look</strong> — colors, fonts, spacing, layout, and more. If HTML is the skeleton, CSS is the skin and clothing.</p>
      <p>A CSS rule has two parts:</p>
      <div class="callout">
        <strong>Selector</strong> { <strong>property</strong>: value; }
      </div>
      <ul>
        <li><strong>Selector</strong> — targets which elements to style (e.g. <code>h1</code>, <code>.card</code>, <code>#header</code>)</li>
        <li><strong>Property</strong> — what you want to change (e.g. <code>color</code>, <code>font-size</code>)</li>
        <li><strong>Value</strong> — what you're setting it to (e.g. <code>blue</code>, <code>24px</code>)</li>
      </ul>
      <p>There are three types of selectors you'll use most:</p>
      <ul>
        <li><strong>Element</strong> selectors — target a tag name: <code>p { ... }</code></li>
        <li><strong>Class</strong> selectors — target a class attribute: <code>.card { ... }</code></li>
        <li><strong>ID</strong> selectors — target a unique id: <code>#header { ... }</code></li>
      </ul>
      <p>Tip: Classes (.) are reusable across many elements. IDs (#) should be unique — only one per page.</p>
    `,
    code:
`<style>
  h1 {
    color: #2e7dff;
    font-size: 32px;
  }
  .subtitle {
    color: #64748b;
    font-style: italic;
  }
  .highlight {
    background: #fef9c3;
    padding: 4px 8px;
    border-radius: 4px;
  }
</style>

<h1>Styled Heading</h1>
<p class="subtitle">This paragraph uses a class selector.</p>
<p>CSS lets you <span class="highlight">highlight</span> anything.</p>`,
    quiz: {
      question: 'What does the dot (.) mean in a CSS selector like  .card { ... }  ?',
      options: [
        'It selects all HTML elements on the page',
        'It selects elements with the class name "card"',
        'It selects the element with the id "card"',
        'It selects only <div> elements'
      ],
      answer: 1,
      explanation: 'A dot (.) in CSS targets a class name. So .card selects every element that has class="card" in its HTML. The hash (#) targets IDs. A bare tag name (like div) targets all elements of that type.'
    },
    practice: {
      title: 'Style a Card Component',
      instructions: 'Add CSS rules inside the <style> tags to: (1) set the card background to a light color, (2) add padding, (3) round the corners with border-radius, and (4) change the heading color.',
      starter:
`<style>
  .card {
    /* Add your styles here */
  }
  .card h2 {
    /* Style the heading */
  }
</style>

<div class="card">
  <h2>My Card</h2>
  <p>This is a styled card component.</p>
</div>`
    }
  },

  // LESSON 3
  {
    title: 'The Box Model — How Every Element Takes Up Space',
    body: `
      <p>Every single HTML element is a <strong>rectangular box</strong>. Understanding this "box model" is the single most important CSS concept for layout.</p>
      <p>Each box has four layers, from inside to outside:</p>
      <ul>
        <li><strong>Content</strong> — the text/image inside</li>
        <li><strong>Padding</strong> — space between the content and the border (like cushioning inside a frame)</li>
        <li><strong>Border</strong> — a visible (or invisible) edge around the padding</li>
        <li><strong>Margin</strong> — space outside the border that pushes other elements away</li>
      </ul>
      <div class="callout">
        Think of it like a picture frame: the photo is the content, the matting is the padding, the frame itself is the border, and the wall-space between frames is the margin.
      </div>
      <p><strong>Pro tip:</strong> Always add <code>box-sizing: border-box;</code> to your CSS. This makes padding and border count <em>inside</em> the element's width, which makes sizing much more intuitive.</p>
    `,
    code:
`<style>
  * { box-sizing: border-box; }

  .box {
    width: 250px;
    padding: 20px;
    border: 3px solid #2e7dff;
    margin: 16px;
    background: #f1f5f9;
    font-family: sans-serif;
    color: #0f172a;
  }

  .label {
    font-size: 12px;
    color: #64748b;
  }
</style>

<div class="box">
  <span class="label">250px wide (border-box)</span>
  <p>I have 20px padding, a 3px border, and 16px margin.</p>
</div>`,
    quiz: {
      question: 'In the CSS box model, which layer sits between the content and the border?',
      options: [
        'Margin',
        'Outline',
        'Padding',
        'Gap'
      ],
      answer: 2,
      explanation: 'Padding is the space between an element\'s content and its border. Margin is outside the border. The order from inside-out is: content → padding → border → margin.'
    },
    practice: {
      title: 'Experiment with the Box Model',
      instructions: 'Modify the .box styles to: (1) increase padding to 32px, (2) change the border to a dashed style, (3) add a margin-bottom of 24px, and (4) add a background color you like. Run it and see how each change affects the box.',
      starter:
`<style>
  * { box-sizing: border-box; }
  .box {
    width: 280px;
    padding: 12px;
    border: 2px solid #333;
    margin: 8px;
    background: white;
    font-family: sans-serif;
  }
</style>

<div class="box">
  <h3>Box One</h3>
  <p>Edit my padding, border, and margin!</p>
</div>
<div class="box">
  <h3>Box Two</h3>
  <p>See how margin creates space between us.</p>
</div>`
    }
  },

  // LESSON 4
  {
    title: 'Flexbox — Effortless Layouts',
    body: `
      <p><strong>Flexbox</strong> is a CSS layout system that makes arranging items in rows or columns incredibly easy. Before Flexbox, developers used floats and complex hacks — now it's one line of CSS.</p>
      <p>To use Flexbox, you set <code>display: flex</code> on a <strong>parent container</strong>. Its direct children become "flex items" that can be controlled.</p>
      <p>Key properties on the <strong>parent</strong>:</p>
      <ul>
        <li><strong>display: flex</strong> — activates Flexbox</li>
        <li><strong>flex-direction</strong> — <code>row</code> (side by side) or <code>column</code> (stacked)</li>
        <li><strong>justify-content</strong> — controls spacing on the main axis (e.g. <code>center</code>, <code>space-between</code>)</li>
        <li><strong>align-items</strong> — controls alignment on the cross axis (e.g. <code>center</code>, <code>stretch</code>)</li>
        <li><strong>gap</strong> — adds consistent spacing between items</li>
      </ul>
      <div class="callout">
        <strong>Designer mental model:</strong> Think of Flexbox like auto-layout in Figma. <code>justify-content</code> is the primary axis distribution, <code>align-items</code> is the cross-axis alignment, and <code>gap</code> is the spacing between items.
      </div>
    `,
    code:
`<style>
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 16px;
    background: #f1f5f9;
    font-family: sans-serif;
  }
  .item {
    background: #2e7dff;
    color: white;
    padding: 20px 24px;
    border-radius: 8px;
    font-weight: 600;
  }
</style>

<div class="row">
  <div class="item">One</div>
  <div class="item">Two</div>
  <div class="item">Three</div>
</div>`,
    quiz: {
      question: 'Which CSS property do you add to the PARENT container to activate Flexbox?',
      options: [
        'flex: 1',
        'position: flex',
        'display: flex',
        'layout: flexbox'
      ],
      answer: 2,
      explanation: 'display: flex on the parent container is what activates Flexbox. The children then become flex items. flex: 1 is a shorthand used on children to make them grow equally.'
    },
    practice: {
      title: 'Build a Navigation Bar',
      instructions: 'Use Flexbox to create a horizontal navigation bar. The logo should be on the left and the nav links on the right. Hint: use justify-content: space-between on the parent.',
      starter:
`<style>
  .navbar {
    /* Make this a flex container */
    padding: 16px 24px;
    background: #0b1d32;
    font-family: sans-serif;
  }
  .logo {
    color: white;
    font-size: 20px;
    font-weight: 700;
  }
  .links {
    /* Make this a flex container too */
  }
  .links a {
    color: #94a3b8;
    text-decoration: none;
    font-size: 14px;
  }
</style>

<div class="navbar">
  <div class="logo">MyBrand</div>
  <div class="links">
    <a href="#">Home</a>
    <a href="#">Work</a>
    <a href="#">Contact</a>
  </div>
</div>`
    }
  },

  // LESSON 5
  {
    title: 'Responsive Design — Adapting to Any Screen',
    body: `
      <p><strong>Responsive design</strong> means your layout adapts to different screen sizes — phones, tablets, desktops. It's not a separate layout; it's the <em>same</em> HTML with different CSS rules that kick in at different widths.</p>
      <p>The key tool is the <strong>media query</strong>:</p>
      <div class="callout">
        <code>@media (max-width: 768px) { ... }</code><br>
        "When the screen is 768px or narrower, apply these styles."
      </div>
      <p>Common responsive patterns:</p>
      <ul>
        <li><strong>Stack columns</strong> — switch a flex-row to flex-column on small screens</li>
        <li><strong>Resize text</strong> — reduce font sizes for readability</li>
        <li><strong>Hide/show elements</strong> — e.g., swap a desktop nav for a hamburger menu</li>
        <li><strong>Fluid widths</strong> — use percentages or <code>max-width</code> instead of fixed pixel widths</li>
      </ul>
      <p>The <code>&lt;meta name="viewport"&gt;</code> tag in HTML is required for media queries to work on mobile. Without it, phones render at desktop width and just zoom out.</p>
    `,
    code:
`<style>
  .grid {
    display: flex;
    gap: 16px;
    padding: 16px;
    font-family: sans-serif;
  }
  .card {
    flex: 1;
    background: #e0f2fe;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  }
  /* On small screens, stack them! */
  @media (max-width: 500px) {
    .grid {
      flex-direction: column;
    }
  }
</style>

<div class="grid">
  <div class="card">Card A</div>
  <div class="card">Card B</div>
  <div class="card">Card C</div>
</div>
<p style="text-align:center;color:#64748b;font-size:13px;font-family:sans-serif;">
  ↑ Resize the preview to see the layout change
</p>`,
    quiz: {
      question: 'What does  @media (max-width: 768px)  mean?',
      options: [
        'Apply these styles only on screens wider than 768px',
        'Apply these styles only on screens 768px wide or narrower',
        'Set the maximum width of the page to 768px',
        'Apply these styles to all screen sizes'
      ],
      answer: 1,
      explanation: 'max-width: 768px means the rules inside only apply when the viewport is 768px or narrower. It\'s the standard way to write mobile styles — they "kick in" below a certain width (called a breakpoint).'
    },
    practice: {
      title: 'Make a Layout Responsive',
      instructions: 'This two-column layout is side-by-side. Add a @media query so that below 400px, the columns stack vertically. Hint: change flex-direction to column.',
      starter:
`<style>
  .container {
    display: flex;
    gap: 16px;
    padding: 16px;
    font-family: sans-serif;
  }
  .sidebar {
    width: 120px;
    background: #dbeafe;
    padding: 16px;
    border-radius: 8px;
  }
  .main {
    flex: 1;
    background: #f1f5f9;
    padding: 16px;
    border-radius: 8px;
  }

  /* Add your media query here */

</style>

<div class="container">
  <div class="sidebar">Sidebar</div>
  <div class="main">Main Content Area</div>
</div>`
    }
  },

  // LESSON 6
  {
    title: 'JavaScript Basics — Making Pages Interactive',
    body: `
      <p><strong>JavaScript</strong> (JS) is the programming language of the web. While HTML structures content and CSS styles it, JavaScript makes things <strong>interactive</strong> — handling clicks, changing content, fetching data, and more.</p>
      <p>Here are the building blocks:</p>
      <ul>
        <li><strong>Variables</strong> — store values: <code>let name = 'John';</code></li>
        <li><strong>Strings</strong> — text in quotes: <code>'hello'</code></li>
        <li><strong>Numbers</strong> — <code>42</code>, <code>3.14</code></li>
        <li><strong>Booleans</strong> — <code>true</code> or <code>false</code></li>
        <li><strong>Functions</strong> — reusable blocks of code</li>
      </ul>
      <div class="callout">
        <strong>let</strong> vs <strong>const</strong>: Use <code>const</code> when a value won't change (most of the time). Use <code>let</code> when it will. Avoid the older <code>var</code>.
      </div>
      <p>JavaScript runs in the browser. You add it with a <code>&lt;script&gt;</code> tag. It can read and change anything on the page in real-time.</p>
    `,
    code:
`<div id="output" style="font-family:sans-serif; padding:16px;"></div>

<script>
  // Variables
  const name = 'Designer';
  let clickCount = 0;

  // Function
  function greet(person) {
    return 'Hello, ' + person + '!';
  }

  // Use them
  const message = greet(name);
  const el = document.getElementById('output');
  el.innerHTML = \`
    <h2>\${message}</h2>
    <p>name is a <strong>\${typeof name}</strong> (string)</p>
    <p>clickCount is a <strong>\${typeof clickCount}</strong> (number)</p>
    <p>Is clickCount zero? <strong>\${clickCount === 0}</strong> (boolean)</p>
  \`;
</script>`,
    quiz: {
      question: 'What is the difference between  let  and  const  in JavaScript?',
      options: [
        'let is for numbers, const is for strings',
        'They are exactly the same',
        'const cannot be reassigned after creation; let can',
        'let is the old syntax; const is the new replacement'
      ],
      answer: 2,
      explanation: 'const declares a variable whose reference cannot be reassigned (e.g., const x = 5; x = 10; would error). let allows reassignment. Best practice: default to const and only use let when the value needs to change.'
    },
    practice: {
      title: 'Create and Use Variables',
      instructions: 'Create three variables: (1) a const called "appName" with your app\'s name, (2) a const called "version" with a number, (3) a let called "isLaunched" set to false. Then display them in the #output div using template literals (`${variable}`).',
      starter:
`<div id="output" style="font-family:sans-serif; padding:16px;"></div>

<script>
  // Create your variables below:


  // Display them:
  const el = document.getElementById('output');
  el.innerHTML = \`
    <h2>App Info</h2>
    <p>Name: (put your variable here)</p>
    <p>Version: (put your variable here)</p>
    <p>Launched: (put your variable here)</p>
  \`;
</script>`
    }
  },

  // LESSON 7
  {
    title: 'DOM Manipulation — Changing the Page with JavaScript',
    body: `
      <p>The <strong>DOM</strong> (Document Object Model) is the browser's live representation of your HTML. JavaScript can read and modify it — add elements, change text, toggle classes, respond to clicks.</p>
      <p>Key methods to know:</p>
      <ul>
        <li><code>document.querySelector('.card')</code> — find the first element matching a CSS selector</li>
        <li><code>element.textContent</code> — read or change an element's text</li>
        <li><code>element.style.color = 'red'</code> — change inline styles</li>
        <li><code>element.classList.add('active')</code> — add a CSS class</li>
        <li><code>element.addEventListener('click', fn)</code> — run code when clicked</li>
      </ul>
      <div class="callout">
        <strong>Designer insight:</strong> This is how interactive prototypes work under the hood. A button click triggers a function that changes the DOM — showing, hiding, or updating elements. It's the same concept as interactions in Figma or Framer, but with code.
      </div>
    `,
    code:
`<style>
  .demo-btn {
    padding: 12px 24px;
    font-size: 16px;
    border: 2px solid #2e7dff;
    background: white;
    color: #2e7dff;
    border-radius: 8px;
    cursor: pointer;
    font-family: sans-serif;
    transition: all 0.2s;
  }
  .demo-btn.active {
    background: #2e7dff;
    color: white;
  }
  #click-count {
    font-family: sans-serif;
    margin-top: 12px;
    color: #334155;
  }
</style>

<button class="demo-btn" id="my-btn">Click Me</button>
<p id="click-count">Clicks: 0</p>

<script>
  const btn = document.querySelector('#my-btn');
  const counter = document.querySelector('#click-count');
  let clicks = 0;

  btn.addEventListener('click', function() {
    clicks++;
    counter.textContent = 'Clicks: ' + clicks;
    btn.classList.toggle('active');
  });
</script>`,
    quiz: {
      question: 'What does  document.querySelector(\'.card\')  return?',
      options: [
        'All elements with the class "card"',
        'The first element matching the CSS selector ".card"',
        'A new element with the class "card"',
        'The text content of the element with class "card"'
      ],
      answer: 1,
      explanation: 'querySelector returns the FIRST element that matches the given CSS selector. To get ALL matching elements, you would use querySelectorAll, which returns a list. querySelector works with any valid CSS selector — classes, IDs, tag names, or combinations.'
    },
    practice: {
      title: 'Build a Toggle Button',
      instructions: 'Add an event listener to the button so that clicking it: (1) toggles the "active" class on the button, (2) changes the status text between "ON" and "OFF". Hint: use classList.toggle() and a boolean variable.',
      starter:
`<style>
  .toggle-btn {
    padding: 12px 32px;
    font-size: 16px;
    border: 2px solid #22c55e;
    background: white;
    color: #22c55e;
    border-radius: 8px;
    cursor: pointer;
    font-family: sans-serif;
  }
  .toggle-btn.active {
    background: #22c55e;
    color: white;
  }
  #status {
    font-family: sans-serif;
    margin-top: 12px;
    font-size: 18px;
    color: #334155;
  }
</style>

<button class="toggle-btn" id="toggle">Toggle</button>
<p id="status">Status: OFF</p>

<script>
  const btn = document.querySelector('#toggle');
  const status = document.querySelector('#status');
  let isOn = false;

  // Add your event listener here:

</script>`
    }
  },

  // LESSON 8
  {
    title: 'Putting It All Together — HTML + CSS + JS',
    body: `
      <p>Now you know the three pillars of frontend engineering:</p>
      <ul>
        <li><strong>HTML</strong> — structure and content (the "what")</li>
        <li><strong>CSS</strong> — presentation and layout (the "how it looks")</li>
        <li><strong>JavaScript</strong> — interactivity and behavior (the "what it does")</li>
      </ul>
      <p>In a real project, these three work together. HTML defines a button, CSS makes it look branded, and JavaScript makes it <em>do</em> something when clicked.</p>
      <div class="callout">
        <strong>The big picture:</strong> Modern frontend frameworks like React, Vue, and Svelte are built on top of these same three technologies. Everything you've learned here is the foundation that all web development stands on.
      </div>
      <p>As a designer, knowing these fundamentals helps you:</p>
      <ul>
        <li><strong>Communicate</strong> more effectively with engineers</li>
        <li><strong>Understand constraints</strong> — what's easy vs. hard to build</li>
        <li><strong>Prototype</strong> with real code when needed</li>
        <li><strong>Review implementations</strong> of your designs more critically</li>
      </ul>
    `,
    code:
`<style>
  .counter-app {
    font-family: sans-serif;
    text-align: center;
    padding: 32px;
    max-width: 320px;
    margin: 0 auto;
    background: #f8fafc;
    border-radius: 12px;
  }
  .counter-app h2 { color: #0f172a; margin-bottom: 4px; }
  .count-display {
    font-size: 48px;
    font-weight: 800;
    color: #2e7dff;
    margin: 16px 0;
  }
  .counter-btns {
    display: flex;
    gap: 12px;
    justify-content: center;
  }
  .counter-btns button {
    padding: 10px 24px;
    font-size: 18px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
  }
  .btn-minus { background: #fee2e2; color: #dc2626; }
  .btn-plus  { background: #dcfce7; color: #16a34a; }
  .btn-reset { background: #e2e8f0; color: #475569; }
</style>

<div class="counter-app">
  <h2>Counter App</h2>
  <p style="color:#64748b;font-size:14px;">HTML + CSS + JS working together</p>
  <div class="count-display" id="count">0</div>
  <div class="counter-btns">
    <button class="btn-minus" id="dec">-</button>
    <button class="btn-reset" id="reset">Reset</button>
    <button class="btn-plus" id="inc">+</button>
  </div>
</div>

<script>
  let count = 0;
  const display = document.getElementById('count');
  document.getElementById('dec').addEventListener('click', () => {
    count--;
    display.textContent = count;
  });
  document.getElementById('inc').addEventListener('click', () => {
    count++;
    display.textContent = count;
  });
  document.getElementById('reset').addEventListener('click', () => {
    count = 0;
    display.textContent = count;
  });
</script>`,
    quiz: {
      question: 'In a web page, what are the roles of HTML, CSS, and JavaScript respectively?',
      options: [
        'Layout, color, animation',
        'Structure, presentation, interactivity',
        'Text, images, videos',
        'Server, database, client'
      ],
      answer: 1,
      explanation: 'HTML provides structure (what content exists), CSS provides presentation (how it looks), and JavaScript provides interactivity (what it does). These are the three foundational layers of every web page.'
    },
    practice: {
      title: 'Build a Color Picker Card',
      instructions: 'Combine everything you\'ve learned! Build a card with a heading, a color display box, and three buttons that change the box\'s background color when clicked. Use HTML for structure, CSS for styling, and JavaScript for the click behavior.',
      starter:
`<style>
  .picker {
    font-family: sans-serif;
    text-align: center;
    padding: 24px;
  }
  .color-box {
    width: 120px;
    height: 120px;
    margin: 16px auto;
    border-radius: 12px;
    background: #e2e8f0;
    transition: background 0.3s;
  }
  .picker button {
    padding: 8px 20px;
    margin: 4px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    color: white;
  }
</style>

<div class="picker">
  <h2>Color Picker</h2>
  <div class="color-box" id="box"></div>
  <button style="background:#ef4444" id="btn-red">Red</button>
  <button style="background:#2e7dff" id="btn-blue">Blue</button>
  <button style="background:#22c55e" id="btn-green">Green</button>
</div>

<script>
  const box = document.getElementById('box');

  // Add event listeners for each button
  // to change box.style.background

</script>`
    }
  }
];


// ---- App State ----
let currentLesson = 0;
let currentPhase = 'learn'; // 'learn' | 'test' | 'practice'
let completedLessons = JSON.parse(localStorage.getItem('fe_completed') || '[]');

// ---- DOM Refs ----
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const welcomeScreen   = $('#welcome-screen');
const lessonView      = $('#lesson-view');
const completionScreen = $('#completion-screen');
const phaseDivs       = { learn: $('#phase-learn'), test: $('#phase-test'), practice: $('#phase-practice') };
const progressFill    = $('#progress-fill');
const progressLabel   = $('#progress-label');
const lessonListEl    = $('#lesson-list');
const sidebar         = $('#sidebar');

// ---- Init ----
function init() {
  buildSidebar();
  updateProgress();
  bindGlobalEvents();

  // If user has progress, jump to next incomplete lesson
  if (completedLessons.length > 0 && completedLessons.length < lessons.length) {
    loadLesson(completedLessons.length);
  } else if (completedLessons.length >= lessons.length) {
    showScreen('completion');
  }
}

function buildSidebar() {
  lessonListEl.innerHTML = '';
  lessons.forEach((l, i) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    const shortTitle = l.title.split('—')[0].trim();
    btn.textContent = shortTitle;
    btn.addEventListener('click', () => loadLesson(i));
    if (completedLessons.includes(i)) btn.classList.add('completed');
    li.appendChild(btn);
    lessonListEl.appendChild(li);
  });
}

function updateProgress() {
  const pct = (completedLessons.length / lessons.length) * 100;
  progressFill.style.width = pct + '%';
  progressLabel.textContent = completedLessons.length + ' / ' + lessons.length + ' lessons';
}

function updateSidebarActive() {
  const buttons = lessonListEl.querySelectorAll('button');
  buttons.forEach((btn, i) => {
    btn.classList.toggle('active', i === currentLesson);
    if (completedLessons.includes(i)) btn.classList.add('completed');
  });
}

// ---- Screen Management ----
function showScreen(screen) {
  welcomeScreen.style.display  = screen === 'welcome' ? '' : 'none';
  lessonView.style.display     = screen === 'lesson'  ? '' : 'none';
  completionScreen.style.display = screen === 'completion' ? '' : 'none';
}

function showPhase(phase) {
  currentPhase = phase;
  Object.keys(phaseDivs).forEach(k => {
    phaseDivs[k].style.display = k === phase ? '' : 'none';
  });
  // Scroll to top of main content
  $('#main-content').scrollTo({ top: 0, behavior: 'smooth' });
}

// ---- Load Lesson ----
function loadLesson(index) {
  currentLesson = index;
  const lesson = lessons[index];

  showScreen('lesson');
  showPhase('learn');
  updateSidebarActive();

  // Close mobile sidebar
  sidebar.classList.remove('open');

  // Populate LEARN phase
  $('#lesson-title').textContent = lesson.title;
  $('#lesson-body').innerHTML = lesson.body;
  $('#code-block').textContent = lesson.code;

  // Render preview
  renderPreview('preview-frame', lesson.code);

  // Reset quiz
  $('#quiz-feedback').style.display = 'none';
  $('#to-practice-btn').style.display = 'none';

  // Populate QUIZ
  $('#quiz-question').textContent = lesson.quiz.question;
  const optionsEl = $('#quiz-options');
  optionsEl.innerHTML = '';
  lesson.quiz.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleQuizAnswer(i));
    optionsEl.appendChild(btn);
  });

  // Populate PRACTICE
  $('#practice-title').textContent = lesson.practice.title;
  $('#practice-instructions').textContent = lesson.practice.instructions;
  $('#practice-editor').value = lesson.practice.starter;
  renderPreview('practice-preview', lesson.practice.starter);

  // Next lesson button label
  const nextBtn = $('#next-lesson-btn');
  if (index >= lessons.length - 1) {
    nextBtn.textContent = 'Finish Course →';
  } else {
    nextBtn.innerHTML = 'Next Lesson &rarr;';
  }
}

// ---- Preview Rendering ----
function renderPreview(iframeId, code) {
  const iframe = document.getElementById(iframeId);
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open();
  doc.write(code);
  doc.close();
}

// ---- Quiz ----
function handleQuizAnswer(selected) {
  const lesson = lessons[currentLesson];
  const quiz = lesson.quiz;
  const buttons = $$('#quiz-options .quiz-option-btn');
  const feedback = $('#quiz-feedback');

  // Disable all buttons
  buttons.forEach((btn, i) => {
    btn.classList.add('disabled');
    if (i === quiz.answer) btn.classList.add('correct');
    if (i === selected && selected !== quiz.answer) btn.classList.add('wrong');
  });

  // Show feedback
  feedback.style.display = '';
  if (selected === quiz.answer) {
    feedback.className = 'quiz-feedback correct-feedback';
    feedback.innerHTML = '<strong>Correct!</strong> ' + quiz.explanation;
  } else {
    feedback.className = 'quiz-feedback wrong-feedback';
    feedback.innerHTML = '<strong>Not quite.</strong> ' + quiz.explanation;
  }

  // Show continue button
  $('#to-practice-btn').style.display = '';
}

// ---- Global Events ----
function bindGlobalEvents() {
  // Start button
  $('#start-btn').addEventListener('click', () => loadLesson(0));

  // To quiz
  $('#to-quiz-btn').addEventListener('click', () => showPhase('test'));

  // To practice
  $('#to-practice-btn').addEventListener('click', () => showPhase('practice'));

  // Run practice code
  $('#run-code-btn').addEventListener('click', () => {
    renderPreview('practice-preview', $('#practice-editor').value);
  });

  // Also run on Cmd/Ctrl+Enter in editor
  $('#practice-editor').addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      renderPreview('practice-preview', $('#practice-editor').value);
    }
    // Handle Tab key for indentation
    if (e.key === 'Tab') {
      e.preventDefault();
      const ta = e.target;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      ta.value = ta.value.substring(0, start) + '  ' + ta.value.substring(end);
      ta.selectionStart = ta.selectionEnd = start + 2;
    }
  });

  // Copy code button
  $('#copy-code-btn').addEventListener('click', () => {
    const code = lessons[currentLesson].code;
    navigator.clipboard.writeText(code).then(() => {
      const btn = $('#copy-code-btn');
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
    });
  });

  // Replay (review lesson)
  $('#replay-btn').addEventListener('click', () => showPhase('learn'));

  // Next lesson
  $('#next-lesson-btn').addEventListener('click', () => {
    // Mark current as completed
    if (!completedLessons.includes(currentLesson)) {
      completedLessons.push(currentLesson);
      localStorage.setItem('fe_completed', JSON.stringify(completedLessons));
    }
    updateProgress();
    buildSidebar();
    updateSidebarActive();

    if (currentLesson < lessons.length - 1) {
      loadLesson(currentLesson + 1);
    } else {
      showScreen('completion');
    }
  });

  // Restart
  $('#restart-btn').addEventListener('click', () => {
    completedLessons = [];
    localStorage.setItem('fe_completed', JSON.stringify(completedLessons));
    updateProgress();
    buildSidebar();
    loadLesson(0);
  });

  // Mobile sidebar toggle
  $('#sidebar-toggle').addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
}

// ---- Boot ----
init();
