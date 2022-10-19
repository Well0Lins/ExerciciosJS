function createCalculator() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        start() {
            this.clickBtn();
            this.keyEnter();
        },

        keyBackSpace() {
            this.display.addEventListener('keydown', e => {
                if (e.keyCode === 8) {
                    e.preventDefault();
                    this.clearDisplay();
                }
            });
        },

        keyEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.result();
                }
            })
        },

        result() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if (!conta) {
                    alert("Conta inválida");
                    return;
                }

                this.display.value = String(conta);

            } catch (e) {
                alert('Conta Inválida')
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        delOne() {
            this.display.value = this.display.value.slice(0, -1);
        },



        clickBtn() {
            // this -> calculadora
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnForDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.delOne();
                }

                if (el.classList.contains('btn-eq')) {
                    this.result();
                }
                
                this.display.focus();
            });
        },

        btnForDisplay(valor) {
            this.display.value += valor;
        },





    };
}

const calculator = createCalculator();
calculator.start();