// === Wagon main javascript file ===

// Tell Webpack to load the style
import '../stylesheets/app.scss';

// Import the classes required to handle sections
import SectionsManager from './sections/_manager';
import * as Sections from './sections';

document.addEventListener('DOMContentLoaded', event => {

  // Load all the sections
  const sectionsManager = new SectionsManager();

  // Register sections here. DO NOT REMOVE OR UPDATE THIS LINE
  sectionsManager.registerSection('footer', Sections.Footer);
  sectionsManager.registerSection('newsletter', Sections.Newsletter);
  sectionsManager.registerSection('testemonials', Sections.Testemonial);
  sectionsManager.registerSection('team', Sections.Team);
  sectionsManager.registerSection('stats', Sections.Stat);
  sectionsManager.registerSection('logo_cloud', Sections.LogoCloud);
  sectionsManager.registerSection('features', Sections.Feature);
  sectionsManager.registerSection('hero', Sections.Hero);

  sectionsManager.start();

});
