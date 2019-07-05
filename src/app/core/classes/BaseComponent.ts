import siteContent from '@src/app/site-content';

export class BaseComponent {
  isLoading: boolean;
  hasError: boolean;
  errorTitle: string;
  errorMessage: string;
  readonly pageContent = siteContent

  /**
   * Check to show the error
   */
  get showError() {
    return this.hasError && !this.isLoading;
  }
  
  /**
   * shows the loading
   */
  showLoading(): void {
    this.isLoading = true;
  }

  /**
   * hide the loading
   */
  hideLoading(): void {
    this.isLoading = false;
  }

  /**
   * sets the error
   */
  setError(): void {
    this.hasError = true;
  }

  /**
   * clear the error
   */
  clearError(): void {
    this.hasError = false;
  }

  /**
   * sets the error and hide the loading
   */
  handleApiError(): void {
    this.setError();
    this.hideLoading();
  }

  /**
   * scroll up the page
   * @param interval sets the interval for the scroll
   */
  scrollPageToTop(interval: number = 16): void {
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 50); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, interval);
  }
}
