import { closeSearchModal} from '/context/modals'

export const handleCloseSearchModal = () => {
    closeSearchModal()
    removeOverflowHiddenFromBody()
  }
  