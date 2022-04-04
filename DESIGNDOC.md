# Portfolio Webpage
## Setup
Various coding demonstration projects need an appropriate showcase which itself doubles as another project.
## Problem
A demonstration website requires certain high functionality standards regarding content, layout, image preloading, form validation, project data presentation, and user accessibility. The system is more than the sum of its parts, and each part must integrate into the whole seamlessly.
## Goals
- Display software programming, organization and planning, and system design competency
- Showcase an engaging, dynamic frontend website
- Make data presentation a subtle, pleasurable experience
- Create GUIs that are user friendly and intuitive
- Make system easy to use and hard to break
- Optimize time management
## Options
### Script Loading and Execution
- None: JS loads and executes immediately, blocking parsing until the script is completed
- **Defer: JS loads in parallel with HTML parsing and executes after parsing is complete [current]**
- Async: JS loads in parallel with HTML parsing and executes as soon as available
### Content Organization
- Include a single index HTML projects page with no additonal HTML or external hyperlinks required
- Include an index HTML homepage with external hyperlinks to projects, github, resume, faq, and contacts
- **Include an index HTML homepage; additional HTML pages for projects, faq, and contacts; and external hyperlinks to github and resume [current]**
### Content Storage
- Use website as static silo storage, and include all content within the website server folder
- **Use website as dynamic presentation hub, and link to external content whenever possible [current]**
### Layout Artistic Themes
- Do not use any artistic themes
- Use prefabricated static CSS
- Use prefabricated keyframe animated CSS
- **Create original static CSS  [current]**
- Create original keyframe animated CSS
### Layout Organization
- No CSS, let the HTML fall where it will 
- Use basic CSS
- Use CSS Flexbox
- **Use CSS Grid [current]**
### Layout Scaling
- Use single static layout regardless of screen size
- Use media queries with breakpoints for large screens and phones 
- **Use media queries with breakpoints for large screens, tablets, and phones [current]**
- Use media queries with breakpoints for hi res screens, large screens, tablets, and phones
### Image Preloading
- Do nothing and let image icons sit onscreen until all the images intitially load
- **List sources for the other more image heavy pages on initial image single image homepage using JS [current]**
- Use a window onload global event handler to forestall page updating while the images load
- Play a skeleton loading animation while page images load
### Form Validation
- Have neither form validation nor error messages
- Use automatic HTML "required" client side validation and error messages
- **Use custom JS client side validation and error messages [current]**
- Use custom JS.node server side validation and error messages
- Use custom PHP server side validation and error messages
### Project Data Presentation
- Use separate HTML webpages for each project, but do not use any JS to jazz it up
- Use separate HTML webpages for each project, then use subtle JS touches to jazz it up
- Use separate HTML webpages for each project, then use flamboyant JS to overwhelm the viewer
- Use a single page application HTML to present all projects at once, but do not use any JS to jazz it up
- **Use a single page application HTML to present all projects at once, then use subtle JS touches to jazz it up [current]**
- Use a single page application HTML to present all projects at once, then use flamboyant JS to overwhelm the viewer
### User Accessibility
- Do not implement any user accessibility techniques
- Use high foreground/background contrast
- **Use high foreground/background contrast and image alt tags [current]**
- Use high foreground/background contrast, image alt tags, and keyboard shortcuts
- Use high foreground/background contrast, image alt tags, keyboard shortcuts, and dynamic settings selection options
## Solution
Demonstrate core competencies without too many bells and whistes to distract from the clean, minimal requirements of this website: present the site creator as an innovative software designer and manager by highlighting and glorifying his or her web application development accomplishments. All else is dross. Allow for multiple target users&mdash;programmers vs managers or the logical vs the artistic&mdash;to easily select and view what data they prefer&mdash;either code, design docs, or working prototypes&mdash;using an organized, intuitive layout. Keep peripherals such as resumes and githubpages behind external links. The github.io static hosting restrictions and lack of php or node.js experience will limit the backend applications of this website, so polish the frontend and warn users that they can't actually send emails, etc.
## System Architecture
```mermaid
%%{init: {'theme': 'forest', 'themeVariables': 
{ 'primaryColor': '#DDDA4D', 'edgeLabelBackground':'#F7F6DA', 'tertiaryColor': '#D5DEF6'}}}%%
flowchart LR
   %%relationships
      arrayquoteimagination--populates-->arrayquotesconcat
      arrayquotephilosophy--populates-->arrayquotesconcat
      arrayquotestars--populates-->arrayquotesconcat
      arrayquotesystems--populates-->arrayquotesconcat
      arrayquotewriting--populates-->arrayquotesconcat
      CONTACTHTML--references-->STYLECSS
      FAQHTML--references-->STYLECSS
      IMAGELOADERJS--updates-->INDEXHTML
      INDEXHTML--references-->STYLECSS
      menuitemcontact--hyperlinks to-->CONTACTHTML
      menuitemfaq--hyperlinks to-->FAQHTML
      menuitemgithub--hyperlinks to-->projects
      menuitemhome--hyperlinks to-->INDEXHTML
      menuitemprojects--hyperlinks to-->PROJECTSHTML
      menuitemresume--hyperlinks to-->Resume
      PROJECTSHTML--references-->STYLECSS
      QUOTEGENERATORJS--updates-->INDEXHTML
      QUOTESJS--sends data to-->QUOTEGENERATORJS
      variablerandomquote--updates-->paragraphquote
   %% structure
   subgraph INDEXHTML [Index.HTML]
      headerindex{Index Header}
      paragraphquote(Quote Paragraph)
      menuitemcontact{Contact Menu Item}
      menuitemfaq{FAQ Menu Item}
      menuitemgithub{GitHub Menu Item}
      menuitemhome{Home Menu Item}
      menuitemprojects{Projects Menu Item}
      menuitemresume{Resume Menu Item}
   subgraph IMAGELOADERJS [ImageLoader.JS]
      arrayimagesrc{Image Src Array}
      functionpreloadimages{PreLoad Images Function}
      end
   subgraph QUOTESJS [Quotes.JS]
      arrayquoteimagination{Imagination Quotes Array}
      arrayquotephilosophy{Philosophy Quotes Array}
      arrayquotestars{Stars Quotes Array}
      arrayquotesystems{Systems Quotes Array}
      arrayquotewriting{Writing Quotes Array}
      end
   subgraph QUOTEGENERATORJS [QuoteGenerator.JS]
      arrayquotesconcat{Quotes Arrays Concatenated Array}
      variablerandomquote{Random Quote Variable}
      end
   subgraph FAQHTML [Faq.HTML]
      headerfaq{FAQ Header}
      contentfaq{FAQ Content}
      menuitemcontact{Contact Menu Item}
      menuitemfaq{FAQ Menu Item}
      menuitemgithub{GitHub Menu Item}
      menuitemhome{Home Menu Item}
      menuitemprojects{Projects Menu Item}
      menuitemresume{Resume Menu Item}
      end
   subgraph PROJECTSHTML [Projects.HTML]
      headerprojects{Projects Header}
      inputprojectradiobuttons{Project Radiobutton Input}
      divprojectcontents{Project Content Divs}
      divprojectasides{Project Content Asides}
      menuitemcontact{Contact Menu Item}
      menuitemfaq{FAQ Menu Item}
      menuitemgithub{GitHub Menu Item}
      menuitemhome{Home Menu Item}
      menuitemprojects{Projects Menu Item}
      menuitemresume{Resume Menu Item}
      end
   subgraph PROJECTSJS [Projects.JS]
      variableprojectasides{Project Aside Variables}
      variableprojectcontents{Project Content Variables}
      variableprojectimages{Project Image Variables}
      variableradiobuttonlabels{Radiobutton Label Variables}
      functionresetallprojects{Reset All Projects Function}
      eventlistener
      end
   subgraph CONTACTHTML [Contact.HTML]
      headercontact{Contact Header}
      buttonreset{Reset Form Button}
      buttonsend{Send Form Button}
      menuitemcontact{Contact Menu Item}
      menuitemfaq{FAQ Menu Item}
      menuitemgithub{GitHub Menu Item}
      menuitemhome{Home Menu Item}
      menuitemprojects{Projects Menu Item}
      menuitemresume{Resume Menu Item}
      end
   subgraph CONTACTJS [Contact.JS]
      form{Contact Form}
      variableinput{Variable Input}
      variableinputlabels{Variable Input Labels}
      variableregex{Variable Regex}
      variableoutput{Variable Output}
      functiontestvalidation{Test Validation Function}
      functionresetallinputs{Reset All Inputs Function}
      functionresetalloutputs{Reset All Outputs Function}
      eventlistener
      end
   subgraph STYLECSS [Style.CSS]
      end
   subgraph GITHUB [GitHub]
      images{External Image Data}
      projects{External Project Data}
      resume{Resume Data}
      end 
```

