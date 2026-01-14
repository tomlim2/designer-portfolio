/**
 * Scroll Animations Module
 *
 * Manages scroll-triggered animations for grid images, parallax effects, and visibility toggles.
 *
 * Features:
 * - Grid image animations with viewport-based triggers (.ani-mv classes)
 * - Parallax effects for title and container elements
 * - Element visibility toggles based on scroll position
 * - Auto-calculated trigger points with configurable offset
 * - Optimized scroll handling with requestAnimationFrame
 *
 * Usage:
 *   // Basic initialization with default settings
 *   ScrollAnimations.init();
 *
 *   // With custom settings
 *   ScrollAnimations.init({
 *     gridImages: {
 *       selector: '.grid-img-',
 *       // count is auto-detected from DOM (.grid-img-1, .grid-img-2, etc.)
 *       offset: 80,
 *       animationClass: 'ani-mv'
 *     },
 *     parallax: {
 *       enabled: true,
 *       titleWrapper: {
 *         selector: '.titleWrapper',
 *         speed: 10,
 *         maxOffset: 100,
 *         direction: 'up'
 *       },
 *       container: {
 *         selector: '#container',
 *         speed: 10,
 *         maxOffset: 100,
 *         direction: 'down'
 *       }
 *     },
 *     visibility: {
 *       element: '#container',
 *       trigger: '.container-tri',
 *       hideWhenPassed: true
 *     }
 *   });
 */

