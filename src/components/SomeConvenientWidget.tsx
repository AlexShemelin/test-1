import React from "react";
import { useTimeout } from "../hooks/useTimeout";

export const SomeConvenientWidget: React.FC<{ delay: number, callback: Function, status: number }> = ({
  delay,
  callback,
  status
}) => {
  /*
        data fetching
         -- для собственной разработки как-нибудь замедлить отображение SomeConvenientWidget чтобы кейс отрабатывал
  */
  useTimeout(delay);

  // trigger on component mount
  React.useEffect(() => {
    callback(status)
  }, [callback, status]);
  
  return (
    <div className="widgetStyle">
      <div className="box">Widget body</div>
    </div>
  );
};
