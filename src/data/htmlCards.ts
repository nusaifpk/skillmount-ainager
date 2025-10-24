/**
 * Sample HTML Cards for SkillMount chat interface
 * These are complete mini HTML pages that render inside iframes
 */

export const courseFinder = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #1e293b;
      padding: 8px;
    }
    @media (min-width: 640px) {
      body { padding: 20px; }
    }
    .card {
      background: white;
      border-radius: 12px;
      padding: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    @media (min-width: 640px) {
      .card {
        border-radius: 16px;
        padding: 24px;
      }
    }
    .hero-img {
      width: 100%;
      height: 120px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 12px;
    }
    @media (min-width: 640px) {
      .hero-img {
        height: 160px;
        border-radius: 12px;
        margin-bottom: 16px;
      }
    }
    .header {
      margin-bottom: 16px;
    }
    @media (min-width: 640px) {
      .header { margin-bottom: 20px; }
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 4px;
    }
    @media (min-width: 640px) {
      .title { font-size: 20px; }
    }
    .subtitle {
      font-size: 10px;
      color: #64748b;
    }
    @media (min-width: 640px) {
      .subtitle { font-size: 12px; }
    }
    .section {
      margin-bottom: 12px;
      padding: 12px;
      background: #f8fafc;
      border-radius: 10px;
      border: 1px solid #e2e8f0;
    }
    @media (min-width: 640px) {
      .section {
        margin-bottom: 16px;
        padding: 16px;
        border-radius: 12px;
      }
    }
    .label {
      font-size: 10px;
      font-weight: 600;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
    }
    @media (min-width: 640px) {
      .label {
        font-size: 11px;
        margin-bottom: 8px;
      }
    }
    .track {
      font-size: 14px;
      font-weight: 600;
      color: #4f46e5;
      margin-bottom: 10px;
    }
    @media (min-width: 640px) {
      .track {
        font-size: 16px;
        margin-bottom: 12px;
      }
    }
    .cohort-info {
      font-size: 12px;
      color: #334155;
      margin-bottom: 6px;
    }
    @media (min-width: 640px) {
      .cohort-info { font-size: 14px; }
    }
    .seats {
      display: inline-block;
      padding: 3px 8px;
      background: #fef3c7;
      color: #92400e;
      border-radius: 6px;
      font-size: 10px;
      font-weight: 600;
    }
    @media (min-width: 640px) {
      .seats {
        padding: 4px 10px;
        font-size: 12px;
      }
    }
    .enquire-btn {
      width: 100%;
      padding: 10px;
      background: #4f46e5;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      margin-top: 10px;
      -webkit-tap-highlight-color: transparent;
    }
    @media (min-width: 640px) {
      .enquire-btn {
        padding: 12px;
        border-radius: 10px;
        font-size: 14px;
        margin-top: 12px;
      }
    }
    .enquire-btn:active {
      background: #4338ca;
      transform: scale(0.98);
    }
    @media (min-width: 640px) {
      .enquire-btn:hover {
        background: #4338ca;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
      }
    }
    .stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      margin-top: 12px;
    }
    @media (min-width: 640px) {
      .stats {
        gap: 12px;
        margin-top: 16px;
      }
    }
    .stat-tile {
      background: white;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      padding: 8px;
      text-align: center;
    }
    @media (min-width: 640px) {
      .stat-tile {
        border-radius: 10px;
        padding: 12px;
      }
    }
    .stat-value {
      font-size: 11px;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 3px;
    }
    @media (min-width: 640px) {
      .stat-value {
        font-size: 14px;
        margin-bottom: 4px;
      }
    }
    .stat-label {
      font-size: 8px;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }
    @media (min-width: 640px) {
      .stat-label { font-size: 10px; }
    }
  </style>
</head>
<body>
  <div class="card">
    <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Python Coding" class="hero-img">

    <div class="header">
      <div class="title">SkillMount • Course Finder</div>
      <div class="subtitle">Interactive preview — filter & tap Enquire</div>
    </div>

    <div class="section">
      <div class="label">Track</div>
      <div class="track">Python • Data • AI</div>
      <button class="enquire-btn" data-action="enquire" data-payload="python-data-ai">
        Enquire Now
      </button>
    </div>

    <div class="section">
      <div class="label">Next Cohort</div>
      <div class="cohort-info">Nov 3 — Weekend, Dubai</div>
      <span class="seats">12 seats left</span>
    </div>

    <div class="stats">
      <div class="stat-tile">
        <div class="stat-value">8 weeks</div>
        <div class="stat-label">Duration</div>
      </div>
      <div class="stat-tile">
        <div class="stat-value">Hybrid</div>
        <div class="stat-label">Format</div>
      </div>
      <div class="stat-tile">
        <div class="stat-value">Beginner→Pro</div>
        <div class="stat-label">Level</div>
      </div>
    </div>
  </div>
