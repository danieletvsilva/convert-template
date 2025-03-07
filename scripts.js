//Cotação de moedas do dia (Hipotético)
const USD = 5.79
const EUR = 6.04
const GBP = 7.23

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {

    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, "")
})

//Captando o evento de submit do formulário
form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
   }
}

//Função para converter a moeda
function convertCurrency(amount, price, symbol){
    try {
        //Atualizando cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
        
        //Calcula o total
        let total = amount * price
        total = formatCurrencyBRL(total).replace("R$", "")

        //Exibe o resultado total da conversão
        result.textContent = `${total} Reais`

        //Aplica a classe que exibe o footer com resultado
        footer.classList.add("show-result")
    } catch (error) {
        //Remove a classe do footer
        footer.classList.remove("show-result")

        console.log(error)
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }
}

//Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style : "currency",
        currency: "BRL",
    })
}