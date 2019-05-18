class GetParchemin {
  constructor() {
    this.parchemin = false;
  }
  took() {
    this.parchemin = true;
    localStorage.setItem('parchemin', 'true');
  }
}

module.exports = new GetParchemin();
