function attachEventsListeners() {
    const buttons = Array.from(document.querySelectorAll("input[type='button']"));
    for (let btn of buttons) {
        btn.addEventListener("click", handler);
    }

    function handler(event) {
        const target = event.currentTarget.parentElement.children[1];
        let value = Number(target.value);
        let unit = target.id;

        switch (unit) {
            case 'days': newValue(value); break;
            case 'hours': newValue(value / 24); break;
            case 'minutes': newValue(value / 24 / 60); break;
            case 'seconds': newValue(value / 24 / 60 / 60); break;
        }
    }

    function newValue(days) {
        let inputs = document.querySelectorAll("input[type='text']")
        inputs[0].value = days;
        inputs[1].value = days * 24;
        inputs[2].value = days * 24 * 60;
        inputs[3].value = days * 24 * 60 * 60;
    }
}