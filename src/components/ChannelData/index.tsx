import React, { useRef, useEffect } from "react";
import ChannelMessage, { Mention } from "../ChannelMessage";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);
  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Valdi Siqueira"
            date="23/07/2020"
            content="Fale meu querido"
          />
        ))}
        <ChannelMessage
          author="OniGaming"
          date="23/07/2020"
          content={
            <>
              <Mention>@Valdi Siqueira</Mention> teste do bot
            </>
          }
          hasMention
          isBot
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
