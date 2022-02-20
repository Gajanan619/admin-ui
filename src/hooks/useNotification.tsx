import { notification } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../store/Reducer";

interface iMessageProps {}

const useNotification = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.Theme);

  const showSuccessNotification = (title: string, description: string) => {
    notification.open({
      message: title,
      description: description,
      className: `${currentTheme.themestyle}`,
      key: Math.random().toString(),
      type: "success",
      duration: 10,
    });
  };

  const showInfoNotification = (title: string, description: string) => {
    notification.open({
      message: title,
      description: description,
      className: `${currentTheme.themestyle}`,
      key: Math.random().toString(),
      type: "info",
      duration: 10,
    });
  };

  const showErrorNotification = (title: string, description: string) => {
    notification.open({
      message: title,
      description: description,
      className: `${currentTheme.themestyle}`,
      key: Math.random().toString(),
      type: "error",
      duration: 10,
    });
  };

  const showWarningNotification = (title: string, description: string) => {
    notification.open({
      message: title,
      description: description,
      className: `${currentTheme.themestyle}`,
      key: Math.random().toString(),
      type: "warning",
      duration: 10,
    });
  };

  return {
    ShowSuccessNotification: showSuccessNotification,
    ShowErrorNotification: showErrorNotification,
    ShowInfoNotification: showInfoNotification,
    ShowWarningNotification: showWarningNotification,
  };
};

export default useNotification;
