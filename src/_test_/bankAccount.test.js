import bankAccount from './bankAccount'

describe('Bank account methods and properties', () => {

    beforeEach(() => {
        bankAccount.balance = 1000
    })

    test('depositMoney should correctly alter balance', () => {
        bankAccount.depositMoney(1000)
        expect(bankAccount.balance).toBe(2000)
    })

    test('withdrawMoney should correctly alter balance', () => {
        bankAccount.withdrawMoney(700)
        expect(bankAccount.balance).toBe(300)
    })

})
