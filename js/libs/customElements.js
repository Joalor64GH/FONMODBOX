!function() {
    "use strict";
    class n extends HTMLElement {
        time = 1e4;
        constructor() {
            super();
            this.attachShadow({
                mode: "open"
            }).innerHTML = this._getDefaultMarkup(),
            this.show = this.show.bind(this),
            this.hide = this.hide.bind(this)
        }
        connectedCallback() {
            this.shadowRoot.getElementById("heading").textContent = this.attributes.getNamedItem("heading")?.value ?? null;
            const n = Number(this.attributes.getNamedItem("time")?.value) ?? null;
            n && (this.time = n);
            const t = this.attributes.getNamedItem("icon-path")?.value;
            if (t) {
                const n = this.shadowRoot.getElementById("icon-container")
                  , e = document.createElement("img");
                e.setAttribute("src", t),
                n?.appendChild(e)
            }
            this.shadowRoot.getElementById("close-icon").addEventListener("click", this.hide),
            this.show()
        }
        _getDefaultMarkup() {
            return '\n    <style>:host {\n  position: fixed;\n  z-index: 2147483647;\n  width: 100%;\n  top: 0;\n  right: 0;\n}\n\n::slotted(*) {\n  all: unset !important;\n}\n\n#container {\n  background-color: #295ff6;\n  border-radius: 8px;\n  padding: 12px 24px;\n  margin: 16px;\n  width: 30vw;\n  right: 0;\n  top: 0;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  color: #fff;\n  font-family: system-ui;\n  transform: translateX(calc(100% + 20px));\n  transition: all 0.5s cubic-bezier(0.3, -0.1, 1, 1);\n}\n\n#container.active {\n  transform: translateX(0);\n}\n\n#heading {\n  font-size: 16px;\n  margin: 4px 0;\n  font-weight: 600;\n  line-height: 1.4;\n}\n\n#heading-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 2px;\n}\n\n#heading-container div {\n  display: flex;\n  flex-direction: row;\n}\n\n#close-icon {\n  align-self: center;\n  cursor: pointer;\n}\n\n#content-container {\n  display: flex;\n  flex-direction: row;\n  width: 96%;\n}\n\n#content {\n  font-size: 13px;\n  line-height: 1.4;\n}\n\n#icon-container {\n  height: 20px;\n  width: 20px;\n  padding-right: 6px;\n  align-self: center;\n}\n\n#icon-container img {\n  height: 20px;\n  width: 20px;\n  background: #2a2a2a;\n  border-radius: 4px;\n}\n</style>\n    <div id="container">\n        <div id="heading-container">\n          <div>\n            <div id="icon-container"></div>\n            <div id="heading"></div>\n          </div>\n          <div id="close-icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M3.52858 3.52851C3.78892 3.26816 4.21103 3.26816 4.47138 3.52851L7.99998 7.05711L11.5286 3.52851C11.7889 3.26816 12.211 3.26816 12.4714 3.52851C12.7317 3.78886 12.7317 4.21097 12.4714 4.47132L8.94279 7.99992L12.4714 11.5285C12.7317 11.7889 12.7317 12.211 12.4714 12.4713C12.211 12.7317 11.7889 12.7317 11.5286 12.4713L7.99998 8.94273L4.47138 12.4713C4.21103 12.7317 3.78892 12.7317 3.52858 12.4713C3.26823 12.211 3.26823 11.7889 3.52858 11.5285L7.05717 7.99992L3.52858 4.47132C3.26823 4.21097 3.26823 3.78886 3.52858 3.52851Z" fill="currentColor"/>\n</svg></div>\n        </div>\n        <div id="content-container">\n          <slot id="content" name="content"></slot>\n        </div>\n     </div>\n    '
        }
        show() {
            setTimeout((()=>{
                this.shadowRoot.getElementById("container").classList.add("active"),
                setTimeout(this.hide, this.time)
            }
            ), 300)
        }
        hide() {
            this.shadowRoot.getElementById("container").classList.remove("active")
        }
    }
    customElements.get("rq-toast") ?? customElements.define("rq-toast", n)
}();
