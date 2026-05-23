export default class Alert {
  constructor() {
    this.init();
  }

  async init() {
    const alerts = await this.loadAlerts();
    if (alerts.length > 0) {
      this.renderAlerts(alerts);
    }
  }

  async loadAlerts() {
    const response = await fetch('/alerts.json');
    const data = await response.json();
    return data;
  }

  renderAlerts(alerts) {
    const section = document.createElement('section');
    section.classList.add('alert-list');

    alerts.forEach(alert => {
      const p = document.createElement('p');
      p.textContent = alert.message;
      p.style.background = alert.background;
      p.style.color = alert.color;
      section.appendChild(p);
    });

    const main = document.querySelector('main');
    main.prepend(section);
  }
}