export const Freezer = () => {
  function Freezer() {
    this.$body = document.querySelector('body');
    this.$html = document.querySelector('html');
    this.$content = document.querySelector('.main');
    this.$window = window;
    this.st = this.$window.pageYOffset;
    this.freezeCount = 0;
  }

  Freezer.prototype.freeze = function () {
    var self = this,
      st = self.$window.pageYOffset;

    if (self.freezeCount === 0) {
      this.$content = document.querySelector('.main');
      self.$body.classList.add('no-scroll');
      self.$html.classList.add('no-scroll');
      self.$content.style = 'margin-top:' + -st + 'px';
      self.st = st;
    }

    self.freezeCount++;
  };

  Freezer.prototype.unFreeze = function (reset) {
    var self = this,
      st = self.st;

    self.freezeCount = Math.max(0, self.freezeCount - 1);

    if (self.freezeCount === 0) {
      self.$body.classList.remove('no-scroll');
      self.$html.classList.remove('no-scroll');
      self.$content.style = '';
      if (!reset && st > 0) {
        // self.$window.scrollTop(st);
        self.$window.scrollTo(0, st);
      }

      self.st = 0;
    }
  };

  window.Freezer = new Freezer();
};
