import React from "react";
import ChannelButton from "../ChannelButton";
import { Container, Category, AddCategoryIcon } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="oni-playing" />
      <ChannelButton channelName="negro-drama" />
      <ChannelButton channelName="tarzamazonico" />
      <ChannelButton channelName="obs-studio" />
    </Container>
  );
};

export default ChannelList;
