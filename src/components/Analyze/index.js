import './index.scss'
import * as yup from 'yup'
import { useFormik } from 'formik'
import COUNTRIES from '../../constants/countries'
import RATINGS from '../../constants/ratings'
import { useState } from 'react'
import { predict } from '../../service/prediction'

const Analyze = () => {
  const [loading, setLoading] = useState(false)

  const initialValues = {
    cast: '',
    rating: RATINGS[0],
    duration: '',
    director: '',
    country: COUNTRIES[0],
    listed_in: '',
    release_year: '',
    title: '',
    description: '',
  }

  const validationSchema = yup.object().shape({
    cast: yup.string().required().min(10),
    rating: yup.string().required().oneOf(RATINGS),
    duration: yup
      .string()
      .required()
      .matches(/\d*\s*[min]/g),
    director: yup.string().required().min(5),
    country: yup.string().required().oneOf(COUNTRIES),
    listed_in: yup.string().required().min(5),
    release_year: yup.number().min(1970).max(2030),
    title: yup.string().required().min(5),
    description: yup.string().required().min(50),
  })

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const result = await predict(data)

      // Set loading state as false
      setLoading(false)

      console.log(result)
    } catch (error) {
      // Set loading state as false.
      setLoading(false)

      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  })

  return (
    <div className="analyze col-md-4 offset-4">
      <form>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            onChange={formik.handleChange('title')}
            value={formik.title}
          />
          {formik.errors.title ? <div>{formik.errors.title}</div> : null}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="textarea"
            rows="3"
            className="form-control"
            style={{ height: '100px' }}
            onChange={formik.handleChange('description')}
            value={formik.description}
          />
          {formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="director">Director:</label>
          <input
            type="text"
            className="form-control"
            onChange={formik.handleChange('director')}
            value={formik.director}
          />
          {formik.errors.director ? <div>{formik.errors.director}</div> : null}
        </div>
        <div className="form-group">
          <label htmlFor="cast">Cast:</label>
          <input
            type="text"
            className="form-control"
            onChange={formik.handleChange('cast')}
            value={formik.cast}
          />
          {formik.errors.cast ? <div>{formik.errors.cast}</div> : null}
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration:</label>
          <input
            type="text"
            className="form-control"
            onChange={formik.handleChange('duration')}
            value={formik.duration}
          />
          {formik.errors.duration ? <div>{formik.errors.duration}</div> : null}
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <select
            className="form-control"
            onChange={formik.handleChange('rating')}
            value={formik.values.rating}
          >
            {RATINGS.map((rating) => (
              <option value={rating}>{rating}</option>
            ))}
          </select>
          {formik.errors.rating ? <div>{formik.errors.rating}</div> : null}
        </div>
        <div className="form-group">
          <label htmlFor="title">Country:</label>
          <select
            className="form-control"
            onChange={formik.handleChange('country')}
            value={formik.values.country}
          >
            {COUNTRIES.map((country) => (
              <option value={country}>{country}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="listed_in" style={{ 'padding-right': '10px' }}>
            Listed In:
          </label>
          <small className="form-text text-muted">
            (this is your movie genre)
          </small>
          <input
            type="text"
            className="form-control"
            onChange={formik.handleChange('listed_in')}
            value={formik.listed_in}
          />
          {formik.errors.listed_in ? (
            <div>{formik.errors.listed_in}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="release_year">Release Year:</label>
          <input
            type="number"
            className="form-control"
            onChange={formik.handleChange('release_year')}
            value={formik.release_year}
          />
          {formik.errors.release_year ? (
            <div>{formik.errors.release_year}</div>
          ) : null}
        </div>
        <div
          className="text-center col-md-4 offset-4"
          style={{ marginTop: '2%' }}
        >
          <button
            type="submit"
            className="btn btn-submit"
            onClick={formik.handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Analyze
