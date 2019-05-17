class GetParchemin {
  constructor() {
    this.parchemin = false;
  }
  took() {
    this.parchemin = true;
    console.log('c\'est pris');
    localStorage.setItem('parchemin', 'true');
  }
}

module.exports = new GetParchemin();
