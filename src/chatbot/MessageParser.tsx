import React, { Children, cloneElement } from "react";

const MessageParser = ({ children, actions }: any) => {
  const parse = (message: string) => {
    if (message.includes("hello")) {
      actions.handleHello();
    }
  };

  return (
    <>
      {Children.map(children, (child) =>
        cloneElement(child, { parse, actions })
      )}
    </>
  );
};

export default MessageParser;
