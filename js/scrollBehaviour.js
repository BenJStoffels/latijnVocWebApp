scrollable = document.querySelector('.verbuiging');
items = document.querySelector('.all_items');
itemCount = items.children.length;
offset = items.clientWidth / 8;


function scrollMiddleWare(inertia = 0.9) {
    const abs = {
        x: 0,
        y: 0,
    };
    const delta = {
        x: null,
        y: null,
    };
    return function onUpdate(callback) {
        let prevEvent;
        let requestId;

        function stop() {
            cancelAnimationFrame(requestId);
            requestId = null;
        }

        function queue() {
            requestId = requestAnimationFrame(update);
        }

        function update() {
            delta.x *= inertia;
            delta.y *= inertia;
            notify();
            queue();
        }

        function notify() {
            abs.x += delta.x;
            if (abs.x < (-items.children[0].clientWidth * itemCount) + offset) {
                abs.x = (-items.children[0].clientWidth * itemCount) + offset;
            }
            if (abs.x > offset) {
                abs.x = offset;
            }
            abs.y += delta.y;
            callback({ abs, delta });
        }
        return function eventHandler(event) {
            event.preventDefault();
            if (prevEvent && event.buttons === 1) {
                delta.x = event.clientX - prevEvent.clientX;
                delta.y = event.clientY - prevEvent.clientY;
                stop();
                notify();
            }
            if (!requestId && event.buttons !== 1) {
                queue();
            }
            prevEvent = event;
        };
    };
}

scrollable.addEventListener('mousemove', scrollMiddleWare()(scroll => {
    items.style.left = `${scroll.abs.x}px`;
}));