## Development Schedule
```mermaid
%%{init: {'theme': 'forest', 'themeVariables': 
{ 'primaryColor': '#DDDA4D', 'edgeLabelBackground':'#F7F6DA', 'tertiaryColor': '#D5DEF6'}}}%%
gantt
    dateFormat  YYYY-MM-DD
    title       Project Webpage
    
    todayMarker stroke-width:5px,stroke:#0f0,opacity:0.5
    
    section Plan
    Define problem scope         :done,  scope, 2022-02-05, 5d
    Define target user           :done,  user, after scope, 3d
    Draft resume		            :done,  resumedraft, 2022-02-20, 1d
    Iterate resume		         :done,  resumeiterate, after resumedraft, 10d
    Draft readme                 :done,  readmedraft, after user, 6d
    Iterate readme               :done,  readmeiterate, after readmedraft, 2022-04-02
    Draft designdoc              :done,  designdocdraft, after readmedraft, 5d
    Iterate architecture         :done,  archituredraft, 2022-03-15, 1d
    Code architecture            :done,  architureiterate, after architecturedraft,2022-04-02
    Draft gantt chart            :done,  ganttdraft, 2022-03-22, 2d
    Iterate gantt chart          :done,  ganttiterate, after genttdraft, 2022-04-02
    
    section Prototype
    Design system mechanics      :done,   mechanicsdesign, 2022-03-01, 2d
    Iterate system mechanics     :done,   mechanicsiterate, after mechanicsdesign, 1w
    Design system aesthetics     :done,   aestheticsdesign, 2022-03-02, 3d
    Iterate system aesthetics    :done,   aestheticsiterate, after aestheticsdesign, 1w
    Design graphics              :done,   graphicsdesign, 2022-03-02, 2d
    Iterate graphics             :active, graphicsiterate, after graphicsdesign, 2022-04-10
    Design CSS                   :done,   cssdesign, 2022-03-10, 2d
    Iterate CSS                  :done,   cssiterate, after cssdesign, 5d
    Design CSS grid              :done,   griddesign, 2022-03-11, 1d
    Iterate CSS grid             :done,   griditerate, after griddesign, 2d
    Design menu GUI              :done,   menudesign, 2022-03-12, 2d
    Iterate menu GUI             :done,   menuiterate, after menu design, 4d
    Design imageloader.js        :done,   imageloaderdesign, 2022-03-15, 2d
    Iterate imageloader.js       :done,   imageloaderiterate, after imageloaderdesign, 8d
    Design quotes.js             :done,   quotedesign, 2022-03-25, 1d 
    Iterate quotes.js            :done,   quoteiterate, after quotedesign, 2d
    Design quotegenerator.js     :done,   quotegeneratordesign,2022-03-25, 1d 
    Iterate quotegenerator.js    :done,   quotegeneratoriterate,after quotegeneratordesign,2d
    Design projects.js           :done,   projectsdesign, 2022-03-20, 2d
    Iterate projects.js          :done,   projectsiterate, after projectdesign, 1w 
    Design contact.js            :done,   contactdesign, 2022-03-30, 4d
    Iterate contact.js           :active, contactiterate, after contactdesign, 1w

    section Prune
    Unit Test Code               :active, unittest,      2022-03-26, 2w
    Optimize Code                :active, codeoptimize,  2022-04-10, 1w
    Create Dynamic Gantts        :active, ganttdynamiccreate,  2022-04-10, 1w
    Iterate Dynamic Gantts       :active, ganttdynamiciterate, ganttdynamiccreate, 1w
    
    section Playtest
    Solicit feedback             :active, feedback, 2022-03-26, 2w
    
    section Polish

    section Publish
    GitHub.io host               :done, githubhost,      2022-03-18, 1d

    section Post
    Design Server Side code      :active, servercodedesign
    Iterate Server Side Code     :active, servercodeupdate
    Update Content               :active, contentupdate
    Update Graphics              :active, graphicsupdate
```
## Responsibilities
- keyed list (uml seq diagram)
## Features
### Critical Implemented
### Critical Unimplemented
### Wishlist Unimplemented
## References
- [Accessibility Guidelines, Games 01](https://www.youtube.com/watch?v=-IhQl1CBj9U)
- [Accessibility Guidelines, Games 02](https://www.youtube.com/watch?v=XzNjaugTrNc)
- [Accessibility Guidelines, Websites](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility)
- [Skeleton Loading Animation](https://www.youtube.com/watch?v=ZVug65gW-fc&t=195s)
- [Template Literals](https://www.youtube.com/watch?v=DG4obitDvUA&t=2069s)
