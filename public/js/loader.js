// Modern Loader Controller
class ModernLoader {
    constructor() {
        console.log('ModernLoader: Initializing...');
        this.loader = document.getElementById('loading-screen');
        this.progressBar = document.querySelector('.loader-progress-bar');
        this.loaderText = document.querySelector('.loader-text');
        this.loaderSubtitle = document.querySelector('.loader-subtitle');
        this.isLoading = true;
        this.progress = 0;
        this.loadingSteps = [
            'Initializing...',
            'Loading assets...',
            'Preparing content...',
            'Almost ready...',
            'Welcome!'
        ];
        this.currentStep = 0;
        
        console.log('ModernLoader: Loader element found:', this.loader);
        console.log('ModernLoader: Progress bar found:', this.progressBar);
        console.log('ModernLoader: Loader text found:', this.loaderText);
        console.log('ModernLoader: Loader subtitle found:', this.loaderSubtitle);
        
        this.init();
    }
    
    init() {
        if (!this.loader) {
            console.warn('Loader element not found');
            return;
        }
        
        console.log('ModernLoader: Starting initialization...');
        
        // Start the loading animation
        this.startLoading();
        
        // Listen for page load events
        this.bindEvents();
    }
    
    bindEvents() {
        console.log('ModernLoader: Binding events...');
        
        // Hide loader when page is fully loaded
        window.addEventListener('load', () => {
            console.log('ModernLoader: Window load event fired');
            setTimeout(() => {
                this.completeLoading();
            }, 3000); // Increased from 500ms to 3000ms (3 seconds)
        });
        
        // Fallback: hide loader after a maximum time
        setTimeout(() => {
            console.log('ModernLoader: Fallback timeout reached');
            if (this.isLoading) {
                this.completeLoading();
            }
        }, 15000); // Increased from 8000ms to 15000ms (15 seconds)
        
        // Add keyboard shortcuts for testing
        document.addEventListener('keydown', (e) => {
            if (e.key === 'l' || e.key === 'L') {
                console.log('ModernLoader: Manual show triggered by L key');
                this.show();
            }
            if (e.key === 'h' || e.key === 'H') {
                console.log('ModernLoader: Manual hide triggered by H key');
                this.hide();
            }
        });
    }
    
    startLoading() {
        console.log('ModernLoader: Starting loading animation...');
        this.isLoading = true;
        this.progress = 0;
        this.currentStep = 0;
        
        // Start progress animation
        this.animateProgress();
        
        // Start text animation
        this.animateText();
    }
    
    animateProgress() {
        const animate = () => {
            if (!this.isLoading) return;
            
            this.progress += Math.random() * 15;
            if (this.progress > 100) this.progress = 100;
            
            if (this.progressBar) {
                this.progressBar.style.width = this.progress + '%';
            }
            
            if (this.progress < 100) {
                setTimeout(animate, 200 + Math.random() * 300);
            }
        };
        
        animate();
    }
    
    animateText() {
        const animate = () => {
            if (!this.isLoading) return;
            
            if (this.currentStep < this.loadingSteps.length) {
                if (this.loaderText) {
                    this.loaderText.textContent = this.loadingSteps[this.currentStep];
                }
                this.currentStep++;
                
                setTimeout(animate, 800 + Math.random() * 400);
            }
        };
        
        animate();
    }
    
    completeLoading() {
        if (!this.isLoading) return;
        
        console.log('ModernLoader: Completing loading...');
        this.isLoading = false;
        this.progress = 100;
        
        if (this.progressBar) {
            this.progressBar.style.width = '100%';
        }
        
        if (this.loaderText) {
            this.loaderText.textContent = 'Welcome!';
        }
        
        if (this.loaderSubtitle) {
            this.loaderSubtitle.textContent = 'Your experience is ready';
        }
        
        // Smooth fade out
        setTimeout(() => {
            this.hideLoader();
        }, 1000);
    }
    
    hideLoader() {
        console.log('ModernLoader: Hiding loader...');
        if (this.loader) {
            this.loader.classList.add('fade-out');
            
            setTimeout(() => {
                this.loader.style.display = 'none';
                this.onLoaderHidden();
            }, 800);
        }
    }
    
    onLoaderHidden() {
        // Trigger any post-loading events
        document.body.classList.add('loader-hidden');
        
        // Dispatch custom event
        const event = new CustomEvent('loaderHidden');
        document.dispatchEvent(event);
        
        // Enable scrolling if it was disabled
        document.body.style.overflow = '';
        
        console.log('Loader hidden successfully');
    }
    
    // Public method to manually hide loader
    hide() {
        this.completeLoading();
    }
    
    // Public method to show loader again (if needed)
    show() {
        if (this.loader) {
            this.loader.style.display = 'flex';
            this.loader.classList.remove('fade-out', 'hidden');
            this.startLoading();
        }
    }
}

// Initialize loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Initializing loader...');
    
    // Create global loader instance
    window.modernLoader = new ModernLoader();
    
    // Add some body styles for better UX
    document.body.style.overflow = 'hidden'; // Prevent scrolling during loading
    
    // Remove overflow hidden after loader is hidden
    document.addEventListener('loaderHidden', () => {
        document.body.style.overflow = '';
    });
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ModernLoader;
}
