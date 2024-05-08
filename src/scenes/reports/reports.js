import './reports.css';

if(!customElements.get('reports-scene')) {
    class ReportsScene extends HTMLElement {
        constructor() {
            super();
            const shadow = this.attachShadow({ mode: 'open' });
            const wrapper = document.createElement('div');
            const style = document.createElement('link');
            style.rel = 'stylesheet';
            style.href = './reports.css';

            wrapper.innerHTML = `
                <h1>Reports</h1>
                <p>Welcome to the Reports Scene</p>
            `;
            shadow.appendChild(style);
            shadow.appendChild(wrapper);
        }
    }

    customElements.define('reports-scene', ReportsScene);
}