const load = () => {
    const interactiveLaptop = new LaptopWebComponent(document, options = {
        listener: document,
        onKeyUp: (element) => {
            element.style.fill = '#000000';
            element.style.transform = 'translateY(0px)';
        },
        onKeyDown: (element) => {
            element.style.fill = '#ff00ff';
            element.style.transform = 'translateY(1px)';
        },
    });
}