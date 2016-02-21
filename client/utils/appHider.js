var _element = typeof document !== 'undefined' ? document.body : null

export function setElement(element) {
  if (typeof element === 'string') {
    var el = document.querySelectorAll(element)
    element = 'length' in el ? el[0] : el
  }
  _element = element || _element
}

export function hide(appElement) {
  validateElement(appElement)
  (appElement || _element).setAttribute('aria-hidden', true)
}

export function show(appElement) {
  validateElement(appElement)
  (appElement || _element).setAttribute('aria-hidden', false)
}

export function toggle(shouldHide, appElement) {
  if(shouldHide) {
    hide(appElement)
  } else {
    show(appElement)
  }
}

export function validateElement(appElement) {
  if (!appElement && !_element) {
    throw new Error('react-modal: you must set an element to make this accessible')
  }
}
