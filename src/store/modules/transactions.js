import * as fb from 'firebase'
import 'firebase/firestore'

class Transaction {
  constructor (selectedFrom, selectedTo, ownerId, quota, date, comments, positive, id = null) {
    this.selectedFrom = selectedFrom
    this.selectedTo = selectedTo
    this.ownerId = ownerId
    this.quota = quota
    this.date = date
    this.comments = comments
    this.positive = positive
    this.id = id
  }
}

export default {
  state: {
    transactions: []
  },
  mutations: {
    createTransaction (state, payload) {
      state.transactions.push(payload)
    },
    loadTransactions (state, payload) {
      state.transactions = payload
    },
    deleteTransaction (state, payload) {
      state.transactions.doc(payload).remove()
    }
  },
  actions: {
    async deleteTransaction ({commit}, payload) {
      console.log(payload)
      fb.database().ref('transactions/' + payload).remove()
    },
    async createTransaction ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const newTransaction = new Transaction(
          payload.selectedFrom,
          payload.selectedTo,
          fb.auth().currentUser.uid,
          payload.quota,
          payload.date,
          payload.comments,
          payload.positive
        )
        const transaction = await fb.database().ref('transactions').push(newTransaction)
        commit('setLoading', false)
        commit('createTransaction', {
          ...newTransaction,
          id: transaction.key
        })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async fetchTransactions ({commit}) {
      commit('clearError')
      commit('setLoading', true)
      const resultTransactions = []
      try {
        const transactionsVal = await fb.database().ref('transactions').once('value')
        const transactions = transactionsVal.val()
        Object.keys(transactions).forEach(key => {
          if (transactions[key].ownerId === fb.auth().currentUser.uid) {
            const transaction = transactions[key]
            resultTransactions.push(
              new Transaction(
                transaction.selectedFrom,
                transaction.selectedTo,
                transaction.ownerId,
                transaction.quota,
                transaction.date,
                transaction.comments,
                transaction.positive,
                key
              )
            )
          }
          commit('loadTransactions', resultTransactions)
          commit('setLoading', false)
        })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    }
  },
  getters: {
    transactions (state) {
      return state.transactions
    }
  }
}
