import React from "react";
import { useTranslation } from 'react-i18next';

export const Spinner: React.FC<{
  N: number;
  callback: {status: number}
}> = ({ N, callback }) => {

  // переводы
  const { t } = useTranslation();
  let [messages] = React.useMemo(() => [{
    firstMessage: t('Loading.First'),
    secondMessage:  t('Loading.Second'),
    thirdMessage: t('Loading.Third'),
    errorMessage: t('Error.Timeout'),
    successMessage: t('Success.LoadingFinished')
  }], [t]);

  // Loading.First по умолчанию
  const [currentMessageForSpinner, setcurrentMessageForSpinner] =
    React.useState(messages.firstMessage);
  // timer
  const [counter, setCounter] = React.useState(60);
  // статус виджета в реф
  const progressRef = React.useRef(200);
  progressRef.current = callback.status;

  // counting time
  React.useEffect(() => {
    // just counting
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    // response from server
      // Error.Timeout - ошибка, которая показывается когда превышен лимит по времени >N
    if (callback.status!==200) {
        setcurrentMessageForSpinner(messages.errorMessage);
    }
  }, [counter, callback.status, messages]);


  // каждое сообщение показывается N секунд
  React.useEffect(() => {
    const secondPeriod = setTimeout(() => {
        if (progressRef.current===200) setcurrentMessageForSpinner(messages.secondMessage);
    }, N);

    const thirdPeriod = setTimeout(() => {
        if (progressRef.current===200) setcurrentMessageForSpinner(messages.thirdMessage);
    }, 2*N);

    return () => {
      clearTimeout(secondPeriod);
      clearTimeout(thirdPeriod);
    };
  }, [N, messages]);

  return (
    <div className="widgetStyle">
      <img className="box center" src="/Winter.gif" alt="spinner" />
      <div className="center">{currentMessageForSpinner}</div>
    </div>
  );
};
