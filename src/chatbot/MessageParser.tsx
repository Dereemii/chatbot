import React from "react";

const MessageParser = ({ children, actions }: any) => {
  const parse = (message: string) => {
    if (message.includes("hello")) {
      actions.handleHello();
    }
  };

  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { parse, actions })
      )}
    </>
  );
};

export default MessageParser;
