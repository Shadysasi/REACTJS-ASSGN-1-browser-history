import './index.css'

const HistoryItem = props => {
  const {historyList, deleteHistoryList} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList

  const onDelete = () => {
    deleteHistoryList(id)
  }

  return (
    <li className="history-list-container">
      <div className="date-card">
        <p className="time-card">{timeAccessed}</p>
        <div className="history-info-card">
          <img className="logo-url" src={logoUrl} alt="domain logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>
      <div className="btn-card">
        <button
          type="button"
          className="btn-style"
          data-testid="delete"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