var ScrollAnimations = (function() {
  'use strict';

  // Private variables
  var config = {
    gridImages: {
      selector: '.grid-img-',
      // count is now auto-detected, no longer needed in config
      offset: 80,
      animationClass: 'ani-mv'
    },
    parallax: {
      enabled: true,
      titleWrapper: {
        selector: '.titleWrapper',
        speed: 10,
        maxOffset: 100,
        direction: 'up' // 'up' or 'down'
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
    visibility: {
      element: '#container',
      trigger: '.container-tri',
      hideWhenPassed: true
    }
  };

  var isInitialized = false;
  var scrollHandler = null;
  var ticking = false;
  var gridTriggers = [];
  var visibilityTriggerPoint = null;

  /**
   * Auto-detects grid image elements in the DOM
   * @private
   * @returns {Array} Array of grid image elements
   */
  function getGridImageElements() {
    var elements = [];
    var i = 1;

    // Auto-detect all .grid-img-X elements where X is a number
    while (true) {
      var selector = config.gridImages.selector + i;
      var element = document.querySelector(selector);

      if (!element) break;

      elements.push(element);
      i++;
    }

    return elements;
  }

  /**
   * Calculates trigger points for grid images
   * @private
   */
  function calculateGridTriggers() {
    gridTriggers = [];

    // Auto-detect grid images instead of using hardcoded count
    var elements = getGridImageElements();

    if (elements.length === 0) {
      console.warn('ScrollAnimations: No grid image elements found with selector pattern "' + config.gridImages.selector + 'N"');
      return;
    }

    console.log('ScrollAnimations: Found ' + elements.length + ' grid image elements');

    elements.forEach(function(element) {
      if (element) {
        var rect = element.getBoundingClientRect();
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var triggerPoint = scrollTop + rect.top + rect.height - config.gridImages.offset;

        gridTriggers.push({
          element: element,
          triggerPoint: triggerPoint,
          triggered: false
        });
      }
    });
  }

  /**
   * Calculates visibility trigger point
   * @private
   */
  function calculateVisibilityTrigger() {
    if (!config.visibility.trigger) {
      visibilityTriggerPoint = null;
      return;
    }

    var triggerElement = document.querySelector(config.visibility.trigger);

    if (!triggerElement) {
      console.warn('ScrollAnimations: Visibility trigger element not found: "' + config.visibility.trigger + '"');
      visibilityTriggerPoint = null;
      return;
    }

    var rect = triggerElement.getBoundingClientRect();
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    visibilityTriggerPoint = scrollTop + rect.top;
  }

  /**
   * Applies parallax effect to an element
   * @private
   * @param {HTMLElement} element - The element to apply parallax to
   * @param {Object} settings - Parallax settings
   * @param {number} scrollTop - Current scroll position
   */
  function applyParallax(element, settings, scrollTop) {
    if (!element) return;

    var offset;

    if (settings.direction === 'up') {
      offset = Math.max(-scrollTop / settings.speed, -settings.maxOffset);
    } else {
      offset = Math.min(scrollTop / settings.speed, settings.maxOffset);
    }

    element.style.transform = 'translateY(' + offset + 'px)';
  }

  /**
   * Handles grid image animations
   * @private
   * @param {number} scrollTop - Current scroll position
   */
  function handleGridAnimations(scrollTop) {
    gridTriggers.forEach(function(item) {
      if (!item.triggered && scrollTop >= item.triggerPoint) {
        item.element.classList.add(config.gridImages.animationClass);
        item.triggered = true;
      }
    });
  }

  /**
   * Handles visibility toggle
   * @private
   * @param {number} scrollTop - Current scroll position
   */
  function handleVisibilityToggle(scrollTop) {
    if (visibilityTriggerPoint === null) return;

    if (!config.visibility.element) return;

    var element = document.querySelector(config.visibility.element);
    if (!element) {
      console.warn('ScrollAnimations: Visibility element not found: "' + config.visibility.element + '"');
      return;
    }

    if (config.visibility.hideWhenPassed && scrollTop >= visibilityTriggerPoint) {
      element.style.display = 'none';
    } else {
      element.style.display = 'block';
    }
  }

  /**
   * Main scroll update function
   * @private
   */
  function updateScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Handle grid animations
    if (gridTriggers.length > 0) {
      handleGridAnimations(scrollTop);
    }

    // Handle parallax effects
    if (config.parallax.enabled) {
      // Title wrapper parallax
      if (config.parallax.titleWrapper && config.parallax.titleWrapper.selector) {
        var titleWrapper = document.querySelector(config.parallax.titleWrapper.selector);
        if (titleWrapper) {
          applyParallax(titleWrapper, config.parallax.titleWrapper, scrollTop);
        }
      }

      // Container parallax
      if (config.parallax.container && config.parallax.container.selector) {
        var container = document.querySelector(config.parallax.container.selector);
        if (container) {
          applyParallax(container, config.parallax.container, scrollTop);
        }
      }

      // Hero image parallax
      if (config.parallax.hero && config.parallax.hero.selector) {
        var heroImg = document.querySelector(config.parallax.hero.selector);
        if (heroImg) {
          applyParallax(heroImg, config.parallax.hero, scrollTop);
        }
      }
    }

    // Handle visibility toggle
    handleVisibilityToggle(scrollTop);

    ticking = false;
  }

  /**
   * Optimized scroll handler using requestAnimationFrame
   * @private
   */
  function handleScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateScroll);
      ticking = true;
    }
  }

  /**
   * Recalculates all trigger points (useful after window resize)
   * @public
   */
  function recalculate() {
    calculateGridTriggers();
    calculateVisibilityTrigger();
  }

  /**
   * Merges user config with default config
   * @private
   * @param {Object} userConfig - User configuration object
   */
  function mergeConfig(userConfig) {
    if (!userConfig) return;

    // Deep merge utility function
    function deepMerge(target, source) {
      Object.keys(source).forEach(function(key) {
        if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
          if (!target[key]) target[key] = {};
          deepMerge(target[key], source[key]);
        } else {
          target[key] = source[key];
        }
      });
    }

    deepMerge(config, userConfig);
  }

  /**
   * Initializes the scroll animations module
   * @public
   * @param {Object} options - Configuration options
   */
  function init(options) {
    if (isInitialized) {
      console.warn('ScrollAnimations: Already initialized');
      return;
    }

    mergeConfig(options);

    // Calculate initial trigger points
    // Wait for images and layout to load
    if (document.readyState === 'complete') {
      recalculate();
    } else {
      window.addEventListener('load', recalculate);
    }

    // Create scroll handler
    scrollHandler = handleScroll;

    // Attach scroll listener
    if (window.addEventListener) {
      window.addEventListener('scroll', scrollHandler, { passive: true });
      window.addEventListener('resize', recalculate);
    } else {
      // Fallback for older browsers
      window.onscroll = scrollHandler;
      window.onresize = recalculate;
    }

    // Initial update
    updateScroll();

    isInitialized = true;
  }

  /**
   * Destroys the scroll animations module and removes event listeners
   * @public
   */
  function destroy() {
    if (!isInitialized) return;

    if (window.removeEventListener) {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', recalculate);
      window.removeEventListener('load', recalculate);
    } else {
      window.onscroll = null;
      window.onresize = null;
    }

    scrollHandler = null;
    gridTriggers = [];
    visibilityTriggerPoint = null;
    isInitialized = false;
  }

  /**
   * Resets all animations (removes animation classes)
   * @public
   */
  function reset() {
    gridTriggers.forEach(function(item) {
      item.element.classList.remove(config.gridImages.animationClass);
      item.triggered = false;
    });
  }

  // Public API
  return {
    init: init,
    destroy: destroy,
    recalculate: recalculate,
    reset: reset
  };
})();

// jQuery plugin wrapper (optional, for jQuery compatibility)
if (typeof jQuery !== 'undefined') {
  (function($) {
    $.fn.scrollAnimations = function(options) {
      ScrollAnimations.init(options);
      return this;
    };
  })(jQuery);
}
