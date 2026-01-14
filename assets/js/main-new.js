/**
 * Main Entry Point
 *
 * Initializes all modules for the Tom Lim Portfolio site.
 * This file serves as the entry point that coordinates all modular components.
 *
 * Modules:
 * - Navigation: Menu management and about section overlay
 * - ThemeManager: Scroll-based theme switching
 * - ScrollAnimations: Grid animations, parallax, and visibility toggles
 *
 * Usage:
 *   Include this file after all module files:
 *   <script src="assets/js/navigation.js"></script>
 *   <script src="assets/js/theme.js"></script>
 *   <script src="assets/js/scroll.js"></script>
 *   <script src="assets/js/main-new.js"></script>
 *
 * Configuration:
 *   Modify the config object below to customize behavior for different pages.
 */

(function() {
  'use strict';

  /**
   * Configuration for different page types
   * Each page type can have custom settings for modules
   */
  var pageConfigs = {
    // Front page (index.html) configuration
    front: {
      navigation: {
        // Default navigation settings
      },
      theme: null, // No theme switching on front page
      scroll: {
        parallax: {
          enabled: true,
          titleWrapper: {
            selector: '.titleWrapper',
            speed: 10,
            maxOffset: 100,
            direction: 'up'
          },
          container: {
            selector: '#container',
            speed: 10,
            maxOffset: 100,
            direction: 'down'
          },
          hero: {
            selector: '.hero-img',
            speed: 10,
            maxOffset: 100,
            direction: 'down'
          }
        },
        gridImages: {
          selector: '.grid-img-',
          // count is auto-detected by ScrollAnimations module
          offset: 80,
          animationClass: 'ani-mv'
        },
        visibility: {
          element: null,
          trigger: null,
          hideWhenPassed: false
        }
      }
    },

    // Child pages with inverted theme (project pages)
    inverted: {
      navigation: {
        // Default navigation settings
      },
      theme: {
        threshold: 0,
        mode: 'inverted',
        targets: {
          nav: ['.nav-inv', '#bg'],
          text: ['.works-inv', '.about-inv'],
          logo: ['.logo-inv']
        }
      },
      scroll: {
        parallax: {
          enabled: true,
          titleWrapper: {
            selector: '.titleWrapper',
            speed: 10,
            maxOffset: 100,
            direction: 'up'
          },
          container: {
            selector: '#container',
            speed: 10,
            maxOffset: 100,
            direction: 'down'
          }
        },
        gridImages: {
          selector: '.grid-img-',
          // count is auto-detected by ScrollAnimations module
          offset: 80,
          animationClass: 'ani-mv'
        },
        visibility: {
          element: '#container',
          trigger: '.container-tri',
          hideWhenPassed: true
        }
      }
    },

    // Child pages with primary theme
    primary: {
      navigation: {
        // Default navigation settings
      },
      theme: {
        threshold: 0,
        mode: 'primary',
        targets: {
          nav: ['.nav', '.bg'],
          text: ['.side-info', '.works', '.about'],
          logo: ['.logo']
        }
      },
      scroll: {
        parallax: {
          enabled: true,
          titleWrapper: {
            selector: '.titleWrapper',
            speed: 10,
            maxOffset: 100,
            direction: 'up'
          },
          container: {
            selector: '#container',
            speed: 10,
            maxOffset: 100,
            direction: 'down'
          }
        },
        gridImages: {
          selector: '.grid-img-',
          // count is auto-detected by ScrollAnimations module
          offset: 80,
          animationClass: 'ani-mv'
        },
        visibility: {
          element: '#container',
          trigger: '.container-tri',
          hideWhenPassed: true
        }
      }
    }
  };

  /**
   * Detects the page type based on DOM elements
   * @returns {string} Page type: 'front', 'inverted', or 'primary'
   */
  function detectPageType() {
    // Check for inverted theme elements
    if (document.querySelector('.nav-inv') || document.querySelector('.logo-inv')) {
      console.log('Detected page type: inverted (found .nav-inv or .logo-inv)');
      return 'inverted';
    }

    // Check for primary theme elements (excluding front page)
    if (document.querySelector('.nav:not(.nav-inv)') &&
        document.querySelector('.container-tri')) {
      console.log('Detected page type: primary (found .nav and .container-tri)');
      return 'primary';
    }

    // Default to front page
    console.log('Detected page type: front (default)');
    return 'front';
  }

  /**
   * Initializes all modules based on page configuration
   * @param {string} pageType - Type of page to initialize
   */
  function initializeModules(pageType) {
    var config = pageConfigs[pageType] || pageConfigs.front;

    console.log('PortfolioApp: Initializing page type "' + pageType + '"');

    // Always initialize navigation
    if (typeof Navigation !== 'undefined') {
      Navigation.init(config.navigation);
    } else {
      console.warn('PortfolioApp: Navigation module not loaded');
    }

    // Initialize theme manager if configured
    if (config.theme && typeof ThemeManager !== 'undefined') {
      ThemeManager.init(config.theme);
    } else if (config.theme) {
      console.warn('PortfolioApp: ThemeManager module not loaded');
    }

    // Initialize scroll animations if configured
    if (config.scroll && typeof ScrollAnimations !== 'undefined') {
      ScrollAnimations.init(config.scroll);
    } else if (config.scroll) {
      console.warn('PortfolioApp: ScrollAnimations module not loaded');
    }

    console.log('PortfolioApp: Initialization complete');
  }

  /**
   * Main initialization function
   */
  function init() {
    var pageType = detectPageType();
    initializeModules(pageType);
  }

  /**
   * DOMContentLoaded event handler
   */
  function onDOMReady() {
    init();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onDOMReady);
  } else {
    // DOM is already ready
    onDOMReady();
  }

  // jQuery compatibility (if jQuery is loaded)
  if (typeof jQuery !== 'undefined') {
    jQuery(document).ready(function() {
      // jQuery is ready, modules should already be initialized via DOMContentLoaded
      // This is a fallback for compatibility
      if (!Navigation || !Navigation.init) {
        init();
      }
    });
  }

  // Expose init function globally for manual initialization if needed
  window.PortfolioApp = {
    init: init,
    detectPageType: detectPageType,
    pageConfigs: pageConfigs
  };
})();
