const notificationTimeout  = 2000

const copierStyle = `
            cursor: pointer;
            position: relative;
            background: #000;
            float: right;
            border-radius: 5px;
            color: #fff;
            font-weight:  bold;
            padding: 4px;
            font-size: 10px;
            margin-right: 5px`;

const codeElements = ['code', 'samp'];



setTimeout(() => {
    if (document.readyState !== 'loading') init()
    else document.addEventListener('DOMContentLoaded', init);
}, 2500)




function init() {
    let startIdx = 0;
    codeElements.forEach((codeElement) => {
        document.querySelectorAll(codeElement).forEach(ele => {
            if (! validCodeElement(ele)) return;
            ele.setAttribute('data-code-idx', startIdx);
            ele.innerHTML += '<br>';
            const copier = document.createElement('span');
            copier.setAttribute('data-code-idx', startIdx);
            copier.setAttribute('style', copierStyle);
            copier.textContent = "Copy";
            copier.addEventListener('click', copierClicked);
            ele.parentElement.append(copier);
            startIdx++;
        })
    })
}

function validCodeElement(ele) {
    return ele.parentElement.tagName === 'PRE';
}

function copierClicked(e) {
    const idx = e.target.getAttribute('data-code-idx');
    if (! idx) return;
    const value = document.querySelector('[data-code-idx="' + idx + '"]');
    navigator.clipboard.writeText(value.textContent);
    e.target.innerHTML = 'Copied <span style="color: #3d92ee">&#10004;</span>';
    setTimeout(() => e.target.textContent = "Copy", notificationTimeout);
}