"""
Calculadora Básica em Python
Autor: Ana Carolina BAC (com adição de porcentagem)
Descrição: Um programa de terminal interativo para realizar operações básicas e porcentagem.
"""

def somar(a: float, b: float) -> float:
    """Retorna a soma de dois números."""
    return a + b


def subtrair(a: float, b: float) -> float:
    """Retorna a subtração entre dois números."""
    return a - b


def multiplicar(a: float, b: float) -> float:
    """Retorna o produto de dois números."""
    return a * b


def dividir(a: float, b: float):
    """Retorna a divisão entre dois números ou uma mensagem de erro caso o divisor seja zero."""
    if b == 0:
        return "Erro: Não é possível dividir por zero!"
    return a / b


def porcentagem(valor: float, taxa: float) -> float:
    """Calcula a porcentagem de um valor (ex: taxa% de valor)."""
    return (valor * taxa) / 100


def exibir_menu():
    """Exibe o menu de opções no terminal."""
    print("\n" + "=" * 32)
    print("       CALCULADORA PYTHON       ")
    print("=" * 32)
    print("  [1] Adição (+)")
    print("  [2] Subtração (-)")
    print("  [3] Multiplicação (*)")
    print("  [4] Divisão (/)")
    print("  [5] Porcentagem (%)")
    print("  [0] Sair")
    print("=" * 32)


def calculadora():
    """Função principal que gerencia o loop e o fluxo da calculadora."""
    while True:
        exibir_menu()
        opcao = input("Escolha uma opção (0 a 5): ").strip()

        # Encerra o programa
        if opcao == "0":
            print("\nEncerrando a calculadora. Obrigado por usar!")
            break

        # Valida se a opção é válida
        if opcao not in ["1", "2", "3", "4", "5"]:
            print("\n[!] Opção inválida! Escolha um número de 0 a 5.")
            continue

        # Coleta e validação dos números
        try:
            if opcao == "5":
                num1 = float(input("\nDigite o valor base: "))
                num2 = float(input("Digite a porcentagem desejada (%): "))
            else:
                num1 = float(input("\nDigite o 1º número: "))
                num2 = float(input("Digite o 2º número: "))
        except ValueError:
            print("\n[!] Entrada inválida! Por favor, digite apenas números.")
            continue

        # Processamento das operações
        print("-" * 32)
        if opcao == "1":
            resultado = somar(num1, num2)
            print(f"Resultado: {num1} + {num2} = {resultado}")
        elif opcao == "2":
            resultado = subtrair(num1, num2)
            print(f"Resultado: {num1} - {num2} = {resultado}")
        elif opcao == "3":
            resultado = multiplicar(num1, num2)
            print(f"Resultado: {num1} × {num2} = {resultado}")
        elif opcao == "4":
            resultado = dividir(num1, num2)
            if isinstance(resultado, str):
                print(f"[!] {resultado}")
            else:
                print(f"Resultado: {num1} ÷ {num2} = {resultado}")
        elif opcao == "5":
            resultado = porcentagem(num1, num2)
            print(f"Resultado: {num2}% de {num1} = {resultado}")
        print("-" * 32)


if __name__ == "__main__":
    calculadora()
