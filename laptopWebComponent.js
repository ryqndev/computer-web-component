class LaptopWebComponent {
    constructor(element=window, options={}) {
        this.element = element;
        this.options = options;
        this.laptopSVG = document.getElementById('laptop').contentDocument.documentElement;

        const listenerHolder = this.options.listener ?? this.element;
        listenerHolder.addEventListener("keydown", (event) => {
            this.options?.onKeyDown(this.laptopSVG.getElementById(event.code));
        }, true);
    
        listenerHolder.addEventListener("keyup", (event) => {
            this.options?.onKeyUp(this.laptopSVG.getElementById(event.code));
        }, true);

        this.laptopSVG.addEventListener("keydown", (event) => {
            this.options?.onKeyDown(this.laptopSVG.getElementById(event.code));
        }, true);
    
        this.laptopSVG.addEventListener("keyup", (event) => {
            this.options?.onKeyUp(this.laptopSVG.getElementById(event.code));
        }, true);
    }
}
