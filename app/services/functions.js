class GetParchemin {
  constructor() {
    this.parchemin = false;
    this.path = false;
  }
  took() {
    this.parchemin = true;
    localStorage.setItem('parchemin', 'true');
    this.path = true;
    localStorage.setItem('path', 'true');
  }
}
module.exports = new GetParchemin();
