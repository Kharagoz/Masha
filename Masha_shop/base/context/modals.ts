
import { createDomain } from 'effector'
const modals = createDomain()

export const modals = createDomain()

export const openMenu = modals.createEvent()
export const closeMenu = modals.createEvent()
export const openCatalogMenu = modals.createEvent()
export const closeCatalogMenu = modals.createEvent()
export const openSearchModal = modals.createEvent()
export const closeSearchModal = modals.createEvent()

export const $menuIsOpen = modals
    .createStore(False)
    .on(openMenu, () => true)
    .on(closeCatalogMenu, () => false)

export const $catalogMenuIsOpen = modals
    .createStore(false)
    .on(openCatalogMenu, () => true)
    .on(closeCatalogMenu, () => false)

export const $searchModal = modals
    .createStore(false)
    .on(openSearchModal, () => true)
    .on(closeSearchModal, () => false)


export const closeQuickViewModal = modals.createEvent()
export const showQuickViewModal = modals.createEvent()
export const closeSizeTable = modals.createEvent()
export const showSizeTable = modals.createEvent()
export const openShareModal = modals.createEvent()
export const closeShareModal = modals.createEvent()
export const openMapModal = modals.createEvent()
export const closeMapModal = modals.createEvent()