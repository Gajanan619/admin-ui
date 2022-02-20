import { message, notification } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../store/Reducer";

interface iMessageProps {}

const useMessage = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.Theme);

  const showSuccessMessage = (msg: string) => {
    message.open({
      content: msg,
      key: Math.random().toString(),
      duration: 10,
      className: `${currentTheme.themestyle}`,
      type: "success",
      
    });
  };

  const showInfoMessage = (msg: string) => {
    message.open({
      content: msg,
      key: Math.random().toString(),
      duration: 10,
      className: `${currentTheme.themestyle}`,
      type: "info",
    });
  };

  const showErrorMessage = (msg: string) => {
    message.open({
      content: msg,
      key: Math.random().toString(),
      duration: 10,
      className: `${currentTheme.themestyle}`,
      type: "error",
    });
  };

  const showWarningMessage = (msg: string) => {
    message.open({
      content: msg,
      key: Math.random().toString(),
      duration: 10,
      className: `${currentTheme.themestyle}`,
      type: "warning",
    });
  };

  return {
    ShowSuccessMessage: showSuccessMessage,
    ShowErrorMessage: showErrorMessage,
    ShowInfoMessage: showInfoMessage,
    ShowWarningMessage: showWarningMessage,
  };
};

export default useMessage;