</body>
</html>
`;

export const syllabusSnapshot = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      color: #1e293b;
      padding: 8px;
    }
    @media (min-width: 640px) {
      body { padding: 20px; }
    }
    .card {
      background: white;
      border-radius: 12px;
      padding: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    @media (min-width: 640px) {
      .card {
        border-radius: 16px;
        padding: 24px;
      }
    }
    .header {
      margin-bottom: 14px;
      padding-bottom: 12px;
      border-bottom: 2px solid #e2e8f0;
    }
    @media (min-width: 640px) {
      .header {
        margin-bottom: 20px;
        padding-bottom: 16px;
      }
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 4px;
    }
    @media (min-width: 640px) {
      .title { font-size: 20px; }
    }
    .subtitle {
      font-size: 10px;
      color: #64748b;
    }
    @media (min-width: 640px) {
      .subtitle { font-size: 12px; }
    }
    .accordion-item {
      margin-bottom: 12px;
      border: 2px solid #e2e8f0;
      border-radius: 10px;
      overflow: hidden;
      transition: all 0.3s;
    }
    .accordion-item:hover {
      border-color: #cbd5e1;
    }
    .accordion-header {
      padding: 14px 16px;
      background: #f8fafc;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 600;
      font-size: 14px;
      color: #334155;
      user-select: none;
    }
    .accordion-header:hover {
      background: #f1f5f9;
    }
    .week-label {
      color: #4f46e5;
      font-weight: 700;
    }
    .arrow {
      transition: transform 0.3s;
      font-size: 12px;
      color: #64748b;
    }
    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
      background: white;
    }
    .accordion-content-inner {
      padding: 16px;
      font-size: 13px;
      color: #475569;
      line-height: 1.6;
    }
    .topic {
      margin-bottom: 8px;
      padding-left: 16px;
      position: relative;
      cursor: pointer;
      transition: color 0.2s;
    }
    .topic:hover {
      color: #4f46e5;
    }
    .topic:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #4f46e5;
      font-weight: bold;
    }
    .footer {
      margin-top: 20px;
      padding-top: 16px;
      border-top: 2px solid #e2e8f0;
      text-align: center;
      font-size: 12px;
      color: #64748b;
    }
    .link-btn {
      display: inline-block;
      margin-top: 12px;
      padding: 8px 16px;
      background: #4f46e5;
      color: white;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      border: none;
    }
    .link-btn:hover {
      background: #4338ca;
      transform: translateY(-1px);
    }
  </style>
</head>
<body>
  <div class="card">
    <img src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Data Analysis" class="hero-img">

    <div class="header">
      <div class="title">Course Syllabus</div>
      <div class="subtitle">8-Week Python • Data • AI Track</div>
    </div>

    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAccordion(this)">
        <span><span class="week-label">Week 1:</span> Python Refresh</span>
        <span class="arrow">▼</span>
      </div>
      <div class="accordion-content">
        <div class="accordion-content-inner">
          <div class="topic" data-action="viewDetails" data-payload="Python Syntax">Core Python syntax & best practices</div>
          <div class="topic" data-action="viewDetails" data-payload="Data Structures">Data structures (lists, dicts, sets)</div>
          <div class="topic" data-action="viewDetails" data-payload="Functions">Functions, lambdas & comprehensions</div>
          <div class="topic" data-action="viewDetails" data-payload="Error Handling">Error handling & debugging</div>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAccordion(this)">
        <span><span class="week-label">Week 2:</span> Data Stacks</span>
        <span class="arrow">▼</span>
      </div>
      <div class="accordion-content">
        <div class="accordion-content-inner">
          <div class="topic" data-action="viewDetails" data-payload="NumPy">NumPy for numerical computing</div>
          <div class="topic" data-action="viewDetails" data-payload="Pandas">Pandas for data manipulation</div>
          <div class="topic" data-action="viewDetails" data-payload="Data Cleaning">Data cleaning & preprocessing</div>
          <div class="topic" data-action="viewDetails" data-payload="Data Formats">Working with CSV, JSON, SQL</div>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAccordion(this)">
        <span><span class="week-label">Week 3–4:</span> Analytics</span>
        <span class="arrow">▼</span>
      </div>
      <div class="accordion-content">
        <div class="accordion-content-inner">
          <div class="topic" data-action="viewDetails" data-payload="EDA">Exploratory data analysis (EDA)</div>
          <div class="topic" data-action="viewDetails" data-payload="Statistics">Statistical analysis & hypothesis testing</div>
          <div class="topic" data-action="viewDetails" data-payload="Visualization">Data visualization (Matplotlib, Seaborn)</div>
          <div class="topic" data-action="viewDetails" data-payload="Dashboards">Dashboard creation with Plotly</div>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAccordion(this)">
        <span><span class="week-label">Week 5–6:</span> LLM Apps</span>
        <span class="arrow">▼</span>
      </div>
      <div class="accordion-content">
        <div class="accordion-content-inner">
          <div class="topic" data-action="viewDetails" data-payload="LLMs">Introduction to LLMs & APIs</div>
          <div class="topic" data-action="viewDetails" data-payload="Prompts">Prompt engineering fundamentals</div>
          <div class="topic" data-action="viewDetails" data-payload="Chatbots">Building chatbots with OpenAI/Anthropic</div>
          <div class="topic" data-action="viewDetails" data-payload="RAG">RAG (Retrieval-Augmented Generation)</div>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAccordion(this)">
        <span><span class="week-label">Week 7–8:</span> Capstone</span>
        <span class="arrow">▼</span>
      </div>
      <div class="accordion-content">
        <div class="accordion-content-inner">
          <div class="topic" data-action="viewDetails" data-payload="Project Planning">End-to-end project planning</div>
          <div class="topic" data-action="viewDetails" data-payload="App Development">Build a production-ready app</div>
          <div class="topic" data-action="viewDetails" data-payload="Deployment">Deployment & monitoring</div>
          <div class="topic" data-action="viewDetails" data-payload="Portfolio">Presentation & portfolio development</div>
        </div>
      </div>
    </div>

    <div class="footer">
      Interactive syllabus • Click topics for details
      <br>
      <button class="link-btn" data-action="schedule" data-payload="full-schedule">View Full Schedule</button>
    </div>
  </div>

  <script>
    function toggleAccordion(header) {
      const item = header.parentElement;
      const content = item.querySelector('.accordion-content');
      const arrow = header.querySelector('.arrow');
      const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

      // Close all other accordions
      document.querySelectorAll('.accordion-content').forEach(c => {
        c.style.maxHeight = '0px';
      });
      document.querySelectorAll('.arrow').forEach(a => {
        a.style.transform = 'rotate(0deg)';
      });

      // Toggle current accordion
      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        arrow.style.transform = 'rotate(180deg)';
      }
    }
  </script>
</body>
</html>
`;

