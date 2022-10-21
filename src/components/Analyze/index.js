import FormSelection from './Form'
import './index.scss'

const Analyze = () => {
  return (
    <div className="analyze col-md-4 offset-4">
      <form>
        <div className="form-group">
          <label for="title">Title:</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label for="description">Description:</label>
          <input
            type="textarea"
            rows="3"
            className="form-control"
            style={{ height: '100px' }}
          />
        </div>
        <div className="form-group">
          <label for="director">Director:</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label for="cast">Cast:</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label for="duration">Duration:</label>
          <input type="number" className="form-control" />
        </div>
        <div className="form-group">
          <label for="rating">Rating:</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label for="title">Country:</label>
          <FormSelection />
        </div>
        <div className="form-group">
          <label for="listed_in" style={{ 'padding-right': '10px' }}>
            Listed In:
          </label>
          <small className="form-text text-muted">
            (this is your movie genre)
          </small>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label for="release_year">Release Year:</label>
          <input type="text" className="form-control" />
        </div>
        <div
          className="text-center col-md-4 offset-4"
          style={{ 'margin-top': '2%' }}
        >
          <button type="submit" class="btn btn-submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Analyze
