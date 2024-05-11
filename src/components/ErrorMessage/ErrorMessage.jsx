import css from './ErrorMessage.module.css'
export default function ErrorMessage({ textError }) {
  return (
    <>
      {textError && (
        <div className={css.fielfOfError}>
          <h2>Error:</h2>
          <p>{textError.message}</p>
          <p>{textError.code}</p>
        </div>
      )}
    </>
  );
}
