import css from './ErrorMessage.module.css'

type TextErrorObjType = {
  message: string;
  code: string;
}

type PropsOfTextEror = {
  textError: TextErrorObjType | undefined;
}

export default function ErrorMessage({ textError }: PropsOfTextEror) {
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