export function generateEnrollmentCard(): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 8px;
    }
    @media (min-width: 640px) {
      body { padding: 20px; }
    }
    .card {
      background: white;
      border-radius: 12px;
      padding: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    @media (min-width: 640px) {
      .card {
        border-radius: 16px;
        padding: 24px;
      }
    }
    .hero-img {
      width: 100%;
      height: 120px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 12px;
    }
    @media (min-width: 640px) {
      .hero-img {
        height: 160px;
        border-radius: 12px;
        margin-bottom: 16px;
      }
    }
    .header {
      margin-bottom: 20px;
      padding-bottom: 16px;
      border-bottom: 2px solid #e2e8f0;
    }
    .title {
      font-size: 20px;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 4px;
    }
    .subtitle {
      font-size: 12px;
      color: #64748b;
    }
    .form-group {
      margin-bottom: 16px;
    }
    .label {
      display: block;
      font-size: 12px;
      font-weight: 600;
      color: #475569;
      margin-bottom: 6px;
    }
    .input {
      width: 100%;
      padding: 10px 12px;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      font-size: 14px;
      transition: border 0.2s;
    }
    .input:focus {
      outline: none;
      border-color: #4f46e5;
    }
    .submit-btn {
      width: 100%;
      padding: 12px;
      background: #4f46e5;
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      margin-top: 8px;
    }
    .submit-btn:hover {
      background: #4338ca;
      transform: translateY(-1px);
    }
    .info-box {
      background: #f0fdf4;
      border: 1px solid #86efac;
      border-radius: 8px;
      padding: 12px;
      margin-top: 16px;
      font-size: 12px;
      color: #166534;
    }
  </style>
</head>
<body>
  <div class="card">
    <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Join Our Community" class="hero-img">

    <div class="header">
      <div class="title">Enrollment Form</div>
      <div class="subtitle">Python • Data • AI Track</div>
    </div>

    <form>
      <div class="form-group">
        <label class="label">Full Name</label>
        <input class="input" type="text" placeholder="Enter your full name" />
      </div>

      <div class="form-group">
        <label class="label">Email Address</label>
        <input class="input" type="email" placeholder="your.email@example.com" />
      </div>

      <div class="form-group">
        <label class="label">Phone Number</label>
        <input class="input" type="tel" placeholder="+971 XX XXX XXXX" />
      </div>

      <div class="form-group">
        <label class="label">Preferred Cohort</label>
        <select class="input">
          <option>Nov 3 — Weekend, Dubai</option>
          <option>Nov 17 — Weekday, Dubai</option>
          <option>Dec 1 — Weekend, Abu Dhabi</option>
        </select>
      </div>

      <button class="submit-btn" type="button" data-action="submitEnrollment" data-payload="enrollment-form">
        Submit Application
      </button>
    </form>

    <div class="info-box">
      ✓ Early bird discount: 20% off for next 48 hours<br>
      ✓ Flexible payment plans available
    </div>
  </div>
</body>
</html>
`;
}

export function generateCourseDetailsCard(topic: string): string {
  const topicDetails: Record<string, { desc: string; duration: string; resources: string[] }> = {
    'Python Syntax': {
      desc: 'Master Python fundamentals with hands-on coding exercises and real-world examples.',
      duration: '4 hours',
      resources: ['Interactive notebooks', 'Code challenges', 'Quick reference guide']
    },
    'NumPy': {
      desc: 'Learn efficient numerical computing with NumPy arrays and advanced operations.',
      duration: '3 hours',
      resources: ['Array manipulation exercises', 'Performance benchmarks', 'Cheat sheet']
    },
    'LLMs': {
      desc: 'Understand large language models and how to integrate them into your applications.',
      duration: '5 hours',
      resources: ['API integration guide', 'Sample projects', 'Best practices doc']
    }
  };

  const detail = topicDetails[topic] || {
    desc: `Deep dive into ${topic} with practical examples and industry best practices.`,
    duration: '3-4 hours',
    resources: ['Study materials', 'Practice exercises', 'Video tutorials']
  };

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
      padding: 8px;
    }
    @media (min-width: 640px) {
      body { padding: 20px; }
    }
    .card {
      background: white;
      border-radius: 12px;
      padding: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    @media (min-width: 640px) {
      .card {
        border-radius: 16px;
        padding: 24px;
      }
    }
    .hero-img {
      width: 100%;
      height: 120px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 12px;
    }
    @media (min-width: 640px) {
      .hero-img {
        height: 160px;
        border-radius: 12px;
        margin-bottom: 16px;
      }
    }
    .header {
      margin-bottom: 20px;
    }
    .title {
      font-size: 20px;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 4px;
    }
    .subtitle {
      font-size: 12px;
      color: #64748b;
    }
    .section {
      margin: 16px 0;
      padding: 16px;
      background: #f8fafc;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
    }
    .section-title {
      font-size: 12px;
      font-weight: 600;
      color: #64748b;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .section-content {
      font-size: 14px;
      color: #334155;
      line-height: 1.6;
    }
    .resource-list {
      list-style: none;
      padding: 0;
    }
    .resource-item {
      padding: 8px 0;
      font-size: 14px;
      color: #475569;
    }
    .resource-item:before {
      content: "📚 ";
      margin-right: 8px;
    }
    .action-btn {
      width: 100%;
      padding: 12px;
      background: #10b981;
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      margin-top: 16px;
    }
    .action-btn:hover {
      background: #059669;
      transform: translateY(-1px);
    }
  </style>
</head>
<body>
  <div class="card">
    <img src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Tech Learning" class="hero-img">

    <div class="header">
      <div class="title">${topic}</div>
      <div class="subtitle">Course Module Details</div>
    </div>

    <div class="section">
      <div class="section-title">Description</div>
      <div class="section-content">${detail.desc}</div>
    </div>

    <div class="section">
      <div class="section-title">Duration</div>
      <div class="section-content">${detail.duration}</div>
    </div>

    <div class="section">
      <div class="section-title">Learning Resources</div>
      <ul class="resource-list">
        ${detail.resources.map(r => `<li class="resource-item">${r}</li>`).join('')}
      </ul>
    </div>

    <button class="action-btn" data-action="enquire" data-payload="${topic}">
      Enroll in This Module
    </button>
  </div>
</body>
</html>
`;
}

