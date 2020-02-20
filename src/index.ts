
import './styles.css';

const information = document.getElementById('information') as HTMLSpanElement;
const buttons = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;

buttons.forEach(b => b.addEventListener('click', handleClick));

function handleClick() {
    const that = this as HTMLButtonElement;
    information.innerText = 'You are tipping ' + that.dataset.percent;

    buttons.forEach((b: HTMLButtonElement) => b.disabled = false);
    that.disabled = true;

}
