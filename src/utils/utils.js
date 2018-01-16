export default {
    htmlUtil: {
        htmlToString(html) {
            var div = document.createElement('div');
            (div.textContent !== undefined) ? (div.textContent = html) : (div.innerText = html);
            var output = div.textContent;
            return output;
        }
    }
}
