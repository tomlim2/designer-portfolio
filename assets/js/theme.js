/**
 * Theme Management Module
 *
 * Manages light/dark theme switching via data-theme attribute and scroll-based triggers.
 * Supports both inverted (dark-on-scroll) and primary (light-on-scroll) theme modes.
 *
 * Features:
 * - Scroll-based theme switching with configurable threshold
 * - Applies theme classes to body and additional target elements
 * - Supports multiple target selectors for fine-grained control
 * - Works with both jQuery and vanilla JS
 *
 * Usage:
 *   // Basic initialization with default settings
 *   ThemeManager.init();
 *
 *   // With custom threshold and targets
 *   ThemeManager.init({
 *     threshold: 100,
 *     mode: 'inverted',
 *     targets: {
 *       nav: ['.nav-inv', '#bg'],
 *       text: ['.works-inv', '.about-inv'],
 *       logo: ['.logo-inv']
 *     }
 *   });
 */

var ThemeManager = (function() {
  'use strict';

  // Private variables
  var config = {
    threshold: 0,
    mode: 'inverted', // 'inverted' or 'primary'
    targets: {
      nav: ['.nav-inv', '#bg'],
      text: ['.works-inv', '.about-inv'],
      logo: ['.logo-inv']
    },
    classes: {
      inverted: {
        nav: 'txt-bg-inv',
        text: 'txt-inv',
        logo: 'mark-inv'
      },
      primary: {
        nav: 'txt-bg-pri',
        text: 'txt-pri',
        logo: 'mark-pri'
      }
    }
  };

  var isInitialized = false;
  var scrollHandler = null;

  /**
   * Adds or removes theme classes based on scroll position
   * @private
   */
  function applyTheme(shouldApply) {
    var themeClasses = config.classes[config.mode];

    if (!themeClasses) {
      console.warn('ThemeManager: No theme classes defined for mode "' + config.mode + '"');
      return;
    }

    // Apply to each target group
    Object.keys(config.targets).forEach(function(group) {
      var selectors = config.targets[group];
      var className = themeClasses[group];

      if (!className) return;

      selectors.forEach(function(selector) {
        var elements = document.querySelectorAll(selector);

        if (elements.length === 0) {
          console.warn('ThemeManager: No elements found for selector "' + selector + '"');
        }

        elements.forEach(function(element) {
          if (shouldApply) {
            element.classList.add(className);
          } else {
            element.classList.remove(className);
          }
        });
      });
    });
  }

  /**
   * Handles scroll events and applies theme based on threshold
   * @private
   */
  function handleScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var shouldApply = scrollTop > config.threshold;

    applyTheme(shouldApply);
  }

  /**
   * Merges user config with default config
   * @private
   * @param {Object} userConfig - User configuration object
   */
  function mergeConfig(userConfig) {
    if (!userConfig) return;

    // Merge top-level properties
    if (typeof userConfig.threshold !== 'undefined') {
      config.threshold = userConfig.threshold;
    }

    if (userConfig.mode) {
      config.mode = userConfig.mode;
    }

    // Merge targets
    if (userConfig.targets) {
      Object.keys(userConfig.targets).forEach(function(key) {
        config.targets[key] = userConfig.targets[key];
      });
    }

    // Merge custom classes
    if (userConfig.classes) {
      Object.keys(userConfig.classes).forEach(function(mode) {
        if (!config.classes[mode]) {
          config.classes[mode] = {};
        }
        Object.keys(userConfig.classes[mode]).forEach(function(key) {
          config.classes[mode][key] = userConfig.classes[mode][key];
        });
      });
    }
  }

  /**
   * Initializes the theme manager
   * @public
   * @param {Object} options - Configuration options
   * @param {number} options.threshold - Scroll position threshold for theme switch (default: 0)
   * @param {string} options.mode - Theme mode: 'inverted' or 'primary' (default: 'inverted')
   * @param {Object} options.targets - Target selectors grouped by type
   * @param {Object} options.classes - Custom class names for theme modes
   */
  function init(options) {
    if (isInitialized) {
      console.warn('ThemeManager: Already initialized');
      return;
    }

    mergeConfig(options);

    console.log('ThemeManager: Initialized with mode "' + config.mode + '", threshold: ' + config.threshold);

    // Apply theme IMMEDIATELY to prevent FOUC
    var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var shouldApply = currentScrollTop > config.threshold;
    applyTheme(shouldApply);

    // Create scroll handler
    scrollHandler = handleScroll;

    // Attach scroll listener
    if (window.addEventListener) {
      window.addEventListener('scroll', scrollHandler, { passive: true });
    } else {
      // Fallback for older browsers
      window.onscroll = scrollHandler;
    }

    isInitialized = true;
  }

  /**
   * Destroys the theme manager and removes event listeners
   * @public
   */
  function destroy() {
    if (!isInitialized) return;

    if (window.removeEventListener) {
      window.removeEventListener('scroll', scrollHandler);
    } else {
      window.onscroll = null;
    }

    scrollHandler = null;
    isInitialized = false;
  }

  /**
   * Manually applies or removes theme (useful for testing)
   * @public
   * @param {boolean} apply - Whether to apply the theme
   */
  function setTheme(apply) {
    applyTheme(apply);
  }

  // Public API
  return {
    init: init,
    destroy: destroy,
    setTheme: setTheme
  };
})();

// jQuery plugin wrapper (optional, for jQuery compatibility)
if (typeof jQuery !== 'undefined') {
  (function($) {
    $.fn.themeManager = function(options) {
      ThemeManager.init(options);
      return this;
    };
  })(jQuery);
}