export function generateScheduleCard(): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
      padding: 8px;
    }
    @media (min-width: 640px) {
      body { padding: 20px; }
    }
    .card {
      background: white;
      border-radius: 12px;
      padding: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    @media (min-width: 640px) {
      .card {
        border-radius: 16px;
        padding: 24px;
      }
    }
    .hero-img {
      width: 100%;
      height: 120px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 12px;
    }
    @media (min-width: 640px) {
      .hero-img {
        height: 160px;
        border-radius: 12px;
        margin-bottom: 16px;
      }
    }
    .header {
      margin-bottom: 20px;
      padding-bottom: 16px;
      border-bottom: 2px solid #e2e8f0;
    }
    .title {
      font-size: 20px;
      font-weight: 700;
      color: #1e293b;
    }
    .schedule-item {
      padding: 14px;
      margin-bottom: 12px;
      background: #f8fafc;
      border: 2px solid #e2e8f0;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .schedule-item:hover {
      border-color: #4f46e5;
      transform: translateX(4px);
    }
    .cohort-name {
      font-size: 15px;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 6px;
    }
    .cohort-details {
      font-size: 12px;
      color: #64748b;
    }
    .seats-badge {
      display: inline-block;
      padding: 4px 10px;
      background: #dcfce7;
      color: #166534;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 600;
      margin-top: 6px;
    }
  </style>
</head>
<body>
  <div class="card">
    <img src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Schedule Your Learning" class="hero-img">

    <div class="header">
      <div class="title">Upcoming Cohorts</div>
    </div>

    <div class="schedule-item" data-action="enquire" data-payload="nov-3-weekend">
      <div class="cohort-name">Nov 3 — Weekend Track</div>
      <div class="cohort-details">Dubai • Saturdays & Sundays • 9 AM - 1 PM</div>
      <span class="seats-badge">12 seats available</span>
    </div>

    <div class="schedule-item" data-action="enquire" data-payload="nov-17-weekday">
      <div class="cohort-name">Nov 17 — Weekday Track</div>
      <div class="cohort-details">Dubai • Mon-Wed-Fri • 6 PM - 9 PM</div>
      <span class="seats-badge">8 seats available</span>
    </div>

    <div class="schedule-item" data-action="enquire" data-payload="dec-1-weekend">
      <div class="cohort-name">Dec 1 — Weekend Track</div>
      <div class="cohort-details">Abu Dhabi • Saturdays & Sundays • 10 AM - 2 PM</div>
      <span class="seats-badge">15 seats available</span>
    </div>

    <div class="schedule-item" data-action="enquire" data-payload="dec-15-intensive">
      <div class="cohort-name">Dec 15 — Intensive Track</div>
      <div class="cohort-details">Online • Mon-Fri • 7 PM - 9 PM</div>
      <span class="seats-badge">20 seats available</span>
    </div>
  </div>
</body>
</html>
`;
}

export function generateGenericResponseCard(action: string, payload: string | null): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
      padding: 8px;
    }
    @media (min-width: 640px) {
      body { padding: 20px; }
    }
    .card {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      text-align: center;
    }
    .icon {
      font-size: 48px;
      margin-bottom: 16px;
    }
    .title {
      font-size: 18px;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 12px;
    }
    .message {
      font-size: 14px;
      color: #64748b;
      line-height: 1.6;
    }
    .action-btn {
      margin-top: 16px;
      padding: 10px 20px;
      background: #4f46e5;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .action-btn:hover {
      background: #4338ca;
      transform: translateY(-1px);
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">💡</div>
    <div class="title">Action: ${action}</div>
    <div class="message">
      You clicked on: ${payload || 'No additional data'}<br><br>
      This is a dynamic response card showing how SkillMount handles interactive elements.
    </div>
    <button class="action-btn" data-action="schedule" data-payload="return-to-schedule">
      View All Courses
    </button>
  </div>
</body>
</html>
`;
}
