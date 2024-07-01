const SearchModal = () => {
    console.log()
return (
    <div className='search-modal'>
      <button
        className='btn-reset search-modal__close'
      />
      <h3 className='search-modal__title'>buscar</h3>
      <div className='search-modal__top'>
        <label className='search-modal__label'>
          <input
            type='text'
            className='search-modal__input'/>
          <span className='search-modal__floating_label'>
            Nombre de la prenda
          </span>
        </label>
      </div>
    </div>
  )
}

export default SearchModal