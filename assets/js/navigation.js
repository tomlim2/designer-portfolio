/**
 * Navigation Module
 *
 * Manages navigation menu, about section overlay, and content injection.
 *
 * Features:
 * - Menu text injection for "Works" and "About" links
 * - About section overlay toggle with animation
 * - Contact information and bio injection
 * - Customizable content through configuration
 *
 * Usage:
 *   // Basic initialization with default content
 *   Navigation.init();
 *
 *   // With custom content
 *   Navigation.init({
 *     menuText: {
 *       works: 'Projects',
 *       about: 'Info'
 *     },
 *     bio: {
 *       intro: 'Custom intro text...',
 *       contact: '<p>Contact info...</p>',
 *       training: '<p>Training info...</p>',
 *       awards: '<p>Awards info...</p>'
 *     }
 *   });
 */

var Navigation = (function() {
  'use strict';

  // Private variables
  var config = {
    selectors: {
      menuWorks: '#menu-works',
      menuAbout: '#menu-about',
      menuAboutAlt: '#menu-about-n',
      aboutSection: '.about-section',
      contactContainer: '.contact',
      home: '.home'
    },
    menuText: {
      works: 'Works',
      about: 'About'
    },
    bio: {
      intro: 'Hi, I am Tom, a designer living in Seoul, South Korea, and have focused on experimenting mixture of graphic, animation, and programming, so my majority of graphic design work is screen-based media. I make 2D/3D motion, and branding.<br/>Currently I worked at Varo Money as a UX engineer.<br/><br/>',
      training: '<p><span class="empha">Training</span> <br/> BFA Graphic Design with high distinction - California College of the Arts, Spring 2019</p>',
      awards: '<p><span class="empha">Awards</span> <br/> Student To Watch - Graphic Design USA, Spring 2019<br/><br/></p>',
      contact: '<p><a href="https://linkedin.com/in/tommlimm/" target="_blank" style=\'margin-top:1.5em\'>LinkedIn</a> | <a href="https://www.instagram.com/tommlimm/" target="_blank" style=\'margin-top:1.5em\'>Instagram</a><br/><a href="https://drive.google.com/open?id=1WF2Tcy2bwwxDNnPJxjD1qJRAmpsl1h4K" download>Resume</a> | <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tomandlim@gmail.com" target="_blank" >tomandlim@gmail.com</a></p>'
    },
    classes: {
      aboutOpen: 'about-open',
      selected: 'selected'
    }
  };

  var isInitialized = false;
  var aboutToggleHandler = null;

  /**
   * Injects menu text into navigation elements
   * @private
   */
  function injectMenuText() {
    // Inject "Works" text
    var worksElements = document.querySelectorAll(config.selectors.menuWorks + ',' + config.selectors.home);

    if (worksElements.length === 0) {
      console.warn('Navigation: No "Works" menu elements found');
    }

    worksElements.forEach(function(element) {
      if (element.textContent.trim() === '') {
        element.textContent = config.menuText.works;
      }
    });

    // Inject "About" text
    var aboutElements = document.querySelectorAll(
      config.selectors.menuAbout + ',' + config.selectors.menuAboutAlt
    );

    if (aboutElements.length === 0) {
      console.warn('Navigation: No "About" menu elements found');
    }

    aboutElements.forEach(function(element) {
      if (element.textContent.trim() === '') {
        element.textContent = config.menuText.about;
      }
    });
  }

  /**
   * Injects bio and contact information
   * @private
   */
  function injectBioContent() {
    var contactContainer = document.querySelector(config.selectors.contactContainer);

    if (!contactContainer) {
      console.warn('Navigation: Contact container element not found: "' + config.selectors.contactContainer + '"');
      return;
    }

    if (contactContainer.innerHTML.trim() === '') {
      var content = config.bio.intro +
                    config.bio.training +
                    config.bio.awards +
                    config.bio.contact;

      contactContainer.innerHTML = content;
    }
  }

  /**
   * Toggles the about section overlay
   * @private
   */
  function toggleAboutSection(event) {
    if (event) {
      event.preventDefault();
    }

    var aboutSection = document.querySelector(config.selectors.aboutSection);
    var menuAbout = document.querySelector(config.selectors.menuAbout);

    if (!aboutSection) {
      console.warn('Navigation: About section element not found: "' + config.selectors.aboutSection + '"');
      return;
    }

    if (aboutSection) {
      aboutSection.classList.toggle(config.classes.aboutOpen);
    }

    if (menuAbout) {
      menuAbout.classList.toggle(config.classes.selected);
    }
  }

  /**
   * Attaches event listeners for about section toggle
   * @private
   */
  function attachEventListeners() {
    aboutToggleHandler = toggleAboutSection;

    var aboutTriggers = document.querySelectorAll(
      config.selectors.menuAbout + ',' + config.selectors.menuAboutAlt
    );

    if (aboutTriggers.length === 0) {
      console.warn('Navigation: No about menu triggers found for event listeners');
      return;
    }

    aboutTriggers.forEach(function(element) {
      if (element.addEventListener) {
        element.addEventListener('click', aboutToggleHandler);
      } else {
        // Fallback for older browsers
        element.onclick = aboutToggleHandler;
      }
    });
  }

  /**
   * Removes event listeners
   * @private
   */
  function removeEventListeners() {
    if (!aboutToggleHandler) return;

    var aboutTriggers = document.querySelectorAll(
      config.selectors.menuAbout + ',' + config.selectors.menuAboutAlt
    );

    aboutTriggers.forEach(function(element) {
      if (element.removeEventListener) {
        element.removeEventListener('click', aboutToggleHandler);
      } else {
        element.onclick = null;
      }
    });

    aboutToggleHandler = null;
  }

  /**
   * Merges user config with default config
   * @private
   * @param {Object} userConfig - User configuration object
   */
  function mergeConfig(userConfig) {
    if (!userConfig) return;

    // Merge selectors
    if (userConfig.selectors) {
      Object.keys(userConfig.selectors).forEach(function(key) {
        config.selectors[key] = userConfig.selectors[key];
      });
    }

    // Merge menu text
    if (userConfig.menuText) {
      Object.keys(userConfig.menuText).forEach(function(key) {
        config.menuText[key] = userConfig.menuText[key];
      });
    }

    // Merge bio content
    if (userConfig.bio) {
      Object.keys(userConfig.bio).forEach(function(key) {
        config.bio[key] = userConfig.bio[key];
      });
    }

    // Merge classes
    if (userConfig.classes) {
      Object.keys(userConfig.classes).forEach(function(key) {
        config.classes[key] = userConfig.classes[key];
      });
    }
  }

  /**
   * Initializes the navigation module
   * @public
   * @param {Object} options - Configuration options
   * @param {Object} options.selectors - Custom selectors for navigation elements
   * @param {Object} options.menuText - Custom text for menu items
   * @param {Object} options.bio - Custom bio and contact content
   * @param {Object} options.classes - Custom CSS class names
   */
  function init(options) {
    if (isInitialized) {
      console.warn('Navigation: Already initialized');
      return;
    }

    mergeConfig(options);

    console.log('Navigation: Initialized');

    // Inject content
    injectMenuText();
    injectBioContent();

    // Attach event listeners
    attachEventListeners();

    isInitialized = true;
  }

  /**
   * Destroys the navigation module and removes event listeners
   * @public
   */
  function destroy() {
    if (!isInitialized) return;

    removeEventListeners();
    isInitialized = false;
  }

  /**
   * Manually toggles the about section (useful for testing)
   * @public
   */
  function toggle() {
    toggleAboutSection();
  }

  // Public API
  return {
    init: init,
    destroy: destroy,
    toggle: toggle
  };
})();

// jQuery plugin wrapper (optional, for jQuery compatibility)
if (typeof jQuery !== 'undefined') {
  (function($) {
    $.fn.navigation = function(options) {
      Navigation.init(options);
      return this;
    };
  })(jQuery);
}
