webpackJsonp([0x823f7eaa742b],{403:function(n,s){n.exports={data:{allDocs:{edges:[{node:{frontmatter:{title:"Enable the HN Module in Drupal",category:"drupal-quickstart",stub:null},fields:{slug:"/docs/drupal-quickstart"}}},{node:{frontmatter:{title:"React setup",category:"react-quickstart",stub:null},fields:{slug:"/docs/react-quickstart"}}},{node:{frontmatter:{title:"Drupal",category:"reference",stub:!0},fields:{slug:"/docs/reference/drupal"}}},{node:{frontmatter:{title:"Server-side rendering",category:"guides",stub:!0},fields:{slug:"/docs/guides/server-side-rendering"}}},{node:{frontmatter:{title:"Proxy Drupal with Node.js",category:"guides",stub:null},fields:{slug:"/docs/guides/proxy-drupal"}}},{node:{frontmatter:{title:"Content listings",category:"guides",stub:!0},fields:{slug:"/docs/guides/content-listings"}}},{node:{frontmatter:{title:"Layouts with Paragraphs",category:"guides",stub:!0},fields:{slug:"/docs/guides/layouts-with-paragraphs"}}},{node:{frontmatter:{title:"Views",category:"guides",stub:!0},fields:{slug:"/docs/guides/views"}}},{node:{frontmatter:{title:"404 and 403 pages",category:"guides",stub:!0},fields:{slug:"/docs/guides/404-and-403"}}},{node:{frontmatter:{title:"Altering entities",category:"guides",stub:!0},fields:{slug:"/docs/guides/altering-entities"}}},{node:{frontmatter:{title:"Enabling submodules",category:"drupal-quickstart",stub:!0},fields:{slug:"/docs/drupal-quickstart/enabling-submodules"}}},{node:{frontmatter:{title:"Query entities and references",category:"react-quickstart",stub:!0},fields:{slug:"/docs/react-quickstart/query-entities-and-references"}}},{node:{frontmatter:{title:"Javascript",category:"reference",stub:!0},fields:{slug:"/docs/reference/javascript"}}},{node:{frontmatter:{title:"Altering the response",category:"drupal-quickstart",stub:!0},fields:{slug:"/docs/drupal-quickstart/alter-response"}}},{node:{frontmatter:{title:"React",category:"reference",stub:!0},fields:{slug:"/docs/reference/react"}}},{node:{frontmatter:{title:"Documentation",category:"top",stub:!0},fields:{slug:"/docs/"}}},{node:{frontmatter:{title:"Alternatives",category:"concepts",stub:!0},fields:{slug:"/docs/concepts/alternatives"}}},{node:{frontmatter:{title:"Data structure",category:"concepts",stub:!0},fields:{slug:"/docs/concepts/data-structure"}}},{node:{frontmatter:{title:"Request endpoint",category:"concepts",stub:!0},fields:{slug:"/docs/concepts/request-endpoint"}}}]},docsItem:{html:'<p>To get you started as quickly as possible, you can follow these instructions. If you\'ve already gotten your React app up and running, please head straight to the <a href="#setting-up-headless-ninja">Setting up Headless Ninja</a> section.</p>\n<p>Please also make sure you\'ve followed the <a href="/docs/drupal-quickstart">Drupal setup guide</a>.</p>\n<h2 id="setting-up-your-react-app"><a href="#setting-up-your-react-app" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setting up your React app</h2>\n<p>Open up your terminal and make sure you\'ve got Node.js with version >= 6 installed. Run <code>node -v</code> to verify. Head over to the <a href="https://nodejs.org">Node.js website</a> to download or update.</p>\n<p>After Node.js is installed, run the following commands. They will make sure your React app is running and will open up your brand new app in your browser.</p>\n<p>Please make sure to replace <code>my-app</code> by your own app name.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>npx create-react-app my-app\n<span class="token function">cd</span> my-app\n<span class="token function">npm</span> start\n</code></pre>\n      </div>\n<p>Now open up the <code>my-app</code> folder in your editor of choice.</p>\n<h2 id="setting-up-headless-ninja"><a href="#setting-up-headless-ninja" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setting up Headless Ninja</h2>\n<p>To get started, run the following command from your <code>my-app</code> folder</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> hn hn-react react-router-dom --save\n</code></pre>\n      </div>\n<p>Or with Yarn</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>yarn add hn hn-react react-router-dom\n</code></pre>\n      </div>\n<p>We\'ll now do two things:</p>\n<ol>\n<li>Connect React to the Drupal site</li>\n<li>Use React Router to watch for location changes</li>\n<li>Render the page title from Drupal</li>\n</ol>\n<p>Start by opening up <code>src/index.js</code>. In this file we\'ll</p>\n<ul>\n<li>Initialize Headless Ninja with HN\'s <code>site.initialize()</code></li>\n<li>Wrap our App in react-router\'s <code>&#x3C;BrowserRouter /></code></li>\n<li>Tell the React app to wait for our Drupal to respond with data by wrapping it in HN\'s <code>waitForHnData()</code>.</li>\n</ul>\n<p>Replace all contents of <code>src/index.js</code> with</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token keyword">as</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router-dom\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> waitForHnData<span class="token punctuation">,</span> site <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'hn-react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">\'./App\'</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  site<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">{</span> url<span class="token punctuation">:</span> <span class="token string">\'http://drupal.dev\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token keyword">await</span> <span class="token function">waitForHnData</span><span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>Router<span class="token operator">></span>\n        <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Please replace "<a href="http://drupal.dev">http://drupal.dev</a>" with <a href="/docs/drupal-quickstart">your Drupal url</a>.</p>\n<p>Now open up <code>src/App.js</code>. In this file we\'ll</p>\n<ul>\n<li>Make sure HN updates whenever your visitor navigates</li>\n<li>Map the Content Type we get from Drupal to a React component</li>\n</ul>\n<p>Replace all contents of <code>src/App.js</code> with</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> DrupalPage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'hn-react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> withRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router-dom\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> location<span class="token punctuation">:</span> <span class="token punctuation">{</span> pathname<span class="token punctuation">,</span> search <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>DrupalPage\n        mapper<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n          node__article<span class="token punctuation">:</span> Article<span class="token punctuation">,</span>\n          node__product<span class="token punctuation">:</span> Product<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span>\n        url<span class="token operator">=</span><span class="token punctuation">{</span>pathname <span class="token operator">+</span> search<span class="token punctuation">}</span>\n      <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> Article <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> entity <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">{</span>entity<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> Product <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> entity <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">{</span>entity<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withRouter</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Now head back to your browser, and you should see the page title as you\'ve entered it in your Drupal homepage.</p>\n<p>That\'s it! Follow the other guides for more detailed instructions and documentation:</p>\n<ul>\n<li><a href="/docs/reference/react#waitForHnData">waitForHnData()</a></li>\n<li><a href="/docs/reference/react#DrupalPage">&#x3C;DrupalPage /></a></li>\n<li><a href="/docs/guides/layouts-with-paragraphs">Layouts with Paragraphs</a></li>\n<li><a href="/docs/guides/server-side-rendering">Server-side rendering</a></li>\n</ul>',frontmatter:{title:"React setup",category:"react-quickstart"},fields:{slug:"/docs/react-quickstart"}}},pathContext:{slug:"/docs/react-quickstart"}}}});
//# sourceMappingURL=path---docs-react-quickstart-637087bec4410dbb8242.js.map