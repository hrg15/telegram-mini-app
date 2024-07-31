"use client";

import {
  Section,
  Cell,
  Image,
  List,
  Placeholder,
} from "@telegram-apps/telegram-ui";

import { Link } from "@/components/Link/Link";

import dragon from "./_assets/dragon.jpg";

export default function Home() {
  return (
    <List>
      <Section header="Dragon" footer="This is a test application.">
        <Placeholder header="Dragon App" description="The dragon enters">
          <img
            alt="Telegram sticker"
            src={dragon.src}
            style={{ display: "block", width: "100%", height: "144px" }}
          />
        </Placeholder>
        <Link href="/ton-connect">
          <Cell before={<div />} subtitle="Connect your TON wallet">
            TON Connect
          </Cell>
        </Link>
      </Section>
      <Section
        header="Application Launch Data"
        footer="These pages help developer to learn more about current launch information"
      >
        <Link href="/init-data">
          <Cell subtitle="User data, chat information, technical data">
            Init Data
          </Cell>
        </Link>
        <Link href="/launch-params">
          <Cell subtitle="Platform identifier, Mini Apps version, etc.">
            Launch Parameters
          </Cell>
        </Link>
        <Link href="/theme-params">
          <Cell subtitle="Telegram application palette information">
            Theme Parameters
          </Cell>
        </Link>
      </Section>
    </List>
  );
}
