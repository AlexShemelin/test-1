import React from "react";
import { SomeConvenientWidget } from "./components/SomeConvenientWidget";
import { Spinner } from "./components/Spinner";

const App: React.FC = () => {
  // delay - время ответа от сервера
  const delay = 5000;
  // имитируем код ответа
  const mockServerStatus = 502;
  // каждые N секунд новое сообщение
  const N = 1000;
  // текущий статус виджета
  const [widgetStatus, setWidgetStatus] = React.useState(200);

  return (
    <React.Suspense fallback={
      <Spinner
        N={N} 
        callback={{status: widgetStatus}}
      />
    }>
      {
        widgetStatus===200 ?
        <SomeConvenientWidget delay={delay} status={mockServerStatus} callback={(status: number) => setWidgetStatus(status)} /> 
        :       
        <Spinner
          N={N}
          callback={{status: widgetStatus}}
        />
      }
    </React.Suspense>
  );
};

export default App;
