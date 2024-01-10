import { getEmptyDynamicModal } from "../actions/system.actions"

export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SET_MSG = 'SET_MSG'

export const SET_DYNAMIC_MODAL_OPEN = 'SET_DYNAMIC_MODAL_OPEN'
export const SET_DYNAMIC_MODAL_PARENT_REF = 'SET_DYNAMIC_MODAL_PARENT_REF'
export const SET_DYNAMIC_MODAL_TYPE = 'SET_DYNAMIC_MODAL_TYPE'
export const SET_DYNAMIC_MODAL_DATA = 'SET_DYNAMIC_MODAL_DATA'
export const SET_DYNAMIC_MODAL_FATHER = 'SET_DYNAMIC_MODAL_FATHER'
export const SET_DYNAMIC_MODAL = 'SET_DYNAMIC_MODAL'

const initialState = {
  isLoading: false,
  msg: null,
  dynamicModal: getEmptyDynamicModal()
}

export function systemReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading }

    case SET_MSG:
      return { ...state, msg: action.msg }

    case SET_DYNAMIC_MODAL:
      return { ...state, dynamicModal: action.dynamicModal }

    case SET_DYNAMIC_MODAL_OPEN:
      return { ...state, dynamicModal: { ...state.dynamicModal, isOpen: action.isOpen } }

    case SET_DYNAMIC_MODAL_PARENT_REF:
      return { ...state, dynamicModal: { ...state.dynamicModal, parentRefCurrent: action.dynamicModalParentRefCurrent } }

    case SET_DYNAMIC_MODAL_TYPE:
      return { ...state, dynamicModal: { ...state.dynamicModal, type: action.dynamicModalType } }

    case SET_DYNAMIC_MODAL_FATHER:
      return { ...state, dynamicModal: { ...state.dynamicModal, fatherId: action.fatherId } }

    case SET_DYNAMIC_MODAL_DATA:
      return { ...state, dynamicModal: { ...state.dynamicModal, data: action.dynamicModalData } }

    default: return state
  }
}
